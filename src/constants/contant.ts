export const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export const formatDate = (date: Date) =>
  date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

export type SelectOptions<T extends string | number> = {
  label: string;
  value: T;
};

export const LIST_REASON = [
  {
    label: "Nhập từ nhà cung cấp",
    value: "supplier",
  },
  {
    label: "Nhập tồn",
    value: "opening-balance",
  },
  {
    label: "Nhập trả lại từ khách hàng",
    value: "return",
  },
  {
    label: "Nhập điều chuyển",
    value: "transfer-in",
  },
  {
    label: "Nhập hàng thành phẩm",
    value: "manufactured",
  },
  {
    label: "Nhập khẩu",
    value: "imported",
  },
  {
    label: "Nhập khác",
    value: "other",
  },
];

export const LIST_SYSTEM_STATUS = [
  {
    value: "Dữ liệu đã được hệ thống tiếp nhận để xử lý",
    label: "accepted",
  },
  {
    value: "Dữ liệu đang được hệ thống xử lý",
    label: "processing",
  },
  {
    value: "Dữ liệu đã được xử lý xong",
    label: "completed",
  },
  {
    label: "error",
    value: "Có lỗi xảy ra trong quá trình xử lý dữ liệu (Lỗi hệ thống)",
  },
  {
    label: "rejected",
    value:
      "Hệ thống từ chối xử lý do dữ liệu gửi lên không tuân thủ các ràng buộc, logic yêu cầu",
  },
];

export const LIST_SUPPLIERS = [
  {
    label: "CÔNG TY TNHH DƯỢC PHẨM & DỤNG CỤ Y TẾ THÁI BÌNH",
    value: 1,
  },
  {
    label: "CÔNG TY Lê Huy",
    value: 2,
  },
  {
    label: "BỆNH VIỆN 115",
    value: 3,
  },
  {
    label: "BỆNH VIỆN THÀNH PHỐ LONG XUYÊN",
    value: 4,
  },
  {
    label: "BỆNH VIỆN ĐA KHOA KHU VỰC AN GIANG",
    value: 5,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 6,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 7,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 8,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 9,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 10,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 11,
  },
];

export const LIST_SOURCE_BRANCH = [
  {
    label: "CÔNG TY TNHH DƯỢC PHẨM & DỤNG CỤ Y TẾ THÁI BÌNH",
    value: 1,
  },
  {
    label: "CÔNG TY Lê Huy",
    value: 2,
  },
  {
    label: "BỆNH VIỆN 115",
    value: 3,
  },
  {
    label: "BỆNH VIỆN THÀNH PHỐ LONG XUYÊN",
    value: 4,
  },
  {
    label: "BỆNH VIỆN ĐA KHOA KHU VỰC AN GIANG",
    value: 5,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 6,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 7,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 8,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 9,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 10,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 11,
  },
];

export const LIST_SOURCE_WAREHOUSE_CODE = [
  {
    label: "CÔNG TY TNHH DƯỢC PHẨM & DỤNG CỤ Y TẾ THÁI BÌNH",
    value: 1,
  },
  {
    label: "CÔNG TY Lê Huy",
    value: 2,
  },
  {
    label: "BỆNH VIỆN 115",
    value: 3,
  },
  {
    label: "BỆNH VIỆN THÀNH PHỐ LONG XUYÊN",
    value: 4,
  },
  {
    label: "BỆNH VIỆN ĐA KHOA KHU VỰC AN GIANG",
    value: 5,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 6,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 7,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 8,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 9,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 10,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 11,
  },
];

export const LIST_DESTINATION_BRANCH = [
  {
    label: "CÔNG TY TNHH DƯỢC PHẨM & DỤNG CỤ Y TẾ THÁI BÌNH",
    value: 1,
  },
  {
    label: "CÔNG TY Lê Huy",
    value: 2,
  },
  {
    label: "BỆNH VIỆN 115",
    value: 3,
  },
  {
    label: "BỆNH VIỆN THÀNH PHỐ LONG XUYÊN",
    value: 4,
  },
  {
    label: "BỆNH VIỆN ĐA KHOA KHU VỰC AN GIANG",
    value: 5,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 6,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 7,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 8,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 9,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 10,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 11,
  },
];

export const LIST_DESTINATION_WAREHOUSE_CODE = [
  {
    label: "CÔNG TY TNHH DƯỢC PHẨM & DỤNG CỤ Y TẾ THÁI BÌNH",
    value: 1,
  },
  {
    label: "CÔNG TY Lê Huy",
    value: 2,
  },
  {
    label: "BỆNH VIỆN 115",
    value: 3,
  },
  {
    label: "BỆNH VIỆN THÀNH PHỐ LONG XUYÊN",
    value: 4,
  },
  {
    label: "BỆNH VIỆN ĐA KHOA KHU VỰC AN GIANG",
    value: 5,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 6,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 7,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 8,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 9,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 10,
  },
  {
    label: "CÔNG TY THUỐC DƯỢC PHẨM TRÚC CHI",
    value: 11,
  },
];
