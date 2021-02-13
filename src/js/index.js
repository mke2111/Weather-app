import userInput from './content'

const root = document.getElementById('root');
root.classList.add('bg-gradient-to-r', 'to-red-500', 'via-pink-500', 'from-purple-400', 'h-screen', 'w-full', 'opacity-95', 'z-10');

// user input section

const form = document.querySelector('form');
const cityInput = document.querySelector('input');
const cel = document.querySelector('.celcius');
const farh = document.querySelector('.farhenheit');

// display

const cardCity = document.querySelector('.card-city');

root.appendChild(userInput());
// root.appendChild(weatherCard());

// Get weather data

async function getData() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kampala&appid=49257f6591cfc3ed8daf0b5970d519cb`, 
    { mode: "cors" }
  );

  const data = await response.json();

  // weatherCard(data);
  console.log(data);
  weatherCard(data)
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

const weatherCard = data => {
  let temperature = Math.round(
    (
      ((data.main.temp - 273.15) * 9) / (5)) + 32
    );
  
  const card = document.createElement('div');
  card.classList.add('pt-6', 'flex', 'flex-row', 'content-center');

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('border', 'border-red-400', 'rounded-lg', 'p-4', 'w-3/6', 'mx-auto', 'px-auto', 'text-center');

  const cardTime = document.createElement('h2');
  cardTime.classList.add('text-3xl');
  cardTime.innerHTML = getLocalTime(data);

  const cardCity = document.createElement('h2');
  cardCity.classList.add('text-4xl', 'text-blue-900', 'card-city');
  cardCity.innerText = `${data.name}, ${data.sys.country}`;
  
  
  const cardTempDiv = document.createElement('div');

  const cardTemp = document.createElement('h2');
  cardTemp.classList.add();
  cardTemp.innerHTML = `<h2>Temperature</h2>`;

  const temp = document.createElement('h2');
  temp.classList.add();
  temp.innerHTML = `<h2>${temperature.toString()}&#176;C</h2>`;

  const cardIconDiv = document.createElement('div');

  const cardIcon = document.createElement('h2');
  cardIcon.classList.add();
  cardIcon.innerHTML = `Wind Speed`;

  const speed = document.createElement('h2');
  speed.classList.add();
  speed.innerHTML = `${data.wind.speed} M/H`;

  const cardCloudDiv = document.createElement('div');

  const cardCloud = document.createElement('h2');
  cardCloud.classList.add();
  cardCloud.innerText = `Clouds description`;

  const cloud = document.createElement('h2');
  cloud.classList.add();
  cloud.innerText = `${data.weather[0]['description']}`;

  cardTempDiv.appendChild(cardTemp);
  cardTempDiv.appendChild(temp);

  cardIconDiv.appendChild(cardIcon);
  cardIconDiv.appendChild(speed);

  cardCloudDiv.appendChild(cardCloud);
  cardCloudDiv.appendChild(cloud);

  cardContainer.appendChild(cardTime);
  cardContainer.appendChild(cardCity);
  cardContainer.appendChild(cardTempDiv);
  cardContainer.appendChild(cardIconDiv);
  cardContainer.appendChild(cardCloudDiv);
  card.appendChild(cardContainer);
  root.appendChild(card);

  // return card;

}



getData()
  .then(dat => {
    console.log(dat);
  })