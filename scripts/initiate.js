let dishRef = document.getElementById('gerichte');
let sideDishRef = document.getElementById('beilage');


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


function loadDyshes(){

    for(let i= 0; i< myDishes.length; i++){
        dishRef.innerHTML += templateDyshes(i);
    }
}


function loadSideDish(){
    for(let i= 0; i< mySideDishes.length; i++){
        sideDishRef.innerHTML += templateSideDishes(i);
    }
}


function showProductToCard(){
    ProductInCard = loadProductInCard();
    let cardList = document.getElementById('waren-liste');
    cardList.innerHTML = '';
    if(ProductInCard.length == 0){
        cardList.innerHTML = zeroProductInCard();
    }else{
        for(let i=0; i< ProductInCard.length; i++){
            cardList.innerHTML += templateAddProductToCard(i);
        }
    }
    
    showTotalPrice();
}


function showTotalPrice(){
    ProductInCard = loadProductInCard();
    let allPriceRef = document.getElementById('gesammte-preis');
    const deliveryPrice = 8;
    let totalPriceProduct = 0;
    let totalPrice = 0;
    if(ProductInCard.length == 0){
        allPriceRef.classList.add('desactive');
        allPriceRef.innerHTML = '';
    }else{
        allPriceRef.classList.remove('desactive');
        allPriceRef.innerHTML = '';
        for(let index=0;index< ProductInCard.length; index++){
            let uniqueTotalPrice = ProductInCard[index].price* ProductInCard[index].quantity;
            totalPriceProduct += uniqueTotalPrice;
            totalPrice = totalPriceProduct + deliveryPrice;
        }
        allPriceRef.innerHTML += templateTotalPrice(totalPrice, deliveryPrice, totalPriceProduct);

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
function toggleCard(){
    let cardTitle = document.getElementById('warenkorp-title');
    let cardProductList = document.getElementById('waren-liste');
    let cardTotalPrice = document.getElementById('gesammte-preis'); 
    cardTitle.classList.toggle('desactive');
    cardProductList.classList.toggle('desactive');
    cardTotalPrice.classList.toggle('desactive');
}

function orderAllInCard() {
    let cardOrder = document.getElementById('order');
    toggleCard();
    cardOrder.innerHTML = `<h5>Vielen Dank für Ihre Bestellung!</h5>`;
    localStorage.removeItem("ProductInCard");
    setTimeout(() => {
        showProductToCard();
        toggleCard();
        cardOrder.innerHTML = '';
    }, 2000); 
}






