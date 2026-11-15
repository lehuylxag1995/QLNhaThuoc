import { colors } from "@/constants/theme";
import { View } from "react-native";
import StatusKhoContent from "./StatusKhoContent";
import StatusKhoHeader from "./StatusKhoHeader";

export default function SyncSummary() {
  return (
    <View
      style={{
        backgroundColor: colors.successBackground,
        padding: 10,
        borderRadius: 14,
        gap: 15,
      }}
    >
      {/* header */}
      <StatusKhoHeader />

      {/* content */}
      <StatusKhoContent />
    </View>
  );
}
