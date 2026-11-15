import { colors } from "@/constants/theme";
import { LucideIcon } from "lucide-react-native";
import { StyleSheet, View, ViewProps } from "react-native";
import Typography from "./Typography";

type BadgeVariant = "info" | "success" | "warning" | "error";

type BadgeProps = ViewProps & {
  Icon?: LucideIcon;
  variant: BadgeVariant;
  label: string;
};

const variantColors: Record<
  BadgeVariant,
  { background: string; text: string }
> = {
  info: { background: colors.infoBackground, text: colors.info },
  success: { background: colors.successBackground, text: colors.success },
  warning: { background: colors.warningBackground, text: colors.warning },
  error: { background: colors.errorBackground, text: colors.error },
};

export default function Badge({
  variant = "info",
  Icon,
  label,
  style,
}: BadgeProps) {
  const { background, text } = variantColors[variant];

  return (
    <View
      style={[styles.container, { backgroundColor: background, gap: 3 }, style]}
    >
      {Icon && <Icon size={20} color={text} strokeWidth={2} />}
      <Typography variant="caption" style={[{ color: text }, style]}>
        {label}
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    flexDirection: "row",
  },
});
