
async function fetchJoke() {
    let data;
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        data = await response.json();
        document.getElementById('joke').innerText = data.value;
    } catch (error) {
        console.error('Error fetching joke:', error);
        document.getElementById('joke').innerText 
            = 'Something went wrong! Check your internet connection...';
    }
    // can access data
}
// TASK: innerHTML for displaying quote and author
// https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en
/*
function fetchJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById('joke').innerText = data.value;
    })
    .catch(error => {
        console.error('Error fetching joke:', error);
        document.getElementById('joke').innerText 
            = 'Something went wrong! Check your internet connection...';
    });
    // cannot access data here
}
*/

