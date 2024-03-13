async function fetchQuote() {
    try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/' +'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en');
        const data = await response.json();
        document.getElementById('quote').innerHTML = `${data.quoteText} by ${data.quoteAuthor}`;
    } catch(error) {
        console.error('Error fetching quote:', error);
        document.getElementById('quote').innerHTML = 'Something went wrong! Check your internet connection...';
    }
};

//Hint1: Кога читате од input елемент, value е стринг. 
//Треба parseInt() да направите
//Hint2: Ако вториот број е нула и делите, 
//треба да испечатите Cannot divide by zero на местото на резултатот