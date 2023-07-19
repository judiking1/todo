
const quotes_url ="https://api.quotable.io/random";
function fetchQuotes(){
  fetch(quotes_url).then((response) => response.json()).then((data)=>
  {
      const quote = document.querySelector("#quote p");
      const author = document.querySelector("#quote span");
      quote.innerText = data.content;
      author.innerText = `- ${data.author} -`;
    }).catch((error) => console.error('Error:', error));  
}
fetchQuotes();
setInterval(fetchQuotes, 60000);



