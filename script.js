/*
  JavaScript ทำให้หน้าเว็บตอบสนองผู้ใช้ได้
  เช่น เปลี่ยนข้อความ ทักทายตามเวลา และรับข้อมูลจากฟอร์ม
*/

// querySelector ใช้หาชิ้นส่วนในหน้าเว็บจาก id หรือ class
const greeting = document.querySelector("#greeting");
const year = document.querySelector("#year");
const themeToggle = document.querySelector("#theme-toggle");
const form = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

// ดูชั่วโมงปัจจุบัน แล้วเลือกคำทักทายให้เหมาะกับเวลา
function getGreetingText() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "สวัสดีตอนเช้า ฉันคือ Butter";
  }
  if (hour < 18) {
    return "สวัสดีตอนบ่าย ฉันคือ Butter";
  }
  return "สวัสดีตอนเย็น ฉันคือ Butter";
}

greeting.textContent = getGreetingText();

// ใส่ปีปัจจุบันลงท้ายหน้า
year.textContent = new Date().getFullYear();

// เมื่อกดปุ่ม ให้สลับคลาส dark-soft บน body
themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-soft");
  themeToggle.textContent = isDark ? "โหมดสว่าง" : "โหมดมืดอ่อน";
});

// ฟังก์ชัน submit ของฟอร์ม: กันหน้าเว็บรีเฟรช แล้วนำชื่อมาแสดงข้อความ
form.addEventListener("submit", (event) => {
  event.preventDefault(); // ไม่ให้เบราว์เซอร์โหลดหน้าใหม่

  const nameInput = document.querySelector("#visitor-name");
  const messageInput = document.querySelector("#visitor-message");
  const name = nameInput.value.trim();

  formStatus.textContent = `ขอบคุณคุณ ${name} ที่ฝากข้อความไว้ นี่เป็นตัวอย่างการทำงานของ JavaScript`;

  // ล้างช่องกรอกหลังส่ง เพื่อให้พร้อมพิมพ์ใหม่
  nameInput.value = "";
  messageInput.value = "";
});
