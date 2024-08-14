import { useState } from "react";
import Chip from "../widget/chip";
import ImagesProduct from "../widget/imagesProduct";
import ColorChip from "../widget/colorChip";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Add, RemoveOutlined } from "@mui/icons-material";
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
    <div className="product_main flex flex-1 gap-8 px-20 pb-10 justify-stretch relative">
      <div className="w-1/2 flex">
        <ImagesProduct
          imgList={[
            {
              img: "https://media.discordapp.net/attachments/716878834976161843/1272447086884819095/20240810_173733.jpg?ex=66bb0232&is=66b9b0b2&hm=3509358974e4fa65aa0c34fa0e3f2982072cf23853ac836f899aa599a75edbae&=&format=webp&width=750&height=1332",
            },
            {
              img: "https://media.discordapp.net/attachments/716878834976161843/1272447086884819095/20240810_173733.jpg?ex=66bb0232&is=66b9b0b2&hm=3509358974e4fa65aa0c34fa0e3f2982072cf23853ac836f899aa599a75edbae&=&format=webp&width=750&height=1332",
            },
            {
              img: "https://media.discordapp.net/attachments/716878834976161843/1272447086884819095/20240810_173733.jpg?ex=66bb0232&is=66b9b0b2&hm=3509358974e4fa65aa0c34fa0e3f2982072cf23853ac836f899aa599a75edbae&=&format=webp&width=750&height=1332",
            },
          ]}
        />
      </div>
      <div className="flex flex-col gap-4 sticky top-[9.5rem] self-start">
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
        </div>
      </div>
    </div>
  );
}
