//Função que será chamada quando clicar no botão 
//Função :Um bloco de codigo reutiluzavel que executa uma tarefa especifica

function calcular (){
    //1. Pegar os elementos da tela
    //======================================================================

    //Aqui pegamos cada checkbox pelo id
    let hamburguer = document.getElementById('Hamburguer')
    let batata = document.getElementById('BatataFrita')
    let coca = document.getElementById('Refrigerante')
    let nuggets = document.getElementById('Nuggets')
    //=======================================================================
    //Variaveis iniciais
    //=======================================================================
    //Total começa com 0
    let total = 0
    //String para guardar os itens escolhidos
    let itens= ''
    //=======================================================================
    //Verificar Produtos
    //=======================================================================
    //Se o chckbox estiver mercado (true)
    if(hamburguer.checked){
        total = total + 30 //soma o valor do hamburguer
        itens = itens + 'Hamburguer <br>'//Adiciona ao texto dos produtos
    }
    if(batata.checked){
        total = total + 15
        itens = itens + 'BatataFrita <br>'
    }
    if(coca.checked){
        total = total + 10 
        itens = itens + 'Coca cola <br>'
    }
    if(nuggets.checked){
        total = total + 15
        itens = itens + 'Nuggets <br>'
    }
    //=======================================================================
    //Pegar div do resultado
    //=======================================================================

    let resultado = document.getElementById('resultado')
    if (total === 0){
        resultado.innerHTML = 'Escolha pelo menos um item'
        return //parar a função aqui
    }

    //=======================================================================
    //Desconto
    //=======================================================================
    let subtotal = total
    let desconto = 0
    //Se o valor for maior ou igual a 30, aplicamos o desconto de 10%
    if (subtotal >=30){
        desconto = subtotal * 0.10 //10%
    }
    //=========================================================================
    //Entrega 
    //=============================================================================
    let entrega = 5
    //se passar de 40  entrega gratis
    if (subtotal - desconto >=40){
        entrega = 0 
    }
    //=============================================================================
    //Total final
    //=============================================================================
    let totalFinal = subtotal - desconto + entrega


    //=============================================================================
    //Motrar Valor 
    //=============================================================================
    resultado.innerHTML =
    '<strong>Itens</strong><br>'+itens+
    '<br> Subtotal R$' +subtotal.toFixed(2) +
    '<br> Desconto R$' +desconto.toFixed(2) +
    '<br> Entrega R$' +entrega.toFixed(2) +
    '<br></strong> Total: R$ ' +totalFinal.toFixed(2)+ '</strong>'
    
}