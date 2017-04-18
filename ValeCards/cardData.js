/*global document*/
/*global csvFileToCardsComplex*/
/*global renderCardHTML*/

document.loadAsync = true;

csvFileToCardsComplex( "ValeCards/cards.csv", function( cardData )
{
    document.cardData = cardData;
    renderCardHTML();
});