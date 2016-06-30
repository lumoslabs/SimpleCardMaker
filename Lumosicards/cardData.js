/*global document*/

var getLumosicards = function()
{
    var types =
    [
        { title: "Card 1",      count: 3,  text: "This card will be added 3 times. Look, HTML!<br/><br/>I did it." },
        { title: "Card 2",    count: 4,  text: "This card will be added 4 times." },
        { title: "Card 3",    count: 5,  text: "<b>5 times</b> holy crapola." }
    ];
    var cards = [];

    var typeIndex;
    for ( typeIndex = 0; typeIndex < types.length; typeIndex++ )
    {
        var type = types[ typeIndex ];
        var number;
        for ( number = 0; number < type.count; number++ )
        {
            cards.push( '<div class="lumosicard">' + type.title + '</div><br/>' + type.text );
        }
    }
    
    return cards;
};

//all you need to do in cardData.js is create a document.cardData array that has
//objects with a "title" string and "cards" array. Optionally, you can include
//a "heading" which is the HTML heading tag to use for the text.
//You can then use cardStyles.css to create different styles per title.
//"cards" is an array of strings that will be the main body of the cards.
document.cardData =
[
    {
        title: "lumosity",
        cards: getLumosicards(),
        heading: "h2"
    }
];