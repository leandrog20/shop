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
let brands = []


function separateByBrand(){
    products.forEach(element => {
        if(!brands.includes(element.brand)){
            brands.push(element.brand)
        }
    })

    for(let i = 0; i < brands.length; i++){
        const body = document.querySelector("body")
        const section = document.createElement("section")
        const h2 = document.createElement("h2")
        const div = document.createElement("div")
        section.id = "shoes"
        section.setAttribute("data-key", `${brands[i]}`)
        h2.innerHTML = `${brands[i]}`
        section.appendChild(h2)
        div.classList.add("dragscroll")
        section.appendChild(div)
        body.appendChild(section)
    }
}

separateByBrand()


products.map( (element) => {
    // const formattedPrice = item.preco.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
    // const item = `<div class="item" data-key="${element.id}">
    //                     <img src="${element.img}" class="product-image">
    //                     <button>Adicionar <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M11 9V6H8V4h3V1h2v3h3v2h-3v3zM7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M1 4V2h3.275l4.25 9h7l3.9-7H21.7l-4.4 7.95q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.713-.975T5.25 14.05L6.6 11.6L3 4z"/></svg></button>
    //                  </div>
    //                 `

                    const item = document.createElement("div")
                    item.classList.add("item")
                    item.setAttribute("data-key", `${element.id}`)
                    const img = document.createElement("img")
                    img.setAttribute("src", `${element.img}`)
                    const button = document.createElement("button")
                    button.innerHTML = `Adicionar`
                    item.appendChild(img)
                    item.appendChild(button)
                    
    const sections = document.querySelectorAll("section")

    for(let i = 0; i < sections.length; i++){
        let id = sections[i].getAttribute("data-key")
        if(element.brand == id){
          
            sections[i].children[1].appendChild(item)
        }
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
        })
    }
}

function addToCart(id){
            
        const checkTheIdExistence = cart.findIndex(item => item.id == id)
    
        if(checkTheIdExistence == -1){
        const product = products.filter(item => item.id == id)
            const produto = new Product(product[0].id, product[0].name, product[0].price, 1)

    cart.push(produto)

        } else {
              cart.forEach(item => item.id == id ? item.quantidy += 1 : item.quantidy = item.quantidy)
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

    function removeToCart(){

         let newCart = cart.filter(item => item.quantidy !== 0)
         
         cart = newCart
           
           addToCartScreen()
        
    }

    function closeCartWhenThereAreNoItems(){

        if(cart.length == 0){
            closeCart() 
        }
    }

const cartButton = document.querySelector(".cart")

function openCart(){
    if(window.innerWidth <= 750){
        cartButton.style.width = "100%" 
    } else {
    cartButton.style.width = "550px"
    }
}


function closeCart(){
    cartButton.style.width = "0px"
}


let count = 1

document.querySelector("#radio1").checked = true

setInterval(() => {
    nextbanner()
}, 2500)

function nextbanner(){
    count++
    if(count > 2){
        count = 1
    }
    document.querySelector("#radio" + count).checked = true
}


buttonsAdd()














