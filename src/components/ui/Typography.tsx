// components/AppText.tsx
import { colors } from "@/constants/theme";
import { Text, TextProps, TextStyle } from "react-native";

type Variant = "heading" | "title" | "body" | "caption" | "button";

type Props = TextProps & {
  variant?: Variant;
};

const variantStyles: Record<Variant, TextStyle> = {
  heading: { fontSize: 20, fontWeight: "bold" },

  title: { fontSize: 16, fontWeight: "bold" },
  button: { fontWeight: "bold", fontSize: 16, color: colors.textWhite },

  body: { fontSize: 14 },
  caption: { fontSize: 12, color: colors.textSecondary },
};

export default function Typography({
  variant = "body",
  style,
  ...props
}: Props) {
  return (
    <Text
      maxFontSizeMultiplier={1.2}
      style={[variantStyles[variant], style]}
      {...props}
    />
  );
}
