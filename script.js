const button = document.getElementById('dropdownButton');
const content = document.getElementById('dropdownContent');
const playButton = document.getElementById('playButton');
let selectedUrl = null;

// Abre/fecha o menu
button.addEventListener('click', (event) => {
  event.stopPropagation();
  content.classList.toggle('show');
});

// Fecha o menu se clicar fora
window.addEventListener('click', (event) => {
  if (!content.contains(event.target) && !button.contains(event.target)) {
    content.classList.remove('show');
  }
});

// Seleciona uma opção
content.querySelectorAll('div').forEach(option => {
  option.addEventListener('click', (event) => {
    const selectedText = event.target.textContent;
    selectedUrl = event.target.getAttribute('data-url');
    button.textContent = selectedText;
    content.classList.remove('show');
  });
});

// Redireciona ao clicar em "Play"
playButton.addEventListener('click', () => {
  if (selectedUrl) {
    window.location.href = selectedUrl;
  } else {
    alert("Por favor, selecione uma versão antes de clicar em Play!");
  }
});