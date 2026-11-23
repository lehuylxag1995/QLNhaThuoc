// chọn và thêm nhà cung cấp

import ConfirmDialog from "@/components/ConfirmDialog";
import FormSelect from "@/components/form/SelectField";
import { LIST_SUPPLIERS, SelectOptions } from "@/constants/contant";
import { showSuccess } from "@/utils/toasts";
import { HousePlus } from "lucide-react-native";
import { useState } from "react";
import SupplierForm from "./SupplierForm";

export default function SupplierSelect() {
  const [supplierId, setSupplierId] = useState<number>();
  const [deletingSupplier, setDeletingSupplier] =
    useState<SelectOptions<number> | null>(null);

  const openEditSupplier = (item: SelectOptions<number>) => {
    console.log("Sua", item.value);
  };

  const confirmDeleteSupplier = (item: SelectOptions<number>) => {
    setDeletingSupplier(item);
  };

  const handleDelete = () => {
    if (!deletingSupplier) return;
    if (deletingSupplier.value === supplierId) setSupplierId(undefined);
    setDeletingSupplier(null);
    showSuccess("Nhà cung cấp", "Đã xoá nhà cung cấp thành công");
  };

  return (
    <>
      <FormSelect<number>
        title="Nhà cung cấp"
        value={supplierId}
        Icon={HousePlus}
        placeholder="Chọn nhà cung cấp"
        options={LIST_SUPPLIERS}
        handlePickerOnReset={() => setSupplierId(undefined)}
        handlePickerOnChangeValue={setSupplierId}
        labelPickerButtonAdd="Thêm nhà cung cấp"
        handlePickerRenderCreateView={({ onBack, onCreated }) => (
          <SupplierForm onBack={onBack} onCreated={onCreated} />
        )}
        handlePickerOnDelete={confirmDeleteSupplier}
        handlePickerOnEdit={openEditSupplier}
      />

      <ConfirmDialog
        visible={!!deletingSupplier}
        title="Xoá nhà cung cấp?"
        message={`“${deletingSupplier?.label}” sẽ bị xoá khỏi danh sách.`}
        onConfirm={handleDelete}
        onCancel={() => setDeletingSupplier(null)}
      />
    </>
  );
}
