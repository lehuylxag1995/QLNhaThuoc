import FormDate from "@/components/ui/form/FormDate";
import { FormGroup } from "@/components/ui/form/FormGroup";
import FormSelect from "@/components/ui/form/FormSelect";
import FormText from "@/components/ui/form/FormText";
import { LIST_REASON, LIST_SOURCE_BRANCH } from "@/constants/contant";
import { colors } from "@/constants/theme";
import SupplierSelect from "@/features/supplier/components/SupplierSelect";
import {
  Building2,
  Calendar1,
  ClipboardList,
  NotepadText,
  Truck,
  Warehouse,
} from "lucide-react-native";
import { useState } from "react";
import { View } from "react-native";

export default function ReceiptInfoForm() {
  const [reasonId, setReason] = useState<string | number>();
  const [supplierId, setSupplierId] = useState<number>();
  const [date, setDate] = useState(new Date());

  return (
    <FormGroup Icon={ClipboardList} title="Thông tin phiếu nhập">
      <FormDate
        title="Ngày nhập hàng"
        required={true}
        Icon={Calendar1}
        showChevron={true}
        date={date}
        handleOnValueChange={(event, date) => {
          setDate(date);
        }}
      />

      <FormSelect
        title="Lý do nhập"
        placeholder="Chọn lý do nhập"
        required={true}
        Icon={Truck}
        options={LIST_REASON}
        value={reasonId}
        handleChangeValue={(date) => {
          setReason(date);
        }}
        handleReset={() => setReason(undefined)}
      />

      {reasonId === LIST_REASON[0].value && (
        <SupplierSelect
          value={supplierId}
          handleChangeValue={setSupplierId}
          handleReset={() => setSupplierId(undefined)}
        />
      )}

      {reasonId === LIST_REASON[3].value && (
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <View style={{ flex: 1, gap: 10 }}>
            <FormSelect
              title="Chi nhánh xuất hàng"
              placeholder="Chọn chi nhánh xuất hàng"
              options={LIST_SOURCE_BRANCH}
              Icon={Building2}
              IconColor={colors.info}
              handleChangeValue={() => console.log(123)}
            />
            <FormSelect
              title="Kho xuất hàng"
              placeholder="Chọn kho xuất"
              options={LIST_SOURCE_BRANCH}
              Icon={Warehouse}
              IconColor={colors.info}
              handleChangeValue={() => console.log(123)}
            />
          </View>
          <View style={{ flex: 1, gap: 10 }}>
            <FormSelect
              title="Chi nhánh nhập hàng"
              placeholder="Chọn chi nhánh nhập hàng"
              options={LIST_SOURCE_BRANCH}
              Icon={Building2}
              IconColor={colors.warning}
              handleChangeValue={() => console.log(123)}
            />
            <FormSelect
              title="Kho nhập hàng"
              placeholder="Chọn kho nhập"
              options={LIST_SOURCE_BRANCH}
              Icon={Warehouse}
              IconColor={colors.warning}
              handleChangeValue={() => console.log(123)}
            />
          </View>
        </View>
      )}

      <FormText
        title="Số chứng từ"
        required={true}
        Icon={NotepadText}
        keyboardType="number-pad"
        placeholder="Số chứng từ trên hoá đơn"
      />
    </FormGroup>
  );
}
