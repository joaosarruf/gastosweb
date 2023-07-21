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

function registrarGasto() {
    // Restante do código para registro de gastos e atualização dos valores (conforme o código original)
    // ...
}

function mostrarFormularioCategoria() {
    // Esconde a seção de categorias
    document.querySelector('.categorias').style.display = 'none';
    // Exibe o formulário de criação de categorias
    document.querySelector('.categorias-editar').style.display = 'block';
}

function criarCategoria() {
    const novaCategoria = document.getElementById('nova_categoria_input').value;

    // Verificar se o campo está preenchido
    if (novaCategoria) {
        // Verificar se a categoria já existe
        if (document.getElementById(novaCategoria) === null) {
            // Criar a nova categoria
            const novaCategoriaElement = document.createElement('p');
            novaCategoriaElement.innerHTML = `${novaCategoria}: R$ <span id="${novaCategoria}">0.00</span> <button onclick="editarCategoria('${novaCategoria}')">Editar</button>`;
            document.querySelector('.categorias').appendChild(novaCategoriaElement);
            // Limpar o campo de input
            document.getElementById('nova_categoria_input').value = '';
            // Esconder o formulário
            document.querySelector('.categorias-editar').style.display = 'none';
            // Exibir a seção de categorias novamente
            document.querySelector('.categorias').style.display = 'block';
        } else {
            alert("Essa categoria já existe.");
        }
    } else {
        alert("Digite o nome da nova categoria.");
    }
}

function editarCategoria(categoria) {
    const novoValor = prompt(`Digite o novo valor para a categoria ${categoria}:`);
    if (novoValor !== null && !isNaN(parseFloat(novoValor)) && parseFloat(novoValor) >= 0) {
        const categoriaElement = document.getElementById(categoria);
        categoriaElement.innerText = parseFloat(novoValor).toFixed(2);
        atualizarSaldoTotal(); // Chamamos a função para atualizar o saldo total
    } else {
        alert("Digite um valor válido maior ou igual a zero.");
    }
}

// Função para atualizar o saldo total após a edição de uma categoria
function atualizarSaldoTotal() {
    // Restante do código para atualização do saldo total (conforme o código original)
    // ...
}
