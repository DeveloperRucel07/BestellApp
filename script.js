let openCardBtn = document.getElementById('basket-button');
let cardProduct = document.getElementById('basket');
let content = document.getElementById('content');
let cardTitle = document.getElementById('basket-title');

function closePopup(){
    content.classList.toggle('desactive');
    cardProduct.classList.toggle('active');
    cardProduct.classList.toggle('desactive');
}


openCardBtn.addEventListener('click', function(){
    cardProduct.classList.toggle('active');
    cardProduct.classList.toggle('desactive');
    cardProduct.classList.add('popup-basket');
    content.classList.toggle('desactive');
    cardTitle.innerHTML = linkTemplateResponsive();
});



