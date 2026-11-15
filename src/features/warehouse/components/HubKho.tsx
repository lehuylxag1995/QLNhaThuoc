import { colors } from "@/constants/theme";
import { LucideIcon } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

type HubVariant = "info" | "success" | "purple" | "warning";

const variantColors: Record<HubVariant, { main: string; background: string }> =
  {
    info: {
      main: colors.info,
      background: colors.infoBackground,
    },
    success: {
      main: colors.success,
      background: colors.successBackground,
    },
    purple: {
      main: colors.purple,
      background: colors.purpleBackground,
    },
    warning: {
      main: colors.warning,
      background: colors.warningBackground,
    },
  };

type HubProps = {
  Icon?: LucideIcon;
  title: string;
  description: string;
  handleNavigateScreen: () => void;
  variant?: HubVariant;
};

export default function HubKho({
  handleNavigateScreen,
  Icon,
  title,
  description,
  variant = "info",
}: HubProps) {
  const { main, background } = variantColors[variant];

  // Mỗi thẻ có badge đỏ hiện số phiếu lỗi hoặc bị từ chối, ví dụ “2 cần xử lý”.
  //  Đây là chỗ cảnh báo quan trọng nhất.

  return (
    <Pressable style={{ flex: 1 }} onPress={handleNavigateScreen}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: background,
          borderRadius: 14,
          padding: 5,
          gap: 3,
        }}
      >
        {Icon && <Icon color={main} size={35} strokeWidth={1.5} />}

        <Text
          maxFontSizeMultiplier={1.2}
          style={{ fontWeight: "bold", fontSize: 11, textAlign: "center" }}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
}
