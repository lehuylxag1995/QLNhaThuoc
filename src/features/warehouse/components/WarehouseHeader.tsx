import Typography from "@/components/Typography";
import { themeStyle } from "@/constants/theme";
import { Search } from "lucide-react-native";
import { View } from "react-native";

export default function WarehouseHeader() {
  return (
    <View
      style={[themeStyle.header, { justifyContent: "space-between", gap: 5 }]}
    >
      <Typography variant="heading">Kho thuốc</Typography>
      <Search size={30} strokeWidth={2} />
    </View>
  );
}
