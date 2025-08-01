import { create } from 'zustand'

// 用户状态管理
export const useUserStore = create((set, get) => ({
  // 用户信息
  userInfo: {
    id: null,
    username: '',
    avatar: '',
    phone: '',
    location: '南昌', // 默认城市
  },
  
  // 是否登录
  isLogin: false,
  
  // 设置用户信息
  setUserInfo: (userInfo) => set({ userInfo, isLogin: true }),
  
  // 退出登录
  logout: () => set({ 
    userInfo: {
      id: null,
      username: '',
      avatar: '',
      phone: '',
      location: '南昌',
    }, 
    isLogin: false 
  }),
  
  // 更新城市
  updateLocation: (location) => set((state) => ({
    userInfo: { ...state.userInfo, location }
  })),
}))

// 应用状态管理
export const useAppStore = create((set, get) => ({
  // 加载状态
  loading: false,
  
  // 网络状态
  online: navigator.onLine,
  
  // 当前页面标题
  pageTitle: '去哪儿旅行',
  
  // 设置加载状态
  setLoading: (loading) => set({ loading }),
  
  // 设置网络状态
  setOnline: (online) => set({ online }),
  
  // 设置页面标题
  setPageTitle: (pageTitle) => set({ pageTitle }),
}))

// 搜索状态管理
export const useSearchStore = create((set, get) => ({
  // 搜索历史
  searchHistory: JSON.parse(localStorage.getItem('searchHistory') || '[]'),
  
  // 热门搜索
  hotSearches: [
    '三亚',
    '北京',
    '上海',
    '成都',
    '西安',
    '杭州',
    '厦门',
    '青岛'
  ],
  
  // 添加搜索历史
  addSearchHistory: (keyword) => {
    const { searchHistory } = get()
    const newHistory = [keyword, ...searchHistory.filter(item => item !== keyword)].slice(0, 10)
    localStorage.setItem('searchHistory', JSON.stringify(newHistory))
    set({ searchHistory: newHistory })
  },
  
  // 清空搜索历史
  clearSearchHistory: () => {
    localStorage.removeItem('searchHistory')
    set({ searchHistory: [] })
  },
}))