
let arrayExamplesEventsJS= [
    "document.body.onload = function() { }",
    "object.addEventListener( 'click', myFunction );",
    "object.addEventListener( 'dblclick', myFunction );",
    "document.addEventListener( 'keydown', (event) => { const keyName = event.key;} ); ",
    "object.addEventListener( 'hover', myFunction );",
    "var x = document.getElementById( 'myText' ).value;",
    "imagesLoaded( document.querySelector( '#container' ), function( instance ) { console.log('all images are loaded'); } );",
    "var image = new Image(); image.onerror = function() {        console.error( 'Cannot load image' ); }",
    "document.getElementById( 'myForm' ).submit();",
    "variable = document.getElementById( 'select_id' ).value;",
    "ejemplo11",
    "$( '#check_id' ).val();",
    "Ejemplo 13"
]

let arrayExamplesFunctionJS=[
    "var newDiv = document.createElement( 'div' );",
   " var el = document.getElementById( 'div_id' ); el.remove();",
    ";var newContent = document.createTextNode( 'Some appended text.' ); newDiv.appendChild( newContent )",
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

let arrayExamplesSelectorJS=[
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

function getExampleEventJS(position){
    return arrayExamplesEventsJS[position];
}

function getExampleFunctionJS(position){
    return arrayExamplesFunctionJS[position];
}

function getExampeSelectorJS(position){
    return arrayExamplesSelectorJS[position];
}

export {getExampleEventJS, getExampleFunctionJS, getExampeSelectorJS};