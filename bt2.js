function tinhLaiKep(vonGoc, laiSuat = 0.05, soNam = 1) {
  return vonGoc * Math.pow(1 + laiSuat, soNam);
}
//arrow
const tinhLaiKep = (vonGoc, laiSuat = 0.05, soNam = 1) =>
  vonGoc * (1 + laiSuat) ** soNam;
