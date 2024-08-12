import { NavLink } from "react-router-dom";
// import ShoppingCartIcon from 'remixicon-react/ShoppingCartLineIcon'
import '../../styles/styles.css'
// import ButtonHeaderWidget from "../widget/buttonHeader.widget";


import React from "react";
import HeaderComponentSearch from "../widget/headerComponentSearch";
import {
    Menu,
    Close
} from "@mui/icons-material";
import { useSpring, animated } from 'react-spring';
import { ICategory, sampleCategories } from "../../types/category";
import boxCategory from "../widget/boxCategory.widget";


const Navbar: React.FC = () => {
    const [showCate, setShowCate] = React.useState(false)
    const springProps = useSpring({
        opacity: showCate ? 1 : 0,
        transform: showCate ? 'translateY(0)' : 'translateY(60px)',
    });

    return (
        <nav className=" bg-white sticky top-0 z-10">
            <div className="flex mx-auto px-20 py-4 justify-between items-center">
                <div className="flex justify-between gap-4">
                    <div className="flex-shrink-0 flex items-center">
                        <NavLink to="/">
                            <img className="h-8 w-auto" src="\src\assets\image\logo_header.png" alt="Logo" />
                        </NavLink>
                    </div>

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
                            className="text-title-nav hover:underline hover:text-black hover:bg-gray-100 transition-all duration-800 px-3 py-2 rounded-md font-medium">
                            Đơn mua
                        </NavLink>
                    </div>
                </div>
                <HeaderComponentSearch></HeaderComponentSearch>
            </div>
            <div className="flex px-0 py-0  items-center flex-col ">
                {/* <HeaderBottom></HeaderBottom> */}
                <div className="flex items-center justify-between w-screen px-20">
                    {
                        !showCate ? <div className="pl-4 flex gap-2 items-center bg-button-primary hover:opacity-40 duration-200 ease-linear rounded-xl">
                            <div className="flex gap-2 items-center">
                                <Menu className="text-black "></Menu>
                                <input
                                    onClick={() => {
                                        setShowCate(!showCate)
                                    }}
                                    className="text-black pr-4 pt-4 pb-4 hover:cursor-pointer"
                                    type="button"
                                    value="Danh mục sản phẩm" />
                            </div>
                        </div>
                            :
                            <div className="pl-4 flex gap-2 items-center bg-primary-grey hover:opacity-40 duration-200 ease-linear rounded-xl">
                                <div className="flex gap-2 items-center">
                                    <Close className="text-black "></Close>
                                    <input
                                        onClick={() => {
                                            setShowCate(!showCate)
                                        }}
                                        className="text-black pr-4 pt-4 pb-4 hover:cursor-pointer"
                                        type="button"
                                        value="Đóng" />
                                </div>
                            </div>
                    }

                    <div className="flex gap-6">
                        <div>
                            <input className="font-bold underline  hover:text-black hover:bg-gray-100 transition-all duration-800 ease-linear hover:cursor-pointer px-4 py-3 rounded-2xl" type="button" value="Đăng nhập" />
                        </div>
                        <div>
                            <input className="font-bold underline  hover:text-black hover:bg-gray-100 transition-all duration-800 ease-linear hover:cursor-pointer px-4 py-3 rounded-2xl" type="button" value="Đăng kí" />
                        </div>
                    </div>
                </div>

                {

                    showCate && (
                        <div className="bg-black w-screen h-screen bg-opacity-40 mt-2">
                            <animated.div style={springProps} >
                                <div className="bg-white absolute left-20 mt-4 w-80 p-4 rounded-3xl">
                                    {
                                        sampleCategories.map((category: ICategory, index) => (
                                            <div key={index}>
                                                {boxCategory(category)}
                                            </div>
                                        ))
                                    }
                                </div>
                            </animated.div >
                        </div>
                    )
                }

            </div>
        </nav>
    )
}


export default Navbar