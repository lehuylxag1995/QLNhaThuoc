import { colors } from "@/constants/theme";
import { PenLine, Pill, Trash } from "lucide-react-native";
import { View } from "react-native";

import Typography from "@/components/ui/Typography";
import MedicineItemInfo from "./MedicineItemInfo";

type CardInfoProps = {
  name: string;
  idMedicine: string | number;

  donvitinh: string;
  soluong: number;
  solo: string;
  hansudung: string;
};

export default function MedicineItemCard({
  name,
  idMedicine,
  donvitinh,
  hansudung,
  solo,
  soluong,
}: CardInfoProps) {
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 15,
        borderWidth: 1,
        borderRadius: 14,
        borderColor: colors.borderLight,
        gap: 10,
      }}
    >
      {/* header */}
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        {/* icon */}
        <View
          style={{
            backgroundColor: colors.infoBackground,
            padding: 10,
            borderRadius: 14,
          }}
        >
          <Pill size={20} color={colors.info} strokeWidth={2} />
        </View>
        {/* ten thuoc */}
        <View style={{ flex: 1, gap: 3 }}>
          <Typography style={{ fontSize: 14, fontWeight: "500" }}>
            {name}
          </Typography>
          <View
            style={{
              backgroundColor: colors.borderLight,
              borderRadius: 14,
              alignSelf: "flex-start",
              paddingHorizontal: 8,
              paddingVertical: 2,
            }}
          >
            <Typography style={{ fontSize: 10 }}>Mã: {idMedicine}</Typography>
          </View>
        </View>
        {/* 2 nut sua  + xoa */}
        <View
          style={{
            backgroundColor: colors.successBackground,
            padding: 10,
            borderRadius: 14,
          }}
        >
          <PenLine size={20} color={colors.success} strokeWidth={2} />
        </View>
        <View
          style={{
            backgroundColor: colors.errorBackground,
            padding: 10,
            borderRadius: 14,
          }}
        >
          <Trash size={20} color={colors.error} strokeWidth={2} />
        </View>
      </View>

      {/* info */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <MedicineItemInfo title="Đơn vị tính" value={donvitinh} />
        <MedicineItemInfo
          title="Số lượng"
          value={soluong}
          valueColor={colors.success}
        />
        <MedicineItemInfo title="Số lô sản xuất" value={solo} />
        <MedicineItemInfo title="Hạn sử dụng" value={hansudung} />
      </View>
    </View>
  );
}
