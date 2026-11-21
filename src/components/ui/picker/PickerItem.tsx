import { SelectOptions } from "@/constants/contant";
import { colors } from "@/constants/theme";
import { Check } from "lucide-react-native";
import { Text, View } from "react-native";
import { Pressable } from "react-native-gesture-handler";

import { useRef } from "react";
import ReanimatedSwipeable, {
  SwipeableMethods,
} from "react-native-gesture-handler/ReanimatedSwipeable";
import { usePicker } from "./PickerContext";
import RightActions from "./RightActions";

type PickerItemProps<T extends string | number> = {
  item: SelectOptions<T>;
};

export default function PickerItem<T extends string | number>({
  item,
}: PickerItemProps<T>) {
  const { value, onSelect, onDelete, onEdit } = usePicker<T>();

  const swipeableRef = useRef<SwipeableMethods>(null);

  const canSwipe = !!onEdit || !!onDelete;

  const selected = value === item.value;

  const content = (
    <Pressable
      onPress={() => onSelect(item)}
      style={{
        backgroundColor: selected ? colors.primaryLight3 : "white",
        borderWidth: 1,
        borderColor: selected ? colors.success : "transparent",
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
          color: selected ? colors.success : "black",
        }}
      >
        {item.label}
      </Text>

      {/* icon check chỉ hiện khi được chọn */}
      {selected ? (
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

  if (!canSwipe) return content;

  return (
    <ReanimatedSwipeable
      ref={swipeableRef}
      friction={2} // độ trễ vuốt
      enableTrackpadTwoFingerGesture
      rightThreshold={40}
      renderRightActions={(progress, translation) => (
        <RightActions
          translation={translation}
          onEdit={
            onEdit
              ? () => {
                  swipeableRef.current?.close();
                  onEdit(item);
                }
              : undefined
          }
          onDelete={
            onDelete
              ? () => {
                  swipeableRef.current?.close();
                  onDelete(item);
                }
              : undefined
          }
        />
      )}
    >
      {content}
    </ReanimatedSwipeable>
  );
}
