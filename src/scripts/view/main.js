// import dataJson from "../../DATA.json" assert { type: "json" };
import dataJson from "../../DATA.json";

const main = () => {
  // console.log("Hello Coders! :)");
  // console.log(dataJson.restaurants[0]);

  const footer = document.querySelector("footer");
  document.body.removeChild(footer);

  for (let i = 0; i < dataJson.restaurants.length; i++) {
    const id = dataJson.restaurants[i].id;
    const name = dataJson.restaurants[i].name;
    const description = dataJson.restaurants[i].description;
    const pictureUrl = dataJson.restaurants[i].pictureId;
    const city = dataJson.restaurants[i].city;
    const rating = dataJson.restaurants[i].rating;

    const card = `
    <div id="${id}" class="card">
      <img
        src="${pictureUrl}"
        alt="restaurant photo"
      />
      <div class="card-title"><p>${name}, ${city}</p></div>
      <div class="card-content-container">
        <div class="rating">
          <h1>${rating}</h1>
          <div><p>Rating</p></div>
        </div>
        <p class="description">
          ${description.slice(0, 72)}...
        </p>
      </div>
    </div>`;

    document.querySelector("#card-container").innerHTML += card;
  }

  document.body.appendChild(footer);
};

export default main;
