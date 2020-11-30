var filterData = data;

var tbody = d3.select("tbody");

var filterEntries = d3.select ("#filter-btn");
filterEntries.on("click", function() {

    d3.event.preventDefault();

    var date = d3.select("#datetime");
    var city = d3.select("#city");
    var state = d3.select("#state");
    var country = d3.select("#country");
    var shape = d3.select("#shape");
    var comment = d3.select("#comment")

    d3.select("#datetime");
    d3.select("#city");
    d3.select("#state");
    d3.select("#country");
    d3.select("#shape");
    d3.select("#comment")

    if (date !== ""|| city !== ""|| state !== ""||country !== ""|| shape !=="" || comment !==""){
        buildTable(date,city,state,country,shape, comment);
    }
    else{
        console.log("No input criteria provided.")
    };

function buildTable (date, city, state, country, shape, comment) {
    tbody.html("");
    var filteredData= [];
    if (date !== "") {filteredData = sightings.filter(sighting => sighting.datetime == date);}
    else {filteredData = sightings;};

    if (city !== "") {filteredData = filteredData.filter(data =>data.city == city); };

    if (state !== "") {filteredData = filteredData.filter(data => data.state == state);};

    if (country !=="") {filteredData = filteredData.filter(data => data.country == country); };

    if (shape !=="" ) {filteredData = filteredData.filter(data => data.shape == shape); };

    if (comment !=="" ) {filteredData = filteredData.filter(data => data.comment == comment); };

    console.log(filteredData);

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key,value]) => {var cell = row.append("td");
            cell.text(value);

        });
    });
};


var tableData = data;
// console.log(tableData);

var tbody = d3.select("tbody");

tableData.forEach(function(ufodata) {
    // console.log(ufodata);

    var row = tbody.append("tr");

    Object.entries(ufodata).forEach(function([key, value]) {
        // console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");
// var form = d3.select ("#form");

// var submit = d3.select("#filter-btn");
button.on("click", function() {

    // function runEnter() {
    d3.event.preventDefault();
    d3.select("tbody").html("");

    var inputvalue = d3.select("#input").property("value");
    // console.log(dateTime);

    var filteredData = tableData.filter(record => record.datetime === inputvalue ||
        record.city === inputvalue ||
        record.state === inputvalue ||
        record.country === inputvalue ||
        record.shape === inputvalue ||
        record.comment === inputcomment);
    console.log(filteredData);

    });
});
