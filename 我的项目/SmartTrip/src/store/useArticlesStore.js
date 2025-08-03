import { create } from 'zustand'
import { getArticles } from '@/api/getArticles'
import { initialArticles } from './initialArticles'

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
