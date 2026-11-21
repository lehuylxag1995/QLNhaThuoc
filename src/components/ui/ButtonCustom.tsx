import { colors } from "@/constants/theme";
import { LucideIcon } from "lucide-react-native";
import { Pressable } from "react-native";
import Typography from "./Typography";

type ButtonProps = {
  title: string;
  Icon?: LucideIcon;
  IconSize?: number;
  IconColor?: string;
  IconStrokeWidth?: number;
  handleOnPress?: () => void;
};

export default function ButtonCustom({
  Icon,
  IconColor = "white",
  handleOnPress,
  title,
  IconStrokeWidth,
  IconSize,
}: ButtonProps) {
  return (
    <Pressable
      style={{
        backgroundColor: colors.primary2,
        height: 48,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        flexDirection: "row",
      }}
      onPress={handleOnPress}
    >
      {Icon && (
        <Icon size={IconSize} color={IconColor} strokeWidth={IconStrokeWidth} />
      )}
      <Typography style={{ color: "#fff", fontWeight: "700" }}>
        {title}
      </Typography>
    </Pressable>
  );
}
