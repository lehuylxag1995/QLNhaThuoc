import { colors } from "@/constants/theme";
import { BottomSheetTextInput } from "@expo/ui/community/bottom-sheet";
import { ChevronDown, LucideIcon, XCircle } from "lucide-react-native";
import { Pressable, TextInput, TextInputProps, View } from "react-native";
import { useInSheet } from "./InSheetContext";

export type BaseInputProps = TextInputProps & {
  Icon?: LucideIcon;
  IconColor?: string;
  invalid?: boolean; // true -> viền đỏ
  showChevron?: boolean;
  showClearButton?: boolean;
};

export default function BaseInput({
  //BaseInputProps
  Icon,
  IconColor = colors.success,
  invalid,
  showChevron = false,
  showClearButton = false,

  // TextInputProps
  value,
  onChangeText,
  style,
  ...rest // toàn bộ prop native của TextInputProps
}: BaseInputProps) {
  const inSheet = useInSheet();
  const InputComponent = inSheet ? BottomSheetTextInput : TextInput;
  const canClear = showClearButton && !!value;

  return (
    <View style={{ justifyContent: "center" }}>
      {Icon && (
        <Icon
          style={{ position: "absolute", left: 12, zIndex: 1 }}
          size={20}
          color={IconColor}
          strokeWidth={2}
          pointerEvents="none"
        />
      )}

      <InputComponent
        {...rest}
        maxFontSizeMultiplier={1.2}
        placeholderTextColor={colors.border}
        style={[
          {
            borderWidth: 1,
            borderRadius: 14,
            borderColor: invalid ? colors.error : colors.border,
            padding: 10,
            paddingLeft: Icon ? 40 : 15, // chừa chỗ cho icon
            fontSize: 14,
          },
          style,
        ]}
        value={value}
        onChangeText={onChangeText}
      />

      {canClear && (
        <Pressable
          style={{ position: "absolute", right: 12, zIndex: 1 }}
          onPress={() => onChangeText?.("")}
          hitSlop={10}
        >
          <XCircle strokeWidth={1} color={colors.border} />
        </Pressable>
      )}

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
