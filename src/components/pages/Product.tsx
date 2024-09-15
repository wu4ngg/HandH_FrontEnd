import { useContext, useState } from "react";
import Chip from "../widget/chip";
import ImagesProduct from "../widget/imagesProduct";
import ColorChip from "../widget/colorChip";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Add, RemoveOutlined } from "@mui/icons-material";
import ImageViewer from "../widget/imageViewer";
import Footer from "../widget/footer";
import { ImageModelContext } from "../../providers/Providers";
import { IProduct } from "../../models/product";
export default function Product() {
  const [prod, setProd] = useState<IProduct>({
    product_name: "Lorem Ipsum Dolor Sit Amet",
    product_price: 590000,
    product_category: "Áo",
    product_color: [
      {
        color_code: "#8DB4D2",
        color_price: 0,
        selected: true,
      },
      {
        color_code: "#000",
        color_price: 0,
        selected: false,
      },
      {
        color_code: "#FFD1DC",
        color_price: 0,
        selected: false,
      },
    ],
    product_size: [
      {
        size_name: "S",
        size_price: 0,
        selected: true,
      },
      {
        size_name: "M",
        size_price: 0,
        selected: false,
      },
      {
        size_name: "L",
        size_price: 0,
        selected: false,
      },
      {
        size_name: "XL",
        size_price: 0,
        selected: false,
      },
    ],
    product_description: `Lorem ipsum dolor sit amet consectetur. Turpis sed tempus vel
                neque eget sed tellus non senectus. Pellentesque maecenas
                gravida dis arcu. Ut velit diam ut pulvinar nulla. Integer
                rhoncus egestas consequat semper. Lobortis dictum sit ipsum
                velit amet arcu bibendum ut gravida. Ut habitasse purus proin
                amet nisi ipsum. Sed venenatis rhoncus nam odio elementum. Urna
                leo ultricies quisque elementum. Urna leo diam id lacus ac quis
                integer. Enim id sed tellus in id. Ultricies convallis mattis
                tristique sit enim nec aliquet. Ligula auctor diam molestie sit
                lectus mattis purus faucibus. Lorem ipsum dolor sit amet
                consectetur. Turpis sed tempus vel neque eget sed tellus non
                senectus. Pellentesque maecenas gravida dis arcu. Ut velit diam
                ut pulvinar nulla. Integer rhoncus egestas consequat semper.
                Lobortis dictum sit ipsum velit amet arcu bibendum ut gravida.
                Ut habitasse purus proin amet nisi ipsum. Sed venenatis rhoncus
                nam odio elementum. Urna leo ultricies quisque elementum. Urna
                leo diam id lacus ac quis integer. Enim id sed tellus in id.
                Ultricies convallis mattis tristique sit enim nec aliquet.
                Ligula auctor diam molestie sit lectus mattis purus faucibus.
                Lorem ipsum dolor sit amet consectetur. Turpis sed tempus vel
                neque eget sed tellus non senectus. Pellentesque maecenas
                gravida dis arcu. Ut velit diam ut pulvinar nulla. Integer
                rhoncus egestas consequat semper. Lobortis dictum sit ipsum
                velit amet arcu bibendum ut gravida. Ut habitasse purus proin
                amet nisi ipsum. Sed venenatis rhoncus nam odio elementum. Urna
                leo ultricies quisque elementum. Urna leo diam id lacus ac quis
                integer. Enim id sed tellus in id. Ultricies convallis mattis
                tristique sit enim nec aliquet. Ligula auctor diam molestie sit
                lectus mattis purus faucibus.`,
    images: [
      {
        image_url: "/sample_image.jpg",
      },
      {
        image_url: "/sample_image.jpg",
      },
      {
        image_url: "/sample_image.jpg",
      },
    ],
  });
  const [quantity, setQuantity] = useState(1);
  function changeSelected(element: any, array: Array<any>, value: boolean) {
    return array.map((e) => {
      if (e == element) {
        return {
          ...element,
          selected: value,
        };
      }
      return {
        ...e,
        selected: false,
      };
    });
  }
  return (
    <div className="pt-4">
      <div className="product_main flex flex-1 gap-8 px-20 pb-10 justify-stretch relative box-border">
        <div className="w-1/2 flex">
          <ImagesProduct
            imgList={prod.images!.map((e) => {
              return { img: e.image_url, alt: e.image_alt };
            })}
          />
        </div>
        <div className="flex flex-col gap-4 sticky top-[9.5rem] self-start w-1/2">
          <div>
            <h1>{prod.product_name}</h1>
            <h2 className="text-3xl font-light">
              {prod.product_price.toLocaleString()} đồng
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-light">Kích cỡ</h3>
            <div className="flex gap-4 w-full">
              {prod.product_size!.map((e) => (
                <Chip
                  enabled={e.selected}
                  onClick={(enabled) => {
                    setProd(() => {
                      return {
                        ...prod,
                        product_size: changeSelected(
                          e,
                          prod.product_size!,
                          enabled
                        ),
                      };
                    });
                  }}
                >
                  {e.size_name}
                </Chip>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-light">Màu sắc</h2>
              <div className="flex gap-4 w-full">
                {prod.product_color!.map((e) => (
                  <ColorChip
                    active={e.selected}
                    color={e.color_code}
                    onClick={(selected) => {
                      setProd(() => {
                        const t = {
                          ...prod,
                          product_color: changeSelected(
                            e,
                            prod.product_color!,
                            selected
                          ),
                        };
                        console.log(t);
                        return t;
                      });
                    }}
                    tooltip={e.color_code}
                  />
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-primary flex items-center gap-4">
                <ShoppingCartOutlinedIcon />
                Thêm vào giỏ
              </button>
              <div className="button flex items-center gap-6 cursor-default">
                <div
                  onClick={() => {
                    setQuantity((prev) => {
                      if (quantity > 1) {
                        return quantity - 1;
                      }
                      return quantity;
                    });
                  }}
                >
                  <RemoveOutlined />
                </div>
                <p>{quantity}</p>
                <div
                  onClick={() => {
                    setQuantity(() => quantity + 1);
                  }}
                >
                  <Add />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-light">Mô tả</h2>
              <p>{prod.product_description}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
