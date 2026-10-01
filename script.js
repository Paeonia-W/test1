const button = document.getElementById('show-message');
const message = document.getElementById('message');
const nameInput = document.getElementById('name');

button.addEventListener('click', () => {
  const name = nameInput.value.trim();
  message.textContent = name ? `你好，${name}` : '请输入你的名字。';
  if (!name) {
    nameInput.focus();
  }
});
