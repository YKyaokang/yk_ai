chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'change_bg_color') {
        document.body.style.backgroundColor = request.color;
    }
});