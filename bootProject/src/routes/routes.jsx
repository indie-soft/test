import { Route, createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import View from '../view';
import AboutUs from '../AboutUs';
import Contactus from '../Contactus';
import Products from "../Products";
import Home from "../Home";
import NotFound from "../NotFound";

 const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<View />}>
            <Route index element={<Home />} />

            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<Contactus />} />

            <Route path="products" element={<Products/>}>
            <Route path="/products/:d" element={<Products/>} />
         </Route>
         
            <Route path="*" element={<NotFound/>} />
            </Route>
    )
)


export default routes