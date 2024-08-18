import React from "react";
import { Size } from "../pages/Shop";

const SizeWidget: React.FC<Size> = (props, { text: string }) => {

    const { id, isPick, isMore, type } = props

    const [checkMore, setCheckMore] = React.useState(false)
    return <>
        <div className="size-box">
            <div className="size-box_wrap">
                {
                    !isMore ? (<div key={id} className="flex gap-2 items-center ">
                        <input type="checkbox" className="custom-checkbox" name="" id="" />
                        <p className="font-bold">{type}</p>
                    </div>
                    ) :
                        (<div key={id} className="flex gap-2 items-center  ">
                            <input type="checkbox" className="custom-checkbox" onChange={(e) => setCheckMore(e.target.checked)} name="" id="" />
                            <input type="text" disabled={!checkMore} style={{opacity: checkMore ? 1 : 0.5}} className="input-specific bg-slate-300 rounded-3xl
                                     pl-4 py-2 w-[25%] duration-200 ease-in
                                      outline-none focus:border-none
                                      align-baseline"  name="" id="" />
                            <p className="font-bold">{type}</p>
                        </div>)
                }
            </div>
        </div >
    </>
}

export default SizeWidget