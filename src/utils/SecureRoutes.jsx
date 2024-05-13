import { Outlet, Navigate } from 'react-router-dom'

const SecureRoutes = () => {
    let auth = {'token':false}
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default SecureRoutes