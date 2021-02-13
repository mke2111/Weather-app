(()=>{"use strict";const e=document.getElementById("root");e.classList.add("bg-gradient-to-r","to-red-500","via-pink-500","from-purple-400","h-screen","w-full","opacity-95","z-10"),e.appendChild((()=>{const e=document.createElement("div");e.classList.add("flex","justify-around","pt-8");const t=document.createElement("div");t.classList.add("text-white","text-4xl"),t.innerHTML="<h1>Weather App</h1>";const n=document.createElement("form");n.classList.add("as","as");const d=document.createElement("input");d.classList.add("w-48","h-10","rounded-lg","border-0","px-2","placeholder-blue-600"),d.placeholder="Enter City";const a=document.createElement("div");a.classList.add("unit","text-white","text-3xl","bg-purple-400","px-2","rounded-lg","flex");const c=document.createElement("button");c.classList.add("bg-purple-400","border-r","border-gray-800","px-2","celcius"),c.innerText="C";const l=document.createElement("button");return l.classList.add("bg-purple-400","px-2","farhenheit"),l.innerText="F",a.appendChild(c),a.appendChild(l),n.appendChild(d),e.appendChild(t),e.appendChild(n),e.appendChild(a),e})());const t=document.querySelector("form"),n=document.querySelector("input"),d=document.querySelector(".celcius"),a=document.querySelector(".farhenheit");let c,l,s=!1;document.querySelector(".card-city");const i=e=>{(async function(e){const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=49257f6591cfc3ed8daf0b5970d519cb`,{mode:"cors"});return await t.json()})(e).then((e=>{"404"!==e.cod?(o(e),console.log(e)):alert(e.message)}))},o=t=>{(e=>{let t;s?(t=Math.round(e.main.temp-273.15),l=t.toString().concat(" &#176;C")):(t=Math.round(9*(e.main.temp-273.15)/5)+32,l=t.toString().concat(" &#176;F"))})(t);const n=document.createElement("div");n.classList.add("pt-6","flex","flex-row","content-center");const d=document.createElement("div");d.classList.add("border","border-red-400","rounded-lg","p-4","w-5/6","mx-auto","px-auto","text-center");const a=document.createElement("h2");a.classList.add("text-2xl","text-white"),a.innerHTML=(e=>{let t=new Date,n=t.getTime()+6e4*t.getTimezoneOffset()+1e3*e.timezone;return new Date(n).toLocaleString()})(t);const c=document.createElement("h2");c.classList.add("text-4xl","text-blue-900","card-city"),c.innerText=`${t.name}, ${t.sys.country}`;const i=document.createElement("div");i.classList.add("flex","justify-around","pt-6");const o=document.createElement("div"),r=document.createElement("h2");r.classList.add("text-2xl","text-white","font-thin"),r.innerHTML="<h2>Temperature</h2>";const p=document.createElement("h2");p.classList.add("text-3xl"),p.innerHTML=`<h2>${l}</h2>`;const u=document.createElement("div"),m=document.createElement("h2");m.classList.add("text-2xl","text-white"),m.innerHTML="<h2>Humidity</h2>";const h=document.createElement("h2");h.classList.add("text-3xl"),h.innerHTML=`<h2>${t.main.humidity}</h2>`;const x=document.createElement("div"),L=document.createElement("h2");L.classList.add("text-2xl","text-white"),L.innerHTML="<h2>Pressure</h2>";const E=document.createElement("h2");E.classList.add("text-3xl"),E.innerHTML=`<h2>${t.main.pressure}</h2>`;const C=document.createElement("div"),v=document.createElement("h2");v.classList.add("text-2xl","text-white"),v.innerHTML="Wind Speed";const g=document.createElement("h2");g.classList.add("text-3xl"),g.innerHTML=`${t.wind.speed} M/H`;const f=document.createElement("div"),w=document.createElement("h2");w.classList.add("text-2xl","text-white"),w.innerText="Cloud description";const y=document.createElement("h2");y.classList.add("text-3xl"),y.innerText=`${t.weather[0].description}`,o.appendChild(r),o.appendChild(p),u.appendChild(m),u.appendChild(h),x.appendChild(L),x.appendChild(E),C.appendChild(v),C.appendChild(g),f.appendChild(w),f.appendChild(y),d.appendChild(a),d.appendChild(c),i.appendChild(o),i.appendChild(u),i.appendChild(x),i.appendChild(C),i.appendChild(f),d.appendChild(i),n.appendChild(d),e.appendChild(n)};t.addEventListener("submit",(e=>{e.preventDefault(),isNaN(n.value)&&(c=n.value,console.log("six")),n.value="",i(c),console.log("seven")})),d.addEventListener("click",(()=>{s=!0,isNaN(n.value)&&(c=n.value,console.log("six")),n.value="",i(c),console.log("seven")})),a.addEventListener("click",(()=>{s=!1,isNaN(n.value)&&(c=n.value,console.log("six")),n.value="",i(c),console.log("seven")}))})();