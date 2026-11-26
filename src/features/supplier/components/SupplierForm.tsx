import ButtonCustom from "@/components/ButtonCustom";
import { FormGroup } from "@/components/form/FormGroup";
import ControlledTextField from "@/components/form/react-hook-form/ControlledTextField";
import Typography from "@/components/Typography";
import { BottomSheetScrollView } from "@expo/ui/community/bottom-sheet";
import { ArrowLeft, HouseHeart, Save } from "lucide-react-native";
import { Pressable, View } from "react-native";
import useSupplierForm from "../hooks/useSupplierForm";
import { Supplier } from "../types/supplier.type";

type SupplierFormProps = {
  supplier?: Supplier; // True = Edit , False = Create
  onBack: () => void;
  onCreated: (value: number) => void;
};

export default function SupplierForm({
  supplier,
  onBack,
  onCreated,
}: SupplierFormProps) {
  const { control, handleSubmit } = useSupplierForm(supplier);

  const onSubmit = (data: any) => {
    console.log(data);
    onCreated(2);
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 5,
          padding: 10,
          // backgroundColor: "red",
        }}
      >
        <Pressable
          onPress={onBack}
          hitSlop={10}
          style={{ position: "absolute", left: 5 }}
        >
          <ArrowLeft size={25} color={"black"} strokeWidth={2} />
        </Pressable>
        <Typography style={{ fontSize: 18, fontWeight: "500" }}>
          Thêm nhà cung cấp
        </Typography>
      </View>

      <BottomSheetScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 15 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled" // chạm vào vùng trống thì đóng bàn phím.
        keyboardDismissMode="on-drag" // kéo/cuộn thì đóng bàn phím luôn
      >
        <FormGroup Icon={HouseHeart} title="Thông tin nhà cung cấp">
          <ControlledTextField
            control={control}
            name="name"
            title="Tên nhà cung cấp"
            required={true}
            placeholder="Công ty gì đó..."
          />

          <ControlledTextField
            control={control}
            name="taxCode"
            title="Mã số thuế"
            required={true}
            keyboardType="number-pad"
            placeholder="8523412423"
          />

          <ControlledTextField
            control={control}
            name="address"
            title="Địa chỉ"
            placeholder="Số 123, phường Long Xuyên, tỉnh An Giang"
          />

          <ControlledTextField
            control={control}
            name="phone"
            title="Điện thoại"
            keyboardType="phone-pad"
            placeholder="0392477681"
          />

          <ControlledTextField
            control={control}
            name="email"
            title="Email"
            keyboardType="email-address"
            placeholder="lehuylxag1995@gmail.com"
          />

          <ControlledTextField
            control={control}
            name="note"
            title="Ghi chú"
            placeholder="Thông tin khác..."
          />
        </FormGroup>
      </BottomSheetScrollView>

      <View style={{ paddingVertical: 10 }}>
        <ButtonCustom
          title="Lưu nhà cung cấp"
          Icon={Save}
          IconColor={"white"}
          handleOnPress={handleSubmit(onSubmit, (errors) =>
            console.log("Loi:", errors),
          )}
        />
      </View>
    </View>
  );
}
