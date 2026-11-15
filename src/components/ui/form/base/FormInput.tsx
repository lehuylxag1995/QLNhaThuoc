import { colors } from "@/constants/theme";
import { ChevronDown, LucideIcon } from "lucide-react-native";
import { TextInput, TextInputProps, View } from "react-native";

export type FormInputProps = TextInputProps & {
  Icon?: LucideIcon;
  IconColor?: string;
  showChevron?: boolean;
};

export default function FormInput({
  Icon,
  IconColor = colors.success,
  showChevron = false,
  style,
  ...rest // toàn bộ prop native của TextInput
}: FormInputProps) {
  return (
    <View style={{ justifyContent: "center" }}>
      {Icon && (
        <Icon
          style={{ position: "absolute", left: 12, zIndex: 1 }}
          size={20}
          color={IconColor}
          strokeWidth={2}
        />
      )}

      <TextInput
        {...rest}
        maxFontSizeMultiplier={1.2}
        placeholderTextColor={colors.border}
        style={[
          {
            borderWidth: 1,
            borderRadius: 14,
            borderColor: colors.border,
            padding: 10,
            paddingLeft: 40, // chừa chỗ cho icon
            fontSize: 14,
          },
          style,
        ]}
      />

      {showChevron && (
        <ChevronDown
          style={{ position: "absolute", right: 12, zIndex: 1 }}
          size={20}
          color={colors.border}
          strokeWidth={2}
          pointerEvents="none"
        />
      )}
    </View>
  );
}
