let usuarioLogado = null; // Variável para armazenar o usuário logado

function fazerLogin() {
    const usuario = document.getElementById('username').value;
    const senha = document.getElementById('password').value;

    // Verificar as credenciais (neste exemplo, usuário: "admin", senha: "1234")
    if (usuario === "admin" && senha === "1234") {
        usuarioLogado = usuario; // Armazena o usuário logado
        localStorage.setItem("usuarioLogado", usuario); // Salva o usuário no localStorage
        mostrarPaginaPrincipal();
    } else {
        alert("Usuário ou senha inválidos. Tente novamente.");
    }
}

function mostrarRegistro() {
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.register-form').style.display = 'block';
}

function mostrarLogin() {
    document.querySelector('.register-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'block';
}

function criarConta() {
    const novoUsuario = document.getElementById('new-username').value;
    const novaSenha = document.getElementById('new-password').value;

    // Verificar se os campos estão preenchidos (você pode adicionar mais validações aqui)
    if (novoUsuario && novaSenha) {
        usuarioLogado = novoUsuario; // Armazena o usuário logado
        localStorage.setItem("usuarioLogado", novoUsuario); // Salva o usuário no localStorage
        mostrarPaginaPrincipal();
    } else {
        alert("Preencha todos os campos para criar uma conta.");
    }
}

function mostrarPaginaPrincipal() {
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.register-form').style.display = 'none';
    document.querySelector('.pagina-principal').style.display = 'block';
    const usuarioSalvo = localStorage.getItem("usuarioLogado"); // Recupera o usuário do localStorage
    if (usuarioSalvo) {
        usuarioLogado = usuarioSalvo;
        document.getElementById('username-display').innerText = usuarioLogado;
    }
}

function registrarGasto() {
    // Restante do código para registro de gastos e atualização dos valores (conforme o código original)
    // ...
}

// Inicializar a página
window.onload = function() {
    const usuarioSalvo = localStorage.getItem("usuarioLogado");
    if (usuarioSalvo) {
        usuarioLogado = usuarioSalvo;
        mostrarPaginaPrincipal();
    } else {
        mostrarLogin();
    }
}
