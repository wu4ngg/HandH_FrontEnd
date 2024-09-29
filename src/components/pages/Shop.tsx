import React from "react";
import '../../styles/shop.css'

import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import { convertMoney } from "../../utils";
// import { useSpring, animated, useTransition , config } from "react-spring";
import SizeWidget from "../widget/sizeWidget";
import { useSpring, animated, useTransition } from "react-spring";
import ColorChip from "../widget/colorChip";
import ProductComponentShop from "../widget/productComponentShop";
import { TypeFilterPice, TypeObjPrice } from "../../types/some.type";
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
    onClick?: (size: string, id: number, checked: boolean) => void
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
            type: "XL",
            isPick: false,
            isMore: true
        }
    ]

    const [listFilter, setListFilter] = React.useState<PriceFilter[]>(dataFilter)


    const [priceFilter, setPriceFilter] = React.useState<TypeFilterPice>({
        priceFilter: 0,
        isHigher: false
    })
    const handlePickPrice = (id: number) => {
        const updateFilter = listFilter.map((item) => item.id === id ? { ...item, isCheck: true } : { ...item, isCheck: false })
        setListFilter(updateFilter)

        setPriceFilter({
            priceFilter: listFilter[id - 1].price,
            isHigher: listFilter[id - 1].isHigher
        })
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

    const [lowSpecificPrice, setLowPrice] = React.useState<number>(0)
    const [highSpecificPrice, setHighPrice] = React.useState<number>(0)

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



    const [objPrice, setObjPrice] = React.useState<TypeObjPrice>({
        lowPrice: 0,
        highPrice: 0
    })


    const [isLowHigh, setIsLowHigh] = React.useState<number>(3)


    enum PriceOrder {
        LowToHigh = 1,
        HighToLow = 2,
        Random = 3,
    }


    const [arrSize, setArrSize] = React.useState<string[]>([])
    const [pickerColor, setPickerColor] = React.useState<string>('')
    return (
        <>
            <div className="shop px-20 w-screen">
                <div className="wrap-shop justify-between flex">

                    {
                        !showNav ? <div className="showbutton-fillter fixed z-10 left-2 mt-3">
                            <button className="rounded-lg" onClick={handleShow}>
                                <ZoomOutMapIcon></ZoomOutMapIcon>
                            </button>
                        </div> : <></>
                    }

                    <div className="shop-filter flex mt-2 w-full mb-2 top-16"
                        style={{
                            display: showNav ? "flex" : "none"
                        }}
                    // style={{
                    //     flex: showNav ? 1 : 0
                    // }}
                    >
                        <div className="shop-filter_wrap fixed flex top-100 flex-col w-[22%] gap-2 ">
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
                                        <div className="divider w-[80%] h-1 bg-black rounded-xl"></div>
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
                                                {
                                                    listFilter.map((price) => (
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
                                                    ))
                                                }
                                            </div>

                                            <div className="wrap-filter_price flex flex-col">
                                                <div className="child-title text-[1.4rem] font-bold">
                                                    <p>Giá cụ thể</p>
                                                </div>
                                                <div className="specific-price flex gap-2 items-center flex-wrap">
                                                    <input className="input-specific bg-slate-300 rounded-3xl
         pl-4 pr-4 py-2 w-[25%] duration-200 ease-in
          outline-none  focus:border-none " type="text" name="" placeholder="0"
                                                        onChange={(e: any) => {
                                                            setLowPrice(e.target.value)
                                                        }} id="" />
                                                    <div className="flash">-</div>
                                                    <input className="input-specific bg-slate-300 rounded-3xl
         pl-4 pr-4 py-2 w-[25%] duration-200 ease-in
           outline-none focus:border-none " type="text" name=""
                                                        onChange={(e: any) => {
                                                            setHighPrice(e.target.value)
                                                        }}
                                                        placeholder="99999" id="" />
                                                    <button className="w-20" onClick={() => {
                                                        setObjPrice({
                                                            lowPrice: lowSpecificPrice,
                                                            highPrice: highSpecificPrice
                                                        })
                                                    }}>Lọc</button>
                                                </div>

                                            </div>


                                            <div className="arrange flex gap-2 flex-col">
                                                <div className="child-title text-[1.4rem] font-bold">
                                                    <p>Xắp xếp</p>
                                                </div>

                                                <div className="rank-price">
                                                    <select
                                                        className="bg-slate-300 px-2 py-2 rounded-md outline-none"
                                                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                                            setIsLowHigh(parseInt(e.target.value) as PriceOrder);
                                                        }}
                                                        value={isLowHigh}
                                                    >
                                                        <option value={PriceOrder.LowToHigh}>Giá thấp đến cao</option>
                                                        <option value={PriceOrder.HighToLow}>Giá cao đến thấp</option>
                                                        {/* <option value={PriceOrder.Random}>Ngẫu nhiên</option> */}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="child-title text-[1.4rem] font-bold">
                                                <p>Cỡ</p>
                                            </div>

                                            <div className="list-size flex flex-wrap w-[50%] gap-2">
                                                {listSize.map((size) => (
                                                    <SizeWidget
                                                        onClick={(size, id, checked) => {
                                                            if (checked) {
                                                                setArrSize(arrItem => [...arrItem, size])
                                                            }
                                                            else {
                                                                var newSizes = arrSize.filter((e) => {
                                                                    return e !== size
                                                                })
                                                                setArrSize(newSizes)
                                                            }

                                                        }}
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
                                                            setPickerColor(e.color)
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

                    <div className="shop-product h-screen">
                        <ProductComponentShop
                            highLowPrice={objPrice}
                            size={arrSize}
                            color={pickerColor}
                            LowToHigh={isLowHigh}
                            priceFilter={priceFilter}
                        ></ProductComponentShop>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop