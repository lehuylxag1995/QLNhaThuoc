import { colors } from "@/constants/theme";
import {
  BottomSheetModal,
  BottomSheetView,
} from "@expo/ui/community/bottom-sheet";
import DateTimePicker, {
  DateTimePickerChangeEvent,
} from "@expo/ui/community/datetime-picker";
import { useRef } from "react";
import BaseInput, { BaseInputProps } from "./base/BaseInput";
import FieldWrapper from "./base/FieldWrapper";

export type DatePickerFieldProps = BaseInputProps & {
  title?: string;
  required?: boolean;

  date: Date;
  handleOnValueChange: (event: DateTimePickerChangeEvent, date: Date) => void;
};

export default function DatePickerField({
  title,
  required,

  date,
  handleOnValueChange,

  ...baseInputProps
}: DatePickerFieldProps) {
  const modalDateRef = useRef<BottomSheetModal>(null);

  return (
    <FieldWrapper title={title} required={required}>
      <BaseInput
        {...baseInputProps}
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
    </FieldWrapper>
  );
}
