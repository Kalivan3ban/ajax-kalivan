let productForm = document.getElementById("add_product_form");

productForm.addEventListener("submit", function(event){
    event.preventDefault();
    let data = JSON.stringify({
        "name": event.target['name'].value,
        "description": event.target['description'].value,
        "price": event.target['price'].value,
        "photo_url": event.target['photo_url'].value
    });
    console.log(data);
    let xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function(){
        if(this.readyState === 4){
            console.log(this.responseText)
        }
    });


xhr.open("POST", "https://kalivan-966f.restdb.io/rest/products");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-apikey", "6468f27a0b60fc42f4e1984b");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);



});

