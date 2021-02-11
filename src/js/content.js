const userInput = () => {
  const formContainer = document.createElement('div');
  formContainer.classList.add('flex', 'justify-around', 'pt-16');

  const head = document.createElement('div');
  head.classList.add('text-white', 'text-4xl');
  head.innerHTML = '<h1>Weather App</h1>'

  const form = document.createElement('form');
  form.classList.add('as', 'as');

  const cityInput = document.createElement('input');
  cityInput.classList.add('w-48', 'h-10', 'rounded-lg', 'border-0', 'px-2', 'focus:outline-none');
  cityInput.placeholder = 'Enter City';

  const unit = document.createElement('div');
  unit.classList.add('text-white', 'text-3xl', 'bg-purple-400', 'px-2', 'rounded-lg');
  unit.innerText = 'C/F'

  form.appendChild(cityInput);
  formContainer.appendChild(head);
  formContainer.appendChild(form);
  formContainer.appendChild(unit);

  return formContainer;
}

const weatherCard = () => {
  const card = document.createElement('div');
  card.classList.add('pt-6');


  const cardContainer = document.createElement('div');
  cardContainer.classList.add('border', 'border-red-400', 'rounded-lg', 'p-4', 'w-48');

  const cardCity = document.createElement('h2');
  cardCity.classList.add('text-2xl', 'text-blue-900');
  cardCity.innerText = `Kampala`;

  const cardTemp = document.createElement('h2');
  cardTemp.classList.add();
  cardTemp.innerHTML = `<h2>Temp:   21&#176;C</h2>`;

  const cardUnit = document.createElement('h2');
  cardUnit.classList.add();
  cardUnit.innerHTML = `<h2>Moisture:  16 &#176;</h2>`;

  const cardCloud = document.createElement('h2');
  cardCloud.classList.add();
  cardCloud.innerText = `Rainy`;

  cardContainer.appendChild(cardCity);
  cardContainer.appendChild(cardTemp);
  cardContainer.appendChild(cardUnit);
  cardContainer.appendChild(cardCloud);
  card.appendChild(cardContainer);

  return card;

}

export { userInput, weatherCard } ;