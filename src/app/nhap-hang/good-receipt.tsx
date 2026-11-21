import ButtonCustom from "@/components/ui/ButtonCustom";

import { themeStyle } from "@/constants/theme";
import MedicineList from "@/features/goods-receipt/components/Medicines/MedicineList";
import ReceiptInfoForm from "@/features/goods-receipt/components/ReceiptForm/ReceiptInfoForm";
import { SaveAll } from "lucide-react-native";

import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { useTapGesture } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GoodReceiptScreen() {
  const tap = useTapGesture({
    onActivate: () => {
      console.log("Tapped!");
    },
  });

  return (
    <SafeAreaView style={[themeStyle.container]} edges={["top"]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          contentContainerStyle={{
            gap: 10,
          }}
        >
          <ReceiptInfoForm />

          <MedicineList />
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
