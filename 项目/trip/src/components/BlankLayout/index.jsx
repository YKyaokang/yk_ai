import {
    Outlet
} from "react-router-dom";



const BlankLayout = () => {
    
    const title = location.pathname
    return (
        
        <>            
            <Outlet />
        </>
    )
}
export default BlankLayout;
