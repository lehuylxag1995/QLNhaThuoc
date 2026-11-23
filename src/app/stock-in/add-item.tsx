import Typography from "@/components/Typography";
import { colors, themeStyle } from "@/constants/theme";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddReceiptItemScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={[themeStyle.container]} edges={["top"]}>
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pressable
          style={{
            position: "absolute",
            left: 1,
            borderRadius: 10,
            backgroundColor: colors.borderLight4,
            padding: 3,
          }}
          onPress={() => router.back()}
        >
          <ChevronLeft size={30} color={colors.success} strokeWidth={2.5} />
        </Pressable>
        <Typography variant="heading" style={{ fontWeight: 600 }}>
          Thêm thuốc
        </Typography>
      </View>

      {/* <FormGroup Icon={KeyRound} title="Thông tin bắt buộc">
        <ControlledTextField control={} name='' />
      </FormGroup> */}
    </SafeAreaView>
  );
}
