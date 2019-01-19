
// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through data and show log
data.forEach(function(AliensData) {
    console.log(AliensData);
})

// Loop through data and append rows
data.forEach(function(AliensData) {
    var newrow = tbody.append("tr");
    newrow.append("td").text(AliensData.datetime);
    newrow.append("td").text(AliensData.city);
    newrow.append("td").text(AliensData.state);
    newrow.append("td").text(AliensData.country);
    newrow.append("td").text(AliensData.shape);
    newrow.append("td").text(AliensData.durationMinutes);
    newrow.append("td").text(AliensData.comments);
 
})

// Select the submit button
var submit = d3.select("#filtbutton");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();


//   d3.select('#ufo-table').remove()
  // Clear Data from Table


  tbody.html("")

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  console.log(inputElement)
  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);


  function selectDate(person) {
    return person.datetime === inputValue;
  }
   
  // filter() uses the custom function as its argument
  var SearchDate = data.filter(selectDate);
   
  // Test
  console.log(SearchDate);  

  // Loop through data and append rows
SearchDate.forEach(function(AliensData) {
    var newrow = tbody.append("tr");
    newrow.append("td").text(AliensData.datetime);
    newrow.append("td").text(AliensData.city);
    newrow.append("td").text(AliensData.state);
    newrow.append("td").text(AliensData.country);
    newrow.append("td").text(AliensData.shape);
    newrow.append("td").text(AliensData.durationMinutes);
    newrow.append("td").text(AliensData.comments)})});
 



  


