import { ReceiptItemFormType } from "../schema/receipt-item-form.schema";
import { ReceiptItem } from "../types/receipt-item.type";

export const EMPTY_RECEIPT_ITEM_FOMR: ReceiptItemFormType = {
  drug_id: "",
  batch_no: "",
  expiry_date: new Date(),
  quantity: 1,
  unit_id: "",
};

export const toReceiptItemForm = (item?: ReceiptItem): ReceiptItemFormType =>
  item
    ? {
        batch_no: item.batch_no,
        drug_id: item.drug_id,
        expiry_date: item.expiry_date,
        quantity: item.quantity,
        unit_id: item.unit_id,
      }
    : EMPTY_RECEIPT_ITEM_FOMR;
