import { create } from "zustand";
import { login, getUser } from "@/api/user";

export const useUserStore = create((set) => ({
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
    getUser: async () => {
        const data = await getUser();
        return data;
    }
}))