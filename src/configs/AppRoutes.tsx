import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Shop from "../components/pages/Shop";
import PurchaseOrder from "../components/pages/PurchaseOrder";
import Management from "../components/pages/Management";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/shop' element={<Shop></Shop>}></Route>
            <Route path='/purchaseOrder' element={<PurchaseOrder></PurchaseOrder>}></Route>
            <Route path='/management' element={<Management></Management>}></Route>
        </Routes>
    )
}


export default AppRoutes