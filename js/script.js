"use strick";

let wetherBtn = document.querySelector(".button");
let wether = document.querySelector(".wether");
let input = document.querySelector(".input");

const renderWeather = function (data) {
  const html = `
    <h2></h2>
    <p>temperature: ${data.temperature}</p>
    <p>wind: ${data.wind}</p>
    <p>description:  ${data.description}</p>
    <ul>
        <li>Erta:
          <p>temperature: ${data.forecast[0].temperature}</p>
          <p>wind: ${data.forecast[0].wind}</p>
          <p>description:  ${data.forecast[0].description}</p></li>
        <li>Indin:
          <p>temperature: ${data.forecast[1].temperature}</p>
          <p>wind: ${data.forecast[1].wind}</p>
          <p>description:  ${data.forecast[1].description}</p></li></li>
        <li>Va so'nggi kun:
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
});
