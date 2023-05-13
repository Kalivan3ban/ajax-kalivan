let productsGrid = document.getElementById("products-grid");
let productsArray = [];
let url = "https://my-json-server.typicode.com/Kalivan3ban/ajax-kalivan";
let xhr = new XMLHttpRequest();

xhr.open('GET', url + "/products");
xhr.responseType = 'json';
xhr.onload = function(){
    let products = xhr.response
    console.log(products)
    productsGrid.innerHTML = null;
    products.forEach(p => {
        productsArray.push(p);
        let pElem = document.createElement("div");
        pElem.classList.add("product");
        pElem.innerHTML = `
        <h2 class="product-name">${p.name}</h2>
        <img class="product-photo" src="${p.photo_url}">
        <p class="product-price">Price: ${p.price}</p>
        <p class-description>Description: ${p.description}</p>
        <a href="userProfile.html?id=${p.autor_id}">Seller profile</a>
        <button class="el-btn" onclick="addProductToCart(${p.id})">opaopa</button>
        `;
        productsGrid.appendChild(pElem);
    })
};

xhr.send();

let cartProd = document.getElementById("cart-product");

function openCart() {
    cartProd.classList.toggle('hide');
}

 let cart = [];
 function addProductToCart(id){
    let product = productsArray.find(function(p){
        return p.id == id;
    });
    cart.push(product);
    drawCartProducts();
 }

function drawCartProducts(){
    if(cart.length === 0)
    return cartProd.innerHTML = 'Cart is empty';
    
    cartProd.innerHTML = null;

    let sum = 0;

    cart.forEach(function(p){
        cartProd.innerHTML += `
        <p><img src="${p.photo_url}"> ${p.name} | ${p.price}</p>
        <hr>
        `;
        sum += p.price;

    });

    cartProd.innerHTML =+ `
    <p>Total price: ${sum}</p>
    <button onclick="buyAll()">Buy all</button>
    
    `;
}

function buyAll(){
    cart = [];
    cartProd.innerHTML = "Money was withdrawed from your card"
}