//var total = Number(getElementById("totalCompra").value)
var numId = 0
var totTabela = 0
function adicionarNaTabela(){

    var desc = document.getElementById("txtDescricao").value
    var valor = Number(document.getElementById("valor").value)
    var qtd = Number(document.getElementById("qtd").value)
    var tabela = document.getElementById("tabela")
    var totTotal = document.getElementById("totalCompra")
    var totCedula = valor * qtd
    totTabela += totCedula

    var linha = document.createElement("tr")
    var id = document.createElement("td")
    var cedDesc = document.createElement("td")
    var cedValor = document.createElement("td")
    var cedQtd = document.createElement("td")
    var total = document.createElement("td")

    id.innerHTML = "" + numId
    cedDesc.innerHTML = desc
    cedValor.innerHTML = valor
    cedQtd.innerHTML = qtd
    total.innerHTML = totCedula
    totTotal.innerHTML = "" + totTabela

    tabela.appendChild(linha)
    linha.appendChild(id)
    linha.appendChild(cedDesc)
    linha.appendChild(cedValor)
    linha.appendChild(cedQtd)
    linha.appendChild(total)

    numId ++
    var formulario = document.getElementById("formulario");
    for (var i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].value = ""; 
    }
    

}

function negrito(texto){
    
    texto.style.color= 'red';
    texto.style.fontWeight="bold";

}

function mudarDinheiro(){
    document.getElementById("forma").src="img/dinheiro.png"
}
function mudarCartao(){
    document.getElementById("forma").src="img/cartao.png"
}

function colorirLinhas(){
    var vetor = document.getElementsByTagName('tr')
    for(let i=0; i<vetor.length; i++){
        if(i%2==0){
            vetor[1].style.backgroundColor="lightblue"
        }
        else{
            vetor[1].style.backgroundColor="pink"
        }
    }
}

function pagarConta() {
    var radio = document.getElementsByName("rbPagamento")
    var compra = totTabela
    for(let elemento of radio) {
        if(elemento.checked){
            if(elemento.value === "dinheiro"){
                compra -= (compra*10/100)
                alert(`Sua compra ficou em: R$${compra.toFixed(2)}`)
            }else {
                compra = compra/3
                alert(`Sua compra ficou em: R$${totTabela} em 3 parcelas de: R$${compra.toFixed(2)}`)
            }
        }
    }
}