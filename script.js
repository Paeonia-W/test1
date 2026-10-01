const button = document.getElementById('show-message');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = '你好！你已成功点击按钮，欢迎探索 JavaScript 的交互效果。';
});
