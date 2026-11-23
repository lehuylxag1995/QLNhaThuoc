import Typography from "@/components/Typography";
import { colors } from "@/constants/theme";

export type ReceiptItemSummaryItem = {
  label: string;
  value: number;
};

export default function ReceiptItemSummaryItem({
  label,
  value,
}: ReceiptItemSummaryItem) {
  return (
    <Typography style={{ fontSize: 13 }}>
      {label}:{" "}
      <Typography
        style={{ color: colors.success, fontSize: 15, fontWeight: "600" }}
      >
        {value}
      </Typography>
    </Typography>
  );
}
