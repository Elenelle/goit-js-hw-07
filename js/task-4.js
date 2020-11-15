const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('button[data-action="increment"]');

let counterValue = document.querySelector('#value');

const onDecrementBtnClick = () =>
    (counterValue.textContent = Number(counterValue.textContent) - 1);
  
const onIncrementBtnClick = () =>
    (counterValue.textContent = Number(counterValue.textContent) + 1);

btnDecrementRef.addEventListener('click', onDecrementBtnClick);
btnIncrementRef.addEventListener('click', onIncrementBtnClick);