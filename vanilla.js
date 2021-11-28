
let arrayExamplesEventsJS= [
    "<code>document.body.onload = function() { }</code>",
    "<code>object.addEventListener( 'click', myFunction );</code>",
    "<code>object.addEventListener( 'dblclick', myFunction );</code>",
    "<code>document.addEventListener( 'keydown', (event) => { const keyName = event.key;} ); </code>",
    "<code>object.addEventListener( 'hover', myFunction );</code>",
    "<code>var x = document.getElementById( 'myText' ).value;</code>",
    "<code>imagesLoaded( document.querySelector( '#container' ), function( instance ) { console.log('all images are loaded'); } );</code>",
    "<code>var image = new Image(); image.onerror = function() {        console.error( 'Cannot load image' ); }</code>",
    "<code>document.getElementById( 'myForm' ).submit();</code>",
    "<code>variable = document.getElementById( 'select_id' ).value;</code>",
    "<code>ejemplo11</code>",
    "<code>$( '#check_id' ).val();</code>",
    "<code>Ejemplo 13</code>"
]

let arrayExamplesFunctionJS=[
    "<code>var newDiv = document.createElement( 'div' ); </code>",
    "<code> var el = document.getElementById( 'div_id' ); el.remove(); </code>",
    "<code>;var newContent = document.createTextNode( 'Some appended text.' ); newDiv.appendChild( newContent )</code>",
    "<code> parentNode.insertBefore( newChild, parentNode.childNodes[0] );</code>",
    "<code> parentNode.insertBefore( elementHTML, selector.nextSibling );</code>",
    "<code>parentNode.insertBefore(elementHTML, selector);",
    "<code>let cln = selector.cloneNode(true);</code>",
    "<code>selector.addClass.classList.add.('selected');</code>",
    "<code>selector.removeClass.classList.remove('selected');</code>",
    "<code>selector.toggleClass.classList.toggle('selected');</code>",
    "<code>document.getElementById('Button').disabled = true;</code>",
    "<code>document.getElementById('Button').disabled = false;</code>",
    "<code>selectorImage.setAttribute('data-src', 'dataName');</code>",
    "<code>selectorImage.removeAttribute('data-src')</code>",
    "<code>selector.style.display = 'none';</code>",
    "<code>selector..style.display = 'block';</code>",
    "<code> document.addEventListener('DOMContentLoaded', () => {<br> setTimeout(() => {<br> document.getElementById('header').animate([<br> { transform: 'translateX(0px)' },<br> { transform: 'translateX(30px)' },<br>    { transform: 'translateX(0px)' }<br>  ], {<br>  duration: 500,<br>             iterations: 1<br> });<br> }, 2000)<br> });<br> ",

]

let arrayExamplesSelectorJS=[
    "<code>let parag = document.querySelectorAll('p'); <br>    for (let i = 0; i&#60;parag.length; i++) {        parag[i].innerText = parag[i].innerText+'iterated!';  parag[i].classList.add('className');</code>",
    "<code>document.querySelector('button').parentNode;</code>",
    "<code>document.querySelector('div').childNodes;</code>",
    "<code>let change = document.getElementsByClassName('selector4v');<br>  for (let i = 0; i&#60;change.length; i++) {<br>  change[i].style.fontWeight = 'bold';<br>  }</code>",
    "<code>document.getElementById('selector5V').style.<br>fontWeight = 'bold';</code>",
    "<code>document.querySelectorAll('.selector6V').forEach<br>(element => {<br>        if (element.style.display == 'none') { element.style.display = 'block';element.style.color = 'blue';<br> }<br>  })</code>",
    "<code>document.querySelector('select').value;</code>",
    "<code>let links = document.getElementsByTagName('a');  links[0].href = 'http://blank.html'</code>",
    "<code>let inputMsg = <br>document.querySelectorAll('input')[0].value alert(inputMsg);</code>",
    "<code>let removing = document.querySelectorAll('ol li');<br>  for (let i  = 0; i < removing.length; i++) {    removing[i].remove();<br></code>",
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