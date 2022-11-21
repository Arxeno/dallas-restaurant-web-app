import dataJson from "../../DATA.json" assert { type: "json" };

const main = () => {
  console.log("Hello Coders! :)");
  console.log(dataJson.restaurants[0]);

  for (let i = 0; i < dataJson.restaurants.length; i++) {
    console.log(dataJson.restaurants[i]);
  }
};

export default main;
