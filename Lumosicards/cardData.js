/*global document*/
/*global csvFileToCards*/
/*global renderCardHTML*/

document.loadAsync = true;

csvFileToCards( "Lumosicards/cards.csv", function( cardData )
{
    document.cardData = cardData;
    renderCardHTML();
});