import React from "react";
import '../../styles/shop.css'

import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import { convertMoney } from "../../utils";
// import { useSpring, animated, useTransition , config } from "react-spring";
import SizeWidget from "../widget/sizeWidget";
import { useSpring, animated, useTransition } from "react-spring";
import ColorChip from "../widget/colorChip";
type PriceFilter = {
    id: number,
    price: number,
    isHigher: boolean,
    isCheck: boolean
}

export type Size = {
    id: number,
    type: string,
    isPick: boolean,
    isMore: boolean
}

const Shop: React.FC = () => {

    const [colors, setColors] = React.useState([
        {
            tooltip: "Xanh dương",
            color: "#8DB4D2",
            enabled: true,
        },
        {
            tooltip: "Đen",
            color: "#000",
            enabled: false,
        },
        {
            tooltip: "Hồng",
            color: "#FFD1DC",
            enabled: false,
        },
    ]);

    const dataFilter: PriceFilter[] = [
        {
            id: 1,
            price: 500000,
            isHigher: true,
            isCheck: false
        },
        {
            id: 2,
            price: 1000000,
            isHigher: false,
            isCheck: false
        },
        {
            id: 3,
            price: 2000000,
            isHigher: false,
            isCheck: false
        },
        {
            id: 4,
            price: 2000000,
            isHigher: true,
            isCheck: false
        }
    ]

    const listSize: Size[] = [
        {
            id: 1,
            type: "S",
            isPick: false,
            isMore: false
        },
        {
            id: 2,
            type: "M",
            isPick: false,
            isMore: false
        },
        {
            id: 3,
            type: "L",
            isPick: false,
            isMore: false
        },
        {
            id: 4,
            type: "XL",
            isPick: false,
            isMore: false
        },
        {
            id: 5,
            type: "XXL",
            isPick: false,
            isMore: false
        },
        {
            id: 6,
            type: "XXL",
            isPick: false,
            isMore: false
        },
        {
            id: 7,
            type: "XL",
            isPick: false,
            isMore: true
        }
    ]

    const [listFilter, setListFilter] = React.useState<PriceFilter[]>(dataFilter)

    const handlePickPrice = (id: number) => {
        const updateFilter = listFilter.map((item) => item.id === id ? { ...item, isCheck: true } : { ...item, isCheck: false })
        console.log(updateFilter)
        setListFilter(updateFilter)
    }

    const [showNav, setShowNav] = React.useState(true)
    const handleShow = () => {
        setShowNav(!showNav)
    }

    function changeSelected(element: any, array: Array<any>, value: boolean) {
        return array.map((e) => {
            if (e == element) {
                return {
                    ...element,
                    enabled: value,
                };
            }
            return {
                ...e,
                enabled: false,
            };
        });
    }


    const transition = useTransition(showNav, {
        from: {
            width: '0%',
            opacity: 0
        },
        enter: {
            width: '100%',
            opacity: 1
        },
        leave: {
            width: '0%',
            opacity: 0
        },
        config: { tension: 120, friction: 14 },
    })

    return (
        <>
            <div className="shop px-20">
                <div className="wrap-shop flex gap-10 w-full">
                    <div className="shop-filter sticky top-16 w-full" style={{
                        flex: showNav ? 1 : 0
                    }}>
                        <div className="shop-filter_wrap flex flex-col gap-4 ">
                            <div className="filer-hide-btn 
                            gap-4 items-center 
                            flex hover:bg-slate-200 
                            w-fit px-3 py-2 cursor-pointer
                            rounded-md
                            duration-150
                            ease-in"
                                onClick={handleShow}>
                                <div className="filter-icon-zoom">
                                    {
                                        showNav ? <ZoomInMapIcon className=""></ZoomInMapIcon> : <ZoomOutMapIcon></ZoomOutMapIcon>
                                    }
                                </div>
                                <div className="fliter-icon-text">
                                    <p>{showNav ? "Ẩn" : "Hiện"}</p>
                                </div>
                            </div>

                            {
                                transition((styles, showNav) => showNav && (
                                    <animated.div style={styles} className="Sidebar">
                                        <div className="divider w-[60%] h-1 bg-black rounded-xl"></div>
                                        <div className="title-filter">
                                            <p className="text-[40px] font-bold">Bộ lọc</p>
                                        </div>
                                        <div className="fliter-body flex flex-col gap-2">
                                            <div className="new-product">
                                                <input type="checkbox" name="Hàng mới nhất" className="custom-checkbox" id="" />
                                                <p>Hàng mới nhất</p>
                                            </div>

                                            <div className="bestseller-product">
                                                <input type="checkbox" name="Bán chạy nhất" className="custom-checkbox" id="" />
                                                <p>Bán chạy nhất</p>
                                            </div>

                                            <div className="child-title text-[1.4rem] font-bold">
                                                <p>Giá</p>
                                            </div>

                                            <div className="list-available-price flex flex-wrap w-[50%] gap-2 ">
                                                {listFilter.map((price) => (
                                                    <div onClick={() => handlePickPrice(price.id)} key={price.id} className="price-child flex gap-1 px-2 py-1 w-fit bg-slate-300 hover:bg-white hover:outline cursor-pointer duration-200 rounded-md"

                                                        style={{ backgroundColor: price.isCheck ? "#fff" : "", borderWidth: 1 }}
                                                    >
                                                        <p>{price.isHigher ? "Trên" : "Dưới"}</p>
                                                        <span>{
                                                            (price.price / 1000) / 100 < 10 ?
                                                                + (price.price / 1000) + "k"
                                                                : (price.price / 1000000) + "tr"
                                                        }</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="child-title text-[1.4rem] font-bold">
                                                <p>Giá cụ thể</p>
                                            </div>
                                            <div className="specific-price flex gap-2 items-center">
                                                <input className="input-specific bg-slate-300 rounded-3xl
         pl-4 pr-4 py-2 w-[25%] duration-200 ease-in
          outline-none  focus:border-none " type="text" name="" placeholder="0" id="" />
                                                <div className="flash">-</div>
                                                <input className="input-specific bg-slate-300 rounded-3xl
         pl-4 pr-4 py-2 w-[25%] duration-200 ease-in
           outline-none focus:border-none " type="text" name="" placeholder="99999" id="" />
                                            </div>

                                            <div className="child-title text-[1.4rem] font-bold">
                                                <p>Xắp xếp</p>
                                            </div>

                                            <div className="rank-price">
                                                <select className="bg-slate-300 px-2 py-2 rounded-md outline-none ">
                                                    <option>Giá thấp đến cao</option>
                                                    <option>Giá cao đến thấp</option>
                                                </select>
                                            </div>

                                            <div className="child-title text-[1.4rem] font-bold">
                                                <p>Cỡ</p>
                                            </div>

                                            <div className="list-size flex flex-wrap w-[50%] gap-4">
                                                {listSize.map((size) => (
                                                    <SizeWidget
                                                        id={size.id}
                                                        isPick={size.isPick}
                                                        isMore={size.isMore}
                                                        type={size.type}
                                                    ></SizeWidget>
                                                ))}
                                            </div>

                                            <div className="child-title text-[1.4rem] font-bold">
                                                <p>Màu sắc</p>
                                            </div>

                                            <div className="pick-color flex gap-4">
                                                {colors.map((e: any) => (
                                                    <ColorChip
                                                        active={e.enabled}
                                                        color={e.color}
                                                        onClick={(selected) => {
                                                            setColors(() => changeSelected(e, colors, selected));
                                                        }}
                                                        tooltip={e.tooltip}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </animated.div>
                                ))
                            }

                        </div>

                    </div>
                    <div className="shop-product  h-screen w-full">
                        <h1>Product</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop