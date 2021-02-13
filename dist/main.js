(()=>{"use strict";const e=document.getElementById("root");e.classList.add("bg-gradient-to-r","to-red-500","via-pink-500","from-purple-400","h-screen","w-full","opacity-95","z-10"),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("flex","justify-around","pt-8");const t=document.createElement("div");t.classList.add("text-white","text-4xl"),t.innerHTML="<h1>Weather App</h1>";const n=document.createElement("form");n.classList.add("as","as");const d=document.createElement("input");d.classList.add("w-48","h-10","rounded-lg","border-0","px-2","focus:outline-none"),d.placeholder="Enter City";const a=document.createElement("div");a.classList.add("unit","text-white","text-3xl","bg-purple-400","px-2","rounded-lg","flex");const c=document.createElement("button");c.classList.add("bg-purple-400","border-r","border-gray-800","px-2","celcius"),c.innerText="C";const l=document.createElement("button");return l.classList.add("bg-purple-400","px-2","farhenheit"),l.innerText="F",a.appendChild(c),a.appendChild(l),n.appendChild(d),e.appendChild(t),e.appendChild(n),e.appendChild(a),e})());const t=document.querySelector("form"),n=document.querySelector("input");let d;document.querySelector(".celcius"),document.querySelector(".farhenheit"),n.value=null,document.querySelector(".card-city");t.addEventListener("submit",(t=>{t.preventDefault(),isNaN(n.value)&&(d=n.value,console.log("six")),n.value="",async function(t){const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&appid=49257f6591cfc3ed8daf0b5970d519cb`,{mode:"cors"}),d=await n.json();console.log(d),(t=>{let n=Math.round(9*(t.main.temp-273.15)/5+32);const d=document.createElement("div");d.classList.add("pt-6","flex","flex-row","content-center");const a=document.createElement("div");a.classList.add("border","border-red-400","rounded-lg","p-4","w-5/6","mx-auto","px-auto","text-center");const c=document.createElement("h2");c.classList.add("text-2xl","text-white"),c.innerHTML=(e=>{let t=new Date,n=t.getTime()+6e4*t.getTimezoneOffset()+1e3*e.timezone;return new Date(n).toLocaleString()})(t);const l=document.createElement("h2");l.classList.add("text-4xl","text-blue-900","card-city"),l.innerText=`${t.name}, ${t.sys.country}`;const i=document.createElement("div");i.classList.add("flex","justify-around","pt-6");const s=document.createElement("div"),o=document.createElement("h2");o.classList.add("text-2xl","text-white"),o.innerHTML="<h2>Temperature</h2>";const r=document.createElement("h2");r.classList.add("text-3xl"),r.innerHTML=`<h2>${n.toString()}&#176;C</h2>`;const p=document.createElement("div"),u=document.createElement("h2");u.classList.add("text-2xl","text-white"),u.innerHTML="<h2>Humidity</h2>";const m=document.createElement("h2");m.classList.add("text-3xl"),m.innerHTML=`<h2>${t.main.humidity}</h2>`;const h=document.createElement("div"),x=document.createElement("h2");x.classList.add("text-2xl","text-white"),x.innerHTML="<h2>Pressure</h2>";const L=document.createElement("h2");L.classList.add("text-3xl"),L.innerHTML=`<h2>${t.main.pressure}</h2>`;const C=document.createElement("div"),E=document.createElement("h2");E.classList.add("text-2xl","text-white"),E.innerHTML="Wind Speed";const f=document.createElement("h2");f.classList.add("text-3xl"),f.innerHTML=`${t.wind.speed} M/H`;const w=document.createElement("div"),v=document.createElement("h2");v.classList.add("text-2xl","text-white"),v.innerText="Cloud description";const g=document.createElement("h2");g.classList.add("text-3xl"),g.innerText=`${t.weather[0].description}`,s.appendChild(o),s.appendChild(r),p.appendChild(u),p.appendChild(m),h.appendChild(x),h.appendChild(L),C.appendChild(E),C.appendChild(f),w.appendChild(v),w.appendChild(g),a.appendChild(c),a.appendChild(l),i.appendChild(s),i.appendChild(p),i.appendChild(h),i.appendChild(C),i.appendChild(w),a.appendChild(i),d.appendChild(a),e.appendChild(d)})(d)}(d),console.log("seven")}))})();