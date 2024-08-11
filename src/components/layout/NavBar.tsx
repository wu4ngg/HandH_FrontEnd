import { NavLink } from "react-router-dom";
// import ShoppingCartIcon from 'remixicon-react/ShoppingCartLineIcon'
import '../../styles/styles.css'
// import ButtonHeaderWidget from "../widget/buttonHeader.widget";


import React from "react";
import HeaderComponentSearch from "../widget/headerComponentSearch";
import {
    Menu
} from "@mui/icons-material";

const Navbar: React.FC = () => {
    const [showCate, setShowCate] = React.useState(false)
    return (
        <nav className=" bg-white sticky top-0">
            <div className="flex mx-auto px-20 py-4 justify-between items-center">
                <div className="flex justify-start gap-4">
                    {/* shrink có tác dụng khi thu nhỏ trình duyệt các phần tử co lại bằng nhau */}
                    <div className="flex-shrink-0 flex items-center">
                        <NavLink to="/">
                            <img className="h-8 w-auto" src="\src\assets\image\logo_header.png" alt="Logo" />
                        </NavLink>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex space-x-4">
                            <NavLink
                                to="/"
                                className="text-title-nav hover:underline  hover:text-black hover:bg-gray-100 transition-all duration-800 px-3 py-2 rounded-md font-medium"
                            >
                                Trang chủ
                            </NavLink>
                            <NavLink
                                to="/shop"
                                className="text-title-nav hover:underline hover:text-black hover:bg-gray-100 transition-all duration-800 px-3 py-2 rounded-md font-medium"
                            >
                                Cửa Hàng
                            </NavLink>
                            <NavLink
                                to="/purchaseOrder"
                                className="text-title-nav hover:underline hover:text-black hover:bg-gray-100 transition-all duration-800 px-3 py-2 rounded-md font-medium"
                            >
                                Đơn mua
                            </NavLink>
                        </div>
                    </div>
                </div>

                <HeaderComponentSearch></HeaderComponentSearch>

                {/* <ButtonHeaderWidget></ButtonHeaderWidget> */}
            </div>
            <div className="flex px-0 py-0  items-center flex-col ">
                {/* <HeaderBottom></HeaderBottom> */}
                <div className="flex items-center justify-between w-screen px-20">
                    <div className="pl-4 flex gap-2 items-center bg-button-primary hover:opacity-40 duration-200 ease-linear rounded-xl">
                        <Menu className="text-black "></Menu>
                        <input
                            onClick={() => {
                                setShowCate(!showCate)
                            }}
                            className="text-black pr-4 pt-4 pb-4 hover:cursor-pointer"
                            type="button"
                            value="Danh mục sản phẩm" />
                    </div>

                    <div>
                        <p className="text-black">Concac</p>
                    </div>
                </div>

                {
                    showCate && (<div>
                        <div className="bg-black w-screen h-screen opacity-20 mt-2">
                            <div className="bg-white">
                                <h1>test</h1>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </nav>
    )
}


export default Navbar