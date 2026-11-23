import BaseInput, { BaseInputProps } from "./base/BaseInput";
import FieldWrapper from "./base/FieldWrapper";

export type TextFieldProps = BaseInputProps & {
  title?: string;
  required?: boolean;
  error?: string;
};

export default function TextField({
  title,
  required,
  error,
  ...baseInputProps // toàn bộ prop native của FormInputProps
}: TextFieldProps) {
  // error được tách ra ở đây rồi chia cho hai nơi: FieldWrapper hiện chữ, BaseInput đổi viền.

  return (
    <FieldWrapper error={error} title={title} required={required}>
      <BaseInput {...baseInputProps} invalid={!!error} />
    </FieldWrapper>
  );
}
