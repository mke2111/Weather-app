import userInput from './content'

const root = document.getElementById('root');
root.classList.add('bg-gradient-to-r', 'to-red-500', 'via-pink-500', 'from-purple-400', 'h-screen', 'w-full', 'opacity-95', 'z-10');

root.appendChild(userInput());

// user input section

const form = document.querySelector('form');
const cityInput = document.querySelector('input');
const cel = document.querySelector('.celcius');
const farh = document.querySelector('.farhenheit');

let city;
let scale = true;

// display

const cardCity = document.querySelector('.card-city');

// root.appendChild(weatherCard());

const validSearch = (city) => {
  // if (data.cod === '404') {
  //   alert(data.message);
  //   console.log(data);
  // } else {
  //   weatherCard(data);
    // console.log(data);
  // }
  getData(city)
    .then(data => {
      if (data.cod !== '404') {
        weatherCard(data);
        console.log(data);
      } else {
        alert(data.message);
      }
    });
}

// Get weather data

async function getData(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49257f6591cfc3ed8daf0b5970d519cb`, 
    { mode: "cors" }
  );

  const data = await response.json();

  return data;

  // validSearch(data); 
  // console.log(data);
  // weatherCard(data)
}

/*Get local time function */

const getLocalTime = data => {
  let date = new Date();
  let time = date.getTime();
  let localOffset = date.getTimezoneOffset() * 60000;
  let utc = time + localOffset;
  let localTime = utc + 1000 * data.timezone;
  let localTimeDate = new Date(localTime);
  return localTimeDate.toLocaleString();
}

const switchScale = data => {
  let temperature;
  let cScale = ' &#176;C';
  if (scale) {
    temperature = Math.round(data.main.temp - 273.15);
    return temperature.toString().concat(cScale);
  }

}

// ((data.main.temp - 273.15) * 9) / (5)) + 32
const weatherCard = data => {
  let temperature = Math.round(
    (
      data.main.temp - 273.15
    ));
  
  const card = document.createElement('div');
  card.classList.add('pt-6', 'flex', 'flex-row', 'content-center');

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('border', 'border-red-400', 'rounded-lg', 'p-4', 'w-5/6', 'mx-auto', 'px-auto', 'text-center');

  // City time
  const cardTime = document.createElement('h2');
  cardTime.classList.add('text-2xl', 'text-white');
  cardTime.innerHTML = getLocalTime(data);

  // City Name
  const cardCity = document.createElement('h2');
  cardCity.classList.add('text-4xl', 'text-blue-900', 'card-city');
  cardCity.innerText = `${data.name}, ${data.sys.country}`;
  
  // City properties container
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('flex', 'justify-around', 'pt-6');
  
  const cardTempDiv = document.createElement('div'); // Temperature

  const cardTemp = document.createElement('h2');
  cardTemp.classList.add('text-2xl', 'text-white');
  cardTemp.innerHTML = `<h2>Temperature</h2>`;

  const temp = document.createElement('h2');
  temp.classList.add('text-3xl');
  temp.innerHTML = `<h2>${temperature.toString()}&#176;C</h2>`;

  const cardHumDiv = document.createElement('div'); // Humidity

  const cardHum = document.createElement('h2');
  cardHum.classList.add('text-2xl', 'text-white');
  cardHum.innerHTML = `<h2>Humidity</h2>`;

  const humi = document.createElement('h2');
  humi.classList.add('text-3xl');
  humi.innerHTML = `<h2>${data.main.humidity}</h2>`;

  const cardPreDiv = document.createElement('div'); // Pressure

  const cardPressure = document.createElement('h2');
  cardPressure.classList.add('text-2xl', 'text-white');
  cardPressure.innerHTML = `<h2>Pressure</h2>`;

  const pressure = document.createElement('h2');
  pressure.classList.add('text-3xl');
  pressure.innerHTML = `<h2>${data.main.pressure}</h2>`;

  const cardIconDiv = document.createElement('div'); // Wind speed

  const cardIcon = document.createElement('h2');
  cardIcon.classList.add('text-2xl', 'text-white');
  cardIcon.innerHTML = `Wind Speed`;

  const speed = document.createElement('h2');
  speed.classList.add('text-3xl');
  speed.innerHTML = `${data.wind.speed} M/H`;

  const cardCloudDiv = document.createElement('div'); // Description

  const cardCloud = document.createElement('h2');
  cardCloud.classList.add('text-2xl', 'text-white');
  cardCloud.innerText = `Cloud description`;

  const cloud = document.createElement('h2');
  cloud.classList.add('text-3xl');
  cloud.innerText = `${data.weather[0]['description']}`;

  cardTempDiv.appendChild(cardTemp);
  cardTempDiv.appendChild(temp);

  cardHumDiv.appendChild(cardHum);
  cardHumDiv.appendChild(humi);

  cardPreDiv.appendChild(cardPressure);
  cardPreDiv.appendChild(pressure);

  cardIconDiv.appendChild(cardIcon);
  cardIconDiv.appendChild(speed);

  cardCloudDiv.appendChild(cardCloud);
  cardCloudDiv.appendChild(cloud);

  cardContainer.appendChild(cardTime);
  cardContainer.appendChild(cardCity);
  cardInfo.appendChild(cardTempDiv);
  cardInfo.appendChild(cardHumDiv);
  cardInfo.appendChild(cardPreDiv);
  cardInfo.appendChild(cardIconDiv);
  cardInfo.appendChild(cardCloudDiv);
  cardContainer.appendChild(cardInfo);
  card.appendChild(cardContainer);
  root.appendChild(card);

  // return card;

}

// if (!form || form === null) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (isNaN(cityInput.value)) {
      city = cityInput.value;
      console.log('six');
    }
    cityInput.value = '';
    
    validSearch(city)
    // getData(city);
    console.log('seven');
  })
// }



// if (cityInput.value === '') {
//   getData('Kampala')
//     .then(dat => {
//       console.log(dat);
//     });
// }