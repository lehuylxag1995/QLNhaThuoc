import { blurhash } from "@/constants/contant";
import { colors, themeStyle } from "@/constants/theme";
import { Image } from "expo-image";
import { PackagePlus, Pill, Wallet } from "lucide-react-native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = Array.from({ length: 30 }, (_, i) => ({
  id: String(i + 1),
  name: `Thuốc ${i + 1}`,
}));

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={[themeStyle.container]}
      edges={["top", "left", "right"]}
    >
      <View style={styles.section1}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("@/assets/images/logo.png")}
              style={{ width: 80, height: 80 }}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={300}
            />
            <View style={{ flexDirection: "column", gap: 8 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: colors.text,
                  fontSize: 20,
                }}
              >
                Nhà thuốc
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: colors.textSecondary,
                  fontSize: 15,
                }}
              >
                Xin chào!
              </Text>
            </View>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
              source={require("@/assets/images/avatar-user-3d.png")}
              style={{ width: 35, height: 35 }}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          </View>
        </View>
      </View>

      <View style={styles.section2}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            padding: 16,
            borderRadius: 15,
            gap: 12,
            borderWidth: 0.2,
            borderColor: colors.border,
          }}
        >
          <View
            style={{
              padding: 10,
              backgroundColor: colors.primaryLight,
              borderRadius: 50,
            }}
          >
            <Pill size={40} color={"green"} strokeWidth={2} />
          </View>
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Tổng số thuốc
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              128
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            padding: 16,
            borderRadius: 15,
            gap: 12,
            borderWidth: 0.2,
            borderColor: colors.border,
          }}
        >
          <View
            style={{
              padding: 10,
              backgroundColor: "rgb(251, 234, 216)",
              borderRadius: 100,
            }}
          >
            <Wallet size={40} color={"#ffa500"} strokeWidth={2} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Tổng giá trị tồn kho
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              12.540.000đ
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section3}>
        <View
          style={{
            borderRadius: 15,
            backgroundColor: "white",
            flex: 1,
            borderWidth: 0.2,
            borderColor: colors.border,
          }}
        >
          {/* Header */}
          <View
            style={{
              padding: 20,
              borderBottomWidth: 0.2,
              borderBottomColor: colors.border,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Hoạt động gần đây
            </Text>
          </View>

          {/* Activity list */}
          <FlatList
            style={{ flex: 1 }}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: index === data.length - 1 ? 0 : 1,
                  borderBottomColor: "#E5E7EB",
                  alignItems: "center",
                  paddingHorizontal: 16,
                  paddingVertical: 14,
                }}
              >
                <View
                  style={{
                    gap: 10,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: colors.primaryLight,
                      borderRadius: 10,
                      padding: 5,
                    }}
                  >
                    <PackagePlus size={30} color="#16A34A" strokeWidth={1.8} />
                  </View>

                  <View style={{ gap: 3 }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        color: colors.text,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "semibold",
                        color: colors.textSecondary,
                      }}
                    >
                      27/04/2026 10:24
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: colors.primary,
                  }}
                >
                  +50
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  section1: {
    height: 120,
    justifyContent: "center",
  },
  section2: {
    height: "auto",
    justifyContent: "center",
    paddingBottom: 15,
    gap: 15,
  },
  section3: {
    flex: 1,
    paddingBottom: 15,
  },
});
