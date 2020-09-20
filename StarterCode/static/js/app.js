// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Add the table
tableData.forEach((UFOsight) => {
    var row = tbody.append("tr");
    Object.entries(UFOsight).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Make the button
  var button = d3.select("#filter-btn");
   button.on("click", function() {
//     console.log("Hi, a button was clicked!");
//     console.log(d3.event.target);



// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);


// Prevent the page from refreshing
d3.event.preventDefault();
  
// Select the input element and get the raw HTML node
var inputElement = d3.select("#form-control");

// Get the value property of the input element
var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(form-control);

  var filteredData = form-control.filter(person => datetime === inputValue);

  console.log(filteredData);

   });