
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
  "<code>$('div').prepend(variable);</code>",
  "<code>let afterElement = $('&#60;p&#62;Added after!&#60;/p&#62;'); <br> $('element').after(afterElement);</code>",
  "<code>let beforeElement = $('&#60;p&#62;Added before!&#60;/p&#62;'); <br> $('element').before(beforeElement);</code>",
  "<code>$('p').clone().appendTo('#div1');</code>",
  "<code>$('p').addClass('selected');</code>",
  "<code>$('p').removeClass('selected');</code>",
  "<code>$('p').toggleClass('selected');</code>",
  "<code>$('button').prop('disabled', true);</code>",
  "<code>$('button').prop('disabled', false);</code>",
  "<code>$('img').attr('data-src','dataName')</code>",
  "<code>$('img').removeAttr('data-src','dataName'); <br>  $('img').removeData('src','dataName');</code>",
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