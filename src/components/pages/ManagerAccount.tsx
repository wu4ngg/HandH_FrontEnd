import React from 'react'
import '../../styles/styles.css'
import '../../styles/managerAccount.css'
import { NavLink, Outlet } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const navLinks = [
  {
    path: "account",
    icon: <AccountCircleIcon />,
    display: "Tài khoản",
  },
  {
    path: "paymentHistory",
    icon: <ReceiptLongIcon />,
    display: "Lịch sử mua hàng",
  },
  {
    path: "favoriteProduct",
    icon: <FavoriteBorderIcon />,
    display: "Sản phẩm yêu thích",
  },
];
export const ManagerAccount: React.FC = () => {
  return (
    <div className='flex flex-grow'>
      <div className='text-button-primary heght-div1'>
        <ul className='nav__list text-color-primary'>
          {navLinks.map((item, index) => (
            <li className='ml-2 mr-8 nav__item' key={index}>
              <NavLink
                to={item.path}
                className={navClass =>
                  navClass.isActive ? "nav__active nav__link" : "nav__link"
                }
              >
                <span>
                  <i className='icon-sidebar'>{item.icon}</i>
                </span>
                <p>{item.display}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  )
}
