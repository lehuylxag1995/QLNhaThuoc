import Badge from "@/components/ui/Badge";
import Typography from "@/components/ui/Typography";
import { View } from "react-native";

export default function TransactionItem() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 5,
        marginVertical: 2,
        backgroundColor: "white",
      }}
    >
      <View style={{ flex: 1 }}>
        <Typography style={{ fontWeight: "500" }}>GD-20261108-001</Typography>
        <Typography style={{ flexShrink: 1 }} variant="caption">
          08/11/2026 - 09:50 - Có lỗi hệ thống
        </Typography>
      </View>

      <View style={{ flexShrink: 0 }}>
        <Badge variant="error" label="Bị từ chối" />
      </View>
    </View>
  );
}
