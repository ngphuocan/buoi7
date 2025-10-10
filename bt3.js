let dsSinhVien = [];
const nhapSinhVien = () => {
  const ten = prompt("Nhập họ tên:");
  const tuoi = parseInt(prompt("Nhập tuổi:"), 10);
  const diaChi = prompt("Nhập địa chỉ:");
  const sdt = prompt("Nhập số điện thoại:");
  return { ten, tuoi, diaChi, sdt };
};
const xayDungChuoi = ({ ten, tuoi, diaChi, sdt }) =>
  `Tên: ${ten}, Tuổi: ${tuoi}, Địa chỉ: ${diaChi}, SĐT: ${sdt}`;

const inDanhSachSV = (ds) => ds.forEach((sv) => console.log(xayDungChuoi(sv)));

const xapXepDanhSachSV = (ds) =>
  [...ds].sort((a, b) => a.ten.localeCompare(b.ten));

const timSinhVienTheoSDT = (ds, sdt) =>
  ds.find((sv) => sv.sdt === sdt) || "Không tìm thấy sinh viên";

const locSinhVienTheoTuoi = (ds, tuoiCanTim) =>
  ds.filter((sv) => sv.tuoi === tuoiCanTim);
// Thêm sinh viên
dsSinhVien.push(nhapSinhVien());
dsSinhVien.push(nhapSinhVien());
dsSinhVien.push(nhapSinhVien());
dsSinhVien.push(nhapSinhVien());
dsSinhVien.push(nhapSinhVien());
dsSinhVien.push(nhapSinhVien());
dsSinhVien.push(nhapSinhVien());
dsSinhVien.push(nhapSinhVien());
// In danh sách
inDanhSachSV(dsSinhVien);
