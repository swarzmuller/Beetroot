const cartBtn = document.querySelectorAll('.product-box__btn');
const cart = document.querySelector('.quantity');
const price = document.querySelector('.allPrice');
let arrPrice = [];
let arrGoods = [];
let sumPrice = 0;
let sumGoods = 0;
cartBtn.forEach(function (btn) {
    let countGoods = 0;
    let countPrice = 0;
    btn.addEventListener('click', function (event) {
        countGoods = +event.target.previousElementSibling.firstElementChild.value;
        countPrice = +event.target.previousElementSibling.previousElementSibling.getAttribute('data-price');
        if (!countGoods == '' || '0') {
            arrPrice.push(countPrice * countGoods);
            arrGoods.push(countGoods);
            event.target.previousElementSibling.firstElementChild.value = '';
            sumPrice += arrPrice[arrPrice.length - 1];
            sumGoods += arrGoods[arrGoods.length - 1];
            price.innerHTML = sumPrice;
            cart.innerHTML = sumGoods
        }
    })
});

// Filter
let selectDishes = document.getElementById('selectDishes');
let dishValue = document.querySelectorAll('.product-box__item');
function filterDish() {
    let filterDishes = selectDishes.options[selectDishes.selectedIndex].value;
    for (let i = 0; i < dishValue.length; i++) {
        // console.log(dishValue[i].getAttribute('data-dish'));
        if (!(+dishValue[i].getAttribute('data-dish') == +filterDishes)) {
            dishValue[i].classList.remove('dishFilter');
            dishValue[i].classList.add('hide-1');
            if (+filterDishes == 0) {
                dishValue[i].classList.remove('hide-1');
            }
        }
        else {
            dishValue[i].classList.add('dishFilter');
            dishValue[i].classList.remove('hide-1');
        }

    }
}
selectDishes.addEventListener('change', filterDish);
let priceValue = document.querySelectorAll('.price');
let selectFilter = document.getElementById('selectFilter');
function filter() {
    let priceFilter = selectFilter.options[selectFilter.selectedIndex].value;
    for (let i = 0; i < priceValue.length; i++) {
        if (!(+priceValue[i].getAttribute('data-price') <= +priceFilter)) {
            priceValue[i].parentNode.parentNode.classList.remove('priceFilter');
            priceValue[i].parentNode.parentNode.classList.add('hide-2');
            if (+priceFilter == 0) {
                priceValue[i].parentNode.parentNode.classList.remove('hide-2');
            }
        }
        else {
            priceValue[i].parentNode.parentNode.classList.add('priceFilter');
            priceValue[i].parentNode.parentNode.classList.remove('hide-2');
        }
    }
}
selectFilter.addEventListener('change', filter);

//order

const orderBtn = document.querySelector('.btn-check');
const constShow = document.querySelector('.popup');
const close = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
orderBtn.onclick = function(){
    overlay.classList.add('show');
    constShow.classList.add('show');

};
close.onclick = function(){
    constShow.classList.remove('show');
    overlay.classList.remove('show');
};

const orderForm = document.querySelector('.order-form');
const sendData = document.querySelector('.sendData');
let inputCheck = document.querySelectorAll('.input-check');
let errorCount = 0;

sendData.onclick = function(event){
    for(let i = 0; i < inputCheck.length; i++){
        let reg = inputCheck[i].value.match(/\s/);
        if(inputCheck[i].value == '' || reg){
            alert('Заполните поле');
            inputCheck[i].classList.add('error');
            errorCount++
        }
        else{
            inputCheck[i].classList.remove('error');
            errorCount = 0
        }

    }
    if (errorCount) {
        return false
    }


};
