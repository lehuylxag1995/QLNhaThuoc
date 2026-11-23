import DatePickerField from "@/components/form/DatePickerField";
import { FormGroup } from "@/components/form/FormGroup";
import { default as SelectField } from "@/components/form/SelectField";
import TextField from "@/components/form/TextField";
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
  const [date, setDate] = useState(new Date());
  const [reasonId, setReason] = useState<string | number>();
  const [supplierId, setSupplierId] = useState<number>();

  return (
    <FormGroup Icon={ClipboardList} title="Thông tin phiếu nhập">
      <DatePickerField
        title="Ngày nhập hàng"
        required={true}
        Icon={Calendar1}
        showChevron={true}
        date={date}
        handleOnValueChange={(event, date) => {
          setDate(date);
        }}
      />

      <SelectField
        title="Lý do nhập"
        required={true}
        Icon={Truck}
        options={LIST_REASON}
        value={reasonId}
        placeholder="Chọn lý do nhập"
        handlePickerOnChangeValue={(value) => {
          setReason(value);
        }}
        handlePickerOnReset={() => setReason(undefined)}
      />

      {reasonId === LIST_REASON[0].value && <SupplierSelect />}

      {reasonId === LIST_REASON[3].value && (
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <View style={{ flex: 1, gap: 10 }}>
            <SelectField
              title="Chi nhánh xuất hàng"
              placeholder="Chọn chi nhánh xuất hàng"
              options={LIST_SOURCE_BRANCH}
              Icon={Building2}
              IconColor={colors.info}
              handlePickerOnChangeValue={() => console.log(123)}
            />
            <SelectField
              title="Kho xuất hàng"
              placeholder="Chọn kho xuất"
              options={LIST_SOURCE_BRANCH}
              Icon={Warehouse}
              IconColor={colors.info}
              handlePickerOnChangeValue={() => console.log(123)}
            />
          </View>
          <View style={{ flex: 1, gap: 10 }}>
            <SelectField
              title="Chi nhánh nhập hàng"
              placeholder="Chọn chi nhánh nhập hàng"
              options={LIST_SOURCE_BRANCH}
              Icon={Building2}
              IconColor={colors.warning}
              handlePickerOnChangeValue={() => console.log(123)}
            />
            <SelectField
              title="Kho nhập hàng"
              placeholder="Chọn kho nhập"
              options={LIST_SOURCE_BRANCH}
              Icon={Warehouse}
              IconColor={colors.warning}
              handlePickerOnChangeValue={() => console.log(123)}
            />
          </View>
        </View>
      )}

      <TextField
        title="Số chứng từ"
        required={true}
        Icon={NotepadText}
        keyboardType="number-pad"
        placeholder="Số chứng từ trên hoá đơn"
      />
    </FormGroup>
  );
}
