import { colors } from "@/constants/theme";
import { LucideIcon } from "lucide-react-native";
import type { ReactNode } from "react";
import {
  Pressable,
  StyleProp,
  Text,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import Typography from "../Typography";

export type FormGroupProps = Omit<ViewProps, "style " | "children"> & {
  Icon?: LucideIcon;
  IconColor?: string;
  IconStrokeWidth?: number;
  title?: string;
  required?: boolean;
  showButton?: boolean;
  showButtonTitle?: string;
  ShowButtonIcon?: LucideIcon;
  showButtonOnPress?: () => void;
  children: ReactNode;

  style?: StyleProp<ViewStyle>; // root
  headerStyle?: StyleProp<ViewStyle>; // phần header
  contentStyle?: StyleProp<ViewStyle>; // phần content
};

export function FormGroup({
  title,
  Icon,
  required = false,
  IconColor = colors.success,
  IconStrokeWidth,
  showButton,
  showButtonTitle,
  showButtonOnPress,
  ShowButtonIcon,
  children,
  style,
  headerStyle,
  contentStyle,
  ...viewProps
}: FormGroupProps) {
  return (
    <View style={style} {...viewProps}>
      {/* header */}
      <View
        style={[
          {
            backgroundColor: colors.primaryLight3,
            padding: 10,
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14,
            borderColor: colors.borderLight4,
            borderLeftWidth: 2,
            borderRightWidth: 2,
            borderTopWidth: 2,
          },
          headerStyle,
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            {Icon && (
              <Icon size={25} strokeWidth={IconStrokeWidth} color={IconColor} />
            )}

            {title && (
              <Typography style={{ fontWeight: "bold", fontSize: 15 }}>
                {title} {required && <Text style={{ color: "red" }}>*</Text>}
              </Typography>
            )}
          </View>

          {showButton && (
            <Pressable
              style={{
                padding: 5,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: colors.success,
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: "white",
              }}
              onPress={showButtonOnPress}
            >
              {ShowButtonIcon && (
                <ShowButtonIcon
                  size={15}
                  strokeWidth={2}
                  color={colors.success}
                />
              )}

              <Typography style={{ color: colors.success, fontSize: 12 }}>
                {showButtonTitle}
              </Typography>
            </Pressable>
          )}
        </View>
      </View>

      {/* content */}
      <View
        style={[
          {
            gap: 10,
            borderBottomLeftRadius: 14,
            borderBottomRightRadius: 14,
            borderColor: colors.borderLight4,
            borderLeftWidth: 2,
            borderRightWidth: 2,
            borderBottomWidth: 2,
            padding: 10,
          },
          contentStyle,
        ]}
      >
        {children}
      </View>
    </View>
  );
}
