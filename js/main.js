var quoteList=['"Do not take life too seriously. You will not get out alive."<br>--Elbert Hubbard',
                    '"The best revenge is massive success."<br>--Frank Sinatra',
                    '"You miss 100% of the shots you donot take."<br>--Wayne Gretzy',
                    '"Resentment is like drinking poison and waiting for your enemies to die."`<br>`--Nelson Mandela',
                    `"It's not what happens to you, but how you react to it that matters."<br>--Epictetus`];

var previousRandomNumber=0;
function generateRandomQoute(){
       
      do {
            var NewRandomNumber = Math.floor(Math.random()*(quoteList.length));
            document.getElementById('displayQuote').innerHTML = quoteList[NewRandomNumber];
      } while (NewRandomNumber == previousRandomNumber);
      previousRandomNumber = NewRandomNumber;
}
 