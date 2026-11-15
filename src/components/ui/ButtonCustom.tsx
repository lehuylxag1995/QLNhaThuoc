import { colors } from "@/constants/theme";
import { LucideIcon } from "lucide-react-native";
import { Pressable, View } from "react-native";
import Typography from "./Typography";

type ButtonProps = {
  title: string;
  Icon?: LucideIcon;
  IconColor?: string;
  handleOnPress?: () => void;
};

export default function ButtonCustom({
  Icon,
  IconColor,
  handleOnPress,
  title,
}: ButtonProps) {
  return (
    <View
      style={{
        padding: 16,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderColor: "#eee",
      }}
    >
      <Pressable
        style={{
          backgroundColor: colors.primary2,
          height: 48,
          borderRadius: 24,
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
        onPress={handleOnPress}
      >
        {Icon && <Icon size={20} color={IconColor} />}
        <Typography style={{ color: "#fff", fontWeight: "700" }}>
          {title}
        </Typography>
      </Pressable>
    </View>
  );
}
