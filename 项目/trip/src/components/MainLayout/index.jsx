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
    SettingO,
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
    { icon: <Search />, title: '特惠专区', path: '/discount' },
    { icon: <FriendsO />, title: '我的收藏', path: '/collection' },
    { icon: <SettingO />, title: '行程', path: '/trip' },
    { icon: <UserO />, title: '我的账户', path: '/account' }
]

const MainLayout = () => {
    const [active, setActive] = useState(0)
    const navigate = useNavigate();
    const location = useLocation();
    
    // 根据当前路径获取对应的 tab 标题
    const getCurrentTitle = () => {
        const currentTab = tabs.find(tab => location.pathname.startsWith(tab.path));
        return currentTab ? currentTab.title : '首页';
    };
    
    useEffect(() => {
        // console.log(location.pathname, '////');
        const index = tabs.findIndex(tab => location.pathname.startsWith(tab.path))
        setActive(index)
    }, [location.pathname]) // 添加 location.pathname 作为依赖
    
    return (
        <div className='flex flex-col h-screen'>
            <div style={{ flexShrink: 0 }}>
            <NavBar
                title={getCurrentTitle()}
                leftText='首页'
                onClickLeft={() => navigate('/home')}
                style={{ 
                    flexShrink: 0,
                    position: 'relative'
                }}
            />
            </div>

            <div className='flex-1 overflow-hidden'>
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
                    position: 'relative'  // 确保参与正常布局流
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