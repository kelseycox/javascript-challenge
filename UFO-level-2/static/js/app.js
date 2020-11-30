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
    var filterData= [];
    if (date !== "") {filterData = sightings.filter(sighting => sighting.datetime == date);}
    else {filterData = sightings;};

    if (city !== "") {filterData = filterData.filter(data =>data.city == city); };

    if (state !== "") {filterData = filterData.filter(data => data.state == state);};

    if (country !=="") {filterData = filterData.filter(data => data.country == country); };

    if (shape !=="" ) {filterData = filterData.filter(data => data.shape == shape); };

    if (comment !=="" ) {filterData = filterData.filter(data => data.comment == comment); };

    console.log(filterData);

    filterData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key,value]) => {var cell = row.append("td");
            cell.text(value);
            
var filterData = filterData.filter(record => record.datetime === inputvalue ||
        record.city === inputvalue ||
        record.state === inputvalue ||
        record.country === inputvalue ||
        record.shape === inputvalue ||
        record.comment === inputcomment);
    console.log(filterData);


        });
    });
};
