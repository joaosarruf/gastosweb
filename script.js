function registrarGasto() {
    const valorInput = parseFloat(document.getElementById('valor_input').value);
    const tipoSelect = document.getElementById('tipo_select').value;
    const categoriaSelect = document.getElementById('categoria_select');
    const categoriaSelecionada = categoriaSelect.options[categoriaSelect.selectedIndex].value;

    if (isNaN(valorInput) || valorInput <= 0) {
        alert('Digite um valor válido maior que zero.');
        return;
    }

    const saldoElement = document.getElementById('saldo');
    const saldoAtual = parseFloat(saldoElement.innerText);
    let novoSaldo;

    if (tipoSelect === 'entrada') {
        const categoriaElement = document.getElementById(categoriaSelecionada);
        const valorCategoria = parseFloat(categoriaElement.innerText);
        novoSaldo = saldoAtual + valorInput;
        categoriaElement.innerText = (valorCategoria + valorInput).toFixed(2);
    } else if (tipoSelect === 'retirada') {
        const categoriaElement = document.getElementById(categoriaSelecionada);
        const valorCategoria = parseFloat(categoriaElement.innerText);

        if (valorCategoria >= valorInput) {
            novoSaldo = saldoAtual - valorInput;
            categoriaElement.innerText = (valorCategoria - valorInput).toFixed(2);
        } else {
            alert('Saldo insuficiente na categoria selecionada.');
            return;
        }
    }

    saldoElement.innerText = novoSaldo.toFixed(2);
    document.getElementById('valor_input').value = '';
}
