let openCardBtn = document.getElementById('btn-warenkorp');
let cardProduct = document.getElementById('warenkorp');
let content = document.getElementById('content');
let cardTitle = document.getElementById('warenkorp-title');

function closePopup(){
    content.classList.toggle('desactive');
    cardProduct.classList.toggle('active');
    cardProduct.classList.toggle('desactive');
}


openCardBtn.addEventListener('click', function(){
    cardProduct.classList.toggle('active');
    cardProduct.classList.toggle('desactive');
    cardProduct.classList.add('popup-warenkorp');
    content.classList.toggle('desactive');
    cardTitle.innerHTML = linkTemplateResponsive();
});



