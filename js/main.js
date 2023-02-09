import fetchFact from "./apis.js";

const fetchAPIBtn = document.getElementById('fetch-api-btn');

fetchAPIBtn.addEventListener('click', () => fetchFact());

