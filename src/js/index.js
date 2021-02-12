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
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=49257f6591cfc3ed8daf0b5970d519cb`, 
    { mode: "cors" }
  );

  const data = await response.json();

  // weatherCard(data);
  console.log(data);
  weatherCard(data)
}



const weatherCard = data => {
  let temperature = Math.round(
    (
      ((data.main.temp - 273.15) * 9) / (5)) + 32
    );
  
  const card = document.createElement('div');
  card.classList.add('pt-6');

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('border', 'border-red-400', 'rounded-lg', 'p-4', 'w-min');

  const cardCity = document.createElement('h2');
  cardCity.classList.add('text-4xl', 'text-blue-900', 'card-city');
  cardCity.innerText = `${data.name}`;
  
  
  const cardTemp = document.createElement('h2');
  cardTemp.classList.add();
  cardTemp.innerHTML = `<h2>Temp: ${temperature.toString()}&#176;C</h2>`;

  const cardIcon = document.createElement('h2');
  cardIcon.classList.add();
  cardIcon.innerHTML = `<img src=''>`;

  const cardCloud = document.createElement('h2');
  cardCloud.classList.add();
  cardCloud.innerText = `${data.weather[0]['description']}`;

  cardContainer.appendChild(cardCity);
  cardContainer.appendChild(cardTemp);
  cardContainer.appendChild(cardIcon);
  cardContainer.appendChild(cardCloud);
  card.appendChild(cardContainer);
  root.appendChild(card);

  // return card;

}



getData()
  .then(dat => {
    console.log(dat);
  })