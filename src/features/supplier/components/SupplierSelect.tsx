// chọn và thêm nhà cung cấp

import FormSelect from "@/components/ui/form/FormSelect";
import { LIST_SUPPLIERS } from "@/constants/contant";
import { HousePlus } from "lucide-react-native";
import { useState } from "react";
import SupplierForm from "./SupplierForm";

type SupplierSelectProps = {
  value?: number;
  handleChangeValue: (value: number) => void;
  handleReset?: () => void;
};

export default function SupplierSelect({
  value,
  handleChangeValue,
  handleReset,
}: SupplierSelectProps) {
  const [suppliers, setSuppliers] = useState(LIST_SUPPLIERS);

  return (
    <FormSelect<number>
      title="Nhà cung cấp"
      Icon={HousePlus}
      placeholder="Chọn nhà cung cấp"
      options={suppliers}
      handleReset={handleReset}
      handleChangeValue={handleChangeValue}
      value={value}
      addPressLabel="Thêm nhà cung cấp"
      required={false} // Do nghiệp vụ biết rõ không bắt buộc hiện *
      renderCreateView={({ onBack, onCreated }) => <SupplierForm />}
    />
  );
}
