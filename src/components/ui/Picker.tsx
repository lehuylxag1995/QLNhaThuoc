import { SelectOptions } from "@/constants/contant";
import { colors } from "@/constants/theme";
import { Check, LucideIcon, Plus, X } from "lucide-react-native";
import { FlatList, Pressable, Text, View } from "react-native";

type PickerProps<T extends string | number> = {
  Icon?: LucideIcon;
  IconColor?: string;
  title?: string;

  options: SelectOptions<T>[];
  value?: T;

  // nhận hàm giá từ component cha với giá trị là kiểu T
  handleSelectOption: (item: SelectOptions<T>) => void;
  handleClose: () => void;

  // nhận hàm và giá trị từ xa xuống
  handleAddPress?: () => void;
  addPressLabel?: string;
};

export default function Picker<T extends string | number>({
  title = "Vui lòng chọn thông tin bên dưới",
  options,
  value,
  Icon,
  IconColor = colors.success,

  handleSelectOption,
  handleClose,

  addPressLabel,
  handleAddPress,
}: PickerProps<T>) {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "white",
      }}
    >
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 16,
        }}
      >
        <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
          {Icon && <Icon size={30} color={IconColor} strokeWidth={2} />}
          <Text style={{ fontSize: 15, fontWeight: "500" }}>{title}</Text>
        </View>
        <Pressable onPress={handleClose}>
          <X size={30} color={colors.border} strokeWidth={2} />
        </Pressable>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={options}
        keyExtractor={(item) => String(item.value)}
        extraData={value}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{ paddingVertical: 5 }}>
            <View style={{ height: 1, backgroundColor: colors.borderLight4 }} />
          </View>
        )}
        renderItem={({ item }) => {
          const isSelected = item.value === value;

          return (
            <Pressable
              onPress={() => handleSelectOption(item)}
              style={{
                backgroundColor: isSelected ? colors.primaryLight3 : "white",
                borderWidth: 1,
                borderColor: isSelected ? colors.success : "transparent",
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 14,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  flex: 1,
                  marginRight: 10,
                  color: isSelected ? colors.success : "black",
                }}
              >
                {item.label}
              </Text>

              {/* icon check chỉ hiện khi được chọn */}
              {isSelected ? (
                <View
                  style={{
                    backgroundColor: colors.success,
                    padding: 3,
                    borderRadius: 50,
                  }}
                >
                  <Check size={20} color={"white"} strokeWidth={2} />
                </View>
              ) : (
                <View
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderWidth: 1,
                    borderColor: colors.borderLight2,
                  }}
                />
              )}
            </Pressable>
          );
        }}
      />

      {handleAddPress && (
        <Pressable
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: colors.success,
            backgroundColor: colors.primaryLight3,
            padding: 16,
            marginTop: 12,
          }}
          onPress={handleAddPress}
        >
          <Plus size={20} color={colors.success} strokeWidth={2} />
          <Text style={{ textAlign: "center" }}>
            {addPressLabel ?? "Thêm mới"}
          </Text>
        </Pressable>
      )}
    </View>
  );
}
