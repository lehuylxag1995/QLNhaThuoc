import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Toaster } from "sonner-native";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="stock-in/create"
          options={{ presentation: "card" }}
        />
        <Stack.Screen
          name="stock-in/add-item"
          options={{ presentation: "card" }}
        />
      </Stack>

      <Toaster
        position="top-center"
        duration={6000}
        maxFontSizeMultiplier={1.2} // giới hạn theo kích thước chữ hệ thống
        closeButton={true} // hiện nút đóng
        toastOptions={{
          style: { borderRadius: 16 },
        }}
      />
    </GestureHandlerRootView>
  );
}
