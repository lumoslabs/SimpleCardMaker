/*global document*/
/*global window*/

var getCardHTML = function( titleStyle, titleText, cardText, heading, backgroundImage )
{
    titleText = titleText || "CARD";
    heading = heading || "h1";

    var backgroundImageHtml = "";
    if ( backgroundImage )
    {
        backgroundImageHtml = '    <div class="backgroundImage"><img src="' + backgroundImage +'" alt="" /></div>';
    }

    var htmlBlock =
    [
        '',
        '<div class="image">',
        '    <img src="resources/cardBacking.png" alt="" />',
        backgroundImageHtml,
        '    <div class="floatingText">',
        '        <h1 class="' + titleStyle + '">' + titleText + '</h1>',
        '        <' + heading + '>' + cardText + '</' + heading + '>',
        '    </div>',
        '</div>',
        ''
    ].join( '\n' );
    
    return htmlBlock;
};

var renderCardHTML = function()
{
    var cardHTML = "";  
    
    if ( !document.cardData )
    {
        cardHTML = "NO CARD DATA. Make sure to define document.cardData in cardData.js. It should be an array of objects, where each object has the schema {title:\"\", heading:\"h1\", cards:[]}.";
    }
    else
    {
        var cardTypeIndex;
        var cardIndex;
        for ( cardTypeIndex = 0; cardTypeIndex < document.cardData.length; cardTypeIndex++ )
        {
            var cardTypeData = document.cardData[ cardTypeIndex ];
        
            if ( cardTypeData && cardTypeData.cards )
            {
                for ( cardIndex = 0; cardIndex < cardTypeData.cards.length; cardIndex++ )
                {
                    cardHTML += getCardHTML( cardTypeData.titleStyle || ("type" + cardTypeIndex + "Title"), cardTypeData.title, cardTypeData.cards[ cardIndex ], cardTypeData.heading, cardTypeData.backgroundImage );
                }
            }
        }
    }
    
    document.getElementById("cards").innerHTML = cardHTML;
};

//build the cards once the window loads
window.onload = function()
{
    if ( document.loadAsync )
    {
        return;
    }
    
    renderCardHTML();
};