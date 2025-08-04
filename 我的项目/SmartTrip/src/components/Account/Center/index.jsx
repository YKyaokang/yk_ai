import styles from './center.module.css'
const Center = () => {
    const content = [
        {
            name:'全部订单',
            icon:"icon-_dingdanguanli-quanbudingdan"
        },
        {
            name:'待付款',
            icon:"icon-daifukuan"
        },
        {
            name:'待出行',
            icon:"icon-daichuhang"
        },
        {
            name:'待点评',
            icon:"icon-daidianping"
        }
    ]
    return (
        <div className={styles.center}>

            <div className={styles.adv}>
            <div className={styles.text}>
                关注<span>“智行云游”</span>公众号，获取更多优惠
            </div>
            <div className={styles.wechat}>
            <svg>
                <use xlinkHref={`#icon-weixin`}></use>
            </svg>
            </div>
            </div>

            <div className={styles.content}>
                {
                    content.map((item,index) => (
                        <div key={index} className={styles.content_item}>
                            <div className={styles.content_item_icon}>
                                <svg>
                                    <use xlinkHref={`#${item.icon}`}></use>
                                </svg>
                            </div>
                            <div className={styles.content_item_text}>
                                {item.name}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Center