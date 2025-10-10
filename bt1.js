console.log("Thể tích là:", tinhTheTichHinhHop(3, 4, 5));
function tinhTheTichHinhHop(chieuDai, chieuRong, chieuCao) {
  if (
    typeof chieuDai !== "number" ||
    chieuDai <= 0 ||
    typeof chieuRong !== "number" ||
    chieuRong <= 0 ||
    typeof chieuCao !== "number" ||
    chieuCao <= 0
  ) {
    return "Thông số không hợp lệ. Vui lòng nhập lại.";
  }
  return chieuDai * chieuRong * chieuCao;
}
// Arrow function
const tinhTheTichHinhHopArrow = (a, b, c) =>
  a > 0 && b > 0 && c > 0
    ? a * b * c
    : "Thông số không hợp lệ. Vui lòng nhập lại.";
console.log("Thể tích (arrow):", tinhTheTichHinhHopArrow(3, 4, 5));
