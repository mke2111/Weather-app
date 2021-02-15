const userInput = () => {
  const formContainer = document.createElement('div');
  formContainer.classList.add('flex', 'justify-around', 'pt-8');

  const head = document.createElement('div');
  head.classList.add('text-white', 'text-4xl');
  head.innerHTML = '<h1>Weather App</h1>';

  const form = document.createElement('form');
  form.classList.add('as', 'as');

  const cityInput = document.createElement('input');
  cityInput.classList.add('w-48', 'h-10', 'rounded-lg', 'border-0', 'px-2', 'placeholder-blue-600');
  cityInput.placeholder = 'Enter City';

  const unit = document.createElement('div');
  unit.classList.add('unit', 'text-white', 'text-3xl', 'bg-purple-400', 'flex', 'rounded-lg');
  const cel = document.createElement('button');
  cel.classList.add('border-r', 'border-gray-800', 'px-2', 'celcius', 'rounded-l-lg');
  cel.innerText = 'C';
  const farh = document.createElement('button');
  farh.classList.add('px-2', 'farhenheit', 'rounded-r-lg');
  farh.innerText = 'F';

  unit.appendChild(cel);
  unit.appendChild(farh);

  form.appendChild(cityInput);
  formContainer.appendChild(head);
  formContainer.appendChild(form);
  formContainer.appendChild(unit);

  return formContainer;
};

const weatherCard = () => {
  const root = document.querySelector('#root');

  const card = document.createElement('div');
  card.classList.add('pt-6', 'flex', 'flex-row', 'content-center');

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('p-4', 'w-5/6', 'mx-auto', 'px-auto', 'text-center');

  // City time
  const cardTime = document.createElement('h2');
  cardTime.classList.add('text-2xl', 'text-yellow-500', 'card-time');

  // City Name
  const cardCity = document.createElement('h2');
  cardCity.classList.add('text-4xl', 'text-blue-900', 'card-city');

  // City properties container
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('flex', 'justify-around', 'pt-6');

  const cardTempDiv = document.createElement('div'); // Temperature

  const cardTemp = document.createElement('h2');
  cardTemp.classList.add('text-2xl', 'text-yellow-500', 'font-thin');
  cardTemp.innerHTML = '<h2>Temperature</h2>';

  const temp = document.createElement('h2');
  temp.classList.add('text-3xl', 'card-temp');

  const cardHumDiv = document.createElement('div'); // Humidity

  const cardHum = document.createElement('h2');
  cardHum.classList.add('text-2xl', 'text-yellow-500');
  cardHum.innerHTML = '<h2>Humidity</h2>';

  const humi = document.createElement('h2');
  humi.classList.add('text-3xl', 'humidity');

  const cardPreDiv = document.createElement('div'); // Pressure

  const cardPressure = document.createElement('h2');
  cardPressure.classList.add('text-2xl', 'text-yellow-500');
  cardPressure.innerHTML = '<h2>Pressure</h2>';

  const pressure = document.createElement('h2');
  pressure.classList.add('text-3xl', 'pressure');

  const cardIconDiv = document.createElement('div'); // Wind speed

  const cardIcon = document.createElement('h2');
  cardIcon.classList.add('text-2xl', 'text-yellow-500');
  cardIcon.innerHTML = 'Wind Speed';

  const speed = document.createElement('h2');
  speed.classList.add('text-3xl', 'speed');

  const cardCloudDiv = document.createElement('div'); // Description

  const cardCloud = document.createElement('h2');
  cardCloud.classList.add('text-2xl', 'text-yellow-500');
  cardCloud.innerText = 'Cloud description';

  const cloud = document.createElement('h2');
  cloud.classList.add('text-3xl', 'description');

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
};

export { userInput, weatherCard };