// Select all elements by ID //
const firstHeader = document.getElementById("page-header");
const secondHeader = document.getElementById("main-heading");
const firstParagraph = document.getElementById("para1");
const secondParagraph = document.getElementById("para2");
const addButton = document.getElementById("btn");
const fourthParagraph = document.getElementById("para4");
const firstBox = document.getElementById("red");
const secondBox = document.getElementById("blue");
const thirdBox = document.getElementById("yellow");
const fourthBox = document.getElementById("green");
const fifthBox = document.getElementById("black");

// Change Header Text //
console.log(secondHeader);
secondHeader.innerText = 'New DOM Layout';
secondHeader.classList.add('bg-success');


// Add text to paragraph //
console.log(firstParagraph);
firstParagraph.textContent = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.';

console.log(secondParagraph);
secondParagraph.textContent = 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.';

// Add Button Click Event //
addButton.addEventListener("click", function() {
    document.getElementById("para4").innerHTML = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";
});


// Change Box Colors //
const boxes = document.getElementsByClassName("card-body");
console.log(boxes);
console.log(boxes[0]);
boxes[0].classList.add('bg-danger');
console.log(boxes[1]);
boxes[1].classList.add('bg-primary');
console.log(boxes[2]);
boxes[2].classList.add('bg-warning');
console.log(boxes[3]);
boxes[3].classList.add('bg-success');
console.log(boxes[4]);
boxes[4].classList.add('bg-dark');
