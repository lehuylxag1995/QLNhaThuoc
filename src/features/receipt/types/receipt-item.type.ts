export type ReceiptItem = {
  //Bắt buộc theo CSDL Dược
  drug_id: string; // Mã định danh thuốc
  unit_id: string; // Mã đơn vị tính
  quantity: number; // Số lượng
  batch_no: string; // Số lô sản xuất
  expiry_date: Date; // Hạn sử dụng

  //Không bắt buộc theo CSDL Dược
  packaging_specifications: string;
  manufacturer: {
    id: string;
    name: string;
    country: string;
  };
  gtin: string;
  price: number;
};
