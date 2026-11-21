import { colors } from "@/constants/theme";
import { toast } from "sonner-native";

export const showSuccess = (title: string, description?: string) =>
  toast.success(title, {
    description,
    style: { backgroundColor: colors.successBackground },
  });

export const showError = (title: string, description: string) =>
  toast.error(title, {
    description,
    duration: 8000,
    style: { backgroundColor: colors.errorBackground },
  });

export const showInfo = (title: string, description: string) =>
  toast.info(title, {
    description,
    style: { backgroundColor: colors.infoBackground },
  });

export const showWarning = (title: string, description: string) =>
  toast.warning(title, {
    description,
    style: { backgroundColor: colors.warningBackground },
  });
