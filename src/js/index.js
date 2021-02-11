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
  const response = await fetch('api.openweathermap.org/data/2.5/weather?q=Kampala&appid=1c954fe59dca8548d2eb13416b4f9da3', 
    { mode: "cors" }
  );

  const data = await response.json();

  console.log(data);
}

root.appendChild(userInput());
root.appendChild(weatherCard());

getData();
