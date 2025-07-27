import './index.css'
import {
    BrowsingHistoryO,
    LikeO
} from '@react-vant/icons';
const Home = () => {
    const articles = [
        {
            id:1,
            title: 'React批处理机制深度解析...',
            description: '大家好，我是3Katrina，今天要介绍的内容...',
            author:'3Katrina',
            time:'2小时前',
            lookNum:6,
            likeNum:3,
        },
        {
            id: 2,
            title: 'Vue3组合式API实战',
            description: '详解Vue3组合式API使用...',
            author: '码海游侠',
            time: '1小时前',
            lookNum: 12,
            likeNum: 8,
        },
        {
            id: 3,
            title: 'Webpack优化指南',
            description: '分享Webpack打包优化技巧...',
            author: '前端老司机',
            time: '3小时前',
            lookNum: 24,
            likeNum: 15,
        },
        {
            id: 4,
            title: 'TypeScript进阶',
            description: 'TS高级类型系统解析...',
            author: 'TS爱好者',
            time: '5小时前',
            lookNum: 18,
            likeNum: 9,
        },
        {
            id: 5,
            title: 'Node.js性能调优',
            description: 'Node服务性能优化方案...',
            author: '后端小工',
            time: '昨天',
            lookNum: 32,
            likeNum: 20,
        },
        {
            id: 6,
            title: 'CSS新特性解析',
            description: '介绍CSS最新特性...',
            author: '样式魔法师',
            time: '2天前',
            lookNum: 45,
            likeNum: 28,
        }

    ]
    return (
        <>
            <div className="content">
                {
                    articles.map((item) => (
                        <div className='article'>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <footer>
                                <li>{item.author}</li>
                                <li>{item.time}</li>
                                
                                <li><BrowsingHistoryO />&nbsp;{item.lookNum}</li>
                                
                                <li><LikeO />&nbsp;{item.likeNum}</li>
                            </footer>

                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Home;