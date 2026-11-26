import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toReceiptItemForm } from "../const/receipt.mapper";
import {
  ReceiptItemFormSchema,
  ReceiptItemFormType,
} from "../schema/receipt-item-form.schema";

export default function useAddReceiptItemForm() {
  return useForm<ReceiptItemFormType>({
    resolver: zodResolver(ReceiptItemFormSchema),
    defaultValues: toReceiptItemForm(),
  });
}
