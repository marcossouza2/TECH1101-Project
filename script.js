const WIDTH = document.body.clientWidth;
const HEIGHT = document.body.clientHeight;
const BTN_H_MAR = 90;
const BTN_W_MAR = 120;

function random(nobtn) {
  nobtn.style.position = "absolute";
  let randomH = Math.random() * HEIGHT + BTN_H_MAR;
  let randomW = Math.random() * WIDTH + BTN_W_MAR;
  //Adjusting sizes for preventing offscreens
  randomW = adjustW(randomW);
  randomH = adjustH(randomH);
  nobtn.style.top = `${randomH}px`;
  nobtn.style.right = `${randomW}px`;
}

function adjustW(rW) {
  if (rW <= BTN_W_MAR) rW = BTN_W_MAR;
  else if (rW >= WIDTH - BTN_W_MAR) rW = WIDTH - BTN_W_MAR;
  return rW;
}

function adjustH(rH) {
  if (rH <= BTN_H_MAR) rH = BTN_H_MAR;
  else if (rH >= WIDTH - BTN_H_MAR) rH = WIDTH - BTN_H_MAR;
  return rH;
}

function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function applyTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);
    applyTheme();
});

document.getElementById("yesbtn").onclick = function () {
    location.href = "html.html";
};