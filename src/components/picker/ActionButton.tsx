import React from "react";
import { Pressable } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type ActionButtonProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  onPress?: () => void;
};

export default function ActionButton({
  children,
  backgroundColor = "transparent",
  onPress,
}: ActionButtonProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => {
        scale.value = withSpring(0.8, { damping: 15, stiffness: 300 });
      }}
      onPressOut={() => {
        scale.value = withSpring(1, { damping: 8, stiffness: 200 });
      }}
    >
      <Animated.View
        style={[
          { padding: 8, borderRadius: 12, backgroundColor },
          animatedStyle,
        ]}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
}
