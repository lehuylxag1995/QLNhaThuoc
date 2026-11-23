import { ScanBarcodeIcon, Search, X } from "lucide-react-native";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

type SearchInputProps = {
  onPress: () => void;
};

export default function SearchInput({ onPress }: SearchInputProps) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Search size={25} color={"#9CA3AF"} />

      <TextInput
        style={styles.input}
        placeholder="Tìm kiếm thuốc..."
        value={text}
        onChangeText={setText}
        placeholderTextColor="#9CA3AF"
      />

      {text.length > 0 ? (
        <Pressable style={{ paddingRight: 14 }} onPress={() => setText("")}>
          <X size={25} color={"#9CA3AF"} />
        </Pressable>
      ) : (
        <Pressable
          onPress={onPress}
          style={({ pressed }) => [
            {
              height: 50,
              width: 50,
              alignItems: "center",
              justifyContent: "center",
            },
            pressed && {
              opacity: 0.7,
            },
          ]}
        >
          <ScanBarcodeIcon size={30} color={"#9CA3AF"} />
        </Pressable>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingLeft: 14,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    gap: 10,
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 14,
  },
});
