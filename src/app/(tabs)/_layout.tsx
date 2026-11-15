import { colors } from "@/constants/theme";
import { Tabs } from "expo-router";
import { Home, Warehouse } from "lucide-react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.border,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          height: 60,
          marginHorizontal: 10,
          borderRadius: 50,
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: colors.success,
          borderTopWidth: 1,
          borderTopColor: colors.success,
        },
        tabBarItemStyle: {
          height: 60,
          borderRadius: 50,
          // backgroundColor: "red",
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Trang chủ",
          tabBarIcon: ({ color, size }) => (
            <Home color={color} size={size} strokeWidth={2} />
          ),
        }}
      />
      <Tabs.Screen
        name="warehouse"
        options={{
          title: "Kho",
          tabBarIcon: ({ color, size }) => (
            <Warehouse color={color} size={size} strokeWidth={2} />
          ),
        }}
      />
    </Tabs>
  );
}
