// ************************************
// Treehouse FSJS Techdegree:
// project 1 - A Random Quote Generator
// ************************************

// Array with my selected quotes:
const quotes = [
  {
    quote: "Always, always seek mystery. Small minds sit in answers. Great minds sit in questions.",
    source: "Zan Perrion",
    alive: true,
    citation: "The Alabaster Girl (Book)",
  },
  {
    quote: "Follow the love in your heart - not the stress in your head.",
    source: "Pari",
    alive: true,
    year: "2020",
    tag: "wisdom"
  },
  {
    quote: "Modern people can't see god because they don't look low enough.",
    source: "Carl Jung"
  },
  {
    quote: "A teacher has answers to question. A coach has questions to answers.",
    source: "Arjuna Ardagh",
    alive: true
  },
  {
    quote: "The key to freedom? End every judgment with a question mark.",
    source: "Byron Katie",
    alive: true
  },
  {
    quote: "The things that matter most should never be at the mercy of the things that matter least.",
    source: "Johann Wolfgang von Goethe",
    alive: false
  },
  {
    quote: "Simplicity is the ultimate sophistication.",
    source: "Leonardo da Vinci",
    alive: false
  },
  {
    quote: "Set your life on fire. Seek those who fan your flames.",
    source: "Rumi",
    alive: false
  },
  {
    quote: "Wealth is the ability to fully experience life.",
    source: "Thoreau",
    alive: false
  }
];
console.log("quotes: ", quotes); // logging the array to the console to check

// Array with some colors (for the randomBackgroundColor function):
colors = ["#6495ED", "#FF7F50", "#D2691E", "#008B8B", "#8B0000", "#00CED1", "#4B0082", "#FFA07A", "#DB7093", "#008080"];
console.log("colors: ", colors)

// Function for getting a random qoute:
function getRandomQuotes() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  console.log("randomNumber: ", randomNumber);
  console.log("random quote: ", quotes[randomNumber]);
  return quotes[randomNumber];
}
getRandomQuotes(); // calling the function to check it's working -> NOT selecting the first quote yet!


// Function for printing a quote to the page:
function printQuote() {
  // Call the function for setting a random background color:
  randomBackgroundColor();
  // Get a random quote and store it in a variable:
  const randomQuote = getRandomQuotes();
  // Create an empty string for the html content of the quote:
  let htmlString = "";
  // Add the quote text as a <p> element:
  htmlString += `<p class="quote">${randomQuote.quote}</p>`;
  // Add the quote source as a <p> element (no closing </p> tag yet!)
  htmlString += `<p class="source">${randomQuote.source}`;
  // Check if the source is still alive (if yes, add this info):
  if (randomQuote.alive) {
    htmlString += `<span> (alive)</span>`
  }
  // Check if there is a citation property for the quote (if yes, add it):
  if (randomQuote.citation) {
    htmlString += `<span>, ${randomQuote.citation}</span>`
  }
  // Check if there is a source property for the quote (if yes, add it):
  if (randomQuote.year) {
    htmlString += `<span>, ${randomQuote.year}</span>`
  }
  // Add the closing </p> tag:
  htmlString += "</p>";
  console.log("htmlString: ", htmlString); // just a log for testing
  // Display the html content in the quote-box id of the page:
  document.getElementById('quote-box').innerHTML = htmlString;
}
printQuote(); // Call the function for the start

// Function for setting a random background color:
function randomBackgroundColor() {
  const randomNumber = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomNumber];
  console.log("randomColor: ", randomColor);
  document.querySelector("body").style.backgroundColor = randomColor;
}

// Click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);

setInterval(printQuote, 10000);