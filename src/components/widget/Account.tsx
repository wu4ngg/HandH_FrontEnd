import React from 'react'
import {
  BadgeOutlined, AttachEmailOutlined, CakeOutlined, CallOutlined, HttpsOutlined, ApartmentOutlined, SignpostOutlined, AddRoadOutlined, CodeOutlined
} from "@mui/icons-material";
export const Account: React.FC = () => {
  return (
    <div className='height-div2 h-full flex flex-row flex-wrap'>
      <div className='bg-white p-10 w40per h-full'>
        <div className="flex gap-3 text-center h-fit flex-wrap">
          <img className="h-24 w-24 rounded-full object-cover" src="\src\assets\image\logo_header.png" alt="Logo" />
          <div className="w-auto h-fit text-center">
            <span className='w-full text-3xl font-bold'>Nguyen User</span>
            <p className='w-full'>nguyenuser@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 pt-5">
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <BadgeOutlined></BadgeOutlined>
              <p>Họ và tên</p>
            </div>
            <input type="text" disabled value="Nguyen User" className="custom-input" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <AttachEmailOutlined></AttachEmailOutlined>
              <p>Email</p>
            </div>
            <input type="email" disabled value="nguyenuser@gmail.com" className="custom-input" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <CakeOutlined></CakeOutlined>
              <p>Ngày sinh</p>
            </div>
            <input type="datetime" disabled value="02/09/2003" className="custom-input" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <CallOutlined></CallOutlined>
              <p>Số điện thoại</p>
            </div>
            <input type="number" disabled value="0828907967" className="custom-input" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <HttpsOutlined></HttpsOutlined>
              <p>Mật khẩu</p>
            </div>
            <input type="password" disabled value="Nguyen User" className="custom-input" />
          </div>
        </div>
      </div>

      <div className='text-button-primary w60per h-full p-10'>
        <div className="flex flex-col gap-12 pt-5">
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <ApartmentOutlined></ApartmentOutlined>
              <p>Thành phố</p>
            </div>
            <select className="bg-white rounded-lg p-3.5 outline-none">
              <option value="Nguyen User">Nguyen User</option>
              <option value="Hanoi">Hà Nội</option>
              <option value="Saigon">Sài Gòn</option>
              <option value="Danang">Đà Nẵng</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <SignpostOutlined></SignpostOutlined>
              <p>Quận</p>
            </div>
            <select className="bg-white rounded-lg p-3.5 outline-none">
              <option value="nguyenuser@gmail.com">nguyenuser@gmail.com</option>
              <option value="district1">Quận 1</option>
              <option value="district2">Quận 2</option>
              <option value="district3">Quận 3</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 ">
            <div className="flex gap-2">
              <AddRoadOutlined></AddRoadOutlined>
              <p>Tên đường</p>
            </div>
            <input type="text" className="bg-white rounded-lg p-3.5 outline-none" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <CodeOutlined></CodeOutlined>
              <p>Zip code</p>
            </div>
            <input type="text" className="bg-white rounded-lg p-3.5 outline-none" />
          </div>
          <button className=''>Chỉnh sửa thông tin cá nhân</button>
        </div>
      </div>
    </div>
  )
}
