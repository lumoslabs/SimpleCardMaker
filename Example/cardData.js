/*global document*/

//here's how you would load a CSV:
// document.loadAsync = true;
//
// csvFileToCards( "Example/cards.csv", function( cardData )
// {
//     document.cardData = cardData;
//     renderCardHTML();
// });

//
var getTypeACards = function()
{
    var typeACards =
    [
        "this",
        "is",
        "a",
        "test",
        "card"
    ];
    
    var cardIndex;
    for ( cardIndex = 0; cardIndex < typeACards.length; cardIndex++ )
    {
        typeACards[ cardIndex ] = "Appending prefixes: " + typeACards[ cardIndex ];
    }
    
    return typeACards;
};

var getTypeBCards = function()
{
    var typeBTypes =
    [
        { title: "DUPED CARD",      count: 3,  text: "This card will be added 3 times. Look, HTML!<br/><br/>I did it." },
        { title: "DUPED CARD 2",    count: 4,  text: "This card will be added 4 times." },
        { title: "DUPED CARD 3",    count: 5,  text: "<b>5 times</b> holy crapola." }
    ];
    var typeBCards = [];

    var typeIndex;
    for ( typeIndex = 0; typeIndex < typeBTypes.length; typeIndex++ )
    {
        var type = typeBTypes[ typeIndex ];
        var number;
        for ( number = 0; number < type.count; number++ )
        {
            typeBCards.push( '<div class="customClass">' + type.title + '</div><br/>' + type.text );
        }
    }
    
    return typeBCards;
};

//all you need to do in cardData.js is create a document.cardData array that has
//objects with a "title" string and "cards" array. Optionally, you can include
//a "heading" which is the HTML heading tag to use for the text.
//You can then use cardStyles.css to create different styles per title.
//"cards" is an array of strings that will be the main body of the cards.
document.cardData =
[
    {
        title: "TYPE A",
        cards: getTypeACards()
    },
    
    {
        title: "TYPE B",
        heading: "h2",
        cards: getTypeBCards()
    },
    
    {
        title: "TYPE C",
        heading: "h3",
        cards:
        [
            "Look",
            "I",
            "Made",
            "Cards",
            "Without",
            "A",
            "Function"
        ]
    }
];