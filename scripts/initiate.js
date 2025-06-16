let gerichteRef = document.getElementById('gerichte');

let beilageRef = document.getElementById('beilage');

function loadProductInCard() {
    return JSON.parse(localStorage.getItem("ProductInCard")) || [];
}

function saveProductInCard(list) {
    localStorage.setItem("ProductInCard", JSON.stringify(list));
}

let ProductInCard = loadProductInCard();

function initiate(){
    loadDyshes();
    loadSideDish();
    showProductToCard();
    showTotalPrice();
}

// myDishes

function loadDyshes(){

    for(let i= 0; i< myDishes.length; i++){
        gerichteRef.innerHTML += templateDyshes(i);
    }
}


function loadSideDish(){
    for(let i= 0; i< mySideDishes.length; i++){
        beilageRef.innerHTML += templateSideDishes(i);
    }
}


function showProductToCard(){
    ProductInCard = loadProductInCard();
    let warenkorb = document.getElementById('waren-liste');
    warenkorb.innerHTML = '';
    if(ProductInCard.length == 0){
        warenkorb.innerHTML = keinArtikel();
    }else{
        for(let i=0; i< ProductInCard.length; i++){
            warenkorb.innerHTML += templateAddProductToCard(i);
        }
    }
    
    showTotalPrice();
}



function showTotalPrice(){
    ProductInCard = loadProductInCard();
    let gesamtePreisRef = document.getElementById('gesammte-preis');
    const Lieferpreis = 8;
    let TotalPriceWaren = 0;
    let totalPrice = 0;
    if(ProductInCard.length == 0){
        gesamtePreisRef.classList.add('desactive');
        gesamtePreisRef.innerHTML = '';

    }else{
        gesamtePreisRef.classList.remove('desactive');
        gesamtePreisRef.innerHTML = '';
        for(let index=0;index< ProductInCard.length; index++){
            let uniqueTotalPrice = ProductInCard[index].price* ProductInCard[index].quantity;
            TotalPriceWaren += uniqueTotalPrice;
            totalPrice = TotalPriceWaren + Lieferpreis;
        }
        gesamtePreisRef.innerHTML += templateTotalPrice(totalPrice, Lieferpreis, TotalPriceWaren);

    }
}
function addQuantity(name){
    
    let index = ProductInCard.findIndex(
       product => product.name === name
    );
    if (index !== -1) {
        ProductInCard[index].quantity ++;
        saveProductInCard(ProductInCard);
        showProductToCard();
    } else {
        return
    }

}

function addDyshToCard(i, event){
    ProductInCard = loadProductInCard();

    let dish = myDishes[i];
    
    const newInCard = {
        name : dish.name,
        price : dish.preise,
        quantity : 1
    }

    let isAlreadyInKorp  = ProductInCard.find(
        (product) =>product.name === newInCard.name
    );
    if(isAlreadyInKorp){
        isAlreadyInKorp.quantity++;
        saveProductInCard(ProductInCard);
        showProductToCard();
    }else{
        ProductInCard.push(newInCard);
        saveProductInCard(ProductInCard);
        showProductToCard();
    }
    event.stopPropagation(); 
}
function addSideDyshToCard(i,event){
    
    ProductInCard = loadProductInCard();
    let sideDish = mySideDishes[i];
    const newInCard = {
        name : sideDish.name,
        price : sideDish.preise,
        quantity : 1
    }
    let isAlreadyInKorp  = ProductInCard.find(
        (product) =>product.name === newInCard.name
    );
    if(isAlreadyInKorp){
        isAlreadyInKorp.quantity++;
        saveProductInCard(ProductInCard);
        showProductToCard();
    }else{
        ProductInCard.push(newInCard);
        saveProductInCard(ProductInCard);
        showProductToCard();
    }
    
    event.stopPropagation();
}

function reduceProductInCard(index) {
    ProductInCard = loadProductInCard();
    if (ProductInCard[index].quantity && ProductInCard[index].quantity > 1) {
        ProductInCard[index].quantity--;
        saveProductInCard(ProductInCard);
        showProductToCard();
    } else {
        ProductInCard.splice(index, 1);
        saveProductInCard(ProductInCard);
        showProductToCard();
    }
    
}

function removeFromCard(index){
    ProductInCard = loadProductInCard();
    if(ProductInCard[index]){
        ProductInCard.splice(index, 1);
        saveProductInCard(ProductInCard);
        showProductToCard(); 
    }
}






