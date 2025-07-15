import {
    Navigate,
    useLocation
} from "react-router-dom";


// 鉴权组件
const ProtectRoute =(props) => {
    const { children } = props;
    const {pathname} = useLocation(); // 获取当前路径
    const isLogin = localStorage.getItem('isLogin') === 'true';

    console.log(isLogin);
    if(!isLogin) {
        return <Navigate to="/login" state={{from:pathname}}/>
    }
    return (
        <>
            {children}
        </>
    )
}

export default ProtectRoute