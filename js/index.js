const products = [
    { id: 1, name: "Air Jordan 1 Mid", price: 1199.99, quantidy: 2, img: "img/air jordan 1 .webp", brand: "Nike" },
    { id: 2, name: "Air Jordan 1 Mid", price: 1199.99, quantidy: 2, img: "img/air jordan 1 (2).webp", brand: "Nike" },
    { id: 3, name: "Air Jordan 1 Mid", price: 1199.99, quantidy: 2, img: "img/air jordan 1 (3).webp", brand: "Nike" },
    { id: 4, name: "Air Jordan 1 Mid", price: 1199.99, quantidy: 2, img: "img/air jordan 1 (4).webp", brand: "Nike" },
    { id: 5, name: "Air Jordan 1 Mid", price: 1199.99, quantidy: 2, img: "img/air jordan 1 (5).webp", brand: "Nike" },
    { id: 6, name: "Asics Gel-Nyc", price: 899.99, quantidy: 2, img: "img/Asics Gel Nyc.webp", brand: "Asics" },
    { id: 7, name: "Asics Gel-Nyc", price: 899.99, quantidy: 2, img: "img/Asics Gel Nyc (1).webp", brand: "Asics" },
    { id: 8, name: "Asics Gel-Nyc", price: 899.99, quantidy: 2, img: "img/Asics Gel Nyc (2).webp", brand: "Asics" },
    { id: 9, name: "Nike Book 1", price: 1199.99, quantidy: 2, img: "img/nike book 1.webp", brand: "Nike" },
    { id: 10, name: "Nike Book 1", price: 1199.99, quantidy: 2, img: "img/nike book 1 (1).webp", brand: "Nike" },
    { id: 11, name: "Nike Book 1", price: 1199.99, quantidy: 2, img: "img/nike book 1 (2).webp", brand: "Nike" },
    { id: 12, name: "Nike Book 1", price: 1199.99, quantidy: 2, img: "img/nike book 1 (3).webp", brand: "Nike" },
    { id: 13, name: "Nike Book 1", price: 1799.99, quantidy: 2, img: "img/jordan 4.webp", brand: "Nike" },
    { id: 14, name: "Nike Dunk Low", price: 999.99, quantidy: 2, img: "img/nike dunk.webp", brand: "Nike" },
    { id: 15, name: "Nike Dunk Low", price: 999.99, quantidy: 2, img: "img/nike dunk (1).webp", brand: "Nike" },
    { id: 16, name: "Nike Dunk Low", price: 999.99, quantidy: 2, img: "img/nike dunk (2).webp", brand: "Nike" },
    { id: 17, name: "Nike Shox R4", price: 1199.99, quantidy: 2, img: "img/nike shox r4.webp", brand: "Nike" },
    { id: 18, name: "Nike Shox R4", price: 1199.99, quantidy: 2, img: "img/nike shox r4 (1).webp", brand: "Nike" },
    { id: 19, name: "Nike Shox R4", price: 1199.99, quantidy: 2, img: "img/nike shox r4 (2).webp", brand: "Nike" },
    { id: 20, name: "Nike Shox TL", price: 1199.99, quantidy: 2, img: "img/nike shox tl.webp", brand: "Nike" },
    { id: 21, name: "Nike Shox TL", price: 1199.99, quantidy: 2, img: "img/nike shox tl (1).webp", brand: "Nike" },
    { id: 22, name: "Vans Old Skool", price: 449.99, quantidy: 2, img: "img/vans old skool.webp", brand: "Vans" },
    { id: 23, name: "Asics Kayano 20", price: 899.99, quantidy: 2, img: "img/asics kayano 20.webp", brand: "Asics" },
    { id: 24, name: "Asics Kayano 20", price: 1299.99, quantidy: 2, img: "img/asics kayano 20 (1).webp", brand: "Asics" }
]

class Product {
    constructor(id, name, price, quantidy, size) {
        this.id = id
        this.name = name,
            this.price = price,
            this.quantidy = quantidy,
            this.size = size
    }

}

let cart = []
let brands = []

function separateByBrand() {
    products.forEach(element => {
        if (!brands.includes(element.brand)) {
            brands.push(element.brand)
        }
    })

    for (let i = 0; i < brands.length; i++) {
        const shoesSection = document.querySelector(".shoes")
        const section = document.createElement("section")
        const h2 = document.createElement("h2")
        const div = document.createElement("div")
        section.id = "shoes"
        section.setAttribute("data-key", `${brands[i]}`)
        h2.innerHTML = `${brands[i]}`
        section.appendChild(h2)
        div.classList.add("dragscroll")
        section.appendChild(div)
        shoesSection.appendChild(section)
    }
}

separateByBrand()

products.forEach((element) => {

    const item = document.createElement("div")
    item.className = "item"
    item.setAttribute("data-key", `${element.id}`)
    const img = document.createElement("img")
    img.setAttribute("src", `${element.img}`)
    img.className = "img"
    const button = document.createElement("button")
    button.innerHTML = `Adicionar`
    button.className = "add"
    button.setAttribute("onclick", "openModal()")
    item.appendChild(img)
    item.appendChild(button)

    const sections = document.querySelectorAll("section")

    for (let i = 0; i < sections.length; i++) {
        let id = sections[i].getAttribute("data-key")
        if (element.brand == id) {

            sections[i].children[1].appendChild(item)
        }
    }

})

function buttonsAdd() {
    const buttons = document.getElementsByClassName("add")

    for (let i in buttons) {
        buttons[i].addEventListener("click", (e) => {
            const buttonParentElement = e.target.parentElement
            let id = buttonParentElement.getAttribute("data-key")

            addToCart(id)
            updateTotalValueCart()
        })
    }
}

function addToCart(id, size) {

    const checkTheIdExistence = cart.filter(item => item.id == id && item.size == size)
console.log(checkTheIdExistence.length)
if(size != undefined) {
    if (checkTheIdExistence.length == 0) {
        const product = products.filter(item => item.id == id)
        const produto = new Product(product[0].id, product[0].name, product[0].price, 1, size)
        console.log(produto)
        cart.push(produto)

    } else {
        cart.filter(item => item.id == id && item.size == size ? item.quantidy += 1 : item.quantidy = item.quantidy)
    }
}
    addToCartScreen()

}

function addToCartScreen() {
let elements = ""
    cart.forEach(itemCart => {
        let product = products.filter(productArrItem => productArrItem.id == itemCart.id)
        const formattedPrice = itemCart.price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })

        elements += `<div class="cart-product" data-key="${itemCart.id}">
        <div>
            <img class="img-product" src="${product[0].img}"/>
         <p>${itemCart.name}</p>
        </div>
                    <div class="quantidy-control">
                            <button class="quantity-btn increase" onclick="increaseButton(this)">+</button>
                            <p class="quantidy">${itemCart.quantidy}</p>
                            <button class="quantity-btn decrease" onclick="decreaseButton(this)">-</button>
                        </div>

                <p>${itemCart.size}</p>
                 <p class="productValue">${formattedPrice}</p>
             
        </div>`
    })

    // document.querySelector(".cart-content").appendChild(cartProduct)
    document.querySelector(".cart-content").innerHTML = elements
}

function increaseButton(e) {
    let elementId = e.parentElement.parentElement.getAttribute("data-key")
    let quantidy = e.parentElement.querySelector("p")
    quantidy.innerHTML++
     let item = cart.find(item => item.id == elementId)
     item.quantidy += 1

     let productValue = products.filter(item => item.id == elementId)

     let valueInCart = productValue[0].price * item.quantidy

     item.price = valueInCart
    
    updateTotalValueCart()
    quantidyItems()
   
    addToCartScreen()

    document.querySelector(".discount-value").innerHTML = `R$ 0,00`

}

function decreaseButton(e) {
    let quantidy = e.parentElement.querySelector("p")

    let elementId = e.parentElement.parentElement.getAttribute("data-key")
    quantidy.innerHTML--

    let item = cart.find(item => item.id == elementId)
    item.quantidy -= 1
  
    let productValue = products.filter(item => item.id == elementId)

    let valueInCart = productValue[0].price * item.quantidy

    item.price = valueInCart
    // se a quantidade for menor que 0, remove o item do carrinho
    quantidyItems()
    updateTotalValueCart()
    removeToCart()

    addToCartScreen()
    
    // se a quantidade for menor que 0, remove o item do carrinho
    document.querySelector(".discount-value").innerHTML = `R$ 0,00`
}

function updateTotalValueCart() {

    const totalCartValue = cart.reduce((acumulador, item) => {
        return acumulador += item.price
    }, 0)

    document.querySelector(".total").innerHTML = totalCartValue.toLocaleString("pt-br", { style: "currency", currency: "BRL" })

    addToCartScreen()
}

function removeToCart() {
    
    let newCart = cart.filter(item => item.quantidy !== 0)

    cart = newCart
    quantidyItems()
    addToCartScreen()
    
}



const cartButton = document.querySelector(".cart")

function openCart() {
   
        cartButton.style.width = "100%"
   
}


function closeCart() {
    cartButton.style.width = "0px"
}


function controlSlider() {
    const slider = document.querySelector(".slider")
    const left = document.querySelector("#previousSlide")
    const right = document.querySelector("#nextSlide")

    const { width: sliderWidth } = window.getComputedStyle(slider)

    left.addEventListener("click", function () {
        slider.scrollLeft -= parseInt(sliderWidth)
    })

    right.addEventListener("click", function () {
        slider.scrollLeft += parseInt(sliderWidth) + 0.1
    })
}

controlSlider()

function add() {
    btn = document.getElementsByClassName("add")
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
            const id = btn[i].parentElement.getAttribute("data-key")

            openModal(id)
        })
    }
}

const modal = document.querySelector(".modal")

function openModal(id) {
     modal.id = "active"
     modal.setAttribute("data-key", `${id}`)
    const product = products.filter(item => item.id == id)

    const name = document.querySelector(".modal-content > div > h2")
    const price = document.querySelector(".modal-content > div > p")
    const img = document.querySelector(".modal-content > img")

    name.innerHTML = product[0].name
    price.innerHTML = product[0].price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
    img.src = product[0].img
    img.setAttribute("alt", product[0].name)
}

function closeModal() {
    modal.id = ""
}

if (window.innerWidth <= 808) {
    const item = document.getElementsByClassName("img")
    for (let i = 0; i < item.length; i++) {
        item[i].addEventListener("click", function () {
            const id = item[i].parentElement.getAttribute("data-key")
            openModal(id)

        })
    }
}

let shoeSize = undefined

function selectSize(size){
    shoeSize = size
    console.log(shoeSize)
}

const buttonAddToCart = document.querySelector(".add-to-cart")


    buttonAddToCart.addEventListener("click", () => {
        const id = modal.getAttribute("data-key")
        addToCart(id, shoeSize)
        closeModal()
        updateTotalValueCart()
        quantidyItems()
})

function quantidyItems(){
     let quantidy = cart.reduce((acumulador, item) => {
        return acumulador += item.quantidy
    }, 0)

    document.querySelector(".items").innerHTML = `Items(${quantidy})`
}

function discount(){

    let discountCode =  document.querySelector(".input-discount").value
    let discountValue = 0
    let total = 0
    const valueCart = cart.reduce((accumulator, item) => {
        return accumulator += item.price
}, 0)

    if(discountCode == "10%"){
        total = valueCart * 0.1
    } else if(discountCode == "20%"){
        total = valueCart * 0.2
    } else if(discountCode == "30%"){
        total = valueCart * 0.3
    } else {
       const placeholder = document.querySelector(".input-discount")
       placeholder.placeholder = "Código inválido"
        placeholder.classList.add("invalid")
        placeholder.value = ""
        setTimeout(() => {
            placeholder.classList.remove("invalid")
            placeholder.placeholder = "Cupom de desconto"
        }, 2000)
    }

    discountValue = valueCart - total;
console.log(discountValue)
console.log(total)
    document.querySelector(".discount-value").innerHTML = `${total.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`
    document.querySelector(".total").innerHTML = `${discountValue.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`

    

}



add()
buttonsAdd()













