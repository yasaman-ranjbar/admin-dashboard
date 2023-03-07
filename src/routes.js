import Home from "./pages/home/Home"
import UserList from "./pages/users/UserList";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import Product from "./pages/products/Product";

const routes = [
    {path: "/" , element: <Home />},
    {path: "/users" , element: <UserList />},
    {path: "/new-user" , element: <NewUser />},
    {path: "/products" , element: <Products /> },
    {path: "/product/:id" , element: <Product /> },
]

export default routes;