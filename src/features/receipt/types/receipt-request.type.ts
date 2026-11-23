import { ReceiptItem } from "./receipt-item.type";

export type ReceiptRequest = {
  transaction_id: string;
  status: string;
  transaction_date: Date;
  reason: string;
  reference_number: string;
  items: ReceiptItem[];
};
