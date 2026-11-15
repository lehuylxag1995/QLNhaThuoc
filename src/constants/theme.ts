import { StyleSheet } from "react-native";

export const colors = {
  // Thương hiệu
  primary: "#16A34A",
  primary2: "#15803d",
  primaryDark: "#047857",
  primaryLight: "#D1FAE5", // trước là lightGreen
  primaryLight2: "#e9fff4",
  primaryLight3: "#E8F9EE",
  primaryLight4: "#f8fffb",

  // Nền
  background: "#F0FDF4",
  surface: "#FFFFFF", // nền card, màn hình

  // Chữ
  text: "#000000",
  textSecondary: "#808080",
  textDisabled: "#9CA3AF",
  textWhite: "#fff",

  // Viền
  border: "#9CA3AF",
  borderLight: "rgb(230, 233, 239)",
  borderLight2: "rgb(213, 213, 213)",
  borderLight3: "rgb(250, 249, 249)",
  borderLight4: "#EBECF2",

  // Trạng thái: mỗi trạng thái có 2 màu (chữ + nền)
  success: "#16A34A",
  successBackground: "#ECFBF1",
  info: "#3B82F6",
  infoBackground: "#E7EEFA",
  warning: "#F59E0B",
  warningBackground: "#FAF1E1",
  error: "#EF4444",
  errorBackground: "#FCF0F0",
  purple: "#8B5CF6",
  purpleBackground: "#F3EEFF",
  pink: "#EC4899",
  pinkBackground: "#FDF2F8",

  // Tab / chip
  chipBackground: "#FAF4F4",
  chipText: "#808080",
};

export const themeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 15,
  },
  header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },

  BackgroundActive: {
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: colors.successBackground,
  },
  TextActive: {
    color: colors.success,
    fontWeight: "bold",
  },
  BackgroundNonActive: {
    backgroundColor: colors.chipBackground,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  TextNonActive: {
    color: colors.chipText,
    fontWeight: "semibold",
  },

  formInput: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
  },
  formTitle: {
    fontWeight: "bold",
  },
});
