import {
    useState
} from 'react'
import {
    Outlet,
    useNavigate
} from 'react-router-dom'
import { Image,Search  } from 'react-vant';
import { Bell   } from '@react-vant/icons';
const MainLayout = () =>{
    const navigate  = useNavigate();
    const navList = [
        {   
            id: 1,
            title:'关注',
            path: '/home',
        },
        {   
            id: 2,
            title:'综合',
            path: '/synthesis',
        },
        {   
            id: 3,
            title:'排行榜',
            path: '/list',
        },
        {   
            id: 4,
            title:'后端',
            path: '/back',
        },
        {   
            id: 5,
            title:'前端',
            path: '/front',
        },
        {   
            id: 6,
            title:'Android',
            path: '/1',
        },

    ]
    const [active,setActive] = useState(1);
    return (
        <div className='container'>
        <div className="header">
            <Image src='https://fxsh.com/wp-content/uploads/2023/12/540a8-juejin.cn.png' className='pic1'
            width="35px" height="35px"
            />
            <h2 className='title'>首页</h2>
            <div className="search" ><Search placeholder="3Katrina"/></div>
            <div className='bell'><Bell  fontSize="30px"/> </div>
            <div className="pic2"><Image src='https://d.musicapp.migu.cn/data/oss/resource/00/2s/td/a7ec0786330841ea9354ed3dbac084c3.webp' width="35px" height="35px" round/></div>
            
        </div>

        <div className="nav">
            {
                navList.map((nav) => (
                    <span
                     key={nav.id}  
                     className={nav.id==active ? "span_isSelect" : ""}
                     onClick={() => {
                        navigate(nav.path)
                        setActive(nav.id)
                    }
                    }
                     >
                        {nav.title}
                    </span>
                ))
            }
        </div>
        <Outlet />
        </div>
    )
}

export default MainLayout