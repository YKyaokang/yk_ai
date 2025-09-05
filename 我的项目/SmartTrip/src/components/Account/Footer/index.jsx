import styles from './footer.module.css';

const Footer = () => {
    const list = [
        {
            name:'我的收藏',
            icon:'icon-shoucang',
        },
        {
            name:'浏览历史',
            icon:'icon-wangluo',
        },
        {
            name:'常用信息',
            icon:'icon-menpiao',
        },
        {
            name:'我的足迹',
            icon:'icon-mudedi',
        },
        {
            name:'我的点评',
            icon:'icon-pinglun',
        },
        {
            name:'旅游定制',
            icon:'icon-jiudian',
        },
        {
            name:'加入会员',
            icon:'icon-gouwu',
        },
        {
            name:'关于我们',
            icon:'icon-lvhangxiang',
        },


    ]
    return (
        <>
        
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.title}>
                    我的工具
                </div>
                <div className={styles.list}>
                    {
                        list.map((item,index) => {
                            return (
                                <div className={styles.item} key={index}>
                                    <div className={styles.icon}>
                                        <svg>
                                            <use xlinkHref={`#${item.icon}`}></use>
                                        </svg>
                                    </div>
                                    
                                    
                                    <div className={styles.name}>
                                        {item.name}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

        <div className={styles.footer_text}>
            <span1>版权所有 智行云游</span1><br/>
            <span2>注意：上述功能还未完成哦！</span2><br/>
            <span3>请持续关注创作者：3Katrina</span3>
        </div>
        </>

        
    )
}

export default Footer;