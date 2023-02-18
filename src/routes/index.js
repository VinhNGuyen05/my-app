import Product1 from "../features/Product1";
import Product2 from "../features/Product2";
import Student from "../features/Student";

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