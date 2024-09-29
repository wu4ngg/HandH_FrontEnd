import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Shop from "../components/pages/Shop";
import PurchaseOrder from "../components/pages/PurchaseOrder";
import Management from "../components/pages/Management";
import Product from "../components/pages/Product";
import AdminLayout from "../components/pages/admin/Layout";
import PurchaseLayout from "../components/pages/purchase/PurchaseLayout";
import PurchaseReview from "../components/pages/purchase/PurchaseReview";
import PurchaseChoose from "../components/pages/purchase/PurchaseChoose";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/shop' element={<Shop></Shop>}></Route>
            <Route path='/purchaseOrder' element={<PurchaseOrder></PurchaseOrder>}></Route>
            <Route path='/management' element={<Management></Management>}></Route>
            <Route path='/product/:id/:name' element={<Product></Product>}></Route>
            <Route path='/admin' element={<AdminLayout></AdminLayout>}>
                <Route path="/admin/"></Route>
            </Route>
            <Route path="/payment" element={<PurchaseLayout/>}>
                <Route path="/payment/" element={<PurchaseReview/>}/>
                <Route path="/payment/choose" element={<PurchaseChoose/>}/>
                <Route path="/payment/process" element={<PurchaseChoose/>}/>
                <Route path="/payment/status" element={<PurchaseChoose/>}/>
            </Route>
        </Routes>
    )
}


export default AppRoutes