const passwordInput = document.getElementById("password");
const progressBar = document.getElementById("progressBar");
const strengthEl = document.getElementById("strength");
const charsEl = document.getElementById("chars");
const lcEl = document.getElementById("lc");
const ucEl = document.getElementById("uc");
const numEl = document.getElementById("num");
const symEl = document.getElementById("sym");

const hasLowerCase = /[a-z]/;
const hasUpperCase = /[A-Z]/;
const hasNumber = /\d/;
const hasSpecial = /[^A-Za-z0-9]/;

const strengths = [
  { label: "Weak", color: "red" },
  { label: "Medium", color: "orange" },
  { label: "Strong", color: "green" }
];

function getScore(pw) {
  let score = 0;
  if (pw.length >= 8) score++;
  if (hasLowerCase.test(pw)) score++;
  if (hasUpperCase.test(pw)) score++;
  if (hasNumber.test(pw)) score++;
  if (hasSpecial.test(pw)) score++;
  return score;
}

function updateUI(pw) {
  const score = getScore(pw);
  const strength = score >= 4 ? strengths[2] : score >= 3 ? strengths[1] : strengths[0];

  // Progress bar width and color
  progressBar.style.width = (score / 5) * 100 + "%";
  progressBar.style.backgroundColor = strength.color;

  // Strength text
  strengthEl.textContent = strength.label;
  charsEl.textContent = pw.length;

  // Indicators
  lcEl.className = hasLowerCase.test(pw) ? "true" : "";
  ucEl.className = hasUpperCase.test(pw) ? "true" : "";
  numEl.className = hasNumber.test(pw) ? "true" : "";
  symEl.className = hasSpecial.test(pw) ? "true" : "";
}

passwordInput.addEventListener("input", () => {
  updateUI(passwordInput.value);
});
