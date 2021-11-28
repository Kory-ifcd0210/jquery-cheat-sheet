
let arrayExamplesEventsQuery=[
    "<code>$( 'selector' ).load( function() {} );</code>",
    "<code>$( 'selector' ).on( 'click', myFunction() )</code>",
    "<code>$( 'selector' ).on( 'dblclick', myFunction() )</code>",
    "<code>$( 'selector' ).on( 'keydown', myFunction() )</code>",
    "<code>$( 'selector' ).on( 'mouseover', myFunction() )</code>",
    "<code>$( 'selector' ).change( myFunction )</code>",
    "<code>$( 'selector' ).imagesLoaded( myFunction() { } );</code>",
    "<code>$( '#image1' ).load(function() { $( '#result1' ).text( 'Image is loaded!' ); }).error(function() { $( '#result1' ).text( 'Image is not loaded!' ); });</code>",
    "<code>$( 'selector' ).on( 'submit', myFunction( ){ }; );</code>",
    "<code>$( '#myselect' ).val();</code>",
    "<code>ejemplo 11</code>",
    "<code>document.querySelector( '.messageCheckbox' ).checked;</code>",
    "<code>ejemplo 13"
]

let arrayExamplesFunctionQuery=[
  "<code>$( 'p' ).text( 'Text' );</code>",
  "<code>$( 'p' ).empty( );</code>",
  "<code>$( 'p' ).append( 'Some appended text.' );</code>",
  "<code>ejemplo</code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
]

let arrayExamplesSelectorQuery=[
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
  "<code></code>",
]

function getExampleEvent(position){
    return arrayExamplesEventsQuery[position];
}

function getExampleFunction(position){
    return arrayExamplesFunctionQuery[position];
}

function getExampeSelector(position){
    return arrayExamplesSelectorQuery[position];
}


export {getExampleEvent, getExampleFunction, getExampeSelector };