import {
    memo
} from 'react'

import{
    ShopO,
    StarO,
    ServiceO
} from '@react-vant/icons';

import styles from './Bottom.module.css'

const BottomBar = memo(() => {
    return (
        <div className={styles.bottomBar}>
            <div className={styles.left}>
                <div className={styles.iconBlock}>
                    <ShopO/>
                    <span>店铺</span>
                </div>
                <div className={styles.iconBlock}>
                    <ServiceO/>
                    <span>客服</span>
                </div>
                <div className={styles.iconBlock}>
                    <StarO/>
                    <span>收藏</span>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.cartBtn}>加入购物车</div>
                <div className={styles.buyBtn}>立即购买</div>
            </div>
        </div>
    )
})
export default BottomBar