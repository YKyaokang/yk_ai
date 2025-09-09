// 全局任务对象，一个要处理的任务单元(Fiber 节点)
let nextUnitOfWork = null;
function performUnitOfWork(fiber) { 
    // 当前fiber 对应的真实DOM，
    if(!fiber.dom) {
        fiber.dom = createDom(fiber);
    }

    const elements = fiber.props.children;
    let index = 0;
    let prevSibling = null;

    while(index < elements.length) {
        const element = elements[index];
        const newFiber = {
            type: element.type,
            props: element.props,
            parent: fiber,
            dom: null,
            child: null,
            sibling: null,
        };
        if(index === 0) {
            fiber.child = newFiber;
        }else{
            prevSibling.sibling = newFiber;
        }
        prevSibling = newFiber;
        index++;
    }

    // 执行任务
    // 返回下一个任务
    return fiber.child;
}

// 
function workLoop(deadline) {
    let shouldYield = false;
    while (nextUnitOfWork && !shouldYield) {
        // 指针的操作
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
        // 避免浏览器阻塞 1ms
        shouldYield = deadline.timeRemaining() < 1;
        
    }
    
}

requestIdleCallback(workLoop);
