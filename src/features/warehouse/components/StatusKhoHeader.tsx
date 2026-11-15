import Typography from "@/components/ui/Typography";
import { colors } from "@/constants/theme";
import { ChevronRight, RefreshCcw } from "lucide-react-native";
import { View } from "react-native";

export default function StatusKhoHeader() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <RefreshCcw size={20} color={colors.primary} strokeWidth={3} />
        <Typography variant="body" style={{ fontWeight: "500", fontSize: 14 }}>
          Đồng bộ Dược Quốc Gia
        </Typography>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Typography
          variant="body"
          style={{
            color: colors.primary,
            fontSize: 12,
          }}
        >
          Xem lịch sử
        </Typography>
        <ChevronRight size={20} color={colors.primary} strokeWidth={2} />
      </View>
    </View>
  );
}
