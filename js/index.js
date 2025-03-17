const products = [
    { id: 1, nome: "Sansumg Galaxy S21", preco: 3999.99, temDesconto: true, quantidade: 2, img: "img/s2 ultra.png", categoria: "eletronico" },
    { id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, temDesconto: false, quantidade: 3, img: "img/notebook dell inspiron.png", categoria: "eletronico" },
    { id: 3, nome: "Smart TV LG 55", preco: 2799.00, temDesconto: true, quantidade: 5, img: "img/tv Lg 55.png", categoria: "eletronico" },
    { id: 4, nome: "Fone de Ouvido Bluetooth JBL", preco: 299.90, temDesconto: false, quantidade: 2, img: "img/fone de ouvido jbl.png", categoria: "eletronico" },
    { id: 5, nome: "Câmera DSRL Canon", preco: 3200.00, temDesconto: true, quantidade: 1, img: "img/camera canon.png", categoria: "eletronico" },
    { id: 6, nome: "Tablet Ipad Air", preco: 4199.00, temDesconto: false, quantidade: 8, img: "img/ipad.png", categoria: "eletronico" },
    { id: 7, nome: "Console PlayStation 5", preco: 4699.00, temDesconto: true, quantidade: 2, img: "img/play5.png", categoria: "eletronico" },
    { id: 8, nome: "SmartWatch Apple Watch", preco: 2499.00, temDesconto: false, quantidade: 7, img: "img/smatwatch.png", categoria: "eletronico" },
    { id: 9, nome: "Impressora HP Multifuncional", preco: 599.90, temDesconto: true, quantidade: 5, img: "img/impressora HP.png", categoria: "eletronico" },
    { id: 10, nome: "Caixa de Som Portátil Sony", preco: 1000.00, temDesconto: false, quantidade: 3, img: "img/caixa de som sony.png", categoria: "eletronico" },
    { id: 11, nome: "God Of War", preco: 300.00, temDesconto: false, quantidade: 5, img: "", categoria: "jogo" }
]

class Product {
    constructor(id, name, price, quantidy){
        this.id = id
        this.name = name,
        this.price = price,
        this.quantidy = quantidy
    }
  
    }

// const result = (function calculateDiscount() {
//     const discount = products.map(product => {

//         let newValue = product.temDesconto ? product.preco * 0.9 : product.preco

//         return {
//             ...product, preco: newValue.toLocaleString("pt-br", { style: "currency", currency: "BRL"})
//         }

//     }, 0)

//     return discount;
// })()


let cart = []

products.map( (product) => {
    const formattedPrice = product.preco.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
    const items = `<div class="items" data-key="${product.id}">
                        <img src="${product.img}" class="product-image">
                        <p class="name">${product.nome}</p>
                        <p class="price">${formattedPrice}</p>
                   
                    <button class="add">Adicionar</button>

                     </div>
                    `


                    if(product.categoria == "eletronico"){
                        document.querySelector(".eletronics").innerHTML += items
                    }else {
                        document.querySelector(".games").innerHTML += items
                    }
})
   
function buttonsAdd(){
    const buttons = document.getElementsByClassName("add")

    for(let i in buttons){
        buttons[i].addEventListener("click", (e) => {
            const buttonParentElement = e.target.parentElement
            let id = buttonParentElement.getAttribute("data-key")
            
             addToCart(id)
             updateTotalValueCart()
             //numberItems()
        })
    }
}

function addToCart(id){
            
        const checkTheIdExistence = cart.findIndex(item => item.id == id)
    
        if(checkTheIdExistence == -1){
        const product = products.filter(item => item.id == id)
            const produto = new Product(product[0].id, product[0].nome, product[0].preco, 1)

    cart.push(produto)

        } else {
              cart.forEach(item => item.id == id ? item.quantidy += 1 : item.quantidade = item.quantidade)
        }

        addToCartScreen()
          
}

function addToCartScreen(){
   
    let htmlOfProducts = ''

    cart.map(itemCart => {
        let product = products.filter(productArrItem => productArrItem.id == itemCart.id)
        const formattedPrice = itemCart.price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})

        htmlOfProducts += `<div class="cart-product" data-key="${itemCart.id}">
        <img src="${product[0].img}"/>
        <div>
         <p>${itemCart.name}</p>
        
        <span class="btn-qtd">
                <button onclick="moreButton(this)">+</button>
                <p>${itemCart.quantidy}</p>
                <button onclick="minusButton(this)">-</button>
            </span>
              <p>${formattedPrice}</p>
        </div>
        </div>`
    })

    document.querySelector(".container-product").innerHTML = htmlOfProducts
        
    }

    function moreButton(e){
        let elementId = e.parentElement.parentElement.parentElement.getAttribute("data-key")
        console.log(elementId)
        let quantidy = e.parentElement.querySelector("p")
        quantidy.innerHTML++

        addToCart(elementId) // aumenta a quantidade do item chamando a função addToCart()
        updateTotalValueCart()
       
    }

    function minusButton(e){
        let quantidy = e.parentElement.querySelector("p")
        console.log(quantidy)
        let elementId = e.parentElement.parentElement.parentElement.getAttribute("data-key")
        
             quantidy.innerHTML--

            // diminui a quantidade do item no array
            let item = cart.find(item => item.id == elementId) 
            item.quantidy -= 1
        
        updateTotalValueCart()
        removeToCart()
        closeCartWhenThereAreNoItems()
    }

    function updateTotalValueCart(){
            
        const totalCartValue = cart.reduce( (acumulador, item) => {
            return acumulador += (item.price * item.quantidy)
        }, 0)
     
        document.querySelector(".cart-total").innerHTML =  totalCartValue.toLocaleString("pt-br", {style: "currency", currency: "BRL"})    
    }


    // function numberItems(){
    //  document.querySelector(".item-qtd").innerHTML = cart.length
    // }

    function removeToCart(){

         let newCart = cart.filter(item => item.quantidy !== 0)
         
         cart = newCart
           
           addToCartScreen()
        //numberItems()
        
    }

    function closeCartWhenThereAreNoItems(){

        if(cart.length == 0){
            openClose = false
            openCloseCart() 
        }
    }

let openClose = false
const total = document.querySelector("div.total")
const cartButton = document.querySelector(".cart")
const cartIcon = document.querySelector(".cart-icon")
const main = document.querySelector(".container")
main.addEventListener("click", () => {
    if(openClose == false){
        openCloseCart()
    }
})

function openCloseCart(){
    if(openClose == true){
        if(window.innerWidth <= 750){
            cartButton.style.width = "100%" 
        } else {
        cartButton.style.width = "550px"
        total.style.opacity = "1"
        }
    } else {
        cartButton.style.width = "0px"
        total.style.opacity = "0"
    }
    openClose = !openClose
}

openCloseCart()
buttonsAdd()














