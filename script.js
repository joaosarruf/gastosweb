let usuarioLogado = null; // Variável para armazenar o usuário logado

function fazerLogin() {
    const usuario = document.getElementById('username').value;
    const senha = document.getElementById('password').value;

    // Verificar as credenciais (neste exemplo, usuário: "admin", senha: "1234")
    if (usuario === "admin" && senha === "1234") {
        usuarioLogado = usuario; // Armazena o usuário logado
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
        mostrarPaginaPrincipal();
    } else {
        alert("Preencha todos os campos para criar uma conta.");
    }
}

function mostrarPaginaPrincipal() {
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.register-form').style.display = 'none';
    document.querySelector('.pagina-principal').style.display = 'block';
    document.getElementById('username-display').innerText = usuarioLogado;
}

// Restante do código (conforme a versão anterior)

