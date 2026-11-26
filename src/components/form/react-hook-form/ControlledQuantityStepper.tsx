import { Control, FieldValues, Path, useController } from "react-hook-form";
import BaseQuantityStepper, {
  BaseQuantityStepperProps,
} from "../base/BaseQuantityStepper";
export type ControlledQuantityStepperProps<T extends FieldValues> = Omit<
  BaseQuantityStepperProps,
  "value" | "onChange" | "error" | "onBlur"
> & {
  control: Control<T>;
  name: Path<T>;
};

export default function ControlledQuantityStepper<T extends FieldValues>({
  control,
  name,
  min = 1,
  ...stepperProps
}: ControlledQuantityStepperProps<T>) {
  const { field, fieldState } = useController({ control, name });

  return (
    <BaseQuantityStepper
      {...stepperProps}
      min={min}
      value={field.value ?? min}
      onChange={field.onChange}
      onBlur={field.onBlur}
      error={fieldState.error?.message}
    />
  );
}
