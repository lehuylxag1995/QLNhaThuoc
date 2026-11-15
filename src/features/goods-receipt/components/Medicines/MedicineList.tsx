import { FormGroup } from "@/components/ui/form/FormGroup";
import Typography from "@/components/ui/Typography";
import { colors } from "@/constants/theme";
import { Pill, Plus } from "lucide-react-native";
import { Text, View } from "react-native";
import MedicineItemCard from "./MedicineItemCard";

export default function MedicineList() {
  return (
    <FormGroup
      Icon={Pill}
      title="Danh sách thuốc"
      required={true}
      showButton={true}
      showButtonTitle="Thêm thuốc"
      ShowButtonIcon={Plus}
      showButtonOnPress={() => console.log(123)}
      style={{ backgroundColor: colors.primaryLight4, borderRadius: 14 }}
    >
      <MedicineItemCard
        name="Paracetamol 500mg"
        idMedicine={"TH0001"}
        donvitinh="Hộp"
        hansudung="11/11/2026"
        solo="SL00120205"
        soluong={20}
      />

      <View
        style={{
          backgroundColor: colors.borderLight4,
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 14,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography style={{ fontSize: 13 }}>
          Tổng số mặt hàng:{" "}
          <Text
            style={{ color: colors.success, fontSize: 15, fontWeight: "600" }}
          >
            5
          </Text>
        </Typography>
        <Typography style={{ fontSize: 13 }}>
          Tổng số lượng:{" "}
          <Text
            style={{ color: colors.success, fontSize: 15, fontWeight: "600" }}
          >
            67
          </Text>
        </Typography>
      </View>
    </FormGroup>
  );
}
