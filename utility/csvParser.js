/*global document*/
/*global XMLHttpRequest*/

var csvStringToCards = function( csvString, cb, reversed )
{
    var lines = csvString.split( "\n" );
    var lineIndex;
    var data = {};
        
    for ( lineIndex = 0; lineIndex < lines.length; lineIndex++ )
    {
        lines[ lineIndex ] = lines[ lineIndex ].split( "," );
    }
        
    if ( reversed )
    {
        for ( lineIndex = 0; lineIndex < lines.length; lineIndex++ )
        {
            var lineData = lines[ lineIndex ];
            
            var lineElements = [];
            var lineDataIndex;
            for ( lineDataIndex = 1; lineDataIndex < lineData.length; lineDataIndex++ )
            {
                if ( lineData[ lineDataIndex ] )
                {
                    lineElements.push( lineData[ lineDataIndex ] );
                }
            }
            
            data[ lineData[0] ] = lineElements;
        }
    }
    else
    {
        var categoryIndex;
        for ( categoryIndex = 0; categoryIndex < lines[0].length; categoryIndex++ )
        {
            var category = lines[0][categoryIndex].trim();
            if ( category )
            {
                var elements = [];
                for ( lineIndex = 1; lineIndex < lines.length; lineIndex++ )
                {
                    var element = lines[ lineIndex ][ categoryIndex ].trim();
                    if ( element )
                    {
                        elements.push( element );
                    }
                }
                data[ category ] = elements;
            }
        }
    }
    
    var cardData = [];
    
    var title;
    for ( title in data )
    {
        cardData.push(
        {
            "title": title,
            "cards": data[ title ]
        });
    }
    
    cb( cardData );
};

var csvFileToCards = function( csvLocation, cb, reversed )
{
    var csvFile = new XMLHttpRequest();
    csvFile.open("GET", csvLocation, true);
    csvFile.onreadystatechange = function()
    {
        csvStringToCards( csvFile.responseText, cb, reversed );
    };
    csvFile.send();
};