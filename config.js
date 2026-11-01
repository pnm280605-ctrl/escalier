/* Cấu hình Escalier (bản riêng).
   1) Đăng nhập & sao lưu: dán khối firebaseConfig lấy từ Firebase (xem HUONG-DAN.md) vào chỗ firebase: null
   2) AI chấm bài: KHÔNG nên dán khóa Gemini ở đây nếu kho GitHub để công khai; mỗi người học tự dán khóa trong app (Hồ sơ → AI chấm bài). */
window.ESCALIER_CONFIG = {
  firebase: {
    apiKey: "AIzaSyAtvLpOhFhL32GXyyGVxn5adwXGVqDx5BY",
    authDomain: "escalier-99065.firebaseapp.com",
    projectId: "escalier-99065",
    storageBucket: "escalier-99065.firebasestorage.app",
    messagingSenderId: "854619029516",
    appId: "1:854619029516:web:916677f44a47a78e99ae29",
    measurementId: "G-5FTD2GJYZ4"
  },
  gemini: ""
};
