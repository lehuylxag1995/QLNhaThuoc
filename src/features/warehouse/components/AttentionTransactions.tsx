import { colors } from "@/constants/theme";
import { ArrowRight, Megaphone } from "lucide-react-native";
import { View } from "react-native";

import Typography from "@/components/ui/Typography";
import TransactionItem from "./TransactionItem";

type StatusTransaction =
  | "accepted"
  | "processing"
  | "completed"
  | "error"
  | "rejected";

const StatusVariant: Record<StatusTransaction, { message: string }> = {
  accepted: {
    message: "Dữ liệu đã được hệ thống tiếp nhận để xử lý",
  },
  completed: {
    message: "Dữ liệu đã được xử lý xong",
  },
  error: {
    message: "Lỗi hệ thống",
  },
  rejected: {
    message:
      "Hệ thống từ chối xử lý do dữ liệu gửi lên không tuân thủ các ràng buộc, logic yêu cầu",
  },
  processing: {
    message: "Dữ liệu đang được hệ thống xử lý",
  },
};

const statuses = Object.keys(StatusVariant) as StatusTransaction[];

const data = statuses.map((status, i) => ({
  transaction_id: `GD-2026211080-${i + 1}`,
  status,
  message: StatusVariant[status].message,
  submitted_at: new Date().toLocaleString("vi-VN"),
}));

export default function AttentionTransactions() {
  return (
    <View
      style={{
        borderLeftWidth: 4,
        borderLeftColor: colors.error, // đỏ đậm
        borderRadius: 14,
        backgroundColor: colors.errorBackground,
      }}
    >
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          backgroundColor: colors.errorBackground,
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
        }}
      >
        <Megaphone size={30} strokeWidth={2} color={colors.error} />
        <Typography style={{ fontWeight: "500", fontSize: 16 }}>
          Giao dịch cần chú ý
        </Typography>
      </View>

      {/* content */}
      <TransactionItem />
      <TransactionItem />
      <TransactionItem />

      {/* footer */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.errorBackground,
          borderBottomLeftRadius: 14,
          borderBottomRightRadius: 14,
          paddingVertical: 10,
          gap: 10,
        }}
      >
        <Typography style={{ color: colors.success }}>
          Xem tất cả giao dịch liên thông
        </Typography>
        <ArrowRight size={25} color={colors.success} strokeWidth={2} />
      </View>
    </View>
  );
}
