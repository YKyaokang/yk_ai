// Mock API 数据

// 首页推荐数据
export const homeRecommendations = [
  {
    id: 1,
    title: '三亚海滨度假',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop',
    tags: ['海滨', '度假', '亲子'],
    rating: 4.8,
    reviewCount: 1286
  },
  {
    id: 2,
    title: '北京文化之旅',
    price: 1599,
    originalPrice: 2199,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=300&fit=crop',
    tags: ['文化', '历史', '经典'],
    rating: 4.7,
    reviewCount: 958
  },
  {
    id: 3,
    title: '成都美食探索',
    price: 1299,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
    tags: ['美食', '休闲', '文化'],
    rating: 4.9,
    reviewCount: 2103
  }
]

// 攻略数据
export const strategyPosts = [
  {
    id: 1,
    title: '三亚完美5日游攻略，海景酒店+美食推荐',
    author: '旅行达人小李',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1582623003834-1c491c8b8f1d?w=300&h=200&fit=crop'
    ],
    likes: 328,
    comments: 45,
    publishTime: '2天前',
    location: '三亚',
    summary: '详细的三亚5日游攻略，包含住宿、美食、景点推荐...'
  },
  {
    id: 2,
    title: '北京故宫深度游，避开人群的最佳路线',
    author: '历史爱好者',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face',
    images: [
      'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=300&h=200&fit=crop'
    ],
    likes: 256,
    comments: 32,
    publishTime: '1周前',
    location: '北京',
    summary: '故宫深度游览路线，避开拥挤人群的小技巧...'
  }
]

// 用户订单数据
export const userOrders = [
  {
    id: '202401001',
    type: 'hotel',
    title: '三亚海棠湾希尔顿酒店',
    status: 'confirmed',
    statusText: '已确认',
    checkIn: '2024-02-15',
    checkOut: '2024-02-18',
    price: 2688,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=200&h=150&fit=crop'
  },
  {
    id: '202401002',
    type: 'flight',
    title: '南昌 → 三亚',
    status: 'pending',
    statusText: '待支付',
    date: '2024-02-15',
    time: '08:30-11:45',
    price: 1280,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=200&h=150&fit=crop'
  }
]