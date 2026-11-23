import { Control, FieldValues, Path, useController } from "react-hook-form";
import TextField, { TextFieldProps } from "../TextField";

// FieldValues Record<string,any> => Kiểu chung nhất cho mọi form
export type ControlledTextFieldProps<T extends FieldValues> = Omit<
  TextFieldProps,
  "value" | "onChangeText" | "onBlur" | "error"
> & {
  control: Control<T>; // đối tượng điều khiển lấy từ useForm.
  name: Path<T>;
};
export default function ControlledTextField<T extends FieldValues>({
  control,
  name,
  ...textFieldProps
}: ControlledTextFieldProps<T>) {
  const { field, fieldState } = useController({ control, name });

  return (
    <TextField
      {...textFieldProps}
      value={field.value ?? ""} // tránh cảnh báo “uncontrolled to controlled” khi giá trị là undefined.
      onBlur={field.onBlur}
      onChangeText={field.onChange}
      error={fieldState.error?.message}
    />
  );
}
