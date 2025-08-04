import { create } from "zustand";
import { login, getUser } from "@/api/user";

export const useUserStore = create((set,get) => ({
    user: null,
    isLogin: false,
    login: async ({username="", password=""}) => {
        const data = await login({ username, password })
        if(data.code == 200)
        {
            const { token, data: user } = data;
            localStorage.setItem('token', token);
            set({
                user,
                isLogin: true,
            })
        }
        return data.code;
    },
    checkAuth: async () => {
        const token = localStorage.getItem('token');
        const { user } = get();
        
        // 无token情况
        if (!token) {
            set({ user: null, isLogin: false });
            return false;
        }
        
        // 有token且有user情况
        if (user) {
            set({ isLogin: true });
            return true;
        }
        
        // 有token但无user情况
        try {
            const res = await getUser();
            if (res.code === 200) {
                set({ user: res.data, isLogin: true });
                return true;
            } else {
                localStorage.removeItem('token');
                set({ user: null, isLogin: false });
                return false;
            }
        } catch (error) {
            // 可能出现网络错误，直接让token失效，重新登录
            localStorage.removeItem('token');
            set({ user: null, isLogin: false });
            return false;
        }
    }
}))