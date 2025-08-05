import React, { useState } from 'react'
import styles from './index.module.css'

const Service = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'system',
      content: '您好！我是您的专属旅行顾问，有什么可以帮助您的吗？',
      time: '10:00'
    }
  ])
  const [inputValue, setInputValue] = useState('')

  // 常见问题
  const commonQuestions = [
    '如何退改签机票？',
    '酒店入住时间规定',
    '行程取消政策',
    '联系客服电话'
  ]

  // 发送消息
  const sendMessage = (content) => {
    if (!content.trim()) return

    const newMessage = {
      id: Date.now(),
      type: 'user',
      content,
      time: new Date().toLocaleTimeString('zh-CN', { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    }

    setMessages(prev => [...prev, newMessage])
    setInputValue('')

    // 模拟客服回复
    setTimeout(() => {
      const replyMessage = {
        id: Date.now() + 1,
        type: 'service',
        content: '感谢您的咨询，我会尽快为您处理。请稍等片刻...',
        time: new Date().toLocaleTimeString('zh-CN', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      }
      setMessages(prev => [...prev, replyMessage])
    }, 1000)
  }

  return (
    <div className={styles.container}>
      {/* 顶部 */}
      <header className={styles.header}>
        <h1 className={styles.title}>旅行客服</h1>
        <div className={styles.headerActions}>
          <span className={styles.phoneIcon}>📞</span>
        </div>
      </header>

      {/* 客服信息卡片 */}
      <div className={styles.serviceCard}>
        <div className={styles.serviceInfo}>
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
            alt="客服头像"
            className={styles.serviceAvatar}
          />
          <div className={styles.serviceDetails}>
            <h3 className={styles.serviceName}>小雪</h3>
            <p className={styles.serviceStatus}>在线 - 专业旅行顾问</p>
          </div>
        </div>
      </div>

      {/* 常见问题 */}
      <div className={styles.questionsSection}>
        <h3 className={styles.sectionTitle}>常见问题</h3>
        <div className={styles.questionsList}>
          {commonQuestions.map((question, index) => (
            <div 
              key={index}
              className={styles.questionItem}
              onClick={() => sendMessage(question)}
            >
              <span className={styles.questionText}>{question}</span>
              <span className={styles.questionArrow}>›</span>
            </div>
          ))}
        </div>
      </div>

      {/* 聊天区域 */}
      <div className={styles.chatContainer}>
        <div className={styles.messagesList}>
          {messages.map(message => (
            <div 
              key={message.id}
              className={`${styles.messageItem} ${styles[message.type]}`}
            >
              {message.type !== 'user' && (
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&h=60&fit=crop&crop=face"
                  alt="客服"
                  className={styles.messageAvatar}
                />
              )}
              <div className={styles.messageContent}>
                <div className={styles.messageBubble}>
                  {message.content}
                </div>
                <span className={styles.messageTime}>{message.time}</span>
              </div>
              {message.type === 'user' && (
                <div className={styles.userAvatar}>您</div>
              )}
            </div>
          ))}
        </div>

        {/* 输入区域 */}
        <div className={styles.inputContainer}>
          <div className={styles.inputBox}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="请输入您要咨询的问题..."
              className={styles.messageInput}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  sendMessage(inputValue)
                }
              }}
            />
            <button 
              className={styles.sendBtn}
              onClick={() => sendMessage(inputValue)}
            >
              发送
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service