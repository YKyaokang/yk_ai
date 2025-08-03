import Mock from 'mockjs';
import jwt from 'jsonwebtoken';
// 生成随机旅游景点数据的函数
const getImages = (page, pageSize = 10) => {
    return Array.from({ length: pageSize }, (_, i) => {
        // 使用Mock.mock生成数据
        // 使用稳定的DummyImage服务，创建不同样式的占位图
        const colors = ['4A90E2', '5CB85C', 'F0AD4E', 'D9534F', '5BC0DE', '7B68EE', 'FF6347', '32CD32'];
        const bgColor = Mock.Random.pick(colors);
        const textColor = 'ffffff';
        const width = Mock.Random.integer(250, 350);
        const height = Mock.Random.integer(400, 600);
        
        const imageUrl = `https://dummyimage.com/${width}x${height}/${bgColor}/${textColor}.png&text=景点${page}-${i}`;
        
        const randomData = Mock.mock({
            'id': `${page}-${i}`,
            'image': imageUrl, // 使用稳定的DummyImage
            'title': '@ctitle(4, 12)', // 随机中文标题
            'location': '@city()·@pick(["温泉度假村", "古城景区", "国家公园", "自然保护区", "历史文化街", "海滨度假区", "山水风景区", "民俗村", "艺术园区", "主题乐园", "天沐温泉", "风景名胜区", "生态园", "古镇", "湖心岛"])', // 位置格式：城市·景点名称
            'price': '@integer(99, 999)', // 价格范围 99-999 元
            'comments': '@integer(50, 2000)', // 评论数 50-2000
            'score': '@float(3.5, 5.0, 1, 1)', // 评分 3.5-5.0，保留一位小数
            'like': '@integer(20, 1500)' // 点赞数 20-1500
        });
        
        return randomData;
    });
};

// 生成随机旅游攻略文章数据的函数
const getArticles = (page, pageSize = 10) => {
    return Array.from({ length: pageSize }, (_, i) => {
        // 头像颜色和地点图片颜色
        const avatarColors = ['FF6B6B', '4ECDC4', '45B7D1', 'FFA07A', '98D8C8', 'F7DC6F', 'BB8FCE', '85C1E9'];
        const imageColors = ['4A90E2', '5CB85C', 'F0AD4E', 'D9534F', '5BC0DE', '7B68EE', 'FF6347', '32CD32'];
        
        const avatarBgColor = Mock.Random.pick(avatarColors);
        const imageBgColor = Mock.Random.pick(imageColors);
        
        // 生成头像（小尺寸，圆形友好）
        const avatarUrl = `https://dummyimage.com/80x80/${avatarBgColor}/ffffff.png&text=${encodeURIComponent('头像')}`;
        
        // 生成地点图片
        const imageWidth = Mock.Random.integer(300, 400);
        const imageHeight = Mock.Random.integer(400, 600);
                const imageUrl = `https://dummyimage.com/${imageWidth}x${imageHeight}/${imageBgColor}/ffffff.png&text=${encodeURIComponent('攻略')}${page}-${i}`;
        
        // 生成评论列表
        const commentsCount = Mock.Random.integer(5, 20);
        const comments = Array.from({ length: commentsCount }, (_, j) => {
            const commentAvatarBgColor = Mock.Random.pick(avatarColors);
            const commentAvatarUrl = `https://dummyimage.com/60x60/${commentAvatarBgColor}/ffffff.png&text=${encodeURIComponent('评')}`;
            
            return Mock.mock({
                'id': `comment-${page}-${i}-${j}`,
                'user_avatar': commentAvatarUrl,
                'user_nickname': '@cname()',
                'user_context': '@cparagraph(1, 3)', // 评论内容，1-3句话
                'users_like': '@integer(0, 200)' // 评论点赞数 0-200
            });
        });

        const randomData = Mock.mock({
            'id': `article-${page}-${i}`,
            'image': imageUrl, // 地点图片
            'location': '@city()·@pick(["古城区", "海滨风景区", "山水小镇", "历史文化街区", "温泉度假村", "国家公园", "自然保护区", "民俗文化村", "艺术创意园", "特色古镇", "湖滨公园", "森林景区", "沙滩度假区", "峡谷风景区", "草原风光带"])', // 地名
            'description': '@cparagraph(8, 12)', // 地名评价（一段话，2-4句）
            'avatar': avatarUrl, // 头像（小尺寸）
            'nickname': '@cname()', // 昵称
            'like': '@integer(50, 2500)', // 点赞数 50-2500
            'comments': comments, // 评论列表
            'isFocus': false // 是否关注，默认为false
        });
        
        return randomData;
    });
};
// 加盐
const secret = '!&124coddefgg'

export default [
    {
    // API: /api/images?page=1
    url: '/api/images',
    method: 'get',
    timeout: 1000,
    response: (req, res) => {
        console.log('Mock API called:', req.url, req.query);
        const page = Number(req.query.page) || 1;
        const pageSize = 10;
        
        const result = {
            code: 0,
            message: 'success',
            data: {
                list: getImages(page, pageSize),
                pagination: {
                    current: page,
                    pageSize: pageSize,
                    total: 100, // 假设总共100张图片
                    totalPages: Math.ceil(100 / pageSize)
                }
            }
        };
        
        console.log('Mock API response:', result);
        return result;
    }
}, 
    // API: /api/articles?page=1 - 旅游攻略文章数据
    {
    url: '/api/articles',
    method: 'get',
    timeout: 1000,
    response: (req, res) => {
        console.log('Mock Articles API called:', req.url, req.query);
        const page = Number(req.query.page) || 1;
        const pageSize = Number(req.query.pageSize) || 10;
        
        const result = {
            code: 0,
            message: 'success',
            data: {
                list: getArticles(page, pageSize),
                pagination: {
                    current: page,
                    pageSize: pageSize,
                    total: 150, // 假设总共150篇攻略文章
                    totalPages: Math.ceil(150 / pageSize)
                }
            }
        };
        
        console.log('Mock Articles API response:', result);
        return result;
    }
},
// 热门推荐
    {
    url: '/api/hotlist',
    method: 'get',
    timeout: 1000,
    response: (req, res) => {
        return {
            code: 0,
            data:[{
                id: '101',
                city: "三叠泉"
            },{
                id: '102',
                city: "庐山索道"
            }, {
                id: '103',
                city: "索江楼"
            },{
                id: '104',
                city: "宜春温泉"
            },{
                id: '105',
                city: "81青年旅舍（八一馆地铁站店）"
            },{
                id: '106',
                city: "婺源篁岭景区"
            },{
                id: '107',
                city: "平潭的景点"
            },
        ]
        }
    }
},
// 搜索建议
    {
    url: '/api/search',
    method: 'get',
    timeout: 1000,
    response:(req, res) => {
        const keyword = req.query.keyword;
        let num = Math.floor(Math.random() * 10)+3;
        let list = [];
        for (let i = 0; i < num; i++) {
            // 随机内容
            const randomData = Mock.mock({
                title: '@ctitle'
            })
            list.push(`${randomData.title}${keyword}`)
        }

        return {
            code: 0,
            data: list
        }
    }
},
// 登录
    {
    url: '/api/login',
    method: 'post',
    timeout: 1000,
    response: (req, res) => {
        const { username, password } = req.body;
        if(username !== 'admin' || password !== '123456'){
            return {
                code: 40001,
                message: '找不到账户',
            }
        }

        // 生成jwt
        const token = jwt.sign({
            user: {
                id: '001',
                username: 'admin',
            }
        }, secret,{
            expiresIn: '86400',
        })
        // 返回正确数据
        return {
            code: 200,
            token,
            data: {
                id: '001',
                data: {
                    id: '001',
                    username: 'admin',
                }
            }
        }
    }
},
// 获取用户信息
{
    url: '/api/user',
    method: 'get',
    response: (req, res) => {
        // 用户端 token headers
        
        const token = req?.headers['authorization']?.split(' ')[1];
        try {
            const decode = jwt.verify(token, secret)
            return {
                code: 200,
                data: decode.user
            }
        } catch (err) {
            return {
                code: 40003,
                message: 'token失效，请重新登录'
            }
        }
    }
}
];



// 1.分析有哪些字段
// id 图片 地名 地名评价（一段话） 头像(小尺寸) 昵称 点赞数 current pageSize total
// 2. mock模拟生成数据