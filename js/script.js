/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Always, always seek mystery. Small minds sit in answers. Great minds sit in questions.",
    source: "Zan Perrion",
    citation: "The Alabaster Girl (Book)"
  },
  {
    quote: "Follow the love in your heart - not the stress in your head.",
    source: "Pari",
    year: "2020"
  },
  {
    quote: "Modern people can't see god because they don't look low enough.",
    source: "Carl Jung"
  },
  {
    quote: "A teacher has answers to question. A coach has questions to answers.",
    source: "Arjuna Ardagh"
  },
  {
    quote: "The key to freedom? End every judgment with a question mark.",
    source: "Byron Katie"
  },
  {
    quote: "The things that matter most should never be at the mercy of the things that matter least.",
    source: "Johann Wolfgang von Goethe"
  },
  {
    quote: "Simplicity is the ultimate sophistication.",
    source: "Leonardo da Vinci"
  },
  {
    quote: "Set your life on fire. Seek those who fan your flames.",
    source: "Rumi"
  },
  {
    quote: "Wealth is the ability to fully experience life.",
    source: "Thoreau"
  }
];
console.log(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuotes() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  console.log("randomNumber: ", randomNumber);
  console.log("random quote: ", quotes[randomNumber]);
  return quotes[randomNumber];
}
getRandomQuotes();


/***
 * `printQuote` function
***/
function printQuote() {
  const randomQuote = getRandomQuotes();
  let htmlString = "";
  htmlString += `<p class="quote">${randomQuote.quote}</p>`;
  htmlString += `<p class="source">${randomQuote.source}`;
  if (randomQuote.citation) {
    htmlString += `<span>, ${randomQuote.citation}</span>`
  }
  if (randomQuote.year) {
    htmlString += `<span>, ${randomQuote.year}</span>`
  }
  htmlString += "</p>";
  console.log(htmlString);
  document.getElementById('quote-box').innerHTML = htmlString;
}
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);