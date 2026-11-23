import ButtonCustom from "@/components/ButtonCustom";
import { themeStyle } from "@/constants/theme";
import ReceiptForm from "@/features/receipt/components/ReceiptForm";
import { SaveAll } from "lucide-react-native";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ReceiptScreen() {
  return (
    <SafeAreaView style={[themeStyle.container]} edges={["top"]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <ReceiptForm />
        </ScrollView>

        {/* button */}
        <View
          style={{
            padding: 16,
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderColor: "#eee",
          }}
        >
          <ButtonCustom
            title="Lưu phiếu nhập"
            Icon={SaveAll}
            IconColor="white"
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
