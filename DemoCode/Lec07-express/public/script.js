const number = document.getElementById('number');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');

increment.addEventListener('click', () => {
  number.innerHTML++;
});
decrement.addEventListener('click', () => {
  number.innerHTML--;
});
