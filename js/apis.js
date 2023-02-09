const apiContainer = document.getElementById('api-container');
const BASE_URL = 'http://numbersapi.com/random/trivia?json';

async function fetchFact() {
    try {
        const response = await fetch(BASE_URL);
        let funFact = await response.json();
        funFact = funFact.text.toLowerCase();
        apiContainer.innerHTML = funFact;
    } catch (error) {
        console.log('Oops! There is an error: ' + error);
        apiContainer.innerHTML = 'ooops, something went wrong. please try again!'
    }
}

export default fetchFact;