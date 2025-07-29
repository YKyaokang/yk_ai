import styles from './deliveryRow.module.css'
import { Logistics, LikeO, Description } from '@react-vant/icons' // 或正确的导入路径
 
const DeliveryRow = () => {
    return (
        <>
        <div className={styles.deliveryRow}>
                <Logistics className={styles.icon} fontSize={30}/>
                <span className={styles.deliveryText}>
                预计3小时内发货 | 承诺48小时内发货
                </span>
                <br/>
                <span className={styles.extraInfo}>河北保定 · 快递 · 免运费</span>
            </div>
            
            <div className={styles.row}>
                <LikeO className={styles.icon} />
                <span>7天无理由退货</span>
            </div>
            <div className={styles.row}>
                <Description className={styles.icon} />
                <span>风格 肩带是否可拆卸 是否带锁 有无夹层</span>
           </div>
        </>
    )
}

export default DeliveryRow;