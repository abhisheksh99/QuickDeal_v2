import { Outlet,Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const AdminRoute = () => {
    const { userInfo } = useSelector(state => state.auth)

 return userInfo && userInfo.isAdmin ? <Outlet /> : <Navigate to="/login"  replace/> // replace is added to replace any past history
}

export default AdminRoute
