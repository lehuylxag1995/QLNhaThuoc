import { useRouter } from "expo-router";
import { ClipboardCheck, PackageMinus, PackagePlus } from "lucide-react-native";
import { View } from "react-native";
import HubKho from "./HubKho";

export default function QuickActions() {
  const router = useRouter();

  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      <HubKho
        title="Nhập kho"
        Icon={PackagePlus}
        description="Tạo phiếu"
        handleNavigateScreen={() => router.push("/nhap-hang/good-receipt")}
        variant="info"
      />
      <HubKho
        title="Xuất kho"
        Icon={PackageMinus}
        description="Tạo phiếu"
        handleNavigateScreen={() => console.log(123)}
        variant="warning"
      />
      <HubKho
        title="Kiểm kê"
        Icon={ClipboardCheck}
        description="Tạo phiếu"
        handleNavigateScreen={() => console.log(123)}
        variant="purple"
      />
    </View>
  );
}
