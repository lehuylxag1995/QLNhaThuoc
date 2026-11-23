export type ReceiptItem = {
  drug_id: string; // Mã định danh thuốc
  unit_id: string; // Mã đơn vị tính
  quantity: number; // Số lượng
  batch_no: number; // Số lô sản xuất
  expiry_date: Date; // Hạn sử dụng
};
