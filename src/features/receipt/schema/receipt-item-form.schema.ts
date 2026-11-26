import z from "zod";

export const ReceiptItemFormSchema = z.object({
  drug_id: z.string(), // Mã định danh thuốc
  unit_id: z.string(), // Mã đơn vị tính
  quantity: z.number(), // Số lượng
  batch_no: z.string(), // Số lô sản xuất
  expiry_date: z.date(), // Hạn sử dụng
});

export type ReceiptItemFormType = z.infer<typeof ReceiptItemFormSchema>;
