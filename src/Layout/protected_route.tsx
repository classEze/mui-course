import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function protected_route() {
    if(!localStorage.getItem("token")){
        return (
            <Navigate to="/" />
        )
    }
    else {
        return <Outlet />
    }
}

export default protected_route