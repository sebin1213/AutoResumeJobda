
// 아이콘 클릭 시 팝업 열기
chrome.action.onClicked.addListener(function(tab) {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
    });
});



chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'restoreData') {
        // 활성 탭의 ID를 얻어서 content script로 메시지를 전송
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                const tabId = tabs[0].id;
                chrome.scripting.executeScript({
                    target: { tabId: tabId },
                    files: ['main.js']
                }, () => {
                    chrome.tabs.sendMessage(tabId, { action: 'restoreData' }, (response) => {
                        sendResponse(response);
                    });
                });
            }
        });
        return true; // sendResponse를 비동기로 호출하기 위해 true 반환
    }
});