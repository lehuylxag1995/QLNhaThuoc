import { colors } from "@/constants/theme";
import { Trash } from "lucide-react-native";
import {
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FullWindowOverlay } from "react-native-screens";

type ConfirmDialogProps = {
  visible: boolean;
  title: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  destructive?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmDialog({
  visible,
  title,
  message,
  confirmText = "Xoá",
  cancelText = "Huỷ",
  destructive = true,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!visible) return null;

  const content = (
    <View style={styles.overlay}>
      <View style={styles.dialog}>
        <Trash size={50} color={colors.error} style={{ marginBottom: 10 }} />

        <Text style={styles.title}>{title}</Text>
        {!!message && <Text style={styles.message}>{message}</Text>}

        <View style={styles.row}>
          <Pressable style={[styles.button, styles.cancel]} onPress={onCancel}>
            <Text style={styles.cancelText}>{cancelText}</Text>
          </Pressable>
          <Pressable
            style={[
              styles.button,
              destructive ? styles.danger : styles.primary,
            ]}
            onPress={onConfirm}
          >
            <Text style={styles.confirmText}>{confirmText}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );

  if (Platform.OS === "ios")
    return <FullWindowOverlay>{content}</FullWindowOverlay>;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      {content}
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.45)",
    padding: 24,
  },
  dialog: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
  },
  title: { fontSize: 18, fontWeight: "700", textAlign: "center" },
  message: { marginTop: 8, color: "#555", textAlign: "center" },
  row: { flexDirection: "row", gap: 12, marginTop: 20 },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: "center",
  },
  cancel: { backgroundColor: "#F1F2F4" },
  danger: { backgroundColor: "#DC2626" },
  primary: { backgroundColor: "#15803D" },
  cancelText: { fontWeight: "600", color: "#333" },
  confirmText: { fontWeight: "600", color: "white" },
});
