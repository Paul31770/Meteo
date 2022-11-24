const button = document.querySelector("button");
const input = document.querySelector("input");
const div = document.querySelector("#res");
ville = document.createElement("h3");
temp = document.createElement("p");
description = document.createElement("p");
img = document.createElement("img");
erreur = document.querySelector("#erreur");

button.addEventListener("click", function (e) {
  erreur.style.display = "none";
  div.style.border = "block";
  temp.style.display = "block";
  img.style.display = "block";
  description.style.display = "block";
  ville.style.display = "block";
  e.preventDefault();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=33ee0d4a080f2cf25b40428f5802937c&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      data = res;
    })
    .then(function () {
      ville.value = data.name;
      ville.innerHTML = data.name;
      console.log(ville);
      temp.value = Math.round(data.main.temp);
      temp.innerHTML = "Température : " + Math.round(data.main.temp) + " °C";
      temp.classList.add("temp");

      img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      description.value = "Description : " + data.weather[0].description;
      description.innerHTML = "Description : " + data.weather[0].description;
      div.appendChild(ville);
      div.appendChild(temp);
      div.appendChild(img);
      div.appendChild(description);
      div.style.border = "1px solid rgb(155, 152, 152)";
      div.style.borderRadius = "4px";
      input.value = "";
    })
    .catch(function (error) {
      erreur.style.display = "block";
      erreur.style.backgroundColor = "rgba(255, 61, 61,0.2)";

      erreur.style.color = "red";
      erreur.style.borderRadius = "4px";
      erreur.style.marginTop = "6px";
      input.value = "";
      div.style.border = "none";
      temp.style.display = "none";
      img.style.display = "none";
      description.style.display = "none";
      ville.style.display = "none";
    });
});
