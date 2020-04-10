const years = document.createElement('option');
const max = new Date().getFullYear();
let min = max -10;

for (let i = max; i > min; 1--){
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}