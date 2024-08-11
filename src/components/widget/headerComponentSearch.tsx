import {
    ShoppingCartOutlined,
    SearchOutlined
} from "@mui/icons-material";
import React from "react";
const HeaderComponentSearch = () => {
    const [key, setKey] = React.useState<string>("")

    const hanldeOnKeyDown = (e: any): void => {
        if (e.key === 'Enter') {
            console.log(key)
        }
    }
    return (
        <div className="flex gap-4">
            <div className="text-button-primary p-3 hover:opacity-40 duration-200 ease-linear hover:cursor-pointer  flex items-center justify-center rounded-full">
                <ShoppingCartOutlined className="text-color-primary size-3"></ShoppingCartOutlined>
            </div>
            <div className="bg-search-field flex items-center gap-2 px-3 py-1 rounded-full">
                <div>
                    <SearchOutlined className="text-black"></SearchOutlined>
                </div>
                <div>
                    <input
                        onChange={(e) => {
                            var value: string = e.target.value
                            console.log(value)
                            setKey(value)
                        }}
                        onKeyDown={hanldeOnKeyDown}
                        type="text"
                        placeholder="Tìm kiếm"
                        className="bg-transparent text-black py-2  border-0 focus:border-0 focus:outline-none w-40 placeholder:font-bold"
                    />
                </div>

            </div>
        </div>
    )
}

export default HeaderComponentSearch