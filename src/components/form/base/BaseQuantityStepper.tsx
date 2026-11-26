import { colors } from "@/constants/theme";
import { Minus, Plus } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import FieldWrapper from "./FieldWrapper";

export type BaseQuantityStepperProps = {
  title?: string;
  required?: boolean;

  value: number;
  onChange: (value: number) => void;
  onBlur?: () => void;
  min?: number;
  max?: number;
  step?: number;
  error?: string;
};

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

export default function BaseQuantityStepper({
  title,
  required,
  value,
  onChange,
  onBlur,
  min = 1,
  max = 999,
  step = 1,
  error,
}: BaseQuantityStepperProps) {
  // Giữ chuỗi riêng để người dùng có thể xóa trống khi đang gõ
  const [text, setText] = useState(String(value));

  // Đồng bộ lại khi value của rhf thay đổi ( + / - )
  useEffect(() => {
    setText(String(value));
  }, [value]);

  // Khi người dùng thay đổi số
  const handleChangeText = (input: string) => {
    const digits = input.replace(/[^0-9]/g, ""); // Mỗi ký tự không phải chữ số thì thay bằng chuỗi rỗng
    setText(digits);
    if (digits !== "") onChange(Number(digits));
  };

  const handleBlur = () => {
    // Khi người dùng xoá hết text trong input thì xử lý hoặc text còn
    const fixed = clamp(text === "" ? min : Number(text), min, max);
    setText(String(fixed));
    onChange(fixed);
    onBlur?.();
  };

  const canDecrease = value - step >= min;
  const canIncrease = value + step <= max;

  return (
    <FieldWrapper title={title} required={required} error={error}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          borderRadius: 14,
          borderWidth: 1,
          borderColor: error ? colors.error : colors.border,
          padding: 10,
        }}
      >
        <Pressable
          onPress={() => onChange(clamp(value - step, min, max))}
          disabled={!canDecrease}
          style={{ opacity: canDecrease ? 1 : 0.3 }}
          hitSlop={10}
        >
          <Minus color={colors.success} />
        </Pressable>

        <TextInput
          value={text}
          onChangeText={handleChangeText}
          onBlur={handleBlur}
          keyboardType="number-pad"
          selectTextOnFocus // Bôi đen text
          maxLength={String(max).length}
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 18,
            fontWeight: "700",
            padding: 0,
          }}
        />

        <Pressable
          onPress={() => onChange(clamp(value + step, min, max))}
          disabled={!canIncrease}
          style={{ opacity: canIncrease ? 1 : 0.3 }}
          hitSlop={10}
        >
          <Plus color={colors.success} />
        </Pressable>
      </View>
    </FieldWrapper>
  );
}
