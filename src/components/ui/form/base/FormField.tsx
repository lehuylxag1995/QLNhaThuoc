import React from "react";
import { View } from "react-native";
import Typography from "../../Typography";

type FormFieldProps = {
  title?: string;
  required?: boolean;
  children: React.ReactNode;
};
export default function FormField({
  title,
  required,
  children,
}: FormFieldProps) {
  return (
    <View style={{ gap: 8 }}>
      {title && (
        <Typography style={{ fontWeight: "500" }}>
          {title}{" "}
          {required && <Typography style={{ color: "red" }}>*</Typography>}
        </Typography>
      )}
      {children}
    </View>
  );
}
