import Mock from 'mockjs';

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

export default [{
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
}];