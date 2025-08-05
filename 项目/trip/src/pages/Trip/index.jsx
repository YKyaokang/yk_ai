import {
    useEffect,
    useState
} from 'react';
import {
    Button,
    Input,
    Loading,
    Popup
} from 'react-vant'

import useTitle from '@/hooks/useTitle'
import {
    chat
} from '@/llm'
import styles from './trip.module.css';
import {
    ChatO,
    UserO
} from '@react-vant/icons'

const Trip = () => {
    useTitle('旅游智能客服')
    const [visible, setVisible] = useState(false)
    const [text, setText] = useState("");
    const [isSending, setIsSending] = useState(false);
    // 数据驱动界面
    // 静态界面
    const [messages, setMessages] = useState([
        {
            id: 2,
            content: 'hello~',
            role: 'user'
        },
        {
            id: 1,
            content: 'hello, I am your assistant. What can I do for you?',
            role: 'assistant',
        },
    ])
    const handleChat = async () => {
        if (text.trim() === "") {
            setVisible(true)
            return;
        }
        setIsSending(true);
        setText("");
        setMessages((pre) => {
            return [
                ...pre,
                {
                    role: 'user',
                    content: text
                }
            ]
        })

        const newMessage = await chat([{
            role: 'user',
            content: text
        }])
        console.log(newMessage);

        setMessages((pre) => {
            return [
                ...pre,
                newMessage.data
            ]
        })
        setIsSending(false);
    }
    return (
        <div className="flex flex-col h-all">
            <div className={`flex-1 ${styles.chatArea}`}>
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={
                            msg.role === 'user' ? styles.messageRight : styles.messageLeft
                        }
                    >
                        {
                            msg.role === 'assistant' ? <ChatO /> : <UserO />
                        }
                        {msg.content}
                    </div>
                ))}
            </div>
            <div className={`flex ${styles.inputArea}`}>
                <Input
                    value={text}
                    onChange={(e) => setText(e)}
                    placeholder="请输入消息"
                    className={`flex-1 ${styles.input}`}
                />  
                <Button disabled={isSending} type="primary" onClick={handleChat} >发送</Button>
            </div>
            
            {isSending && <div className='fixed-loading'><Loading color='blue' /></div>}

            <Popup visible={visible} onClose={() => setVisible(false)}>
            <div style={{ padding: '30px 50px' }}>非法操作：您未输入内容</div>
            </Popup>
        </div>
    )
}

export default Trip