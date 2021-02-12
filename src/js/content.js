const userInput = () => {
  const formContainer = document.createElement('div');
  formContainer.classList.add('flex', 'justify-around', 'pt-8');

  const head = document.createElement('div');
  head.classList.add('text-white', 'text-4xl');
  head.innerHTML = '<h1>Weather App</h1>'

  const form = document.createElement('form');
  form.classList.add('as', 'as');

  const cityInput = document.createElement('input');
  cityInput.classList.add('w-48', 'h-10', 'rounded-lg', 'border-0', 'px-2', 'focus:outline-none');
  cityInput.placeholder = 'Enter City';

  const unit = document.createElement('div');
  unit.classList.add('unit', 'text-white', 'text-3xl', 'bg-purple-400', 'px-2', 'rounded-lg', 'flex');
  const cel = document.createElement('button');
  cel.classList.add('bg-purple-400', 'border-r', 'border-gray-800', 'px-2', 'celcius');
  cel.innerText = 'C';
  const farh = document.createElement('button');
  farh.classList.add('bg-purple-400', 'px-2', 'farhenheit');
  farh.innerText = 'F';

  unit.appendChild(cel);
  unit.appendChild(farh);

  form.appendChild(cityInput);
  formContainer.appendChild(head);
  formContainer.appendChild(form);
  formContainer.appendChild(unit);

  return formContainer;
}

// const weatherCard = data => {
//   const card = document.createElement('div');
//   card.classList.add('pt-6');

//   const cardContainer = document.createElement('div');
//   cardContainer.classList.add('border', 'border-red-400', 'rounded-lg', 'p-4', 'w-min');

//   const cardCity = document.createElement('h2');
//   cardCity.classList.add('text-4xl', 'text-blue-900', 'card-city');
//   // if (data === undefined) {
//   //   cardCity.innerText = `${data.name}`;
//   // }
  
//   const cardTemp = document.createElement('h2');
//   cardTemp.classList.add();
//   cardTemp.innerHTML = `<h2>Temp:   21&#176;C</h2>`;

//   const cardIcon = document.createElement('h2');
//   cardIcon.classList.add();
//   cardIcon.innerHTML = `<img src=''>`;

//   const cardCloud = document.createElement('h2');
//   cardCloud.classList.add();
//   cardCloud.innerText = `Rainy`;

//   cardContainer.appendChild(cardCity);
//   cardContainer.appendChild(cardTemp);
//   cardContainer.appendChild(cardIcon);
//   cardContainer.appendChild(cardCloud);
//   card.appendChild(cardContainer);

//   return card;

// }

export default userInput ;