"use strick";

let wetherBtn = document.querySelector(".button");
let wether = document.querySelector(".wether");
let input = document.querySelector(".input");

const renderWeather = function (data) {
  const html = `
  <h2 class = "continent">${input.value}</h2>
  <div class = "today-weather">
      <h2>Today:</h2>
      <p>temperature: ${data.temperature}</p>
      <p>wind: ${data.wind}</p>
      <p>description:  ${data.description}</p>
    </div>

    <ul class = "weather-list">
        <li class = "weather-item">
          <h4>Tomorrow:</h4>
          <p>temperature: ${data.forecast[0].temperature}</p>
          <p>wind: ${data.forecast[0].wind}</p>
          <p>description:  ${data.forecast[0].description}</p></li>
        <li class = "weather-item">
          <h4>The next day:</h4>
          <p>temperature: ${data.forecast[1].temperature}</p>
          <p>wind: ${data.forecast[1].wind}</p>
          <p>description:  ${data.forecast[1].description}</p></li></li>
        <li class = "weather-item">
          <h4>Few days later:</h4>
          <p>temperature: ${data.forecast[2].temperature}</p>
          <p>wind: ${data.forecast[2].wind}</p>
          <p>description:  ${data.forecast[2].description}</p></li></li>
    </ul>`;

  wether.insertAdjacentHTML("beforeend", html);
};

const getRegion = async function (region) {
  try {
    const res = await fetch(
      `https://goweather.herokuapp.com/weather/${region}`
    );

    const data = await res.json();

    console.log(data);

    renderWeather(data);
  } catch (error) {
    alert(error);
  }
};

// console.log(getRegion(`fergana`));
wetherBtn.addEventListener("click", (evt) => {
  let inputValue = input.value;
  getRegion(inputValue);
  wether.innerHTML = null;
});
