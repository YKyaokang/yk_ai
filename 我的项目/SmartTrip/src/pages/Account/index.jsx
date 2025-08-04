import styles from './account.module.css'
import Header from '@/components/Account/Header'
import Center from '@/components/Account/Center'
import Footer from '@/components/Account/Footer'
const Account = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.content}>
                <Center />
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>


    )
}
export default Account