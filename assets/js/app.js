function runTableQuery() {
  // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
  $.ajax({ url: "/sandwich", method: "GET" }).then(function(sandwichData) {
    // Here we then log the tableData to console, where it will show up as an object.
    console.log(sandwichData);
    console.log("------------------------------------");

    // Loop through and display each of the customers
    // for (var i = 0; i < sandwichData.length; i++) {
    //   // Get a reference to the tableList element and populate it with tables
    //   var tableList = $("#tableList");

    //   // Then display the fields in the HTML (Section Name, Date, URL)
    //   var sandwichItem = $("<li class='list-group-item mt-4'>");

    //   sandwichItem.append(
    //     $("<h2>").text("Table #" + (i + 1)),
    //     $("<hr>"),
    //     $("<h2>").text("ID: " + sandwichData[i].customerID),
    //     $("<h2>").text("Name: " + sandwichData[i].customerName),
    //     $("<h2>").text("Email: " + sandwichData[i].customerEmail),
    //     $("<h2>").text("Phone: " + sandwichData[i].phoneNumber)
    //   );

    //   tableList.append(listItem);
    // }
  });
}
