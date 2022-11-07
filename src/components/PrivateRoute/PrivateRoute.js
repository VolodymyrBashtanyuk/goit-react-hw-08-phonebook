import { Outlet, Navigate } from "react-router-dom";
import { getLoggedIn } from "redux/selectors";
import { useSelector } from "react-redux";


export const PrivateRoute = () => {
    const loggedIn = useSelector(getLoggedIn);

    if (!loggedIn) {
    return <Navigate to='/login'/>
}
    
    return (
       <Outlet/>
    )
}