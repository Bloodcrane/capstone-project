import HomePage from "./Pages/Home"
import AdminPage from "./Pages/Admin"
import Unauthorized from "./Pages/Unauthorized"

const routers = [
    {
        element: <HomePage/>,
        path: '/',
        exact: true
    },
    {
        element: <AdminPage/>,
        path: '/login'
    },
    {
        element: <Unauthorized/>,
        path: '/unauthorized'
    }
]

export default routers
