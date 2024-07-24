document.addEventListener('DOMContentLoaded', function() {
    // 팝업이 로드되면 스토리지에서 데이터를 불러와서 표시할 수 있습니다.
    chrome.storage.local.get('resumeData', function(result) {
        const resumeData = result.resumeData;
        if (resumeData) {
            document.getElementById('resumeContent').textContent = '마지막 저장시점: '+ resumeData.timestamp;
        } else {
            document.getElementById('resumeContent').textContent = '저장된 이력서가 없습니다.';
        }
    });
});

document.getElementById('restoreButton').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'restoreData' }, (response) => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        } else {
            console.log('이력서를 불러왔습니다.');
        }
    });
});
