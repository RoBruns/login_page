const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Continua o código existente e adicione o seguinte:

const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');

// Função para esconder o container
function hideContainer() {
    container.classList.add('hide-container');
}

// Quando o formulário de registro é submetido
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio real do formulário
    hideContainer();
    // Aqui você pode adicionar chamadas AJAX ou fetch se estiver lidando com uma aplicação de página única (SPA)
});

// Quando o formulário de login é submetido
signInForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio real do formulário
    hideContainer();
    // Aqui você pode adicionar chamadas AJAX ou fetch se estiver lidando com uma aplicação de página única (SPA)
});