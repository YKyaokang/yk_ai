import { create } from 'zustand'
import { getRecommands } from '../api/getRecommands'

// 导入图片资源
import 南昌之星 from '@/assets/home-travel/南昌之星.png'
import 南昌梅岭 from '@/assets/home-travel/南昌梅岭.png'
import 九江庐山 from '@/assets/home-travel/九江庐山.png'
import 三清山 from '@/assets/home-travel/三清山.png'
import 婺源 from '@/assets/home-travel/婺源.png'
import 鹰潭方特 from '@/assets/home-travel/鹰潭方特.png'
import 八一馆 from '@/assets/home-travel/八一馆.png'

// 初始推荐数据
export const initialRecommands = [
    {
        id: "init-0",
        image: 南昌之星,
        title: "南昌之星摩天轮",
        location: "南昌·红谷滩区",
        price: 310,
        comments: 8563,
        score: 4.8,
        like: 2341
    },
    {
        id: "init-1", 
        image: 南昌梅岭,
        title: "南昌梅岭",
        location: "南昌·湾里区",
        price: 0,
        comments: 12456,
        score: 4.9,
        like: 5621
    },
    {
        id: "init-2",
        image: 九江庐山,
        title: "九江庐山",
        location: "九江·庐山市",
        price: 190,
        comments: 6789,
        score: 4.7,
        like: 1834
    },
    {
        id: "init-3",
        image: 三清山,
        title: "上饶三清山",
        location: "上饶·玉山县",
        price: 0,
        comments: 15623,
        score: 4.9,
        like: 8945
    },
    {
        id: "init-4",
        image: 婺源,
        title: "大觉山",
        location: "抚州·资溪县",
        price: 50,
        comments: 9876,
        score: 4.6,
        like: 3456
    },
    {
        id: "init-0",
        image: 鹰潭方特,
        title: "鹰潭方特",
        location: "鹰潭·余江区",
        price: 310,
        comments: 8563,
        score: 4.8,
        like: 2341
    },
    {
        id: "init-1", 
        image: 婺源,
        title: "婺源",
        location: "上饶·婺源县",
        price: 0,
        comments: 12456,
        score: 4.9,
        like: 5621
    },
    {
        id: "init-2",
        image: 八一馆,
        title: "八一起义纪念馆",
        location: "南昌·西湖区",
        price: 190,
        comments: 6789,
        score: 4.7,
        like: 1834
    },
    {
        id: "init-3",
        image: 三清山,
        title: "大觉山",
        location: "抚州·资溪县",
        price: 0,
        comments: 15623,
        score: 4.9,
        like: 8945
    },
    {
        id: "init-4",
        image: "https://dummyimage.com/310x440/5BC0DE/ffffff.png&text=丽江",
        title: "丽江古城",
        location: "云南·丽江市",
        price: 50,
        comments: 9876,
        score: 4.6,
        like: 3456
    }
];

export const useRecommandStore = create((set, get) => ({
    recommands: initialRecommands,
    page: 1,
    loading: false,
    fetchRecommands: async () => {
        // 如果还在请求中，不再发起新的请求
        if (get().loading) return;
        set({loading: true}); // 请求中
        try {
            const res = await getRecommands(get().page)
            console.log('API Response:///', res);
            
            // 根据mock API的返回结构：res.data.data.list
            const newRecommands = res.data?.list || [];
            console.log('newRecommands:', newRecommands)
            set((state) => ({
                recommands: [...state.recommands, ...newRecommands],
                page: state.page + 1,
                loading: false
            }))
        } catch (error) {
            console.error('获取推荐数据失败:', error);
            set({ loading: false });
        }
    }
}))