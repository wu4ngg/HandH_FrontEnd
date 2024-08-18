import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Shop from "../components/pages/Shop";
import PurchaseOrder from "../components/pages/PurchaseOrder";
import Management from "../components/pages/Management";
import { Account } from "../components/widget/Account";
import { ManagerAccount } from "../components/pages/ManagerAccount";
import { PaymentHistory } from "../components/widget/PaymentHistory";
import { FavoriteProduct } from "../components/widget/FavoriteProduct";
import AllHis from "../components/cpn_history/AllHis";
import PreparingOrder from "../components/cpn_history/PreparingOrder";
import WaitingForPayment from "../components/cpn_history/WaitingForPayment";
import Delivering from "../components/cpn_history/Delivering";
import Delivered from "../components/cpn_history/Delivered";
import Received from "../components/cpn_history/Received";
import Canceled from "../components/cpn_history/Canceled";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/shop' element={<Shop></Shop>}></Route>
            <Route path='/purchaseOrder' element={<PurchaseOrder></PurchaseOrder>}></Route>
            <Route path='/management' element={<Management></Management>}></Route>
            <Route path="/managerAccount" element={<ManagerAccount></ManagerAccount>}>
                <Route index element={<Account />} />
                <Route path="account" element={<Account></Account>} />
                <Route path="paymentHistory" element={<PaymentHistory/>}>
                    <Route index element={<AllHis />} />
                    <Route path='allHis' element={<AllHis />} />
                    <Route path='preparingOrder' element={<PreparingOrder />} />
                    <Route path='waitingForPayment' element={<WaitingForPayment />} />
                    <Route path='delivering' element={<Delivering />} />
                    <Route path='delivered' element={<Delivered />} />
                    <Route path='received' element={<Received />} />
                    <Route path='canceled' element={<Canceled />} />
                </Route>
                <Route path="favoriteProduct" element={<FavoriteProduct></FavoriteProduct>} />
            </Route>

        </Routes>
    )
}


export default AppRoutes