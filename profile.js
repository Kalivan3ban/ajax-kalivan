let profile = document.getElementById("profile")
let productsGrid = document.getElementById("user-products-grid");
let url = "https://my-json-server.typicode.com/Kalivan3ban/ajax-kalivan";
let xhr = new XMLHttpRequest();

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id")

xhr.open('GET', `${url}/users/${id}`);
xhr.responseType = 'json';

xhr.onload = function () {
    let user = xhr.response;
    profile.innerHTML = `
    <h1>${user.name}</h1>
    <h2>${user.sirname}</h2>
    <img class="profile-img" src="${user.photo_url}">
    <p>Balance: ${user.balance}</p>
    `
}

xhr.send();


let productsRequest = new XMLHttpRequest();

productsRequest.open("GET", `${url}/products?autor_id=${id}`)

productsRequest.responseType = 'json';

productsRequest.onload = function () {
    let products = productsRequest.response;
    productsGrid.innerHTML = null;
    products.forEach(p => {
        productsGrid.innerHTML += `
            <div class="product">
                <h2 class="product-name">${p.name}</h2>
                <img class="product-photo" src="${p.photo_url}">
                <p class="product-price">Price: ${p.price}</p>
                <p class-description>Description: ${p.description}</p>
            </div>
        `;
    });
};

productsRequest.send();