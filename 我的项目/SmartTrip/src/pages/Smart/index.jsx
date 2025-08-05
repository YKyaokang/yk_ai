import styles from './smart.module.css'
import avatar from '@/assets/App/吉祥物.png'
import Header from '@/components/Smart/Header'
import { useMessageStore } from '@/store/useMessageStore'
import { useNavigate } from 'react-router-dom'
const Smart = () => {
    const navigate = useNavigate()
    const { initialMessage, setInitialMessages } = useMessageStore()
    // 常见问题
  const commonQuestions = [
    '如何退改签机票？',
    '酒店入住时间规定',
    '行程取消政策',
    '联系客服电话'
  ]
  const handleClick = (message) => {
    setInitialMessages({
      id: '3',
      content: message,
      role: 'user'
    })
    navigate('/smartService')
  }
    return (
        <div className={styles.container}>

        {/* 顶部 */}
        <Header />
  
        {/* 客服信息卡片 */}
        <div className={styles.serviceCard} onClick={() => handleClick('你好呀！')}>
          <div className={styles.serviceInfo}>
            <img 
              src={avatar}
              alt="客服头像"
              className={styles.serviceAvatar}
            />
            <div className={styles.serviceDetails}>
              <h3 className={styles.serviceName}>小智</h3>
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
                onClick={() => handleClick(question)}
              >
                <span className={styles.questionText}>{question}</span>
                <span className={styles.questionArrow}>›</span>
              </div>
            ))}
          </div>
        </div>
        </div>
    )
}
export default Smart