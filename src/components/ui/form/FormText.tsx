import FormField from "./base/FormField";
import FormInput, { FormInputProps } from "./base/FormInput";

type FormTextProps = FormInputProps & {
  title?: string;
  required?: boolean;
};

export default function FormText({
  title,
  required,
  ...formInputProps // toàn bộ prop native của TextInput
}: FormTextProps) {
  return (
    <FormField title={title} required={required}>
      <FormInput {...formInputProps} />
    </FormField>
  );
}
