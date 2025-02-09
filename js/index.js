const produtos = [
    {id: 1, nome: "Sansumg Galaxy S21", preco: 3999.99, temDesconto: true, quantidade: 2, img: "img/s2 ultra.png", categoria: "eletronico"},
    {id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, temDesconto: false, quantidade: 3, img: "img/notebook dell inspiron.png", categoria: "eletronico"},
    {id: 3, nome: "Smart TV LG 55", preco: 2799.00, temDesconto: true, quantidade: 5, img: "img/tv Lg 55.png", categoria: "eletronico"},
    {id: 4, nome: "Fone de Ouvido Bluetooth JBL", preco: 299.90, temDesconto: false, quantidade: 2, img: "img/fone de ouvido jbl.png", categoria: "eletronico"},
    {id: 5, nome: "Câmera DSRL Canon", preco: 3200.00, temDesconto: true, quantidade: 1, img: "img/camera canon.png", categoria: "eletronico"},
    {id: 6, nome: "Tablet Ipad Air", preco: 4199.00, temDesconto: false, quantidade: 8, img: "img/ipad.png", categoria: "eletronico"},
    {id: 7, nome: "Console PlayStation 5", preco: 4699.00, temDesconto: true, quantidade: 2, img: "img/play5.png", categoria: "eletronico"},
    {id: 8, nome: "SmartWatch Apple Watch", preco: 2499.00, temDesconto: false, quantidade: 7, img: "img/smatwatch.png", categoria: "eletronico"},
    {id: 9, nome: "Impressora HP Multifuncional", preco: 599.90, temDesconto: true, quantidade: 5, img: "img/impressora HP.png", categoria: "eletronico"},
    {id: 10, nome: "Caixa de Som Portátil Sony", preco: 1000.00, temDesconto: false, quantidade: 3, img: "img/caixa de som sony.png", categoria: "eletronico"},
    {id: 11, nome: "God Of War", preco: 300.00, temDesconto: false, quantidade: 5, img: "", categoria: "jogo"}
]


// FORMATAR OS VALORES E ADICIONAR DESCONTO AOS QUE TEM DESCONTO

// SEPARAR ELETRONICOS DE JOGOS (FILTRAR)

// ADICIONAR MAIS ITENS 

// MOSTRAR TODOS NA TELA COMO FORMA DE CARD

const desconto = produtos.map(produto => {

    let novoValor = produto.temDesconto ? produto.preco * 0.9 : produto.preco
    
    return{
        ...produto, preco: novoValor.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
    }

}, 0)

const eletronicos = desconto.filter(produto => produto.categoria === "eletronico")

const jogos = desconto.filter(produto => produto.categoria === "jogo")

const secaoDeEletronicos = document.querySelector(".eletronicos")
const secaoDeJogos = document.querySelector(".jogos")



desconto.forEach(produto => {
    if(produto.categoria === "eletronico"){
        secaoDeEletronicos.innerHTML += `
        <div>
        <img src="${produto.img}"/>
        <p>${produto.nome}</p>
        <p>${produto.preco}</p>
        </div>
        `
    } else {
        secaoDeJogos.innerHTML += `
        <div>
        <img src="${produto.img}"/>
        <p>${produto.nome}</p>
        <p>${produto.preco}</p>
        </div>
        `
    }
})




