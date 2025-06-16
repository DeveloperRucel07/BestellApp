

function templateGerichte(i){
    return `
        <div class="card" onclick="addGerichtToWarenkorp(${i}, event)">
            <div class="card-body">
                <h5 class="card-title">${myDisches[i].name}</h5>
                <p class="card-text">${myDisches[i].description}</p>
                <p class="card-text card-price">${myDisches[i].preise}€</p>
                <button class="btn btn-primary add-warenkorp"><img src="./assets/icons/add_icon.png" alt=" add warenkorp" onclick="addGerichtToWarenkorp(${i}, event)"></button>
            </div>
        </div>
    
    `;
}
function templateBeilage(i){
    return `
        <div class="card" onclick="addBeilageToWarenkorp(${i}, event)">
            <div class="card-body">
                <h5 class="card-title">${myBeilage[i].name}</h5>
                <p class="card-text">${myBeilage[i].description}</p>
                <p class="card-text card-price">${myBeilage[i].preise}€</p>
                <button class="btn btn-primary add-warenkorp" onclick="addBeilageToWarenkorp(${i}, event)"><img src="./assets/icons/add_icon.png" alt=" add warenkorp"></button>
            </div>
        </div>
    
    `;
}


function templateAddToWarenkorp(index){
    return `
        <hr>
        <div class="waren">
            <h5>${warenKorpsList[index] && warenKorpsList[index].name ? warenKorpsList[index].name : 'N/A'}</h5>
            <div class="icon-waren">
                <button class="btn"  onclick="reduceGerichtInKorp(${index})"><img src="./assets/icons/remove_icon.png" alt=" remove warenkorp" class="waren-icons"></button>
                <span>${warenKorpsList[index]?.quantity} x</span>
                <button class="btn " onclick="addGerichtToWarenkorp(${index})"><img src="./assets/icons/add_icon.png" alt=" add warenkorp" class="waren-icons"></button>
                <span>${((warenKorpsList[index]?.price)* (warenKorpsList[index]?.quantity)).toFixed(2) }€</span>
                <button class="btn " onclick="removeFromWarenkorp(${index})"><img src="./assets/icons/trash_icon.png" alt="delete warenkorp" class="waren-icons"></button>
            </div>
        </div>
    `;
}



function templateTotalPrice(totalPrice, Lieferpreis, TotalPriceWaren){
    return `
        <hr>
        <p class="endprice"><span>Zwischenpreise</span> <span>${TotalPriceWaren.toFixed(2)}€</span></p>
        <p class="endprice"> <span>Lieferpreis</span> <span>${Lieferpreis.toFixed(2)}€</span></p>
        <strong><p class="endprice"><span>Gesamt</span> <span>${totalPrice.toFixed(2)}€</span></p></strong>
    
    `;
}
function keinArtikel(){
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
