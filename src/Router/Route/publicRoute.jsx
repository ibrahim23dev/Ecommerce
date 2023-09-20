import { lazy } from "react";

const Login = lazy(() => import('../../views/auth/login'));
const Register = lazy(() => import('../../views/auth/register'));
const AdminLogin = lazy(() => import('../../views/auth/adminLogin'));

const PublicRoute = [
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/adminlog',
        element: <AdminLogin/>
    }
]

export default PublicRoute;