# SimpleCardMaker

Makes cards that you can print out and use for prototyping. Make your own cards by duplicating the "Example" folder and renaming it (let's say to MyCards). Then go into cards.html and change lines 7 and 10 to point to your folder. This is a shitty way of doing it that may be improved later.

### Putting in manual JSON data

You can manually put in JSON data if you want, which is the easiest way to make cards. See Example/cardData.js as an example.

You have an array of card category objects, and each card object can contain any number of cards. Card category objects can have the following:

    cards - array of strings, represents the text for every card in this category. REQUIRED.
    title - string, displayed at the top as a header
    titleStyle - string, the CSS style to use for the title
    heading - string, the heading to use for the text on all the cards, matches the CSS style.
    backgroundImage - string, the path for the image that appears behind the cards in this category
    

You can have one card per category if you want unique versions of each card. If you want duplicates of any card, it's recommended that you use cardData.js to add the same card object multiple times (as you can see in the example).

### Using CSVs

If you want to avoid messing with cardData.js, then using a CSV is a much easier way to add cards. Unfortunately if you do this, you cannot open cards.html on Chrome unless you change permissions, since the CSV file is loaded with XMLHttpRequest. Other browsers should work.

There are two ways to load CSVs: simple or complex. For both, you'll only write a bit of code, which is commented out at the top of Example/cardData.js.

#### Simple

The following code should be in your cardData.js.

    //you must set this so that the XMLHttpRequest can complete before the cards attempt a load
    document.loadAsync = true;
    
    //this will load the cards in a simple way
    csvFileToCards( "Example/cards.csv", function( cardData )
    {
        document.cardData = cardData;
        renderCardHTML();
    });

A simple CSV is loaded such that each header (the first row) is a card category text, and each row after that is a card within those categories. This is the equivalent of making a new JSON card category object for each header, then filling out the "cards" array in that category will all the following rows.

A CSV that looks like:

    Category1,Category2
    First card in category 1,First card in category 2
    Second card in category 1,Second card in category 2

Is equivalent to this JSON:

    [
        {
            "title":"Category1",
            "cards":
            [
                "First card in category 1",
                "Second card in category 1"
            ]
        },
        {
            "title":"Category2",
            "cards":
            [
                "First card in category 2",
                "Second card in category 2"
            ]
        }
    ]

#### Complex

The following code should be in your cardData.js.

    //you must set this so that the XMLHttpRequest can complete before the cards attempt a load
    document.loadAsync = true;
    
    //this will load the cards in a complex way
    csvFileToCardsComplex( "Example/cards.csv", function( cardData )
    {
        document.cardData = cardData;
        renderCardHTML();
    });

A complex CSV is loaded such that each header (the first row) is the name of a key from the card category, and each row after that is an individual category with values matching those keys. The exception here is the "cards" key, which is unused. Instead, "text" is substituted. The header keys can be in any order, as long as the following card values match those orders. Any values can be omitted.

A CSV that looks like:

    title,backgroundImage,text,titleStyle,heading
    Card 1 Title,Example/images/background1.png,This is card 1!,type0Title,h3
    Card 2 Title,Example/images/background2.png,This is card 2!,,h1
    
Is equivalent to this JSON:

    [
        {
            "title":"Card 1 Title",
            "backgroundImage":"Example/images/background1.png",
            "cards":["This is card 1!"],
            "titleStyle":"type0Title",
            "heading":"h3"
            
        },
        {
            "title":"Card 2 Title",
            "backgroundImage":"Example/images/background2.png",
            "cards":["This is card 2!"],
            "heading":"h1"
        }
    ]

Note that anything omitted is simply not included in the JSON, and the "text" key is changed to a "cards" array with a single element. So you're technically creating one category per card.

### Opening it

Just open cards.html in a browser. Print it, cut it out. Cards will be laid out in the order they were added to the JSON array or CSV.

