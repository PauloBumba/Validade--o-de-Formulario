document.getElementById('myForm').addEventListener('submit', function(event) {
    // Previne o envio do formulário
    event.preventDefault();

    // Obtém valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const cep = document.getElementById('cep').value;
    const phone = document.getElementById('phone').value;
    const cpf = document.getElementById('cpf').value;

    // Validações
    if (!validateNome(nome)) return;
    if (!validateEmail(email)) return;
    if (!validatePassword(password)) return;
    if (!validateConfirmPassword(password, confirmPassword)) return;
    if (!validateCEP(cep)) return;
    if (!validatePhone(phone)) return;
    if (!validateCPF(cpf)) return;

    // Se todas as validações passarem, o formulário pode ser enviado
    alert('Formulário enviado com sucesso!');
    // Aqui você pode enviar o formulário, por exemplo, usando AJAX ou similar
    // this.submit();
});

function validateNome(nome)
{
    if (nome.trim() === '') {
        alert('Por favor, insira seu nome.');
        return false;
    }
    return true;
}

function validateEmail(email) 
{
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
        alert('Por favor, insira um email válido.');
        return false;
    }
    return true;
}

function validatePassword(password) {
    const re = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;
    if (!re.test(password)) {
        alert('A senha deve ter pelo menos 6 caracteres, incluindo um caractere especial.');
        return false;
    }
    return true;
}

function validateConfirmPassword(password, confirmPassword) 
{
    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return false;
    }
    return true;
}

function validateCEP(cep)
{
    const re = /^\d{11}$/;
    if (!re.test(cep)) {
        alert('Por favor, insira um CEP válido com exatamente 11 dígitos.');
        return false;
    }
    return true;
}

function validatePhone(phone) 
{
    const re = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
    if (!re.test(phone)) {
        alert('Por favor, insira um telefone válido no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX.');
        return false;
    }
    return true;
}

function validateCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');
    if (cpf == '') {
        alert('Por favor, insira um CPF válido.');
        return false;
    }
    if (cpf.length != 11 || /^(\d)\1{10}$/.test(cpf)) 
    {
        alert('Por favor, insira um CPF válido.');
        return false;
    }
    let add = 0;
    for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(9))) {
        alert('Por favor, insira um CPF válido.');
        return false;
    }
    add = 0;
    for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(10))) {
        alert('Por favor, insira um CPF válido.');
        return false;
    }
    return true;
}