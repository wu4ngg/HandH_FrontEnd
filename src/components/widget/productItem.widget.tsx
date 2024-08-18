import React from "react";
import { IProduct } from "../../types/product.type";
import { Favorite, FavoriteBorder, FiberManualRecord } from "@mui/icons-material";
import '../../styles/home.css'
import { convertMoney } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
const ProductItem: React.FC<IProduct> = (props) => {
    const { product_name, product_price, product_thumb, product_variations, product_slug } = props;

    const navigate = useNavigate();
    const [favorite, setFavorite] = React.useState(false);

    return (
        <div onClick={() => {
            navigate(`/product/${product_slug}/${product_name}`)
        }} className="product_item-main rounded-3xl duration-500 hover:-translate-y-2 hover:cursor-pointer hover:shadow-lg">
            <div className="product_item-image w-full">
                <img src={product_thumb} className="w-full h-[360px] scale-90 object-cover rounded-sm"alt="" />
                <div className="wrap-product-info flex w-full items-start justify-between p-4">
                    <div className="wrap-product-info_left gap-1 flex flex-col">
                        <div className="product_item-name text-lg">
                            <p>{product_name}</p>
                        </div>
                        <div className="product_item-price text-lg font-bold">
                            <p>{convertMoney(product_price)}</p>
                        </div>
                        <div className="product_item-variations flex items-center gap-2">
                            {product_variations.map((e: string, index: number) => (
                                <React.Fragment key={index}>
                                    <p>{e}</p>
                                    {index !== product_variations.length - 1 && <FiberManualRecord className="w-2 h-2" />}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    <div className="wrap-product-info_right">
                        <div className="product_item-heart p-2" onClick={() => setFavorite(!favorite)}>
                            {favorite ? <Favorite className="text-red-600" /> : <FavoriteBorder />}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default ProductItem