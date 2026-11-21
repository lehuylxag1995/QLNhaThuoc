import { SupplierFormValues } from "../schema/supplier.schema";
import { Supplier } from "../types/supplier.type";

export const EMPTY_SUPPLIER_FORM: SupplierFormValues = {
  name: "",
  email: "",
  phone: "",
  taxCode: "",
  address: "",
  note: "",
};

export const toSupplierFormValues = (s?: Supplier): SupplierFormValues =>
  s
    ? {
        name: s.name,
        taxCode: s.taxCode,
        email: s.email ?? "",
        phone: s.phone ?? "",
        address: s.address ?? "",
        note: s.note ?? "",
      }
    : EMPTY_SUPPLIER_FORM;
