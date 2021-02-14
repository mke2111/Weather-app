const userInput = () => {
  const formContainer = document.createElement('div');
  formContainer.classList.add('flex', 'justify-around', 'pt-8');

  const head = document.createElement('div');
  head.classList.add('text-white', 'text-4xl');
  head.innerHTML = '<h1>Weather App</h1>'

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
}

export default userInput ;