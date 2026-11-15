import ButtonCustom from "@/components/ui/ButtonCustom";

import { themeStyle } from "@/constants/theme";
import MedicineList from "@/features/goods-receipt/components/Medicines/MedicineList";
import ReceiptInfoForm from "@/features/goods-receipt/components/ReceiptForm/ReceiptInfoForm";

import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GoodReceiptScreen() {
  return (
    <SafeAreaView style={[themeStyle.container]} edges={["top"]}>
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
      <ButtonCustom title="Lưu phiếu nhập" />
    </SafeAreaView>
  );
}
