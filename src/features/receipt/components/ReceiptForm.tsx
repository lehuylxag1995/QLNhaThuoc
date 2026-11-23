import { View } from "react-native";
import ReceiptInfoForm from "./ReceiptInfoForm";
import ReceiptItemList from "./receipt-items/ReceiptItemList";

export default function ReceiptForm() {
  return (
    <View style={{ gap: 10 }}>
      <ReceiptInfoForm />
      <ReceiptItemList />
    </View>
  );
}
