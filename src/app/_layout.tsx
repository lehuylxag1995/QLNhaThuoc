import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Toaster } from "sonner-native";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="nhap-hang/index" options={{ headerShown: false }} />
        <Stack.Screen
          name="nhap-hang/good-receipt"
          options={{ headerShown: false }}
        />

        <Stack.Screen name="xuat-hang/index" options={{ headerShown: false }} />
        <Stack.Screen name="kiem-hang/index" options={{ headerShown: false }} />

        {/* <Stack.Screen name="camera" /> */}
        {/* <Stack.Screen
        name="(tabs)/kho/nhap/index"
        options={{ headerShown: false }}
      /> */}
        {/* <Stack.Screen name="invoice/add" options={{ headerShown: false }} />
      <Stack.Screen name="invoice/medicines" options={{ headerShown: false }} />
      <Stack.Screen name="invoice/confirm" options={{ headerShown: false }} />

      <Stack.Screen name="medicine/add" options={{ headerShown: false }} /> */}
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
