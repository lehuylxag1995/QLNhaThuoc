import { FormGroup } from "@/components/form/FormGroup";
import ControlledQuantityStepper from "@/components/form/react-hook-form/ControlledQuantityStepper";
import ControlledTextField from "@/components/form/react-hook-form/ControlledTextField";
import Typography from "@/components/Typography";
import { colors, themeStyle } from "@/constants/theme";
import useAddReceiptItemForm from "@/features/receipt/hooks/useAddReceiptItemForm";
import { useRouter } from "expo-router";
import { KeyRound, MessageCircleWarning, X } from "lucide-react-native";
import { Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddReceiptItemScreen() {
  const router = useRouter();
  const { control } = useAddReceiptItemForm();

  return (
    <SafeAreaView style={[themeStyle.container]} edges={["top"]}>
      <ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
      >
        {/* header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Typography variant="heading" style={{ fontWeight: 600 }}>
              Thêm thuốc vào phiếu
            </Typography>
            <Typography style={{ color: colors.border, fontSize: 12 }}>
              Phiếu PN-2026001 - Nhập từ nhà cung cấp
            </Typography>
          </View>

          <Pressable
            style={{
              position: "absolute",
              right: 1,
              padding: 3,
            }}
            onPress={() => router.back()}
          >
            <X size={30} color={colors.success} strokeWidth={2.5} />
          </Pressable>
        </View>

        <FormGroup Icon={KeyRound} title="Thông tin bắt buộc">
          <ControlledTextField
            control={control}
            name="drug_id"
            title="Tên thuốc"
            placeholder="Nhập tên thuốc"
            required
            showClearButton
          />

          <View
            style={{
              backgroundColor: colors.warningBackground,
              borderRadius: 12,
              borderColor: colors.warning,
              borderWidth: 0.2,
              padding: 12,
              flexDirection: "row",
              gap: 10,
            }}
          >
            <MessageCircleWarning
              size={20}
              color={colors.warning}
              strokeWidth={1.5}
            />

            <View style={{ flex: 1 }}>
              <Typography
                style={{
                  fontSize: 12,
                  color: colors.warningBackground2,
                  textAlign: "justify",
                }}
              >
                Không tìm thấy "" ở cơ sở dữ liệu Dược và danh mục thuốc cá
                nhân. Điền thêm thông tin bên dưới để lưu vào danh mục thuốc cá
                nhân
              </Typography>
            </View>
          </View>

          <ControlledQuantityStepper
            title="Số lượng"
            required
            control={control}
            name="quantity"
            min={1}
            max={100}
          />
        </FormGroup>
      </ScrollView>
    </SafeAreaView>
  );
}
