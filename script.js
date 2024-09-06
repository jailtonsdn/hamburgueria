// Armazenar itens do carrinho
let carrinho = [];
let total = 0;

// Adiciona item ao carrinho
function adicionarAoCarrinho(nome, preco) {
    // Verifica se o item já está no carrinho
    let item = carrinho.find(item => item.nome === nome);
    if (item) {
        item.quantidade += 1;
    } else {
        carrinho.push({ nome, preco, quantidade: 1 });
    }
    atualizarCarrinho();
}

// Atualiza o carrinho na interface
function atualizarCarrinho() {
    const itensCarrinho = document.getElementById('itens-carrinho');
    const cartCount = document.getElementById('cart-count');
    const totalElement = document.getElementById('total');
    const resumoPedido = document.getElementById('resumo-pedido');
    const finalizacaoContent = document.getElementById('finalizacao-content');

    if (carrinho.length === 0) {
        itensCarrinho.innerHTML = '<p>Carrinho vazio</p>';
        totalElement.innerHTML = 'Total: R$ 0,00';
        resumoPedido.innerHTML = '';
        cartCount.innerHTML = '0';
    } else {
        let itensHtml = '';
        let totalPreco = 0;

        carrinho.forEach(item => {
            itensHtml += `<p>${item.nome} - R$ ${item.preco.toFixed(2)} x ${item.quantidade}</p>`;
            totalPreco += item.preco * item.quantidade;
        });

        itensCarrinho.innerHTML = itensHtml;
        totalElement.innerHTML = `Total: R$ ${totalPreco.toFixed(2)}`;
        cartCount.innerHTML = carrinho.length;

        let resumoHtml = '';
        carrinho.forEach(item => {
            resumoHtml += `<p>${item.nome} - R$ ${item.preco.toFixed(2)} x ${item.quantidade}</p>`;
        });
        resumoPedido.innerHTML = resumoHtml;
    }
}

// Mostra ou oculta a modal
function toggleModal() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Navega para a finalização do pedido
function irParaFinalizacao() {
    const carrinhoContent = document.getElementById('carrinho-content');
    const finalizacaoContent = document.getElementById('finalizacao-content');

    carrinhoContent.style.display = 'none';
    finalizacaoContent.style.display = 'block';
}

// Confirma o pedido
function confirmarPedido() {
    // Adiciona lógica para processar o pedido
    alert('Pedido confirmado!');

    // Limpa o carrinho e retorna ao início
    carrinho = [];
    atualizarCarrinho();
    toggleModal();
}

// Cancela o pedido
function cancelarPedido() {
    const carrinhoContent = document.getElementById('carrinho-content');
    const finalizacaoContent = document.getElementById('finalizacao-content');

    carrinhoContent.style.display = 'block';
    finalizacaoContent.style.display = 'none';
}

// Esvazia o carrinho
function esvaziarCarrinho() {
    carrinho = [];
    atualizarCarrinho();
}

// Adiciona o evento para fechar a modal
document.querySelector('.modal .close').addEventListener('click', toggleModal);
