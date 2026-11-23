import { colors } from "@/constants/theme";
import React from "react";
import { View } from "react-native";
import Typography from "../../Typography";

type FieldWrapperProps = {
  title?: string;
  required?: boolean;
  error?: string; // React hook form
  children: React.ReactNode;
};
export default function FieldWrapper({
  title,
  required = false,
  error,
  children,
}: FieldWrapperProps) {
  return (
    <View style={{ gap: 8 }}>
      {title && (
        <Typography style={{ fontWeight: "500" }}>
          {title}{" "}
          {required && <Typography style={{ color: "red" }}>*</Typography>}
        </Typography>
      )}
      {children}

      {error ? (
        <Typography style={{ color: colors.error, fontSize: 12 }}>
          {error}
        </Typography>
      ) : null}
    </View>
  );
}
