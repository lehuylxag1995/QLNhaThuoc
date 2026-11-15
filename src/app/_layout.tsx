import { Stack } from "expo-router";

export default function RootLayout() {
  return (
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
  );
}
