const DEEPSEEK_CHAT_API_URL = 'https://api.deepseek.com/chat/completions'
const KIMI_CHAT_API_URL = 'https://api.moonshot.cn/v1/chat/completions'

// 新增流式聊天函数
export const chatStream = async (
    messages,
    onStreamUpdate,
    api_url = 'https://api.deepseek.com/chat/completions',
    api_key = import.meta.env.VITE_DEEPSEEK_API_KEY,
    model = 'deepseek-chat',
) => {
    try {
        console.log("前：",messages);
        const systemMessage = `# 角色
            你是智行云游客服精灵，作为旅游App内置的专业人工客服，对旅游领域知识和平台相关规定了如指掌。能够针对各类旅游相关问题给出精准且详细的解答，也能依据平台规则妥善处理App相关问题。

            ## 技能
            ### 技能 1: 提供旅游攻略
            1. 当用户询问特定城市或地区的旅游攻略时，如重庆、南昌等，先确认用户旅行的天数、预算、出行人数、出行季节等信息（若用户未提及，可适当询问补充），再根据用户需求，详细规划行程安排，包括景点推荐、美食介绍、交通指南等。回复示例：
            - **目的地**：[城市名称]
            - **行程规划依据**：[简要说明根据用户提供信息进行规划的思路]
            - **行程安排**：
                - **第一天**：[上午行程] - [中午用餐推荐] - [下午行程] - [晚上活动]
                - **第二天**：[上午行程] - [中午用餐推荐] - [下午行程] - [晚上活动]
                - ……（根据实际天数依次罗列）
            - **交通指南**：[说明到达该城市及市内交通方式，考虑不同交通出行方式的特点及费用差异]
            - **美食推荐**：[列举当地特色美食，并简要说明推荐理由]

            2. 你也可以根据用户提的旅游相关问题进行更改回答格式：比如用户问"山东有什么好玩的地方"，你只需要回答有哪些好玩的地方，这些地方有哪些特点：门票，价格等，没必要按照上面的详细规划行程安排进行回答。


            ### 技能 2: 解答App相关问题
            1. 当用户咨询App相关问题，如退改签机票、酒店入住时间规定等，严格按照智行云游平台规定进行清晰准确的解答。回复示例：
            关于[问题内容]，智行云游平台规定如下：[详细说明规定内容，若涉及操作流程需清晰列出]
            为您提供一个实际场景示例帮助理解：[举例说明该规定在实际使用中的情况]


            ## 限制
            - 仅回答旅游相关问题（如各地旅游攻略、行程规划等）以及按智行云游平台规定解答App相关问题。对于无关问题，明确拒绝回答，例如："抱歉，我只能回答旅游相关及智行云游App相关问题，您的问题与这些无关，无法回答。"
            - 所提供的信息必须准确、清晰，符合智行云游平台规定和旅游实际情况。
            - 回答平台类问题时：需要代入场景：该软件为智行云游。
            - 回复内容需按照给定的格式进行组织，确保条理清晰，必要时可增加小标题或序号等，使回复更具逻辑性。 `;

        messages.push(
            {"role": "system", "content": systemMessage}
        )
        
        console.log(messages,'messages');
        console.log("后：",messages);
        
        const response = await fetch(api_url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer sk-c88ea6ccecab43afb497e24dc94baad2`
            },
            body: JSON.stringify({
                model,
                messages,
                stream: true
            })
        })
        
        console.log(response,'response');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // 流式输出核心代码
        // 1. 获取响应体的可读流读取器，用于逐块读取数据
        const reader = response.body.getReader();
        // 2. TextDecoder: 将接收到的字节数据解码为文本
        const decoder = new TextDecoder();
        // 3. fullContent: 累积存储完整的AI回复内容
        let fullContent = '';
        
        try {
            while (true) {
                // reader.read(): 异步读取下一个数据块，返回 { done, value } 对象
                const { done, value } = await reader.read();
                
                if (done) {
                    break;
                }
                //4. 将接收到的字节数据解码为文本
                const chunk = decoder.decode(value, { stream: true });
                // 5. 将解码后的文本按行分割
                const lines = chunk.split('\n');
                // 6. 遍历每一行
                for (const line of lines) {
                    // 7. 如果行以 'data: ' 开头
                    if (line.startsWith('data: ')) {
                        // 8. 去掉 'data: ' 前缀
                        const data = line.slice(6);
                        // 9. 如果数据是 '[DONE]'，则跳过
                        if (data === '[DONE]') {
                            continue;
                        }
                        // 10. 尝试解析JSON数据
                        try {
                            const parsed = JSON.parse(data);
                            const content = parsed.choices?.[0]?.delta?.content;
                            
                            // 11. 如果解析成功，则将内容添加到累积内容中
                            if (content) {
                                fullContent += content;
                                // 调用回调函数更新UI
                                onStreamUpdate(fullContent);
                            }
                        } catch (e) {
                            // 12. 忽略解析错误的行
                            continue;
                        }
                    }
                }
            }
        } finally {
            reader.releaseLock();
        }
        
        return {
            code: 0,
            data: {
                role: 'assistant',
                content: fullContent
            }
        }
    } catch (err) {
        console.error('Stream chat error:', err);
        return {
            code: 1,
            msg: '出错了...'
        }
    }
}

export const kimitChat = async (message) => {
    const res = await chat(
        message,
        KIMI_CHAT_API_URL,
        import.meta.env.VITE_KIMI_API_KEY,
        'moonshot-v1-auto'
    )
    return res
}

export const generateAvatar = async (text) => {
    // 设计prompt
    const prompt = `
    你是一位漫画设计师，需要为用户设计头像，主打可爱萌系风格，请根据用户提供的文本生成一个可爱的头像。
    用户的信息时${text}
    要求有个性，有创意，有设计感
    `
}