import { Manufacturer } from "@/features/manufacturer/types/manufacturer.type";
import { Packaging } from "@/features/packaging/types/packaging.type";
import { Route } from "@/features/route/types/route.type";

export type Drug = {
  id: string;
  name: string;
  drug_group_id: string; // mã nhóm thuốc (Gọi API Dược Quốc Gia)
  registration_number: string; //. Số giấy phép lưu hành
  old_registration_number: string; // Số giấy phép lưu hành cũ
  active_pharmaceutical_ingredient: string; //Hoạt chất. Vd:Coptis Rhizoma Dried Extract (4.5 ~ 7 → 1) 8,75mg, Ivy Leaf 30% Ethanol dried extract (5~7.5 →1) 26,25mg
  strength: string; // Hàm lượng. Ví dụ: (0,025%) 0,25mg/ml
  routes: Route[]; // Danh sách đường dùng (Gọi API Dược Quốc Gia)
  approval_date: Date; // Ngày cấp số giấy phép lưu hành.
  expiry_date: Date; //	Ngày hết hiệu lực lưu hành.
  prescription_status: number; // Phân loại thuốc kê đơn
  special_control_type: number; //  Phân loại thuốc kiểm soát đặc biệt
  manufacturer: Manufacturer; // Thông tin nhà sản xuất
  packagings: Packaging[]; //Các quy cách đóng gói của thuốc
  last_update_time: Date; //Ngày chỉnh sửa gần nhất
};
