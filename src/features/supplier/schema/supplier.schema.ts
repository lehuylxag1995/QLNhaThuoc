import { numericString } from "@/utils/zod";
import { z } from "zod";

export const supplierSchema = z.object({
  name: z.string().trim().min(1, "Vui lòng nhập tên nhà cung cấp"),
  taxCode: numericString().refine(
    (v) => v.length === 10 || v.length === 13,
    "Mã số thuế gồm 10 hoặc 13 chữ số",
  ),
  address: z.string().optional(),
  phone: z.string().optional(),
  email: z.email("Email không hợp lệ").or(z.literal("")),
  note: z.string().optional(),
});

export type SupplierFormValues = z.infer<typeof supplierSchema>;
