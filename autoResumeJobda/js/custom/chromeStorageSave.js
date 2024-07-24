////// 폼 데이터를 수집하는 함수
////function collectFormData() {
////    const form = document.querySelector('form'); // 페이지에 존재하는 첫 번째 폼을 선택
////
////    if (!form) return {};
////
////    const formData = new FormData(form);
////    const data = {};
////    formData.forEach((value, key) => {
////        data[key] = value;
////    });
////    return data;
////}
////
////// Chrome 스토리지에 데이터 저장
////function saveDataToChromeStorage(data) {
////    chrome.storage.local.set({ formData: data }, () => {
////        console.log('Data has been saved to Chrome storage');
////    });
////}
////
////// Chrome 스토리지에서 데이터 로드
////function loadDataFromChromeStorage() {
////    chrome.storage.local.get('formData', (result) => {
////        const data = result.formData;
////        if (data) {
////            const form = document.querySelector('form');
////            if (form) {
////                Object.keys(data).forEach((key) => {
////                    const element = form.elements[key];
////                    if (element) {
////                        if (element.type === 'radio' || element.type === 'checkbox') {
////                            element.checked = (element.value === data[key]);
////                        } else {
////                            element.value = data[key];
////                        }
////                    }
////                });
////            }
////        }
////    });
////}
////
//// 현재 URL에 따라 기능 처리
//const currentUrl = window.location.href;
//
//// 특정 URL에서 폼 데이터 저장 처리
//if (currentUrl.includes('autoJobda.html')) {
//    const saveButton = document.querySelector('button[data-type="tempSave"]');
//    if (saveButton) {
//        saveButton.addEventListener('click', () => {
//            const data = collectFormData();
//            saveDataToChromeStorage(data);
//        });
//    }
//}
//
//// 특정 URL에서 폼 데이터 복원 처리
//if (currentUrl.includes('recruiter.co.kr/mrs2/applicant/resume/writeResume')) {
//    loadDataFromChromeStorage();
//}
//
//// 메시지 리스너 - 팝업에서 받은 메시지 처리
//chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//    if (message.action === 'restoreData') {
//        loadDataFromChromeStorage();
//        sendResponse({ status: 'Data restored' });
//    }
//});
