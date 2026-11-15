import { colors, themeStyle } from "@/constants/theme";
import { ClipboardList } from "lucide-react-native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NhapDanhSachScreen() {
  return (
    <SafeAreaView style={[themeStyle.container]} edges={["top"]}>
      <View style={{ flex: 1 }}>
        {/* header */}
        <View style={{}}>
          <View style={{ flexDirection: "row" }}>
            <ClipboardList size={20} strokeWidth={3} color={colors.success} />
            <Text>Danh sách</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
