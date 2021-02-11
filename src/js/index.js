import { userInput, weatherCard } from './content'

const root = document.getElementById('root');
root.classList.add('bg-gradient-to-r', 'to-red-500', 'via-pink-500', 'from-purple-400', 'h-screen', 'w-full', 'opacity-95', 'z-10');

// user input section

const form = document.querySelector('form');
const cityInput = document.querySelector('input');
const cel = document.querySelector('.celcius');
const farh = document.querySelector('.farhenheit');

// Get weather data

async function getData() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=49257f6591cfc3ed8daf0b5970d519cb`, 
    { mode: "cors" }
  );

  const data = await response.json();

  return data;
}

root.appendChild(userInput());
root.appendChild(weatherCard());

getData()
      .then( weat => console.log(weat));
