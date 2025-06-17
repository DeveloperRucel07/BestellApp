
function templateDyshes(i){
    return `
        <div class="card" onclick="addDyshToCard(${i}, event)">
            <div class="card-body">
                <h5 class="card-title">${myDishes[i].name}</h5>
                <p class="card-text">${myDishes[i].description}</p>
                <p class="card-text card-price">${myDishes[i].preise}€</p>
                <button class="btn btn-primary add-warenkorp"><img src="./assets/icons/add_icon.png" alt=" add warenkorp" onclick="addDyshToCard(${i}, event)"></button>
            </div>
        </div>
    
    `;
}


function templateSideDishes(i){
    return `
        <div class="card" onclick="addSideDyshToCard(${i}, event)">
            <div class="card-body">
                <h5 class="card-title">${mySideDishes[i].name}</h5>
                <p class="card-text">${mySideDishes[i].description}</p>
                <p class="card-text card-price">${mySideDishes[i].preise}€</p>
                <button class="btn btn-primary add-warenkorp" onclick="addSideDyshToCard(${i}, event)"><img src="./assets/icons/add_icon.png" alt=" add warenkorp"></button>
            </div>
        </div>
    
    `;
}


function templateAddProductToCard(index){
    return `
        <hr>
        <div class="waren">
            <h5>${ProductInCard[index] && ProductInCard[index].name ? ProductInCard[index].name : 'N/A'}</h5>
            <div class="icon-waren">
                <button class="btn"  onclick="reduceProductInCard(${index})"><img src="./assets/icons/remove_icon.png" alt=" remove warenkorp" class="waren-icons"></button>
                <span>${ProductInCard[index]?.quantity} x</span>
                <button class="btn " onclick="addQuantity('${ProductInCard[index].name}')"><img src="./assets/icons/add_icon.png" alt=" add warenkorp" class="waren-icons"></button>
                <span>${((ProductInCard[index]?.price)* (ProductInCard[index]?.quantity)).toFixed(2) }€</span>
                <button class="btn " onclick="removeFromCard(${index})"><img src="./assets/icons/trash_icon.png" alt="delete warenkorp" class="waren-icons"></button>
            </div>
        </div>
    `;
}


function templateTotalPrice(totalPrice, deliveryPrice, totalPriceProduct){
    return `
        <hr>
        <p class="endprice"><span>Zwischenpreise</span> <span>${totalPriceProduct.toFixed(2)}€</span></p>
        <p class="endprice"> <span>Lieferpreis</span> <span>${deliveryPrice.toFixed(2)}€</span></p>
        <strong><p class="endprice"><span>Gesamt</span> <span>${totalPrice.toFixed(2)}€</span></p></strong>
        <div class="justify-content-center align-items-center d-flex ">
            <button class="btn btn-info text-center m-3 w-75" onclick = "orderAllInCard()">Einkauf Bestätigen</button>
        </div>
    
    `;
}


function zeroProductInCard(){
    return `
        <div class="card text-center mb-3 kein-artikel" >
        <div class="card-body">
            <h5 class="card-title">Kein Menü ausgewählt!!</h5>
            <p class="card-text">wähle leckere Gerichte aus der Karte und bestelle Dein Menü.</p>
        </div>
        </div>
    
    `;
}


function linkTemplateResponsive(){
    return `
        <button class="btn btn-primary warenkorp-responsive-btn" onclick = "closePopup()">Warenkorp</button>
    `;
}
