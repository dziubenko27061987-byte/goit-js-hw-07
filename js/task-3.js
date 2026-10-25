const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {
const trimmedValue = event.currentTarget.value.trim();

  
  spanEl.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});