let minute = document.querySelector("#minute");
let hour = document.querySelector("#hour");
let second = document.querySelector("#second");

setInterval(() => {
  let date_now = new Date();
  let hr = date_now.getHours();
  let min = date_now.getMinutes();
  let sec = date_now.getSeconds();
  let calc_hr = hr * 30 + min / 2;
  let calc_min = min * 6 + sec / 10;
  let calc_sec = sec * 6;
  hour.style.transform = `rotate(${calc_hr}deg)`;
  minute.style.transform = `rotate(${calc_min}deg)`;
  second.style.transform = `rotate(${calc_sec}deg)`;
}, 1000);