/* Cấu hình Escalier (bản riêng).
   1) Đăng nhập & sao lưu: dán khối firebaseConfig lấy từ Firebase (xem HUONG-DAN.md) vào chỗ firebase: null
   2) AI chấm bài: KHÔNG nên dán khóa Gemini ở đây nếu kho GitHub để công khai; mỗi người học tự dán khóa trong app (Hồ sơ → AI chấm bài). */
window.ESCALIER_CONFIG = {
  firebase: null,
  gemini: ""
};
