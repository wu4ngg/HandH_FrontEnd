import React from "react";
import '../../styles/cart.css'
import { cartSample } from "../../types/cart.type";
import CartItem from "../widget/CartItem";

const CartPage: React.FC = () => {
    return <div className="cart-page w-full py-4">
        <div className="cart-page_wrap w-full px-20">
            <div className="cart-title flex flex-col gap-0 w-full h-20">
                <div className="cart-title_fixed fixed bg-white w-full py-3 top-40 ">
                    <h1>Giỏ hàng</h1>
                    <p>{cartSample.cart_count} sản phẩm</p>
                </div>
            </div>

            <div className="cart-body flex w-full gap-2 flex-wrap-reverse">
                <div className="cart-body_left w-full mt-6">
                    { 
                        cartSample.cart_products.map((cartDetail) => (
                            <CartItem
                                product={cartDetail.product}
                                quantity={cartDetail.quantity}
                                colorPicked={cartDetail.colorPicked}
                                sizePicked={cartDetail.sizePicked}
                            ></CartItem>
                        ))
                    }
                </div>
                <div className="divider mx-4"></div>
                <div className="cart-body_right w-full">
                    <div className="cart-body_right_wrap fixed flex flex-col gap-2">
                        <h2>Tổng tiền</h2>
                        <h1>14.074.068 đồng</h1>
                        <div className="policy-payment flex gap-2 w-[75%] items-center">
                            <input type="checkbox" className="custom-checkbox" name="" id="" />
                            <p>Trước khi hàng mua tôi muốn chắc chắn ràng bạn đồng ý với <a href="">điều khoản</a> mà chung tôi đã đưa ra</p>
                        </div>
                        <div className="btn-payment w-full flex justify-center">
                            <button className="rounded-3xl w-[99%] bg-[#FFEFCD]">Thanh toán</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
}


export default CartPage