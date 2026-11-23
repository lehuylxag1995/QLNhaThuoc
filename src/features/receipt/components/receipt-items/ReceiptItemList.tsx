import { FormGroup } from "@/components/form/FormGroup";
import { colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import { Pill, Plus } from "lucide-react-native";
import MedicineItemCard from "./ReceiptItemCard";
import MedicineSumary from "./ReceiptItemSummary";

export default function ReceiptItemList() {
  const router = useRouter();

  return (
    <FormGroup
      Icon={Pill}
      title="Danh sách thuốc"
      required={true}
      showButton={true}
      showButtonTitle="Thêm thuốc"
      ShowButtonIcon={Plus}
      showButtonOnPress={() => router.push("/stock-in/add-item")}
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

      <MedicineItemCard
        name="Paracetamol 500mg"
        idMedicine={"TH0001"}
        donvitinh="Hộp"
        hansudung="11/11/2026"
        solo="SL00120205"
        soluong={20}
      />

      <MedicineItemCard
        name="Paracetamol 500mg"
        idMedicine={"TH0001"}
        donvitinh="Hộp"
        hansudung="11/11/2026"
        solo="SL00120205"
        soluong={20}
      />

      <MedicineSumary />
    </FormGroup>
  );
}
