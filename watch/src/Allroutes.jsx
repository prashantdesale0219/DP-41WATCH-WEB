import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Navi from "./Navi";
import Discription from "./components/Discription";
import PrivateAuthentication from "./components/PrivateAuthentication";
import EditProduct from "./components/EditProduct";
import Loginpage from "./components/Loginpage";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Addproduct from "./components/Addproduct";
import Mainproduct from "./components/Mainproduct";
import Catlogue from "./components/Catlogue";


const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/navbar" element={<Navi />}></Route>
        <Route path="/description/:id" element={<Discription />}></Route>
        <Route path="/editProduct/:id" element={<PrivateAuthentication><EditProduct/></PrivateAuthentication>}></Route>
        <Route path="/catlogue" element={<Catlogue />}></Route>
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/product" element={<Product />}></Route>
        <Route path="/cartpage" element={<Cart />}></Route>
        <Route path="/addproduct" element={<PrivateAuthentication>  <Addproduct /> </PrivateAuthentication>}></Route>
        <Route path="/mainproduct" element={<Mainproduct />}></Route> 
      </Routes>
    </div>
  );
};

export default Allroutes
