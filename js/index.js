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
            ...product, preco: newValue.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
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
                <button class="add">Adicionar ao carrinho</button>
                
                 `
        if (product.categoria === "eletronico") {
            electronicSection.append(newProduct)
        } else {
            gameSection.append(newProduct)
        }

    })

}

displayProductsOnScreen()


function quantidy(){
    document.querySelector(".qtd").innerHTML++
}

function addToCart(){
    const buttons = document.getElementsByClassName("add")

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (event) => {
        const button = event.target
        const productInformation = button.parentElement
        const productImg = productInformation.getElementsByClassName("product-image")[0].src
        const productName = productInformation.getElementsByClassName("name")[0].innerHTML
        const productPrice = productInformation.getElementsByClassName("price")[0].innerHTML.replace("R$&nbsp;", "")
        const cart = document.querySelector(".cart")


        const cartProductName = document.getElementsByClassName("product-cart-name")

        for(let i = 0; i < cartProductName.length; i++){
            if(cartProductName[i].innerHTML === productName){
                cartProductName[i].parentElement.getElementsByClassName("product-cart-qtd")[0].value++
                return
            }
     }
     quantidy()
        
        const productCart = document.createElement("div")
        productCart.classList.add("cart-product")

        productCart.innerHTML = `
        <img src="${productImg}" class="product-cart-img">
    
        
        <p class="product-cart-name">${productName}</p>

        <input type="number" value="1" min="1" class="product-cart-qtd">

        <p class="cart-product-price">${productPrice}</p>
        `
        cart.append(productCart)
        })
    }
            
}



addToCart()
















