import React from "react";
import "../../styles/shop.css";

import ZoomInMapIcon from "@mui/icons-material/ZoomInMap";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { convertMoney } from "../../utils";
// import { useSpring, animated, useTransition , config } from "react-spring";
import SizeWidget from "../widget/sizeWidget";
import { useSpring, animated, useTransition } from "react-spring";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
type PriceFilter = {
  id: number;
  price: number;
  isHigher: boolean;
  isCheck: boolean;
};

export type Size = {
  id: number;
  type: string;
  isPick: boolean;
  isMore: boolean;
};

const Shop: React.FC = () => {
  const dataFilter: PriceFilter[] = [
    {
      id: 1,
      price: 500000,
      isHigher: true,
      isCheck: false,
    },
    {
      id: 2,
      price: 1000000,
      isHigher: false,
      isCheck: false,
    },
    {
      id: 3,
      price: 2000000,
      isHigher: false,
      isCheck: false,
    },
    {
      id: 4,
      price: 2000000,
      isHigher: true,
      isCheck: false,
    },
  ];

  const listSize: Size[] = [
    {
      id: 1,
      type: "S",
      isPick: false,
      isMore: false,
    },
    {
      id: 2,
      type: "M",
      isPick: false,
      isMore: false,
    },
    {
      id: 3,
      type: "L",
      isPick: false,
      isMore: false,
    },
    {
      id: 4,
      type: "XL",
      isPick: false,
      isMore: false,
    },
    {
      id: 5,
      type: "XXL",
      isPick: false,
      isMore: false,
    },
    {
      id: 6,
      type: "XXL",
      isPick: false,
      isMore: false,
    },
    {
      id: 7,
      type: "XL",
      isPick: false,
      isMore: true,
    },
  ];

  const [listFilter, setListFilter] = React.useState<PriceFilter[]>(dataFilter);

  const handlePickPrice = (id: number) => {
    const updateFilter = listFilter.map((item) =>
      item.id === id ? { ...item, isCheck: true } : { ...item, isCheck: false }
    );
    console.log(updateFilter);
    setListFilter(updateFilter);
  };

  const [showNav, setShowNav] = React.useState(true);
  const handleShow = () => {
    setShowNav(!showNav);
  };

  const transition = useTransition(showNav, {
    from: {
      width: "0%",
      opacity: 0,
    },
    enter: {
      width: "100%",
      opacity: 1,
    },
    leave: {
      width: "0%",
      opacity: 0,
    },
    config: { tension: 120, friction: 14 },
  });

  return (
    <>
      <div className="shop px-20">
        <div className="wrap-shop flex gap-10 w-full">
          <div
            className="shop-filter sticky top-16 w-full"
            style={{
              flex: showNav ? 1 : 0,
            }}
          >
            <div className="shop-filter_wrap flex flex-col gap-4 ">
              <div
                className="filer-hide-btn 
                            gap-4 items-center 
                            flex hover:bg-slate-200 
                            w-fit px-3 py-2 cursor-pointer
                            rounded-md
                            duration-150
                            ease-in"
                onClick={handleShow}
              >
                <div className="filter-icon-zoom">
                  {showNav ? (
                    <ZoomInMapIcon className=""></ZoomInMapIcon>
                  ) : (
                    <ZoomOutMapIcon></ZoomOutMapIcon>
                  )}
                </div>
                <div className="fliter-icon-text">
                  <p>{showNav ? "Ẩn" : "Hiện"}</p>
                </div>
              </div>

              {transition(
                (styles, showNav) =>
                  showNav && (
                    <animated.div style={styles} className="Sidebar">
                      <div className="divider w-[60%] h-1 bg-black rounded-xl"></div>
                      <div className="title-filter">
                        <p className="text-[40px] font-bold">Bộ lọc</p>
                      </div>
                      <div className="fliter-body flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                          <Checkbox id="latest" />
                          <label htmlFor="latest">Hàng mới nhất</label>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Checkbox id="latest" />
                          <label htmlFor="latest">Bán chạy nhất</label>
                        </div>

                        <div className="child-title text-[1.4rem] font-bold">
                          <p>Giá</p>
                        </div>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Giá" />
                          </SelectTrigger>
                          <SelectContent>
                            {listFilter.map((price) => (
                              <SelectItem value={price.id.toString()}>
                                {price.isHigher ? "Trên" : "Dưới"} {price.price}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <div className="child-title text-[1.4rem] font-bold">
                          <p>Giá cụ thể</p>
                        </div>
                        <div className="specific-price flex gap-2 items-center">
                          <Input type="number" placeholder="Từ"/>
                          <p>-</p>
                          <Input type="number" placeholder="Đến"/>
                        </div>

                        <div className="child-title text-[1.4rem] font-bold">
                          <p>Xắp xếp</p>
                        </div>

                        <div className="rank-price">
                          <Select value="1">
                            <SelectTrigger>
                                <SelectValue placeholder="Giá"></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">Giá tăng dần</SelectItem>
                                <SelectItem value="2">Giá giảm dần</SelectItem>
                            </SelectContent>
                          </Select>
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

                        <div className="pick-color"></div>
                      </div>
                    </animated.div>
                  )
              )}
            </div>
          </div>
          <div className="shop-product  h-screen w-full">
            <h1>Product</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
