
let arrayExamplesEventsJS= [
    "ejemplo1",
    "object.addEventListener( 'click', myScript );",
    "object.addEventListener( 'dblclick', myScript );",
    "document.addEventListener( 'keydown', (event) => { const keyName = event.key;} ); ",
    "object.addEventListener( 'hover', myScript );",
    "var x = document.getElementById( 'myText' ).value;",
    "imagesLoaded( document.querySelector( '#container' ), function( instance ) { console.log('all images are loaded'); } );",
    "ejemplo8",
    "ejemplo9",
    "ejemplo10",
    "ejemplo11",
    "ejemplo12",
]

export default function getExampleEventJS(position){
    return arrayExamplesEventsJS[position];
}