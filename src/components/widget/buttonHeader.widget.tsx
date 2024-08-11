import React from "react"


const ButtonHeaderWidget: React.FC = () => {
    return (
        <div className="flex gap-4">
            <div>
                <input className="text-color-primary font-bold cursor-pointer" type="button" value="Đăng nhập" />
            </div>
            <div>
                <input className="text-color-primary font-bold cursor-pointer" type="button" value="Đăng kí" />
            </div>
        </div>
    )
}

export default ButtonHeaderWidget