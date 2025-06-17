let dishRef = document.getElementById('dishes');
let sideDishRef = document.getElementById('side-dishes');


function loadProductInCard() {
    return JSON.parse(localStorage.getItem("ProductInCard")) || [];
}


function saveProductInCard(list) {
    localStorage.setItem("ProductInCard", JSON.stringify(list));
}


let ProductInCard = loadProductInCard();

function initiate(){
    loadAlldishes();
    showProductToCard();
    showTotalPrice();
}


function loadAlldishes(){
    for(let i= 0; i< myDishes.length; i++){
        dishRef.innerHTML += templateDishes('myDishes', i);

    }
    for(let i= 0; i< mySideDishes.length; i++){
        sideDishRef.innerHTML += templateDishes('mySideDishes', i);
    }
}


function showProductToCard(){
    ProductInCard = loadProductInCard();
    let cardList = document.getElementById('basket-list');
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
    let allPriceRef = document.getElementById('basket-price');
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


function addDyshToCard(table, index, event){
    ProductInCard = loadProductInCard();
    let dishList = table === 'myDishes' ? myDishes : mySideDishes;
    let product = dishList[index];
    const newInCard = {
        name : product.name,
        price : product.preise,
        quantity : 1
    }
    let isAlreadyInKorp  = ProductInCard.find(
        (product) =>product.name === newInCard.name
    );
    if(isAlreadyInKorp){
        isAlreadyInKorp.quantity++;
    }else{
        ProductInCard.push(newInCard);
    }
    saveProductInCard(ProductInCard);
    showProductToCard();
    event.stopPropagation(); 
}


function reduceProductInCard(index) {
    ProductInCard = loadProductInCard();
    if (ProductInCard[index].quantity && ProductInCard[index].quantity > 1) {
        ProductInCard[index].quantity--;
    } else {
        ProductInCard.splice(index, 1);
    }
    saveProductInCard(ProductInCard);
    showProductToCard();
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
    let cardTitle = document.getElementById('basket-title');
    let cardProductList = document.getElementById('basket-list');
    let cardTotalPrice = document.getElementById('basket-price'); 
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






