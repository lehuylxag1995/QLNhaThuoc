import Typography from "@/components/ui/Typography";
import { colors, themeStyle } from "@/constants/theme";

import Badge from "@/components/ui/Badge";
import { blurhash } from "@/constants/contant";
import QuickActions from "@/features/warehouse/components/QuickActions";
import SyncSummary from "@/features/warehouse/components/SyncSummary";
import WarehouseHeader from "@/features/warehouse/components/WarehouseHeader";
import { Image } from "expo-image";
import { ChevronRight, ClipboardList } from "lucide-react-native";
import { FlatList, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = Array.from({ length: 30 }, (_, i) => ({
  id: String(i + 1),
  name: `Paracetamol 500mg ${i + 1}`,
}));

export default function KhoScreen() {
  return (
    <SafeAreaView
      style={[themeStyle.container, { gap: 10 }]}
      edges={["top", "bottom"]}
    >
      <View style={{ gap: 10, flex: 1 }}>
        {/* header */}
        <WarehouseHeader />

        {/* Hub dạng thẻ */}
        <QuickActions />

        {/* Đồng bộ CSDL */}
        <SyncSummary />

        {/* Header danh sach thuoc */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: colors.borderLight4,
            borderRadius: 14,
            borderLeftColor: colors.success,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <ClipboardList size={20} color={colors.success} strokeWidth={3} />
            <Typography style={{ fontWeight: "500", fontSize: 14 }}>
              Danh sách thuốc trong kho
            </Typography>
          </View>
          <Pressable onPress={() => console.log(123)}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Typography style={{ color: colors.success, fontSize: 12 }}>
                Xem lịch sử
              </Typography>
              <ChevronRight size={20} color={colors.success} />
            </View>
          </Pressable>
        </View>

        <FlatList
          style={{ flex: 1 }}
          data={data}
          keyExtractor={(i) => i.id}
          renderItem={({ index, item }) => {
            return (
              <Pressable onPress={() => console.log(item.id)}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: colors.borderLight4,
                    gap: 10,
                  }}
                >
                  <Image
                    source={`https://picsum.photos/3000/2000?random=${index}`}
                    style={{ width: 80, height: 60, borderRadius: 10 }}
                    placeholder={blurhash}
                    transition={300}
                    contentFit="cover"
                  />
                  <View style={{ flex: 1, gap: 5 }}>
                    <Typography style={{ fontWeight: "500" }}>
                      {item.name}
                    </Typography>
                    <Typography variant="caption">
                      Hộp - Tồn kho: 120
                    </Typography>
                  </View>
                  <Badge variant="success" label="Còn hàng" />
                </View>
              </Pressable>
            );
          }}
          contentContainerStyle={{ paddingBottom: 70, gap: 8 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
