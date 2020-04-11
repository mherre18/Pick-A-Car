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

const year = document.querySelector('#year');
year.addEventListener('input', e => {
   // console.log(e.target.value);
   dataSearch.year = Number(e.target.value);

   filterCar();
});

const minim = document.querySelector('#min');
minim.addEventListener('input', e => {
   // console.log(e.target.value);
   dataSearch.minim = Number(e.target.value);

   filterCar();
});

const maxim = document.querySelector('#max');
maxim.addEventListener('input', e => {
   // console.log(e.target.value);
   dataSearch.maxim = Number(e.target.value);

   filterCar();
});

const doors = document.querySelector('#doors');
doors.addEventListener('input', e => {
   // console.log(e.target.value);
   dataSearch.doors = Number(e.target.value);

   filterCar();
});

const transmision = document.querySelector('#transmision');
transmision.addEventListener('input', e => {
   // console.log(e.target.value);
   dataSearch.transmision = e.target.value;

   filterCar();
});

const color = document.querySelector('#color');
color.addEventListener('input', e => {
   // console.log(e.target.value);
   dataSearch.color = e.target.value;

   filterCar();
});


function clearHTML() {
    const container = document.querySelector('#result');


    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

}



function showCars(cars){

    clearHTML();

    const container = document.querySelector('#result');
  
    cars.forEach(car => {
        const carHTML = document.createElement('p');
        carHTML.innerHTML = `<p> ${car.brand} ${car.model} -  ${car.year} - ${car.doors} Puertas - Transmision: ${car.transmision} - Price: ${car.price} - Color: ${car.color} </p>`;

        container.appendChild(carHTML);
    });
}

function noResult(){
    clearHTML();

    const noResult = document.createElement('div');
    noResult.classList.add('alert', 'error');
    noResult.appendChild(document.createTextNode('There is not such Car'));
    document.querySelector('#result').appendChild(noResult);

}

function filterCar() {
    const result = getCars().filter(filterBrand).filter(filterYear).filter(filterMin).filter(filterMax).filter(filterDoors).filter(filterTrans).filter(filterColor);
    console.log(result);

    if(result.length){
        showCars(result);
    } else {
        noResult();
    }
}


function filterBrand(car) {
    if(dataSearch.brand) {
        return car.brand === dataSearch.brand;
    } else {
        return car;
    }
}

function filterYear(car) {
    if(dataSearch.year) {
        return car.year === dataSearch.year;
    } else {
        return car;
    }
}

function filterMin(car) {
    if(dataSearch.minim) {
        return car.price >= dataSearch.minim;
    } else {
        return car;
    }
}

function filterMax(car) {
    if(dataSearch.maxim) {
        return car.price <= dataSearch.maxim;
    } else {
        return car;
    }
}

function filterDoors(car) {
    if(dataSearch.doors) {
        return car.doors === dataSearch.doors;
    } else {
        return car;
    }
}

function filterTrans(car) {
    if(dataSearch.transmision) {
        return car.transmision === dataSearch.transmision;
    } else {
        return car;
    }
}

function filterColor(car) {
    if(dataSearch.color) {
        return car.color === dataSearch.color;
    } else {
        return car;
    }
}

