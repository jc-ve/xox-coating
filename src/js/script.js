"use strict";

const elHeader = document.querySelector(".header");
const btnNav = document.querySelector(".btn--navigation");

let map = document.querySelector("#map");

btnNav.addEventListener("click", () => {
  elHeader.classList.toggle("active");
});

if (map) {
  map = L.map("map").setView([52.041592, -0.758444], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  L.marker([52.041592, -0.758444]).addTo(map);
}
