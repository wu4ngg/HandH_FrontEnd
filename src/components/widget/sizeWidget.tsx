import React from "react";
import { Size } from "../pages/Shop";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

const SizeWidget: React.FC<Size> = (props) => {
  const { id, isPick, isMore, type, onClick } = props;

  const [checkMore, setCheckMore] = React.useState(false);
  return (
    <>
      <div className="size-box">
        <div className="size-box_wrap">
          {!isMore ? (
            <div key={id} className="flex gap-2 items-center ">
              <Checkbox
                onCheckedChange={(e) => {
                  if (onClick) {
                    onClick(type, id, e as boolean);
                  }
                }}
                className="custom-checkbox"
                name=""
                id=""
              />
              <p className="font-bold">{type}</p>
            </div>
          ) : (
            <div key={id} className="flex gap-2 items-center  ">
              <Checkbox
                className="custom-checkbox"
                onCheckedChange={(e) => setCheckMore(e as boolean)}
                name=""
                id=""
              />
              <Input
                type="text"
                disabled={!checkMore}
                style={{ opacity: checkMore ? 1 : 0.5 }}
                className="input-specific  w-[30%] duration-200 ease-in
                                      outline-none focus:border-none
                                      align-baseline"
                name=""
                id=""
              />
              <p className="font-bold">{type}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SizeWidget;
