const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const form = document.getElementById("quiz-form");
const feedback = document.getElementById("feedback");
const loading = document.getElementById("loading");

let correctAnswer = "";

function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

async function fetchQuestion() {
  loading.style.display = "block";
  quizContainer.style.display = "none";
  feedback.textContent = "";

  
  const res = await fetch("https://opentdb.com/api.php?amount=1&type=multiple");
  const data = await res.json();
  const q = data.results[0];

  const question = decodeHtml(q.question);
  correctAnswer = decodeHtml(q.correct_answer);
  const answers = shuffleArray([
    correctAnswer,
    ...q.incorrect_answers.map(decodeHtml),
  ]);

  questionEl.textContent = question;
  answers.forEach((ans, idx) => {
    const radio = document.getElementById(`choice${idx + 1}`);
    const label = document.getElementById(`label${idx + 1}`);
    radio.value = ans;
    label.textContent = ans;
  });

  loading.style.display = "none";
  quizContainer.style.display = "block";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const selected = document.querySelector('input[name="choices"]:checked');
  if (!selected) return;

  if (selected.value === correctAnswer) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `❌ Wrong! Correct Answer: ${correctAnswer}`;
    feedback.style.color = "red";
  }

  setTimeout(() => {
    form.reset();
    fetchQuestion();
  }, 2000);
});

document.addEventListener("DOMContentLoaded", fetchQuestion);
