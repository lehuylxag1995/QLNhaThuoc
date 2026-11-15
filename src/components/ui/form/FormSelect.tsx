import { SelectOptions } from "@/constants/contant";
import { colors } from "@/constants/theme";
import {
  BottomSheetModal,
  BottomSheetView,
} from "@expo/ui/community/bottom-sheet";
import { ChevronDown, LucideIcon } from "lucide-react-native";
import React, { useRef, useState } from "react";
import { Pressable } from "react-native";
import Picker from "../Picker";
import Typography from "../Typography";
import FormField from "./base/FormField";

export type FormSelectProps<T extends string | number> = {
  title?: string;
  required?: boolean;
  options: SelectOptions<T>[];
  value?: T; // chưa chọn thì là undefined
  Icon?: LucideIcon;
  IconColor?: string;
  placeholder?: string;

  handleChangeValue: (value: T) => void;
  handleReset?: () => void;

  addPressLabel?: string;
  renderCreateView?: (args: {
    onBack: () => void;
    onCreated: (value: T) => void;
  }) => React.ReactNode;
};

export default function FormSelect<T extends string | number>({
  title,
  required,

  Icon,
  IconColor = colors.success,
  options,
  value,
  placeholder,

  handleChangeValue,
  handleReset,

  addPressLabel,
  renderCreateView,
}: FormSelectProps<T>) {
  const modalSheetRef = useRef<BottomSheetModal>(null);

  const [step, setStep] = useState<"list" | "create">("list");

  const handleClose = () => modalSheetRef.current?.dismiss();

  const selectdOption = options.find((c) => c.value === value)?.label;

  return (
    <FormField required={required} title={title}>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          borderRadius: 14,
          borderWidth: 1,
          borderColor: colors.border,
          padding: 10,
        }}
        onPress={() => modalSheetRef.current?.present()}
      >
        {Icon && <Icon size={20} strokeWidth={2} color={IconColor} />}

        <Typography
          style={{
            flex: 1,
            fontSize: 14,
            color: selectdOption ? "black" : colors.border,
          }}
        >
          {selectdOption ?? placeholder}
        </Typography>

        {value === undefined && (
          <ChevronDown
            size={20}
            color={colors.border}
            strokeWidth={2}
            pointerEvents="none"
          />
        )}
      </Pressable>

      <BottomSheetModal
        ref={modalSheetRef}
        snapPoints={["60%"]}
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: "white" }}
        onDismiss={() => setStep("list")} // reset khi đóng
      >
        <BottomSheetView style={{ flex: 1 }}>
          {step === "list" || !renderCreateView ? (
            <Picker<T>
              Icon={Icon}
              IconColor={IconColor}
              title={title}
              options={options}
              value={value}
              handleSelectOption={(item) => {
                if (item.value === value) handleReset?.();
                else handleChangeValue(item.value);
                handleClose();
              }}
              handleClose={handleClose}
              handleAddPress={
                renderCreateView ? () => setStep("create") : undefined
              }
              addPressLabel={addPressLabel}
            />
          ) : (
            renderCreateView({
              onBack: () => setStep("list"),
              onCreated: (v) => {
                handleChangeValue(v); // tự chọn mục vừa tạo
                handleClose();
              },
            })
          )}
        </BottomSheetView>
      </BottomSheetModal>
    </FormField>
  );
}
