import { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "../ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
export default function GuestPurchaseForm() {
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  async function getDistricts() {
    const res = await axios.get("https://esgoo.net/api-tinhthanh/2/79.htm");
    setDistricts(res.data.data);
  }
  async function getWards(districtId: any) {
    const res = await axios.get(
      `https://esgoo.net/api-tinhthanh/3/${districtId}.htm`
    );
    setWards(res.data.data);
  }
  useEffect(() => {
    getDistricts();
  }, []);
  return (
    <>
      <b>Thông tin khách hàng</b>
      <div className="flex gap-2">
        <Input placeholder="Họ" />
        <Input placeholder="Tên" />
      </div>
      <Input placeholder="Email" type="email" />
      <Input placeholder="Số điện thoại" type="phone" />
      <b>Thông tin giao hàng</b>
      <p>
        Cửa hàng chỉ giao hàng trong khu vực trung tâm thành phố. Không tính phí
        giao hàng
      </p>
      <Input placeholder="Địa chỉ" />
      <div className="flex gap-2">
        <Select
          disabled={districts.length == 0}
          onValueChange={(v) => {
            setWards([]);
            getWards(v);
          }}
        >
          <SelectTrigger>
            <SelectValue
              placeholder={districts.length == 0 ? "Đang tải..." : `Quận/Huyện`}
            ></SelectValue>
          </SelectTrigger>
          <SelectContent>
            {districts.map((e) => (
              //@ts-ignore
              <SelectItem value={e.id}>{e.full_name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select disabled={wards.length == 0}>
          <SelectTrigger>
            <SelectValue placeholder="Phường/Xã"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            {wards.map((e) => (
              //@ts-ignore
              <SelectItem value={e}>{e.full_name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Input value="Thành phồ Hồ Chí Minh" disabled />
    </>
  );
}
