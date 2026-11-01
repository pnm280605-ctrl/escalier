/* Cấu hình Escalier (bản riêng). */
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
  sharedAI: true,    // AI chấm bài chung qua Firebase AI Logic (người học chỉ cần đăng nhập)
  sharedDaily: 80,   // số lượt AI chung tối đa mỗi máy mỗi ngày
  gemini: ""         // để trống: không dán khóa Gemini vào đây vì kho GitHub công khai
};
