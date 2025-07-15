function showTime() {
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  let session = "AM";
if (h > 12) {
  h -= 12;
  session = "PM";
}

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;


document.getElementById("h-val").innerText = h;
document.getElementById("session").innerText = session;
  document.getElementById("Min").innerText = m;
  document.getElementById("Sec").innerText = s;
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

setInterval(showTime, 1000);

showTime();
