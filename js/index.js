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


const result = (function calculateDiscount() {
    const discount = products.map(product => {

        let newValue = product.temDesconto ? product.preco * 0.9 : product.preco

        return {
            ...product, preco: newValue.toLocaleString("pt-br", { style: "currency", currency: "BRL"})
        }

    }, 0)

    return discount;
})()

function displayProductsOnScreen() {

    const electronicSection = document.querySelector(".eletronics")

    const gameSection = document.querySelector(".games")

    result.forEach(product => {

        const newProduct = document.createElement("div")

        newProduct.classList.add("product")


       newProduct.innerHTML = `
                <div class="product-information">
                    <img src="${product.img}" class="product-image">
                    <p class="name">${product.nome}</p>
                    <p class="price">${product.preco}</p>
                </div>
                <button class="add">Adicionar <i class='bx bx-cart-add'></i></button>
                
                 `
        if (product.categoria === "eletronico") {
            electronicSection.append(newProduct)
        } else {
            gameSection.append(newProduct)
        }

    })

}

displayProductsOnScreen()


function increaseDecrease(option){

    const quantityItems = document.querySelector(".item-qtd")
    console.log(quantityItems.innerText)

    if(option == true){
        quantityItems.innerHTML++
    } else if(quantityItems.innerHTML < 0) {
        quantityItems.innerHTML = 0
    } else{
        quantityItems.innerHTML--
    }

    
}

function updateValueCart(){
    
    let total = 0
    const product = document.getElementsByClassName("cart-product")
   
      for(let i = 0; i < product.length; i++){

        const productPrice = product[i].getElementsByClassName("cart-product-price")[0].innerText.replace(",", "").replace(".", "")
        

        // total += (productPrice * productQuantidy)/100
     }

     const cartTotal = document.querySelector(".cart-total")

    cartTotal.innerText = total.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
}

function addToCart(){
    const buttons = document.getElementsByClassName("add")

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
        
        const productInformation = buttons[i].parentElement
        const productImg = productInformation.getElementsByClassName("product-image")[0].src
        const productName = productInformation.getElementsByClassName("name")[0].innerHTML
        const productPrice = productInformation.getElementsByClassName("price")[0].innerHTML.replace("R$&nbsp;", "")

        const cartProductName = document.getElementsByClassName("product-cart-name")

        for(let i = 0; i < cartProductName.length; i++){
            if(cartProductName[i].innerHTML === productName){
                cartProductName[i].parentElement.getElementsByClassName("product-cart-qtd")[0].innerHTML++
                return
            }
     }
     
     increaseDecrease(true)
        
        const productCart = document.querySelector("div.container-product")

        productCart.innerHTML += `
        <div class="cart-product">
        <img src="${productImg}" class="product-cart-img">
    
        <p class="product-cart-name">${productName}</p>

        <span>
            <button>+</button>
            <p class="product-cart-qtd">0</p>
            <button>-</button>
        </span>

        <p class="cart-product-price">${productPrice}</p>

        <button class="remove"><img src="./img/shop.png"></button>
        </div>
        `
        })
    }        
}

let openClose = true

const main = document.querySelector(".container")
const total = document.querySelector("div.total")
const cart = document.querySelector(".cart")
const container = document.querySelector("main.container")
const bodyHTML = document.querySelector("body")
const cartIcon = document.querySelector(".cart-icon")

main.addEventListener("click", () => {
    if(openClose == true){
        openCloseCart()
    }
})



function openCloseCart(){
    
    openClose = !openClose 

    if(openClose == true){
        cart.classList.add("show-modal")
       cartIcon.style.backgroundColor = "cadetblue"
        bodyHTML.style.overflowY = "hidden"
        total.style.opacity = "1"
    
    } else {
        cartIcon.style.backgroundColor = "rgba(95, 158, 160, 0.327)"
        cart.classList.remove("show-modal")
        total.style.opacity = "0"
        container.style.pointerEvents = "all"
        bodyHTML.style.overflowY = "auto"
    }

    
    productRemoveToCart()

}

function increaseQuantity(){
updateValueCart()
}



function productRemoveToCart(){

    const buttonsRemove = document.getElementsByClassName("remove")
    for(let i = 0; i < buttonsRemove.length; i++){
       buttonsRemove[i].addEventListener("click",  (event) => {
        const button = event.target
            button.parentElement.parentElement.remove()
            increaseDecrease(false)
            updateValueCart()
      })
    }
}

addToCart()
openCloseCart()















