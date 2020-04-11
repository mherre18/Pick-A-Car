const years = document.createElement('option');
const max = new Date().getFullYear();
let min = max -10;

for (let i = max; i > min; i--){
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function getCars() {
    return  [
        {
            brand: 'BMW',
            model: 'Serie 3',
            year: 2012,
            price: 30000,
            doors: 4,
            color: 'White',
            transmision: 'automatic'
        },
        { brand: 'Audi', model: 'A4', year: 2018, price: 40000, doors: 4, color: 'Black', transmision: 'automatic' },
        {
            brand: 'Ford',
            model: 'Mustang',
            year: 2015,
            price: 20000,
            doors: 2,
            color: 'White',
            transmision: 'automatic'
        },
        { brand: 'Audi', model: 'A6', year: 2010, price: 35000, doors: 4, color: 'Black', transmision: 'automatic' },
        {
            brand: 'BMW',
            model: 'Serie 5',
            year: 2016,
            price: 70000,
            doors: 4,
            color: 'Red',
            transmision: 'automatic'
        },
        {
            brand: 'Mercedes Benz',
            model: 'Clase C',
            year: 2015,
            price: 25000,
            doors: 4,
            color: 'White',
            transmision: 'automatic'
        },
        {
            brand: 'Chevrolet',
            model: 'Camaro',
            year: 2018,
            price: 60000,
            doors: 2,
            color: 'Red',
            transmision: 'manual'
        },
        { brand: 'Ford', model: 'Mustang', year: 2019, price: 80000, doors: 2, color: 'Red', transmision: 'manual' },
        {
            brand: 'Dodge',
            model: 'Challenger',
            year: 2017,
            price: 40000,
            doors: 4,
            color: 'White',
            transmision: 'automatic'
        },
        { brand: 'Audi', model: 'A3', year: 2017, price: 55000, doors: 2, color: 'Black', transmision: 'manual' },
        {
            brand: 'Dodge',
            model: 'Challenger',
            year: 2012,
            price: 25000,
            doors: 2,
            color: 'Red',
            transmision: 'manual'
        },
        {
            brand: 'Mercedes Benz',
            model: 'Clase C',
            year: 2018,
            price: 45000,
            doors: 4,
            color: 'Blue',
            transmision: 'automatic'
        },
        {
            brand: 'BMW',
            model: 'Serie 5',
            year: 2019,
            price: 90000,
            doors: 4,
            color: 'White',
            transmision: 'automatic'
        },
        { brand: 'Ford', model: 'Mustang', year: 2017, price: 60000, doors: 2, color: 'Black', transmision: 'manual' },
        {
            brand: 'Dodge',
            model: 'Challenger',
            year: 2015,
            price: 35000,
            doors: 2,
            color: 'Blue',
            transmision: 'automatic'
        },
        {
            brand: 'BMW',
            model: 'Serie 3',
            year: 2018,
            price: 50000,
            doors: 4,
            color: 'White',
            transmision: 'automatic'
        },
        {
            brand: 'BMW',
            model: 'Serie 5',
            year: 2017,
            price: 80000,
            doors: 4,
            color: 'Black',
            transmision: 'automatic'
        },
        {
            brand: 'Mercedes Benz',
            model: 'Clase C',
            year: 2018,
            price: 40000,
            doors: 4,
            color: 'White',
            transmision: 'automatic'
        },
        { brand: 'Audi', model: 'A4', year: 2016, price: 30000, doors: 4, color: 'Blue', transmision: 'automatic' }
    ];
}

const cars = getCars();

document.addEventListener('DOMContentLoaded', () => {
    showCars(cars);
});

let dataSearch = {
    brand: '',
    year: '',
    min: '',
    max: '',
    doors: '',
    transmision: '',
    color: ''
}

const brand = document.querySelector('#brand');
brand.addEventListener('input', e => {
   // console.log(e.target.value);
   dataSearch.brand = e.target.value;

   filterCar();
});

function showCars(cars){

    const conainer = document.querySelector('#result');
    cars.forEach(car => {
        const carHTML = document.createElement('p');
        carHTML.innerHTML = `<p> ${car.brand} ${car.model} -  ${car.year} - ${car.doors} Puertas - Transmision: ${car.transmision} - Price: ${car.price} - Color: ${car.color} </p>`;

        conainer.appendChild(carHTML);
    });
}

function filterCar() {
    const result = getCars().filter(filtrerBrand);
    console.log(result);
}

function filtrerBrand(car) {
    if(dataSearch.brand) {
        return car.brand === dataSearch.brand;
    } else {

    }
}