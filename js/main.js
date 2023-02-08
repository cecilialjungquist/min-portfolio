const apiContainer = document.getElementById('api-container');
const BASE_URL = 'http://numbersapi.com/random/trivia';

async function fetchFact() {
    try {
        const response = await fetch(BASE_URL);
        console.log(response.url);
        let fact = await fetch(response.url);
        fact = await fact.json();
        console.log(fact);
        const apiEl = document.createElement('p');
        
    } catch (error) {
        
    }
}

fetchFact();
