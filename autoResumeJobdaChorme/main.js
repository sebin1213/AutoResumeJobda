// 현재 날짜와 시간을 포맷하는 함수
function getCurrentDateTime() {
    const now = new Date();
    return now.toISOString(); // ISO 8601 형식으로 날짜와 시간 반환
}

// 폼 데이터를 수집하는 함수
function collectFormData() {
    const form = document.querySelector('form'); // 페이지에 존재하는 첫 번째 폼을 선택

    if (!form) return {};

    const resumeData = new FormData(form);
    const data = {};
    resumeData.forEach((value, key) => {
        data[key] = value;
    });

    // 폼의 data-step 값을 가져옴
    const step = form.getAttribute('data-step');
    return { step, data };
}

// Chrome 스토리지에 데이터 저장
function saveDataToChromeStorage(step, data) {
    const timestamp = getCurrentDateTime();
    
    chrome.storage.local.get('resumeData', (result) => {
        const existingData = result.resumeData || {};
        
        // 기존 데이터에 현재 스텝 데이터를 추가하거나 업데이트
        existingData[step] = data;
        existingData.timestamp = timestamp;

        // 업데이트된 데이터를 Chrome 스토리지에 저장
        chrome.storage.local.set({ resumeData: existingData }, () => {
            console.log('Data has been updated in Chrome storage');
        });
    });
}


// DOM에 요소가 추가될 때까지 기다리는 함수
function waitForElement(selector) {
    return new Promise((resolve) => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (document.querySelector(selector)) {
                    observer.disconnect();
                    resolve(document.querySelector(selector));
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });
    });
}

// 비동기적으로 버튼 클릭 후 DOM이 업데이트될 때까지 기다리기
async function clickAndWait(addButton, newElementSelector) {
    if (addButton) {
        addButton.click();
        // 버튼 클릭 후 DOM 변화가 일어날 때까지 기다림
        await waitForElement(newElementSelector);
    }
}

// Chrome 스토리지에서 데이터 로드
async function loadDataFromChromeStorage() {
    const form = document.querySelector('form');
    const step = form.getAttribute('data-step');

    chrome.storage.local.get('resumeData', async (result) => {
        const data = result.resumeData;
        if (data) {
            if (form) {
                const stepData = data[step];
                if (stepData) {
                    for (const key of Object.keys(stepData)) {
                        const elements = form.elements[key];
                        const match = key.match(/^(\w+)\[(\d+)\]/);
                        if (!stepData[key]){
                            continue;
                        }

                        if (!elements && match) {
                            const dataType = match[1];
                            const index = parseInt(match[2], 10);
                            const loopContainers = form.querySelectorAll(`[data-loop="${dataType}"]`);

                            if (loopContainers.length <= index) {
                                const addButton = loopContainers[loopContainers.length-1].querySelector('[data-button="add"]');
                                    // 버튼 클릭 후 DOM 업데이트를 기다립니다.
                                await clickAndWait(addButton, `[data-loop="${dataType}"]`);
                            }
                        }

                        // jobda의 채용페이지는 값변경 이외에 클릭이벤트까지 동작해야 저장되는 경우가 존재하기에 아래와 같은 if문 구성
                        if (elements instanceof NodeList || Array.isArray(elements)) {
                            elements.forEach((element) => {
                                if (element.value === stepData[key]) {
                                    element.removeAttribute('disabled');
                                    element.checked = true;
                                    element.click(); // 클릭 이벤트 트리거
                                    element.closest('label').click();
                                }
                            });
                        } else if (elements) {
                            elements.value = stepData[key];
                            elements.removeAttribute('disabled');
                        }
                    }
                }
            }
        }
    });
}


// 특정 URL에서 폼 데이터 저장 처리
function handleFormSave() {
    const currentUrl = window.location.href;
    if (currentUrl.includes('autoResumeJobda_Y_Sevin')) {
        const saveButtons = document.querySelectorAll('button[id="nextResumeButton"], button[id="saveResumeButton"]');
        saveButtons.forEach(button => {
            button.addEventListener('click', () => {
                const { step, data } = collectFormData();
                saveDataToChromeStorage(step, data);
            });
        });
    }
}

// 페이지 로드 시와 URL 변경 시 폼 데이터 로드
function handlePageLoadAndURLChange() {
    function checkAndLoadData() {
        const currentUrl = window.location.href;
        if (currentUrl.includes('autoResumeJobda_Y_Sevin')) {
            loadDataFromChromeStorage();
        }
    }

    // 페이지 로드 시 데이터 로드
    checkAndLoadData();

    // history API의 상태 변경을 감지하여 URL 변경 시에도 데이터 로드
    window.addEventListener('popstate', checkAndLoadData);
    
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    
    history.pushState = function(...args) {
        originalPushState.apply(this, args);
        checkAndLoadData();
    };
    
    history.replaceState = function(...args) {
        originalReplaceState.apply(this, args);
        checkAndLoadData();
    };
}

// 메시지 리스너 - 백그라운드에서 받은 메시지 처리
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'restoreData') {
        loadDataFromChromeStorage();
        sendResponse({ status: 'Data restored' });
    }
});

// 초기화 함수
function init() {
    handleFormSave();
    handlePageLoadAndURLChange();
}

// 초기화 함수 호출
init();