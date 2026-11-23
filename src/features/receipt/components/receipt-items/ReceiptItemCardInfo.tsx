import Typography from "@/components/Typography";
import { colors } from "@/constants/theme";
import { View } from "react-native";

type ReceiptItemCardInfoProps = {
  title: string;
  value?: string | number;
  valueColor?: string;
};

export default function ReceiptItemCardInfo({
  title,
  value,
  valueColor = "black",
}: ReceiptItemCardInfoProps) {
  return (
    <View
      style={{
        width: "48%",
        padding: 10,
        backgroundColor: colors.borderLight3,
        borderRadius: 14,
      }}
    >
      <Typography style={{ fontSize: 10 }}>{title}</Typography>
      <Typography
        style={{ fontWeight: "600", fontSize: 13, color: valueColor }}
      >
        {value}
      </Typography>
    </View>
  );
}
