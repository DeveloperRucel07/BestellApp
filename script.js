let btnWarenkorp = document.getElementById('btn-warenkorp');
let warenkorp = document.getElementById('warenkorp');
let content = document.getElementById('content');
let warenkorpTitle = document.getElementById('warenkorp-title');

function closePopup(){
    content.classList.toggle('desactive');
    warenkorp.classList.toggle('active');
    warenkorp.classList.toggle('desactive');
    

}


btnWarenkorp.addEventListener('click', function(){
    warenkorp.classList.toggle('active');
    warenkorp.classList.toggle('desactive');
    warenkorp.classList.add('popup-warenkorp');
    content.classList.toggle('desactive');
    warenkorpTitle.innerHTML = linkTemplateResponsive();
});



