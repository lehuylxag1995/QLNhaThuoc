import Typography from "@/components/Typography";
import { colors } from "@/constants/theme";
import { LucideIcon } from "lucide-react-native";
import { View } from "react-native";

type StatusKhoVariant = "dangxuly" | "canxuly";

const variantColors: Record<StatusKhoVariant, { main: string }> = {
  dangxuly: {
    main: colors.info,
  },
  canxuly: {
    main: colors.error,
  },
};

type StatusKhoProps = {
  Icon?: LucideIcon;
  title: string;
  quantity: number;
  variant?: StatusKhoVariant;
};

export default function StatusKhoItem({
  Icon,
  title,
  variant = "dangxuly",
  quantity,
}: StatusKhoProps) {
  const { main } = variantColors[variant];

  return (
    <View
      style={{
        flexGrow: 1, // Chieu cao bang nhau
        backgroundColor: "white",
        borderRadius: 14,
        paddingHorizontal: 15,
        paddingVertical: 10,
        gap: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="heading"
          style={{ color: main, textAlign: "center", fontSize: 30 }}
        >
          {quantity}
        </Typography>
        <Typography style={{ textAlign: "center" }} variant="body">
          {title}
        </Typography>
      </View>
    </View>
  );
}
