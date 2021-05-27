

window.onload = function() {

    const quoteContainer = document.getElementById('quote-container');
    const quoteText = document.getElementById('quote');
    const authorText = document.getElementById("author");
    const twitterBtn = document.getElementById('twitter');
    const newQuoteBtn = document.getElementById('new-quote');



    // Get Quote from API
async function getQuote(){


    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        authorText.innerText = data.quoteAuthor;
        quoteText.innerText = data.quoteText;
        console.log(data.quoteAuthor);

    } catch (error) {
        getQuote();
    }  

    

}

// onLoad
getQuote();

}


