const panels = document.querySelectorAll('.qq-panel');
panels.forEach(panel => {
    //JS是一个事件机制的语言
    panel.addEventListener('click', () => {
        console.log('biubiubiu')
        removeActiveClasses(); //模块化
        panel.classList.add('qq-panel--active') //添加一个类名    
    })

    function removeActiveClasses() {
        panels.forEach(panel => {
            panel.classList.remove('qq-panel_active');
        })
    }
    
})