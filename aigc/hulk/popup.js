document.addEventListener('DOMContentLoaded', () => {
    const changeColorBtn = document.getElementById('changeColorBtn');
    changeColorBtn.addEventListener('click', () => {
        // 获取当前活动标签页
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            // 向标签页发送消息，要求修改背景色为绿色
            chrome.tabs.sendMessage(tabs[0].id, { 
                action: 'change_bg_color', 
                color: 'green' 
            });
        });
    });
});