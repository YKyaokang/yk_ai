import {memo} from 'react'
import styles from './header.module.css'
import { Search } from 'react-vant'
import { ArrowDown } from '@react-vant/icons'
import { useNavigate } from 'react-router-dom'

// 定义图标数组 (3x5布局，15个图标)
const gridIcons = [
    { icon: 'icon-dianhuakefu', text: '电话客服', alt: '电话客服', url: '/todopage' },
    { icon: 'icon-fujinjiudian', text: '附近酒店', alt: '附近酒店', url: '/todopage' },
    { icon: 'icon-chengshimingpian', text: '城市名片', alt: '城市名片', url: '/todopage' },
    { icon: 'icon-zhaotingchechang', text: '找停车场', alt: '找停车场', url: '/todopage' },
    { icon: 'icon-jiaotongchuhang', text: '交通出行', alt: '交通出行', url: '/todopage' },
    { icon: 'icon-lvyoudongtai', text: '旅游动态', alt: '旅游动态', url: '/todopage' },
    { icon: 'icon-youwenbida', text: '有问必答', alt: '有问必答', url: '/todopage' },
    { icon: 'icon-fujinjingqu', text: '附近景区', alt: '附近景区', url: '/todopage' },
    { icon: 'icon-zhaoweishengjian', text: '找卫生间', alt: '找卫生间', url: '/todopage' },
    { icon: 'icon-meijingxiangce', text: '美景相册', alt: '美景相册', url: '/todopage' },
    { icon: 'icon-youwangonglve', text: '游玩攻略', alt: '游玩攻略', url: '/todopage' },
    { icon: 'icon-fujingouwu', text: '附近购物', alt: '附近购物', url: '/todopage' },
    { icon: 'icon-zhoubianyule', text: '周边娱乐', alt: '周边娱乐', url: '/todopage' },
    { icon: 'icon-tousufankui', text: '投诉反馈', alt: '投诉反馈', url: '/todopage' },
    { icon: 'icon-yijianjiuyuan', text: '一键救援', alt: '一键救援', url: '/todopage' }
]

const Header = () => {
    const navigate = useNavigate()

    const handleGridItemClick = (url) => {
        navigate(url)   
    }

    return (
        <>
            <div className={styles.headerSearch}>
                <div className={styles.region}>
                    <span>南昌</span>
                    &nbsp;
                    <ArrowDown color="blue" size="20" />
                </div>
                <div className={styles.searchInputContainer} onClick={() => {
                    navigate('/search')
                }}>
                <Search 
                        placeholder="搜索目的地/攻略" 
                        className={styles.searchInput}
                        shape="round"
                        onClick={() => {
                            navigate('/search')
                        }}
                />
                </div>
               
                
            </div>

            <div className={styles.headerSelect}>
                <div className={styles.gridContainer}>
                    {gridIcons.map((item, index) => (
                        <div 
                            key={index} 
                            className={styles.gridItem}
                            onClick={() => handleGridItemClick(item.url)}
                        >
                            <div className={styles.gridIcon} >
                                <svg>
                                <use xlinkHref={`#${item.icon}`}></use>
                                </svg>
                            </div>
                            
                            <span className={styles.gridText}>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            
        </>
    )
}

export default memo(Header)
