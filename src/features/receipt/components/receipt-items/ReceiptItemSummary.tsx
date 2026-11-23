import { colors } from "@/constants/theme";
import { View } from "react-native";
import ReceiptItemSummaryItem from "./ReceiptItemSummaryItem";

export default function ReceiptItemSummary() {
  return (
    <View
      style={{
        backgroundColor: colors.borderLight4,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 14,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <ReceiptItemSummaryItem label="Tổng số mặt hàng" value={5} />
      <ReceiptItemSummaryItem label="Tổng số lượng" value={67} />
    </View>
  );
}
