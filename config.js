// ==========================================
// ไฟล์: config.js (ศูนย์รวมตัวแปรสำหรับ Frontend บน GitHub)
// ==========================================

const APP_CONFIG = {
  // 1. ลิงก์ Google Apps Script (Web App URL)
  GAS_API_URL: "https://script.google.com/macros/s/AKfycbw2K9DLTTWTAYkPR5v23ZHkCSNISqiF_gkvVnzHZJJCA-_YnNUKoySCTSwnQeLAvmOENw/exec",

  // 2. ข้อมูล LIFF ID สำหรับใช้ในฟังก์ชัน liff.init()
  LIFF_MAIN: "2010894828-FWOl6zme",
  LIFF_QR: "2010894828-9WIoHvv9",
  LIFF_FORM: "2010894828-Ge6qDj7e",
  LIFF_SHARE: "2010894828-FWOl6zme",
  LIFF_POLICY: "2010894828-Oyj63Qc3",
  LIFF_QUOTATION: "2010894828-PMxAjpX9",
  LIFF_REGISTER_ID: "2010894828-toMvnZee",

  // 3. ข้อมูล URL เต็ม (สำหรับแชร์หรือทำปุ่มกด)
  URL_FRIEND: "https://line.me/R/ti/p/@poy365",
  URL_FORM: "https://liff.line.me/2010894828-Ge6qDj7e",
  URL_SHARE: "https://liff.line.me/2010894828-FWOl6zme",
  URL_QR: "https://liff.line.me/2010894828-9WIoHvv9",
  URL_POLICY: "https://liff.line.me/2010894828-Oyj63Qc3",
  URL_REGISTER: "https://liff.line.me/2010894828-toMvnZee",

  // 4. การตั้งค่าอื่นๆ (ที่ไม่ใช่ความลับ)
  PREFIX_CODE: "POY-",
  REWARD_POINT: 50
};

// ==========================================
// 🛡️ โค้ดพระเอก: ระบบหั่นช่องว่าง (Trim) อัตโนมัติป้องกัน Error ให้ทุกไฟล์
// ==========================================
Object.keys(APP_CONFIG).forEach(key => {
  if (typeof APP_CONFIG[key] === 'string') {
    APP_CONFIG[key] = APP_CONFIG[key].trim();
  }
});


