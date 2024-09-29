import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/styles.css";

import React, { useEffect, useRef } from "react";
import HeaderComponentSearch from "../widget/headerComponentSearch";
import { Menu, Close } from "@mui/icons-material";
import { useSpring, animated, useTransition } from "react-spring";
import { ICategory, sampleCategories } from "../../types/category";
import boxCategory from "../widget/boxCategory.widget";
import PopupComponent from "../widget/popUpComponent";
import PopupRegister from "../widget/popUpRegister";
import PopupAdmin from "../widget/popUpAdmin";
import PopupMessage from "../widget/popUpMessage";
// import { duration } from "@mui/material";

const Navbar: React.FC = () => {

  const navigate = useNavigate()
  const [showCate, setShowCate] = React.useState(false);
  const transitions = useTransition(showCate, {
    from: { y: -16, opacity: 0, backgroundColor: "rgba(0, 0, 0, 0)" },
    enter: { y: 0, opacity: 1, backgroundColor: "rgba(0, 0, 0, 0.55)" },
    leave: { y: -16, opacity: 0, backgroundColor: "rgba(0, 0, 0, 0)" },
    config: {
      tension: 120,
      friction: 14,
    },
  });


  const [login, setLogin] = React.useState(false);
  const [register, setRegister] = React.useState(false);
  const[admin,setAdmin]=React.useState(false);
  const[message,setMessage]=React.useState(false);

  function handleChange() {
    setLogin(false);
  }
  function handleChangeRe() {
    setRegister(false);
  }
  function handleChangeAd(){
    setAdmin(false);
  }

  function handleChangeMess(){
    setMessage(false);
  }

  function switchToRegister() {
    setLogin(false);
    setRegister(true); 
  }

  function switchToLogin(){
    setLogin(true);
    setRegister(false);
  }




  return (
    <nav id="nav-main" className=" bg-white fixed w-full top-0 z-10 rounded-b-3xl shadow-md">
      <div className="flex mx-auto px-20 py-4 justify-between items-center">
        <div className="flex justify-start gap-4">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/">
              <img
                className="h-8 w-auto"
                src="\src\assets\image\logo_header.png"
                alt="Logo"
              />
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
      </div>
      <div className="flex px-0 py-0 pb-3  items-center flex-col ">
        {/* <HeaderBottom></HeaderBottom> */}
        <div className="flex items-center justify-between w-full px-20 pb-4 rounded-b-2xl">
          {!showCate ? (
            <div className="pl-4 flex gap-2 items-center bg-button-primary hover:opacity-40 duration-200 ease-linear rounded-xl">
              <div
                onClick={() => {
                  setShowCate(!showCate);
                }}
                className="flex gap-2 items-center"
              >
                <Menu className="text-black "></Menu>
                <input
                  onClick={() => {
                    setShowCate(!showCate);
                  }}
                  className="text-black pr-4 pt-4 pb-4 hover:cursor-pointer"
                  type="button"
                  value="Danh mục sản phẩm"
                />
              </div>
            </div>
          ) : (
            <div className="pl-4 flex gap-2 items-center bg-primary-grey hover:opacity-40 duration-200 ease-linear rounded-xl">
              <div
                onClick={() => {
                  setShowCate(!showCate);
                }}
                className="flex gap-2 items-center"
              >
                <Close className="text-black "></Close>
                <input
                  onClick={() => {
                    setShowCate(!showCate);
                  }}
                  className="text-black pr-4 pt-4 pb-4 hover:cursor-pointer"
                  type="button"
                  value="Đóng"
                />
              </div>
            </div>
          )}

          <div className="flex gap-6">
            <div>
              <input
                onClick={() => setLogin(!login)}
                className="font-bold underline  hover:text-black hover:bg-gray-100 transition-all duration-800 ease-linear hover:cursor-pointer px-4 py-3 rounded-2xl"
                type="button"
                value="Đăng nhập"
              />
            </div>
            <div>
              <input
                onClick={() => setRegister(!register)}
                className="font-bold underline  hover:text-black hover:bg-gray-100 transition-all duration-800 ease-linear hover:cursor-pointer px-4 py-3 rounded-2xl"
                type="button"
                value="Đăng kí"
              />
              {/* <input
                className="font-bold underline  hover:text-black hover:bg-gray-100 transition-all duration-800 ease-linear hover:cursor-pointer px-4 py-3 rounded-2xl"
                type="button"
                value="Admin"

              onClick={()=> setAdmin(!admin)}
              /> */}
            </div>
          </div>
        </div>
      </div>
      {login && (
        <PopupComponent handleChange={handleChange} switchToRegister={switchToRegister}></PopupComponent>
      )}
      {register && (<PopupRegister handleChange={handleChangeRe} switchToLogin={switchToLogin} ></PopupRegister>)}
      {admin&&(<PopupAdmin handleChangeAd={handleChangeAd} ></PopupAdmin>)}
      {transitions(
        (style, isOpen) =>
          isOpen && (
            <animated.div
              style={{ backgroundColor: style.backgroundColor }}
              className="w-screen h-screen fixed bg-opacity-40 mt-[0px] z-0"
            >
              {transitions((style1, isOpen) => (
                <animated.div style={{ y: style.y, opacity: style.opacity }}>
                  <div className="bg-white absolute left-20 mt-4 w-80 p-4 rounded-3xl">
                    {sampleCategories.map((category: ICategory, index) => (
                      <div key={index}>{boxCategory(category)}</div>
                    ))}
                  </div>
                </animated.div>
              ))}
            </animated.div>
          )
      )}
    </nav>
  );
};

export default Navbar;
