const display = document.getElementById('display');
const otpLength = 6;
const otpFields = [];

const isDigit = (value) => /^\d$/.test(value);

const populateDisplay = (length) => {
  for (let i = 0; i < length; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.inputMode = 'numeric';
    input.maxLength = 1;
    input.classList.add('slot');
    display.appendChild(input);
    otpFields.push(input);
  }
};

populateDisplay(otpLength);

display.addEventListener('keydown', (e) => {
  const target = e.target;

  if (!otpFields.includes(target)) return;

  if (isDigit(e.key)) {
    target.value = '';
    return;
  }

  if (e.key === 'ArrowLeft') {
    const prev = target.previousElementSibling;
    if (prev) prev.focus();
    e.preventDefault();
    return;
  }

  if (e.key === 'ArrowRight') {
    const next = target.nextElementSibling;
    if (next) next.focus();
    return;
  }
});

display.addEventListener('keyup', (e) => {
  const target = e.target;

  if (!otpFields.includes(target)) return;

  if (e.key === 'Backspace' || e.key === 'Delete') {
    target.value = '';
    const prev = target.previousElementSibling;
    if (prev) prev.focus();
  }
});

display.addEventListener('input', (e) => {
  const target = e.target;
  if (!otpFields.includes(target)) return;

  const value = target.value;
  if (!isDigit(value)) {
    target.value = '';
    return;
  }

  const next = target.nextElementSibling;
  if (next) {
    next.focus();
  } else {
    target.blur(); // done
  }
});

display.addEventListener('paste', (e) => {
  const clipboardData = e.clipboardData || window.clipboardData;
  const pastedData = clipboardData.getData('Text');
  
  if (typeof pastedData === 'string' && pastedData.length === otpLength && /^\d+$/.test(pastedData)) {
    otpFields.forEach((field, i) => {
      field.value = pastedData.charAt(i);
    });
    otpFields[otpLength - 1].focus();
  }

  e.preventDefault(); // Prevent default paste behavior
});
