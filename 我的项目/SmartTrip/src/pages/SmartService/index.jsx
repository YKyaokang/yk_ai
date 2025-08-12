// React相关导入
import {
    useState,   // 状态管理
    useRef,     // DOM引用
    useEffect   // 副作用处理
} from 'react';

// UI组件库导入
import {
    Button,     // 按钮组件
    Input,      // 输入框组件
} from 'react-vant'

// Markdown渲染组件
import ReactMarkdown from 'react-markdown'

// 自定义Store和工具函数
import { useMessageStore } from '@/store/useMessageStore'  // 外部传来的消息初始值
import { chatStream } from '@/llm'  // 流式聊天API

// 样式和资源导入
import styles from './smartService.module.css'  // 组件样式
import Header from '@/components/Smart/Header'   // 头部组件
import user from '@/assets/App/用户.png'        // 用户头像
import assistant from '@/assets/App/客服.png'    // 助手头像
import useTitle from '@/hooks/useTitle'
/**
 * 智能客服聊天页面组件
 * 支持流式输出、Markdown渲染、加载动画等功能
 */
const SmartService = () => {
    useTitle("云游")
    // ========== 状态管理 ==========
    const [text, setText] = useState("");                          // 输入框文本内容
    const [isSending, setIsSending] = useState(false);             // 是否正在发送消息
    const [isStreaming, setIsStreaming] = useState(false);         // 是否正在流式输出
    const [streamingContent, setStreamingContent] = useState('');  // 流式输出的临时内容
    const [nextId, setNextId] = useState(4);                       // 下一个消息的ID（123已经被初始化三条信息占用）
    
    // ========== 引用和Store ==========
    const chatAreaRef = useRef(null);                             // 聊天区域DOM引用，用于自动滚动
    const { initialMessage } = useMessageStore()                  // 从Store获取初始消息
    // ========== 消息列表状态 ==========
    const [messages, setMessages] = useState([
        {
            id: 2,
            content: '你好呀！',
            role: 'user'                                          // 用户消息
        },
        {
            id: 1,
            content: '你好，请问有什么我可以帮你的吗',
            role: 'assistant',                                    // 助手消息
        }
    ])

    /**
     * 生成下一个唯一ID并更新nextId状态
     * @returns {number} 新的唯一ID
     */
    const generateNextId = () => {
        const currentId = nextId;
        setNextId(prev => prev + 1);
        return currentId;
    };
    // ========== 工具函数 ==========
    /**
     * 自动滚动到聊天区域底部
     * 确保用户始终能看到最新的消息
     */
    const scrollToBottom = () => {
        if (chatAreaRef.current) {
            chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
        }
    };

    // ========== 副作用处理 ==========
    /**
     * 当消息列表或流式内容发生变化时，自动滚动到底部
     */
    useEffect(() => {
        scrollToBottom();
    }, [messages, streamingContent]);
    /**
     * 当页面挂载完，查看初始消息initialMessage，初始消息一般为[]或者{content: '行程取消政策', role: 'user'} 这种格式
     * 
     * 如果初始消息的长度大于0的话
     * 则自动发送一条初始消息： 1. 将初始消息加入到聊天列表中 2.设置加载中动画为true 3. 发送接口获取请求 4.流式输出内容，加入到聊天列表 5.设置加载中动画为false 
     */
    useEffect(() => {
        console.log(initialMessage, 'initialMessage');
        
        // 检查是否有初始消息需要处理
        if (initialMessage && initialMessage.length > 0) {
            // 获取第一条初始消息
            const firstMessage = initialMessage[0];
            
            // 验证消息格式是否正确
            if (firstMessage && firstMessage.content && firstMessage.role === 'user') {
                // 自动发送初始消息
                handleInitialMessage(firstMessage.content);
            }
        }
    }, []);

    /**
     * 处理初始消息的自动发送逻辑
     * @param {string} messageContent - 初始消息内容
     */
    const handleInitialMessage = async (messageContent) => {
        console.log('开始处理初始消息:', messageContent);
        
        // 1. 设置发送状态
        setIsSending(true);
        
        // 2. 将初始消息加入到聊天列表中（使用预设的ID: 3）
        setMessages((pre) => {
            return [
                ...pre,
                {
                    id: 3,  // 初始消息固定使用ID: 3
                    role: 'user',
                    content: messageContent
                }
            ]
        });

        try {
            // 3. 并行执行流式聊天和延迟（确保加载动画至少显示500ms）
            const [result] = await Promise.all([
                // 4. 发送接口获取请求
                chatStream(
                    [{
                        role: 'user',
                        content: messageContent
                    }],
                    (content) => {
                        // 第一次接收到内容时，开始流式输出并隐藏加载动画
                        if (!isStreaming) {
                            setIsStreaming(true);
                        }
                        // 5. 流式输出内容更新
                        setStreamingContent(content);
                    }
                ),
                // 最小延迟，确保用户能看到加载动画
                new Promise(resolve => setTimeout(resolve, 500))
            ]);
            
            console.log('初始消息处理结果:', result);
            
            // 6. 流式输出完成，添加到消息列表（自动分配ID）
            if (result.code === 0) {
                setMessages((pre) => {
                    return [
                        ...pre,
                        {
                            ...result.data,
                            id: generateNextId()  // 自动分配唯一ID
                        }
                    ]
                });
            }
        } catch (error) {
            // 错误处理
            console.error('初始消息处理错误:', error);
            setMessages((pre) => {
                return [
                    ...pre,
                    {
                        id: generateNextId(),  // 错误消息也需要唯一ID
                        role: 'assistant',
                        content: '抱歉，处理您的问题时出现了错误，请稍后再试。'
                    }
                ]
            });
        } finally {
            // 7. 重置状态
            setIsSending(false);
            setIsStreaming(false);
            setStreamingContent('');
        }
    };

    // ========== 核心业务逻辑 ==========
    /**
     * 处理聊天发送逻辑
     * 包含以下步骤：
     * 1. 输入验证
     * 2. 状态设置和UI更新
     * 3. 添加用户消息到列表
     * 4. 调用流式聊天API
     * 5. 处理响应和错误
     * 6. 清理状态
     */
    const handleChat = async () => {
        // 1. 输入验证：检查输入是否为空
        if (text.trim() === "") {
            return;
        }
        
        // 2. 状态初始化
        const userMessage = text;              // 保存用户消息
        setIsSending(true);                    // 设置发送状态
        setText("");                          // 清空输入框
        console.log('开始发送消息，isSending:', true, 'isStreaming:', isStreaming);
        
        // 3. 立即添加用户消息到聊天列表（自动分配ID）
        setMessages((pre) => {
            return [
                ...pre,
                {
                    id: generateNextId(),  // 自动分配唯一ID
                    role: 'user',
                    content: userMessage
                }
            ]
        })

        try {
            // 4. 并行执行流式聊天和延迟（确保加载动画至少显示500ms）
            const [result] = await Promise.all([
                // 4.1 调用流式聊天API
                chatStream(
                    [{
                        role: 'user',
                        content: userMessage
                    }],
                    (content) => {
                        // 流式内容更新回调函数
                        // 第一次接收到内容时，切换到流式输出状态
                        if (!isStreaming) {
                            setIsStreaming(true);
                        }
                        // 实时更新流式内容
                        setStreamingContent(content);
                    }
                ),
                // 4.2 最小延迟，确保用户能看到加载动画
                new Promise(resolve => setTimeout(resolve, 500))
            ]);
            
            console.log(result, 'result');
            
            // 5. 流式输出完成后，将完整消息添加到消息列表（自动分配ID）
            if (result.code === 0) {
                setMessages((pre) => {
                    return [
                        ...pre,
                        {
                            ...result.data,
                            id: generateNextId()  // 自动分配唯一ID
                        }
                    ]
                });
            }
        } catch (error) {
            // 6. 错误处理：显示错误消息
            console.error('Chat error:', error);
            setMessages((pre) => {
                return [
                    ...pre,
                    {
                        id: generateNextId(),  // 错误消息也需要唯一ID
                        role: 'assistant',
                        content: '抱歉，出现了一些问题，请稍后再试。'
                    }
                ]
            });
        } finally {
            // 7. 清理状态：无论成功或失败都要重置状态
            setIsSending(false);        // 取消发送状态
            setIsStreaming(false);      // 取消流式输出状态
            setStreamingContent('');    // 清空流式内容
        }
    }
   
    // ========== 组件渲染 ==========
    return (
        <div className={styles.container}>
            {/* 页面头部 */}
            <Header />
            
            {/* 加载动画：仅在发送中且未开始流式输出时显示 */}
            {isSending && !isStreaming && (
                <div className={styles.loadingContainer}>
                    <div className={styles.loadingBall}></div>
                    <div className={styles.loadingBall}></div>
                </div>
            )}
            
            {/* 聊天消息区域 */}
            <div className={styles.chatArea} ref={chatAreaRef}>
                {/* 历史消息列表 */}
                {messages.map((msg) => (
                    <div
                        key={msg.id}  // 使用唯一ID作为key，提升渲染性能
                        className={
                            // 根据消息角色设置不同的样式（左右对齐）
                            msg.role === 'user' ? styles.messageRight : styles.messageLeft
                        }
                    >
                        {/* 头像显示 */}
                        <div className={msg.role === 'user' ? styles.userAvatar : styles.assistantAvatar}>
                            <img src={msg.role === 'user' ? user : assistant} alt="" />
                        </div>
                        
                        {/* 消息内容 */}
                        <div className={styles.markdownContent}>
                            {/* 助手消息使用Markdown渲染，用户消息直接显示 */}
                            {msg.role === 'assistant' ? (
                                <ReactMarkdown>{msg.content}</ReactMarkdown>
                            ) : (
                                msg.content
                            )}
                        </div>
                    </div>
                ))}
                
                {/* 流式输出中的临时消息 */}
                {isStreaming && streamingContent && (
                    <div className={styles.messageLeft}>
                        <div className={styles.assistantAvatar}>
                            <img src={assistant} alt="" />
                        </div>
                        <div className={styles.markdownContent}>
                            {/* 流式内容也使用Markdown渲染 */}
                            <ReactMarkdown>{streamingContent}</ReactMarkdown>
                        </div>
                    </div>
                )}
            </div>
            
            {/* 底部输入区域 */}
            <div className={styles.inputArea}>
                {/* 输入框 */}
                <div className={styles.input}>
                    <Input
                        value={text}
                        onChange={(e) => setText(e)}
                        placeholder="请输入消息"
                        className={styles.input}
                    />  
                </div>
                
                {/* 发送按钮 */}
                <div className={styles.button}>
                    <Button 
                        disabled={isSending}          // 发送中时禁用按钮
                        type="primary" 
                        onClick={handleChat}
                    >
                        发送
                    </Button>
                </div>
            </div>
        </div>
    )
}

// 导出组件
export default SmartService;