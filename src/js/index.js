// import switchScale from './apii';
import { userInput, weatherCard } from './content';

const root = document.getElementById('root');
root.classList.add('bg-gradient-to-r', 'to-purple-600', 'via-blue-400', 'from-purple-400', 'h-screen', 'w-full', 'opacity-95', 'z-10');

root.appendChild(userInput());
weatherCard();

// user input section

const form = document.querySelector('form');
const cityInput = document.querySelector('input');
const cel = document.querySelector('.celcius');
const farh = document.querySelector('.farhenheit');

const modal = document.getElementById('myModal');

// weather fields

const cardTime = document.querySelector('.card-time');
const cardCity = document.querySelector('.card-city');
const cardTemp = document.querySelector('.card-temp');
const cardHumi = document.querySelector('.humidity');
const cardPress = document.querySelector('.pressure');
const cardSpeed = document.querySelector('.speed');
const cardDesc = document.querySelector('.description');

let city;
let scale = false;
let show;
let timee;
const cScale = ' &#176;C';
const fScale = ' &#176;F';
  let temperature;

// modal

const modalWarn = () => {
  modal.style.display = 'block';

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
};

// Get weather data

async function getData(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49257f6591cfc3ed8daf0b5970d519cb`,
    { mode: 'cors' });

  const data = await response.json();
  return data;
}

// Get local time function

const getLocalTime = data => {
  const date = new Date();
  const time = date.getTime();
  const localOffset = date.getTimezoneOffset() * 60000;
  const utc = time + localOffset;
  const localTime = utc + 1000 * data.timezone;
  const localTimeDate = new Date(localTime);
  return localTimeDate.toLocaleString();
};

// const switchScale = data => {
//   const cScale = ' &#176;C';
//   const fScale = ' &#176;F';

//   if (scale) {
//     temperature = Math.round(data.main.temp - 273.15);
//     show = temperature.toString().concat(cScale);
//   } else {
//     temperature = Math.round(((data.main.temp - 273.15) * 9) / (5)) + 32;
//     show = temperature.toString().concat(fScale);
//   }
//   return show
// };

const validSearch = (city) => {
  getData(city)
    .then(data => {
      if (scale) {
        temperature = Math.round(data.main.temp - 273.15);
        show = temperature.toString().concat(cScale);
      } else {
        temperature = Math.round(((data.main.temp - 273.15) * 9) / (5)) + 32;
        show = temperature.toString().concat(fScale);
      }
      if (data.cod !== '404') {
        cardCity.innerHTML = `<h2>${data.name}, ${data.sys.country}</h2>`;
        cardTime.innerHTML = `<h2>${getLocalTime(data)}</h2>`;
        cardTemp.innerHTML = `<h2>${show}</h2>`;
        cardSpeed.innerHTML = `<h2>${data.wind.speed} M/H</h2>`;
        cardPress.innerHTML = `<h2>${data.main.pressure}</h2>`;
        cardHumi.innerHTML = `<h2>${data.main.humidity}</h2>`;
        cardDesc.innerHTML = `<h2>${data.weather[0].description}</h2>`;
      } else {
        modalWarn();
      }
    });
};

const passInput = () => {
  if (Number.isNaN(Number(cityInput.value))) {
    city = cityInput.value;
  }
  cityInput.value = '';
  validSearch(city);
};

const activeScale = () => {
  if (scale) {
    farh.classList.remove('bg-pink-600');
    cel.classList.add('bg-pink-600');
  } else {
    cel.classList.remove('bg-pink-600');
    farh.classList.add('bg-pink-600');
  }
};

form.addEventListener('submit', e => {
  e.preventDefault();
  passInput();
});

cel.addEventListener('click', () => {
  scale = true;
  passInput();
  activeScale();
});

farh.addEventListener('click', () => {
  scale = false;
  passInput();
  activeScale();
});
