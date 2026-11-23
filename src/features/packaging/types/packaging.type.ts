import { Unit } from "@/features/unit/types/unit.type";

export type Packaging = {
  unit_id: Unit["id"]; // U31
  unit_name: Unit["name"]; // Viên
  gtin: string; //null
};
