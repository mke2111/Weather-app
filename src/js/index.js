import { userInput, weatherCard } from './content'

const root = document.getElementById('root');
root.classList.add('bg-gradient-to-r', 'to-red-500', 'via-pink-500', 'from-purple-400', 'h-screen', 'w-full', 'opacity-95', 'z-10');

root.appendChild(userInput());
root.appendChild(weatherCard());
