import HomePage from "./Pages/Home"
import AdminPage from "./Pages/Admin"
import LoginPage from "./Pages/Login"

const routers = [
    {
        element: <HomePage/>,
        path: '/',
        exact: true
    },
    {
        element: <AdminPage/>,
        path: '/admin'
    },
    {
        element: <LoginPage/>,
        path: '/login'
    }
]

export default routers
