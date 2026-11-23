import { SelectOptions } from "@/constants/contant";
import { colors } from "@/constants/theme";
import { BottomSheetFlatList } from "@expo/ui/community/bottom-sheet";
import { LucideIcon, Plus, X } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import ButtonCustom from "../ButtonCustom";
import { PickerProvider } from "./PickerContext";
import PickerItem from "./PickerItem";

export type PickerProps<T extends string | number> = {
  // Picker
  Icon?: LucideIcon;
  IconColor?: string;
  title?: string;
  labelPickerButtonAdd?: string;
  handlePickerClose: () => void;
  handlePickerButtonAdd?: () => void;

  // Picker provider
  onSelect: (item: SelectOptions<T>) => void;
  onEdit?: (item: SelectOptions<T>) => void;
  onDelete?: (item: SelectOptions<T>) => void;

  //Form select
  options: SelectOptions<T>[];
  value?: T;
};

export default function Picker<T extends string | number>({
  // Picker
  Icon,
  IconColor = colors.success,
  title = "Thông tin danh sách",
  handlePickerClose,
  handlePickerButtonAdd,
  labelPickerButtonAdd,

  // Picker Provider
  onSelect,
  onDelete,
  onEdit,

  //Form select
  options,
  value,
}: PickerProps<T>) {
  return (
    <PickerProvider
      value={{
        value: value,
        onSelect: onSelect,
        onDelete: onDelete,
        onEdit: onEdit,
      }}
    >
      <View
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        {/* header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 16,
            paddingHorizontal: 15,
          }}
        >
          <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
            {Icon && <Icon size={30} color={IconColor} strokeWidth={2} />}
            <Text style={{ fontSize: 15, fontWeight: "500" }}>{title}</Text>
          </View>
          <Pressable onPress={handlePickerClose}>
            <X size={30} color={colors.border} strokeWidth={2} />
          </Pressable>
        </View>

        {/* noi dung */}
        <BottomSheetFlatList
          style={{ flex: 1 }}
          data={options}
          keyExtractor={(item) => String(item.value)}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{ paddingVertical: 5 }}>
              <View
                style={{ height: 1, backgroundColor: colors.borderLight4 }}
              />
            </View>
          )}
          renderItem={({ item }) => {
            return <PickerItem item={item} />;
          }}
        />

        {/* Nut them */}
        {handlePickerButtonAdd && (
          <View style={{ marginTop: 12 }}>
            <ButtonCustom
              title={labelPickerButtonAdd ?? "Thêm mới"}
              Icon={Plus}
              handleOnPress={handlePickerButtonAdd}
            />
          </View>
        )}
      </View>
    </PickerProvider>
  );
}
