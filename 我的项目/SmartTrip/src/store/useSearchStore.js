// search 全局共享状态
import {
    create
} from 'zustand'
import { getHostList } from '../api/getHostList'
import { getSearchList } from '../api/getSearchList'

const useSearchStore = create((set , get) => {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    return {
        searchHistory,
        loading:false,
        suggestList: [],  
        hotList: [], 
        getSearchList: async (keyword) => {
            set({loading:true})
            const res = await getSearchList(keyword)
            set({suggestList:res.data})
            set({loading:false})
        },
        getHostList: async () => {
            const res = await getHostList()
            set({hotList:res.data})
        },
        updateSearchHistory: (keyword)  => {
            const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
            const data = {id:searchHistory.length + 1,keyword:keyword}
            const newHistory = [data,...searchHistory];
            localStorage.setItem('searchHistory',JSON.stringify(newHistory))
            set({searchHistory:newHistory})
        },
        clearSearchHistory: () => {
            localStorage.removeItem('searchHistory')
            set({searchHistory:[]})
        },
        setSuggestList: async (keyword) => {
            console.log("获取搜索建议")
        },
    }
})

export default useSearchStore