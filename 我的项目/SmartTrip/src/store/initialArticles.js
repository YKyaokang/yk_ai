import 穷游 from '@/assets/strategy/7-8月穷游去哪.png'
import 玉溪 from '@/assets/strategy/2025玉溪宝藏之旅.png'
import 景德镇 from '@/assets/strategy/比起景德镇.png'
import 沙滩 from '@/assets/strategy/出门就是沙滩.png'
import 福州 from '@/assets/strategy/福州+平潭.png'
import 抚州 from '@/assets/strategy/抚州200直达.png'
import 广州 from '@/assets/strategy/广州周边亲子游玩水.png'
import 芭比粉 from '@/assets/strategy/国内唯一的芭比粉沙滩.png'
import 已二刷 from '@/assets/strategy/已二刷.png'
import 马尔代夫 from '@/assets/strategy/这不是马尔代夫.png'

// 初始攻略文章数据
export const initialArticles = [
    {
        id: "article-init-0",
        image: 穷游,
        location: "",
        description: "7-8月穷游去哪？这些地方去了不后悔系列",
        avatar: "https://dummyimage.com/80x80/FF6B6B/ffffff.png&text=小红",
        nickname: "旅行小红",
        like: 1856,
        comments: [
            {
                id: "article-init-0-comment-0",
                user_avatar: "https://dummyimage.com/60x60/4ECDC4/ffffff.png&text=评",
                user_nickname: "背包客小李",
                user_context: "这个攻略太实用了！我就是按照这个路线走的，真的很棒。",
                users_like: 45
            },
            {
                id: "article-init-0-comment-1",
                user_avatar: "https://dummyimage.com/60x60/45B7D1/ffffff.png&text=评",
                user_nickname: "旅行达人",
                user_context: "预算控制得很好，适合学生党。",
                users_like: 32
            },
            {
                id: "article-init-0-comment-2",
                user_avatar: "https://dummyimage.com/60x60/F0AD4E/ffffff.png&text=评",
                user_nickname: "自由行爱好者",
                user_context: "收藏了，下次出行就按这个来！",
                users_like: 28
            }
        ],
        isFocus: false
    },
    {
        id: "article-init-1",
        image: 玉溪,
        location: "云南·丽江古城",
        description: "丽江古城是中国保存最完整的古城之一，纳西族文化在这里得到完美体现。青石板路蜿蜒曲折，小桥流水人家的景象随处可见。夜晚时分，古城灯火辉煌，酒吧街热闹非凡。在这里可以体验到浓郁的民族风情，品尝地道的纳西美食，感受慢节奏的生活方式。",
        avatar: "https://dummyimage.com/80x80/4ECDC4/ffffff.png&text=阿明",
        nickname: "云南阿明",
        like: 2341,
        comments: [
            {
                id: "comment-0",
                user_avatar: "https://dummyimage.com/60x60/5CB85C/ffffff.png&text=评",
                user_nickname: "丽江小王",
                user_context: "去过三次丽江了，每次都有不同的感受，古城确实很美！",
                users_like: 67
            },
            {
                id: "comment-1",
                user_avatar: "https://dummyimage.com/60x60/D9534F/ffffff.png&text=评",
                user_nickname: "纳西族阿姐",
                user_context: "欢迎大家来我们丽江做客，这里的纳西文化值得深度体验。",
                users_like: 89
            }
        ],
        isFocus: false
    },
    {
        id: "article-init-2", 
        image: 景德镇,
        location: "四川·九寨沟",
        description: "九寨沟被誉为，拥有绝美的自然风光。清澈见底的湖泊呈现出不同层次的蓝绿色彩，瀑布飞流直下，森林层林尽染。最佳游览时间是秋季，满山红叶与碧绿湖水形成强烈对比。这里的每一个景点都如诗如画，让人流连忘返，是摄影爱好者的天堂。",
        avatar: "https://dummyimage.com/80x80/45B7D1/ffffff.png&text=川妹",
        nickname: "四川川妹",
        like: 3128,
        comments: [
            {
                id: "comment-0",
                user_avatar: "https://dummyimage.com/60x60/5BC0DE/ffffff.png&text=评",
                user_nickname: "摄影爱好者",
                user_context: "九寨沟的水真的太美了，照片都拍不出那种震撼感！",
                users_like: 156
            },
            {
                id: "comment-1",
                user_avatar: "https://dummyimage.com/60x60/7B68EE/ffffff.png&text=评",
                user_nickname: "四川本地人",
                user_context: "作为四川人，九寨沟确实是我们的骄傲，秋天去最美。",
                users_like: 124
            },
            {
                id: "comment-2",
                user_avatar: "https://dummyimage.com/60x60/FF6347/ffffff.png&text=评",
                user_nickname: "自然爱好者",
                user_context: "这里的生态保护得很好，希望大家都能文明旅游。",
                users_like: 78
            }
        ],
        isFocus: false
    },
    {
        id: "article-init-3",
        image: 沙滩,
        location: "湖南·张家界",
        description: "张家界以其独特的石柱峰林地貌闻名于世，是《阿凡达》电影的取景地。天门山的玻璃栈道惊险刺激，金鞭溪的溪水清澈见底。乘坐缆车穿梭在云雾缭绕的山峰间，仿佛置身于仙境之中。这里不仅有壮美的自然风光，还有土家族的民俗文化值得深度体验。",
        avatar: "https://dummyimage.com/80x80/FFA07A/ffffff.png&text=湘哥",
        nickname: "湖南湘哥", 
        like: 2756,
        comments: [
            {
                id: "comment-0",
                user_avatar: "https://dummyimage.com/60x60/32CD32/ffffff.png&text=评",
                user_nickname: "恐高症患者",
                user_context: "玻璃栈道真的太刺激了，腿都软了但是风景绝美！",
                users_like: 203
            },
            {
                id: "comment-1",
                user_avatar: "https://dummyimage.com/60x60/4A90E2/ffffff.png&text=评",
                user_nickname: "阿凡达粉丝",
                user_context: "终于看到了电影里的哈利路亚山，太震撼了！",
                users_like: 167
            }
        ],
        isFocus: false
    },
    {
        id: "article-init-4",
        image: 福州,
        location: "福州·平潭",
        description: "福州+平潭，两天一夜，人均1000+，在这里，你可以看到各种各样的美景",
        avatar: "https://dummyimage.com/80x80/FFA07A/ffffff.png&text=湘哥",
        nickname: "湖南湘哥", 
        like: 2756,
        comments: [
            {
                id: "comment-0",
                user_avatar: "https://dummyimage.com/60x60/98D8C8/ffffff.png&text=评",
                user_nickname: "福建小伙",
                user_context: "平潭的海滩真的很美，而且人不多，很适合拍照。",
                users_like: 45
            },
            {
                id: "comment-1",
                user_avatar: "https://dummyimage.com/60x60/F7DC6F/ffffff.png&text=评",
                user_nickname: "省钱达人",
                user_context: "人均1000+确实不错，性价比很高的路线！",
                users_like: 38
            }
        ],
        isFocus: false
    },
    {
        id: "article-init-5",
        image: 抚州,
        location: "",
        description: "两天一夜游抚州，人均200+，体验不一样的抚州，#文昌里 在这里有年子，你可以掐抚州泡粉哟",
        avatar: "https://dummyimage.com/80x80/FFA07A/ffffff.png&text=湘哥",
        nickname: "湖南湘哥", 
        like: 2756,
        comments: [
            {
                id: "comment-0",
                user_avatar: "https://dummyimage.com/60x60/BB8FCE/ffffff.png&text=评",
                user_nickname: "抚州本地人",
                user_context: "文昌里确实很有特色，抚州泡粉是我们的骄傲！",
                users_like: 56
            },
            {
                id: "comment-1",
                user_avatar: "https://dummyimage.com/60x60/85C1E9/ffffff.png&text=评",
                user_nickname: "美食爱好者",
                user_context: "人均200+太划算了，抚州泡粉真的很好吃！",
                users_like: 42
            }
        ],
        isFocus: false
    },
    {
        id: "article-init-6",
        image: 广州,
        location: "湖南·张家界",
        description: "张家界以其独特的石柱峰林地貌闻名于世，是《阿凡达》电影的取景地。天门山的玻璃栈道惊险刺激，金鞭溪的溪水清澈见底。乘坐缆车穿梭在云雾缭绕的山峰间，仿佛置身于仙境之中。这里不仅有壮美的自然风光，还有土家族的民俗文化值得深度体验。",
        avatar: "https://dummyimage.com/80x80/FFA07A/ffffff.png&text=湘哥",
        nickname: "湖南湘哥", 
        like: 2756
    },
    {
        id: "article-init-7",
        image: 芭比粉,
        location: "",
        description: "国内唯一的芭比粉沙滩！美到窒息❤，🌊国内粉色沙滩终极指南|梦幻打卡",
        avatar: "https://dummyimage.com/80x80/FFA07A/ffffff.png&text=湘哥",
        nickname: "湖南湘哥", 
        like: 2756
    },
    {
        id: "article-init-8",
        image: 已二刷,
        location: "湖南·张家界",
        description: "张家界以其独特的石柱峰林地貌闻名于世，是《阿凡达》电影的取景地。天门山的玻璃栈道惊险刺激，金鞭溪的溪水清澈见底。乘坐缆车穿梭在云雾缭绕的山峰间，仿佛置身于仙境之中。这里不仅有壮美的自然风光，还有土家族的民俗文化值得深度体验。",
        avatar: "https://dummyimage.com/80x80/FFA07A/ffffff.png&text=湘哥",
        nickname: "湖南湘哥", 
        like: 2756
    },
    {
        id: "article-init-9",
        image: 马尔代夫,
        location: "湖南·张家界",
        description: "张家界以其独特的石柱峰林地貌闻名于世，是《阿凡达》电影的取景地。天门山的玻璃栈道惊险刺激，金鞭溪的溪水清澈见底。乘坐缆车穿梭在云雾缭绕的山峰间，仿佛置身于仙境之中。这里不仅有壮美的自然风光，还有土家族的民俗文化值得深度体验。",
        avatar: "https://dummyimage.com/80x80/FFA07A/ffffff.png&text=湘哥",
        nickname: "湖南湘哥", 
        like: 2756
    },
];