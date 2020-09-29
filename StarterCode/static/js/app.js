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

//Make the button
var button = d3.select("#filter-btn");
var form = d3.select("#form");


// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

//Make the function
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Create a custom filtering function
    function selectDate(sighting) {
        return sighting.datetime === inputValue;
    }

    // filter() uses the custom function as its argument
    var dateFilter = data.filter(selectDate);

    // Test
    console.log(dateFilter);
    tbody.html("")
    // Display new table 
    // Add the table
    dateFilter.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}