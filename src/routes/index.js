import Product1 from "../pages/Product1";
import Product2 from "../pages/Product2";
import Student from "../pages/Student";

const publicRoutes = [
    {
        path: "/", 
        component: Product1
    }, {
        path: "/product",
        component: Product2
    }, {
        path: "/student",
        component: Student
    }
]

const privateRoutes = []

export {publicRoutes, privateRoutes}