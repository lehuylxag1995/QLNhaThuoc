import { SelectOptions } from "@/constants/contant";
import { colors } from "@/constants/theme";
import {
  BottomSheetModal,
  BottomSheetView,
} from "@expo/ui/community/bottom-sheet";
import { ChevronDown, LucideIcon } from "lucide-react-native";
import React, { useRef, useState } from "react";
import { Pressable } from "react-native";
import Picker from "../picker/Picker";
import Typography from "../Typography";
import FieldWrapper from "./base/FieldWrapper";
import { InSheetProvider } from "./base/InSheetContext";

const SNAP_POINTS = ["50%", "90%"]; // 0: danh sách, 1: form tạo mới

export type SelectFieldProps<T extends string | number> = {
  //Form field
  title?: string;
  required?: boolean;

  //Form select
  Icon?: LucideIcon;
  IconColor?: string;
  IconStrokeWidth?: number;
  IconSize?: number;
  options: SelectOptions<T>[]; // Quăng danh sách select
  value?: T; // giá trị select khởi tạo mặc định (undifined)
  placeholder?: string;

  //Picker
  handlePickerOnChangeValue: (value: T) => void;
  handlePickerOnReset?: () => void;
  labelPickerButtonAdd?: string;
  handlePickerRenderCreateView?: (args: {
    onBack: () => void;
    onCreated: (value: T) => void;
  }) => React.ReactNode;
  handlePickerOnDelete?: (value: SelectOptions<T>) => void;
  handlePickerOnEdit?: (value: SelectOptions<T>) => void;
};

export default function SelectField<T extends string | number>({
  //Form field
  title,
  required,

  //Form select
  Icon,
  IconColor = colors.success,
  IconStrokeWidth,
  IconSize = 20,
  options,
  value,
  placeholder = "Vui lòng chọn giá trị",

  // Picker
  handlePickerOnChangeValue,
  handlePickerOnReset,
  handlePickerRenderCreateView,
  handlePickerOnDelete,
  handlePickerOnEdit,
  labelPickerButtonAdd,
}: SelectFieldProps<T>) {
  const modalSheetRef = useRef<BottomSheetModal>(null);

  const [step, setStep] = useState<"list" | "create">("list");

  const handlePickerClose = () => modalSheetRef.current?.dismiss();

  const labelSelected = options.find((c) => c.value === value)?.label;

  const gotoStep = (next: "list" | "create") => {
    setStep(next);
    modalSheetRef.current?.snapToIndex(next === "create" ? 1 : 0);
  };

  return (
    <FieldWrapper required={required} title={title}>
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
        {Icon && (
          <Icon
            size={IconSize}
            strokeWidth={IconStrokeWidth}
            color={IconColor}
          />
        )}

        <Typography
          style={{
            flex: 1,
            fontSize: 14,
            color: labelSelected ? "black" : colors.border,
          }}
        >
          {labelSelected ?? placeholder}
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
        snapPoints={SNAP_POINTS}
        enableDynamicSizing={false}
        backgroundStyle={{ backgroundColor: "white" }}
        onDismiss={() => setStep("list")} // reset khi đóng
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
      >
        <InSheetProvider value={true}>
          <BottomSheetView
            style={{
              flex: 1,
            }}
          >
            {step === "list" || !handlePickerRenderCreateView ? (
              <Picker<T>
                Icon={Icon}
                IconColor={IconColor}
                title={title}
                options={options}
                value={value}
                onSelect={(item) => {
                  if (item.value === value) handlePickerOnReset?.();
                  else handlePickerOnChangeValue(item.value);
                  handlePickerClose();
                }}
                handlePickerClose={handlePickerClose}
                labelPickerButtonAdd={labelPickerButtonAdd}
                handlePickerButtonAdd={
                  handlePickerRenderCreateView
                    ? () => gotoStep("create")
                    : undefined
                }
                onDelete={handlePickerOnDelete}
                onEdit={handlePickerOnEdit}
              />
            ) : (
              handlePickerRenderCreateView({
                onBack: () => gotoStep("list"),
                onCreated: (v) => {
                  handlePickerOnChangeValue(v); // tự chọn mục vừa tạo
                  handlePickerClose();
                },
              })
            )}
          </BottomSheetView>
        </InSheetProvider>
      </BottomSheetModal>
    </FieldWrapper>
  );
}
