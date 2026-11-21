import { colors } from "@/constants/theme";
import { PencilLine, Trash } from "lucide-react-native";
import { LayoutChangeEvent } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import ActionButton from "./ActionButton";

type RightActionsProps = {
  translation: SharedValue<number>;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function RightActions({
  translation,
  onEdit,
  onDelete,
}: RightActionsProps) {
  const width = useSharedValue(0);

  const onLayout = (e: LayoutChangeEvent) => {
    width.value = e.nativeEvent.layout.width;
  };

  const stylesAnimated = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: Math.max(translation.value, -width.value) + width.value,
      },
    ],
  }));

  return (
    <Animated.View
      onLayout={onLayout}
      style={[
        {
          marginLeft: 4,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        },
        stylesAnimated,
      ]}
    >
      <ActionButton onPress={onEdit} backgroundColor={colors.infoBackground}>
        <PencilLine size={25} color={colors.info} />
      </ActionButton>

      <ActionButton onPress={onDelete} backgroundColor={colors.errorBackground}>
        <Trash size={25} color={colors.error} />
      </ActionButton>
    </Animated.View>
  );
}
