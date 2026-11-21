import { SelectOptions } from "@/constants/contant";
import { createContext, useContext } from "react";

type PickerContextValue<T extends string | number> = {
  value?: T;
  onSelect: (item: SelectOptions<T>) => void;
  onEdit?: (item: SelectOptions<T>) => void;
  onDelete?: (item: SelectOptions<T>) => void;
};

const PickerContext = createContext<PickerContextValue<any> | null>(null);

export const PickerProvider = PickerContext.Provider;

export function usePicker<T extends string | number>() {
  const ctx = useContext(PickerContext);
  if (!ctx) throw new Error("PickerItem phải nằm trong <Picker>");
  return ctx as PickerContextValue<T>;
}
