import { NavLink } from "react-router-dom";
// import ShoppingCartIcon from 'remixicon-react/ShoppingCartLineIcon'
import '../../styles/styles.css'

const Navbar = () => {
    return (
        <nav className="bg-white sticky top-0 w-full">
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex justify-between">
                    {/* shrink có tác dụng khi thu nhỏ trình duyệt các phần tử co lại bằng nhau */}
                    <div className="flex-shrink-0 flex items-center">
                        {/* <NavLink to="/">
                            <img className="h-4 w-auto" src="\src\assets\images\png\logo_dark.png" alt="Logo" />
                        </NavLink> */}
                    </div>

                    <div className="hidden md:block">
                        <div className="flex space-x-4">
                            <NavLink to="/" className="text-title-nav hover:font-bold transition-all duration-400 px-3 py-2 rounded-md text-base font-medium">Trang chủ</NavLink>
                            <NavLink to="/shop" className="text-title-nav hover:font-bold transition-all duration-400 px-3 py-2 rounded-md text-base font-medium">Cửa Hàng</NavLink>
                            <NavLink to="/purchaseOrder" className="text-title-nav hover:font-bold transition-all duration-400 px-3 py-2 rounded-md text-base font-medium">Đơn mua</NavLink>
                            <NavLink to="/management" className="text-title-nav hover:font-bold transition-all duration-400 px-3 py-2 rounded-md text-base font-medium">Quản lý</NavLink>
                        </div>
                    </div>

                    {/* <div className="flex items-center gap-2">
                        <NavLink to="/login" className="  rounded-md text-sm font-medium ">
                            Đăng nhập
                        </NavLink>
                        <NavLink to="/signup" className="  rounded-md text-sm font-medium">Đăng kí</NavLink>

                    </div> */}
                </div>
            </div>

        </nav>
    )
}


export default Navbar