const apiContainer = document.getElementById('api-container');
const notFoundMsgEl = document.createElement('p');
const fetchAPIBtn = document.getElementById('fetch-api-btn');
const BASE_URL = 'https://numbersapi.com/';
const END_URL = '/trivia?json'

fetchAPIBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    fetchFact();
});

async function fetchFact() {

    notFoundMsgEl.innerHTML = '';
    let num = fetchInput();

    try {
        let response = await fetch(BASE_URL + num + END_URL);
        let funFact = await response.json();

        if (!funFact.found) {
            response = await fetch(BASE_URL + 'random' + END_URL);
            funFact = await response.json();
            notFoundMsgEl.classList.add('help-text');
            notFoundMsgEl.innerHTML = `${num} seems like a boring number. but we've found this fun fact instead:`;
            apiContainer.insertAdjacentElement('beforebegin', notFoundMsgEl);
        } 
            
        funFact = funFact.text.toLowerCase();
        apiContainer.innerHTML = funFact;

    } catch (error) {
        console.log('Oops! There is an error: ' + error);
        apiContainer.innerHTML = 'ooops, something went wrong. please try again!';
    }
}

function fetchInput() {
    let numInput = document.getElementById('num-input');
    numInput = numInput.value;

    if (numInput === '') {
        numInput = Math.floor(Math.random() * 100)
    } else if (numInput < 0 ) {
        numInput = numInput * (-1);
    }

    return numInput;
}


export default fetchFact;