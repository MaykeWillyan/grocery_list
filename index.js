var itens_carrinho = []; // criando o array do carrinho

function adicionar_carrinho(){ //função para adiconar os itens no carrinho
  
    var carrinho = document.getElementById("itens").value; // pega o valor do input
    itens_carrinho.push(carrinho); // traz os itens digitados no input para o array
}

function limpar_campo(){ //função para limpar o valor do input quando o item é digitado
   var itens = document.getElementById("itens").value="";
  
}

document.getElementById("button").onclick = function(){ 

    adicionar_carrinho();
    document.getElementById("display").innerHTML = "Lista:"+ itens_carrinho;
    limpar_campo();
}