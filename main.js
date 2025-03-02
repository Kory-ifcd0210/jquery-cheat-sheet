import {getExampleEvent, getExampleFunction, getExampeSelector} from "./jquery.js";
import {getExampleEventJS, getExampleFunctionJS, getExampeSelectorJS} from "./vanilla.js";

let arrayEvents = [
    "When the HTML document has been loaded and you can manipulate it with JavaScript",
    "When an HTML item has been clicked",
    "When an HTML item has been double clicked",
    "When the user presses a key on the keyboard",
    "When the user moves the mouse cursor",
    "When the user changes a value of an text input",
    "When an image is loaded",
    "When an image fails to load",
    "When a form is submitted",
    "When the user changes the option of a select element",
    "When you position the mouse over an element",
    "When a checkbox is checked or unchecked",
    "When a ul list item is clicked, show the item that was clicked",
];

let arrayFunctions = [
    "Create an HTML element with any text value",
    "Remove an HTML element with any text value",
    "Append an HTML element with any text value to a parent element",
    "Prepend an HTML element with any text value to a parent element",
    "Create and add an HTML element with any text value after another element",
    "Create and add an HTML element with any text value before another element",
    "Clone an HTML element within other element",
    "Add a class to an HTML item",
    "Remove a class to an HTML item",
    "Toggle a class of an HTML item",
    "Add a disabled attribute to an HTML button",
    "Remove the disabled attribute of an HTML button",
    "Set a data-src attribute to a img element",
    "Remove the data-src attribute of the img element",
    "Hide an HTML element on click (display: none)",
    "Show an HTML element on click (display: block)",
    "Animate an item after 2 seconds from the initial page load",
];

let arraySelectors = [
    "Iterate a collection of elements and apply a change of style on them",
    "Get the parent element of a certain element and change its font weight",
    "Get the collection of children of a certain element and change its font weight",
    "Get all the elements that have a certain class and change their font weight",
    "Get an item by id and change its font weight",
    "Get all the elements that have a certain class and the display property of none and change their font color and the display itself so it’s visible.",
    "Get the options of a select element that are selected (attribute selected)",
    "Change the href attribute of the first &lt;a> element (You have to create several &lt;a> elements)",
    "Show an alert with the value of the first &lt;input> of the page (Create an &lt;input> element to test this case)",
    "Remove all items from a specific selector",
];

$("#eventsDiv").on("click", function () {
    drawInfo("Events", arrayEvents);
});

$("#functionDiv").on("click", function () {
    drawInfo("Functions", arrayFunctions);
});

$("#selectorDiv").on("click", function () {
    drawInfo("Selectors", arraySelectors);
});

$(document).on("click", ".printExampleModal", function () {
    let idExample = $(this)[0].id;
    let idExampleSeparated = idExample.split("-");
    let exampleQ;
    let exampleJS;
    switch (idExampleSeparated[0]) {
        case "Events":
            exampleQ= getExampleEvent(idExampleSeparated[1]);
            exampleJS= getExampleEventJS(idExampleSeparated[1]);
            break;

        case "Functions":
        exampleQ= getExampleFunction(idExampleSeparated[1]);
        exampleJS= getExampleFunctionJS(idExampleSeparated[1]);
            break;

        case "Selectors":
        exampleQ= getExampeSelector(idExampleSeparated[1]);
        exampleJS=getExampeSelectorJS(idExampleSeparated[1]);
            break;

        default:
            break;
    }
    printModal(exampleQ, exampleJS);
});

function drawInfo(title, array) {
    destructor();
    let count = 0;
    $("#titleDiv").append("<h2>" + title + "</h2>");
    array.forEach(function (value, index) {
        createItemList(value, title, count);
        count++;
    });
}

function destructor() {
    $("#titleDiv").empty();
    $("#listOptions").empty();
}

function createItemList(text, title, count) {
    $("#listOptions").append(
        '<li  class="printExampleModal btn btn-primary "data-bs-toggle="modal" data-bs-target="#exampleModal"  id="' + title + "-" +count +'" >' +text +"</li>"
    );
}

function printModal(exampleQ, exampleJS) {
    $(".modal-body").empty();
    $(".modal-body").append("<p>"+exampleQ +"</p><p> "+ exampleJS+"</p>");
}