let gerichteRef = document.getElementById('gerichte');

let beilageRef = document.getElementById('beilage');

function loadWarenkorb() {
    return JSON.parse(localStorage.getItem("warenKorpsList")) || [];
}

function saveWarenkorb(list) {
    localStorage.setItem("warenKorpsList", JSON.stringify(list));
}

let warenKorpsList = loadWarenkorb();

function initiate(){
    loadGerichte();
    loadBeilage();
    showWarenKorp();
    showTotalPrice();
}

// myDisches

function loadGerichte(){

    for(let i= 0; i< myDisches.length; i++){
        gerichteRef.innerHTML += templateGerichte(i);
    }
}


function loadBeilage(){
    for(let i= 0; i< myBeilage.length; i++){
        beilageRef.innerHTML += templateBeilage(i);
    }
}


function showWarenKorp(){
    let warenKorpsList = loadWarenkorb();
    let warenkorb = document.getElementById('waren-liste');
    warenkorb.innerHTML = '';
    if(warenKorpsList.length == 0){
        warenkorb.innerHTML = keinArtikel();
    }else{
        for(let i=0; i< warenKorpsList.length; i++){
            warenkorb.innerHTML += templateAddToWarenkorp(i);
        }
    }
    
    showTotalPrice();
}



function showTotalPrice(){
    let warenKorpsList = loadWarenkorb();
    let gesamtePreisRef = document.getElementById('gesammte-preis');
    const Lieferpreis = 8;
    let TotalPriceWaren = 0;
    let totalPrice = 0;
    if(warenKorpsList.length == 0){
        gesamtePreisRef.classList.add('desactive');
        gesamtePreisRef.innerHTML = '';

    }else{
        gesamtePreisRef.classList.remove('desactive');
        gesamtePreisRef.innerHTML = '';
        for(let index=0;index< warenKorpsList.length; index++){
            let uniqueTotalPrice = warenKorpsList[index].price* warenKorpsList[index].quantity;
            TotalPriceWaren += uniqueTotalPrice;
            totalPrice = TotalPriceWaren + Lieferpreis;
        }
        gesamtePreisRef.innerHTML += templateTotalPrice(totalPrice, Lieferpreis, TotalPriceWaren);

    }
}


function addGerichtToWarenkorp(i, event){
    let warenKorpsList = loadWarenkorb();

    let gericht = myDisches[i];
    const newInKorp = {
        name : gericht.name,
        price : gericht.preise,
        quantity : 1
    }

    let isAlreadyInKorp  = warenKorpsList.find(
        (warenKorp) =>warenKorp.name === newInKorp.name
    );
    console.log(warenKorpsList);
    if(isAlreadyInKorp){
        isAlreadyInKorp.quantity++;
        saveWarenkorb(warenKorpsList);
        showWarenKorp();
    }else{
        warenKorpsList.push(newInKorp);
        console.log(warenKorpsList);
        saveWarenkorb(warenKorpsList);
        showWarenKorp();

    }
    event.stopPropagation(); 
}
function addBeilageToWarenkorp(i,event){
    
    let warenKorpsList = loadWarenkorb();
    let beilage = myBeilage[i];
    const newInKorp = {
        name : beilage.name,
        price : beilage.preise,
        quantity : 1
    }
    let isAlreadyInKorp  = warenKorpsList.find(
        (warenKorp) =>warenKorp.name === newInKorp.name
    );
    if(isAlreadyInKorp){
        isAlreadyInKorp.quantity++;
        saveWarenkorb(warenKorpsList);
        showWarenKorp();
    }else{
        warenKorpsList.push(newInKorp);
        saveWarenkorb(warenKorpsList);
        showWarenKorp();
    }
    
    event.stopPropagation();
}

function reduceGerichtInKorp(index) {
    let warenKorpsList = loadWarenkorb();
    if (warenKorpsList[index].quantity && warenKorpsList[index].quantity > 1) {
        warenKorpsList[index].quantity--;
        saveWarenkorb(warenKorpsList);
        showWarenKorp();
    } else {
        warenKorpsList.splice(index, 1);
        saveWarenkorb(warenKorpsList);
        showWarenKorp();
    }
    
}

function removeFromWarenkorp(index){
    let warenKorpsList = loadWarenkorb();
    if(warenKorpsList[index]){
        warenKorpsList.splice(index, 1);
        saveWarenkorb(warenKorpsList);
        showWarenKorp(); 
    }
}






