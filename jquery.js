
let arrayExamplesEventsQuery=[
    "$( 'selector' ).load( function() {} );",
    "$( 'selector' ).on( 'click', myFunction() )",
    "$( 'selector' ).on( 'dblclick', myFunction() )",
    "$( 'selector' ).on( 'keydown', myFunction() )",
    "$( 'selector' ).on( 'mouseover', myFunction() )",
    "$( 'selector' ).change( myFunction )",
    "$( 'selector' ).imagesLoaded( myFunction() { } );",
    "$( '#image1' ).load(function() { $( '#result1' ).text( 'Image is loaded!' ); }).error(function() { $( '#result1' ).text( 'Image is not loaded!' ); });",
    "$( 'selector' ).on( 'submit', myFunction( ){ }; );",
    "$( '#myselect' ).val();",
    "ejemplo 11",
    "document.querySelector( '.messageCheckbox' ).checked;",
    "ejemplo 13"
]

let arrayExamplesFunctionQuery=[
  "$( 'p' ).text( 'Text' );",
  "$( 'p' ).empty( );",
  "$( 'p' ).append( 'Some appended text.' );",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
]

let arrayExamplesSelectorQuery=[
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
  "ejemplo",
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