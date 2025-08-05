import { create } from 'zustand'

export const useMessageStore = create((set) => ({
    initialMessage: [
        
    ],
    setInitialMessages: (messages) => {
        console.log(messages, 'message');
        set({
                initialMessage: [messages]
    })
    }
})
)

// 想要达到的效果：用户默认进入AI服务页：默认提示 用户的你好 客服精灵 
// - 初始化：store默认拿
// 每次进入的时候 先用setInitialMessages 然后在服务页中useEffet发送信息并解析   
// 暂时先用useMessageStore 