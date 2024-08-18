import { useContext, useState } from "react";
import Chip from "../widget/chip";
import ImagesProduct from "../widget/imagesProduct";
import ColorChip from "../widget/colorChip";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Add, RemoveOutlined } from "@mui/icons-material";
import ImageViewer from "../widget/imageViewer";
import Footer from "../widget/footer";
import { ImageModelContext } from "../../providers/Providers";
export default function Product() {
  const [quantity, setQuantity] = useState(1);
  const [sizes, setSizes] = useState([
    {
      name: "S",
      enabled: true,
    },
    {
      name: "M",
      enabled: false,
    },
    {
      name: "L",
      enabled: false,
    },
    {
      name: "XL",
      enabled: false,
    },
  ]);
  const [colors, setColors] = useState([
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
  return (
    <div className="pt-4">
      <div className="product_main flex flex-1 gap-8 px-20 pb-10 justify-stretch relative box-border">
        <div className="w-1/2 flex">
          <ImagesProduct
            imgList={[
              {
                img: "/sample_image.jpg",
              },
              {
                img: "/sample_image.jpg",
              },
              {
                img: "/sample_image.jpg",
              },
            ]}
          />
        </div>
        <div className="flex flex-col gap-4 sticky top-[9.5rem] self-start w-1/2">
          <div>
            <h1>Lorem Ipsum Dolor Sit Amet</h1>
            <h2 className="text-3xl font-light">590.000 đồng</h2>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-light">Kích cỡ</h3>
            <div className="flex gap-4 w-full">
              {sizes.map((e) => (
                <Chip
                  enabled={e.enabled}
                  onClick={(enabled) => {
                    setSizes(() => changeSelected(e, sizes, enabled));
                  }}
                >
                  {e.name}
                </Chip>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-light">Màu sắc</h2>
              <div className="flex gap-4 w-full">
                {colors.map((e) => (
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
              <p>
                Lorem ipsum dolor sit amet consectetur. Turpis sed tempus vel
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
                lectus mattis purus faucibus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
