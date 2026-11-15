import { colors } from "@/constants/theme";
import {
  BottomSheetModal,
  BottomSheetView,
} from "@expo/ui/community/bottom-sheet";
import DateTimePicker, {
  DateTimePickerChangeEvent,
} from "@expo/ui/community/datetime-picker";
import { useRef } from "react";
import FormField from "./base/FormField";
import FormInput, { FormInputProps } from "./base/FormInput";

type FormDateProps = FormInputProps & {
  title?: string;
  required?: boolean;

  date: Date;
  handleOnValueChange: (event: DateTimePickerChangeEvent, date: Date) => void;
};

export default function FormDate({
  title,
  required,

  date,
  handleOnValueChange,

  ...formInputProps
}: FormDateProps) {
  const modalDateRef = useRef<BottomSheetModal>(null);

  return (
    <FormField title={title} required={required}>
      <FormInput
        {...formInputProps}
        editable={false}
        onPress={() => modalDateRef.current?.present()}
        value={date.toLocaleDateString("vi-VN")}
      />
      <BottomSheetModal ref={modalDateRef} enablePanDownToClose>
        <BottomSheetView style={{ padding: 24 }}>
          <DateTimePicker
            value={date}
            onValueChange={handleOnValueChange}
            display="inline"
            locale="vi_VN"
            accentColor={colors.success}
          />
        </BottomSheetView>
      </BottomSheetModal>
    </FormField>
  );
}
