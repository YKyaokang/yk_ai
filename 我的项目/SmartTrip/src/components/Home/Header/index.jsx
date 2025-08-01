import styles from './header.module.css'

import { Search } from 'react-vant'
import { ArrowDown } from '@react-vant/icons'
import { useNavigate } from 'react-router-dom'
import PhoneIcon from '@/assets/phone.svg'
// 引入home-grid目录中的15个图标
import BarbecueIcon from '@/assets/home-grid/烧烤.svg'
import BikeIcon from '@/assets/home-grid/自行车.svg'
import PoolIcon from '@/assets/home-grid/游泳池.svg'
import TvIcon from '@/assets/home-grid/电视.svg'
import DrinkIcon from '@/assets/home-grid/饮料.svg'
import HatIcon from '@/assets/home-grid/帽子.svg'
import TicketIcon from '@/assets/home-grid/门票.svg'
import DestinationIcon from '@/assets/home-grid/目的地.svg'
import SceneryIcon from '@/assets/home-grid/风景.svg'
import DiningIcon from '@/assets/home-grid/就餐.svg'
import SlipperIcon from '@/assets/home-grid/拖鞋.svg'
import LuggageIcon from '@/assets/home-grid/旅行箱.svg'
import CarIcon from '@/assets/home-grid/小车.svg'
import ShipIcon from '@/assets/home-grid/轮船.svg'
import FlightIcon from '@/assets/home-grid/飞行.svg'

// 定义图标数组 (3x5布局，15个图标)
const gridIcons = [
    { icon: DestinationIcon, text: '目的地', alt: '目的地', url: '/todopage' },
    { icon: FlightIcon, text: '机票', alt: '飞行', url: '/todopage' },
    { icon: LuggageIcon, text: '酒店', alt: '旅行箱', url: '/todopage' },
    { icon: CarIcon, text: '租车', alt: '小车', url: '/todopage' },
    { icon: TicketIcon, text: '门票', alt: '门票', url: '/todopage' },
    { icon: SceneryIcon, text: '景点', alt: '风景', url: '/todopage' },
    { icon: DiningIcon, text: '美食', alt: '就餐', url: '/todopage' },
    { icon: BarbecueIcon, text: '烧烤', alt: '烧烤', url: '/todopage' },
    { icon: ShipIcon, text: '游轮', alt: '轮船', url: '/todopage' },
    { icon: BikeIcon, text: '骑行', alt: '自行车', url: '/todopage' },
    { icon: PoolIcon, text: '游泳', alt: '游泳池', url: '/todopage' },
    { icon: TvIcon, text: '娱乐', alt: '电视', url: '/todopage' },
    { icon: DrinkIcon, text: '饮品', alt: '饮料', url: '/todopage' },
    { icon: HatIcon, text: '装备', alt: '帽子', url: '/todopage' },
    { icon: SlipperIcon, text: '休闲', alt: '拖鞋', url: '/todopage' }
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
                    <ArrowDown color="blue" size="14" />
                </div>
                <Search 
                        placeholder="搜索目的地/攻略" 
                        className={styles.searchInput}
                        shape="round"
                />
                <div className={styles.call}>
                    <img src={PhoneIcon} alt="电话" className={styles.phoneIcon} />
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
                            <img src={item.icon} alt={item.alt} className={styles.gridIcon} />
                            <span className={styles.gridText}>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            
        </>
    )
}

export default Header
