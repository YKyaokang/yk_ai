import { create } from 'zustand'
import { getArticles } from '@/api/getArticles'
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
        like: 1856
    },
    {
        id: "article-init-1",
        image: 玉溪,
        location: "云南·丽江古城",
        description: "丽江古城是中国保存最完整的古城之一，纳西族文化在这里得到完美体现。青石板路蜿蜒曲折，小桥流水人家的景象随处可见。夜晚时分，古城灯火辉煌，酒吧街热闹非凡。在这里可以体验到浓郁的民族风情，品尝地道的纳西美食，感受慢节奏的生活方式。",
        avatar: "https://dummyimage.com/80x80/4ECDC4/ffffff.png&text=阿明",
        nickname: "云南阿明",
        like: 2341
    },
    {
        id: "article-init-2", 
        image: 景德镇,
        location: "四川·九寨沟",
        description: "九寨沟被誉为，拥有绝美的自然风光。清澈见底的湖泊呈现出不同层次的蓝绿色彩，瀑布飞流直下，森林层林尽染。最佳游览时间是秋季，满山红叶与碧绿湖水形成强烈对比。这里的每一个景点都如诗如画，让人流连忘返，是摄影爱好者的天堂。",
        avatar: "https://dummyimage.com/80x80/45B7D1/ffffff.png&text=川妹",
        nickname: "四川川妹",
        like: 3128
    },
    {
        id: "article-init-3",
        image: 沙滩,
        location: "湖南·张家界",
        description: "张家界以其独特的石柱峰林地貌闻名于世，是《阿凡达》电影的取景地。天门山的玻璃栈道惊险刺激，金鞭溪的溪水清澈见底。乘坐缆车穿梭在云雾缭绕的山峰间，仿佛置身于仙境之中。这里不仅有壮美的自然风光，还有土家族的民俗文化值得深度体验。",
        avatar: "https://dummyimage.com/80x80/FFA07A/ffffff.png&text=湘哥",
        nickname: "湖南湘哥", 
        like: 2756
    },
    {
        id: "article-init-4",
        image: 福州,
        location: "湖南·张家界",
        description: "张家界以其独特的石柱峰林地貌闻名于世，是《阿凡达》电影的取景地。天门山的玻璃栈道惊险刺激，金鞭溪的溪水清澈见底。乘坐缆车穿梭在云雾缭绕的山峰间，仿佛置身于仙境之中。这里不仅有壮美的自然风光，还有土家族的民俗文化值得深度体验。",
        avatar: "https://dummyimage.com/80x80/FFA07A/ffffff.png&text=湘哥",
        nickname: "湖南湘哥", 
        like: 2756
    },
    {
        id: "article-init-5",
        image: 抚州,
        location: "湖南·张家界",
        description: "张家界以其独特的石柱峰林地貌闻名于世，是《阿凡达》电影的取景地。天门山的玻璃栈道惊险刺激，金鞭溪的溪水清澈见底。乘坐缆车穿梭在云雾缭绕的山峰间，仿佛置身于仙境之中。这里不仅有壮美的自然风光，还有土家族的民俗文化值得深度体验。",
        avatar: "https://dummyimage.com/80x80/FFA07A/ffffff.png&text=湘哥",
        nickname: "湖南湘哥", 
        like: 2756
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
        location: "湖南·张家界",
        description: "张家界以其独特的石柱峰林地貌闻名于世，是《阿凡达》电影的取景地。天门山的玻璃栈道惊险刺激，金鞭溪的溪水清澈见底。乘坐缆车穿梭在云雾缭绕的山峰间，仿佛置身于仙境之中。这里不仅有壮美的自然风光，还有土家族的民俗文化值得深度体验。",
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

export const useArticlesStore = create((set, get) => ({
    articles: initialArticles,
    page: 1,
    loading: false,
    fetchArticles: async () => {
        // 如果还在请求中，不再发起新的请求
        if (get().loading) return;
        set({loading: true}); // 请求中
        try {
            const res = await getArticles(get().page)
            console.log('Articles API Response:///', res);
            
            // 根据mock API的返回结构：res.data.data.list
            const newArticles = res.data?.list || [];
            console.log('newArticles:', newArticles)
            set((state) => ({
                articles: [...state.articles, ...newArticles],
                page: state.page + 1,
                loading: false
            }))
        } catch (error) {
            console.error('获取攻略文章数据失败:', error);
            set({ loading: false });
        }
    }
}))
