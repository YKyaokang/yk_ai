import { useUserStore } from "@/store/useUserStore";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "@/components/Loading";
const Protect = ({ children }) => {
    const { checkAuth } = useUserStore();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const handleAuth = async () => {
            const res = await checkAuth();
            if(!res)
            {
                // 跳转到登录页时，传递当前页面信息
                navigate("/login", { 
                    state: { from: location },
                    replace: true 
                });
            }
            setLoading(false);
        }
        handleAuth();
    }, []);

    if(loading)
    {
        return (<Loading />);
    }

    return children;
}

export default Protect;