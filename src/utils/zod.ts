import z from "zod";

export const numericString = (message = "Chỉ được nhập chữ số") =>
  z.string().refine((v) => [...v].every((c) => c >= "0" && c <= "9"), message);
