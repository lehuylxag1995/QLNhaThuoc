import { ClockFading, TriangleAlert } from "lucide-react-native";
import { View } from "react-native";
import StatusKhoItem from "./StatusKhoItem";

export default function StatusKhoContent() {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 12,
      }}
    >
      <View style={{ flex: 1 }}>
        <StatusKhoItem
          Icon={ClockFading}
          quantity={4}
          title="Đang xử lý"
          variant="dangxuly"
        />
      </View>
      <View style={{ flex: 1 }}>
        <StatusKhoItem
          Icon={TriangleAlert}
          quantity={2}
          title="Cần xử lý"
          variant="canxuly"
        />
      </View>
    </View>
  );
}
