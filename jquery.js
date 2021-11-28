


let arrayExamplesEventsQuery=[
    "ejempli1",
    "$( 'selector' ).on( 'click', myFunction() )",
    "$( 'selector' ).on( 'dblclick', myFunction() )",
    "$( 'selector' ).on( 'keydown', myFunction() )",
    "$( 'selector' ).on( 'mouseover', myFunction() )",
    "$( 'selector' ).change( myFunction )",
    "$( '#container' ).imagesLoaded( function() { } );",
    "ejempli8",
    "ejempli9",
    "ejempli10"
]
  export default function getExampleEvent(position){
    return arrayExamplesEventsQuery[position];
}

// export  function getExampleFunction(position){
//     return arrayExamplesEventsQuery[position];
// }

// export  function getExampeSelector(position){
//     return arrayExamplesEventsQuery[position];
// }