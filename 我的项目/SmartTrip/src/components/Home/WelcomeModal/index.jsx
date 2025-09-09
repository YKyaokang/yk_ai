import { useState, useEffect } from 'react'
import styles from './WelcomeModal.module.css'

const WelcomeModal = ({ isVisible, onClose }) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (isVisible) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [isVisible])

    const handleClose = () => {
        setShow(false)
        onClose()
    }

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose()
        }
    }

    if (!isVisible) return null

    return (
        <div 
            className={`${styles.overlay} ${show ? styles.show : ''}`}
            onClick={handleOverlayClick}
        >
            <div className={`${styles.modal} ${show ? styles.show : ''}`}>
                <div className={styles.header}>
                    <h2> 欢迎使用</h2>
                    <button 
                        className={styles.closeBtn}
                        onClick={handleClose}
                        aria-label="关闭"
                    >
                        ×
                    </button>
                </div>
                
                <div className={styles.content}>
                    <div className={styles.welcomeText}>
                        <p className={styles.title}>SmartTrip智能出行！</p>
                        
                        <div className={styles.info}>
                            <p className={styles.icp}>该网站已备案：<br/>赣ICP备2025071601号</p>
                            
                            <div className={styles.credentials}>
                                <p className={styles.credTitle}>测试账号信息：</p>
                                <div className={styles.credItem}>
                                    <span className={styles.label}>账号：</span>
                                    <span className={styles.value}>admin</span>
                                </div>
                                <div className={styles.credItem}>
                                    <span className={styles.label}>密码：</span>
                                    <span className={styles.value}>123456</span>
                                </div>
                            </div>
                            
                            <p className={styles.encouragement}>
                                请牢记网址：smarttrip.icu
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className={styles.footer}>
                    <button 
                        className={styles.confirmBtn}
                        onClick={handleClose}
                    >
                        开始体验
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WelcomeModal