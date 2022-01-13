const text=document.getElementById("quote");
const author=document.getElementById("author");
const tweetButton=document.getElementById("tweet");

const getnewQuote = async () =>
{
    //api
    var url="https://type.fit/api/quotes";  

    //fetch the data from the api
    const response=await fetch(url);
    console.log(typeof response);
    
    //convert response to json and store it to quotes array
    const allQuotes = await response.json();

    //generate a random number between 0 and the length od  quotes
    const indx = Math.floor(Math.random()*allQuotes.length);

    //store the quote present at the randomly generated index  
    const quote=allQuotes[indx].text;

    //store the author of respective quotes
    const auth=allQuotes[indx].author;

    if(auth==null)
    {
        author = "anonymous";
    }

    //function to dynamically display the quote and the author
    text.innerHTML=quote;
    author.innerHTML="~ "+auth;

    //tweet the code
    tweetButton.href="https://twitter.com/intent/tweet?text="+quote+" ~ "+auth;
}
getnewQuote();