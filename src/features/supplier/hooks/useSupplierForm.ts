import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toSupplierFormValues } from "../const/supplier.mapper";
import { SupplierFormValues, supplierSchema } from "../schema/supplier.schema";
import { Supplier } from "../types/supplier.type";

export default function useSupplierForm(supplier?: Supplier) {
  return useForm<SupplierFormValues>({
    resolver: zodResolver(supplierSchema),
    defaultValues: toSupplierFormValues(supplier),
  });
}
