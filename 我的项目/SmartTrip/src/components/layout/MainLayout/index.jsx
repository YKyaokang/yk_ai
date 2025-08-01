import {
    useEffect,
    useState
} from 'react';
import {
    Tabbar,
    NavBar,
    Toast
} from 'react-vant';
import {
    HomeO,
    Search,
    FriendsO,
    UserO
} from '@react-vant/icons';
import {
    Outlet,
    useNavigate,
    useLocation
} from 'react-router-dom'

//菜单栏配置
const tabs = [
    { icon: <HomeO />, title: '首页', path: '/home' },
    { icon: <Search />, title: '攻略', path: '/strategy' },
    { icon: <FriendsO />, title: '云游', path: '/smart' },
    { icon: <UserO />, title: '我的', path: '/account' },
]

const MainLayout = () => {
    const [active, setActive] = useState(0)
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        const index = tabs.findIndex(tab => location.pathname.startsWith(tab.path))
        setActive(index)
    }, [location.pathname]) 

    return (
        <div className='flex flex-col h-screen overflow-hidden'>
            <div className='flex-1 overflow-y-auto'>
                <Outlet />
            </div>
            {/* tabbar */}
            <Tabbar 
                value={active} 
                onChange={
                    (key) => {
                        setActive(key);
                        navigate(tabs[key].path)
                    }
                }
                style={{ 
                    flexShrink: 0,  // 防止收缩
                    zIndex: 1000,   // 确保在最上层
                    borderTop: '1px solid #eee' // 添加分割线
                }}
            >
                {tabs.map((tab, index) => (
                    <Tabbar.Item
                        key={index}
                        icon={tab.icon}
                    >
                        {tab.title}
                    </Tabbar.Item>
                ))}
            </Tabbar>
        </div>
    )
}

export default MainLayout;