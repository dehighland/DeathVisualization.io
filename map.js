internationalNumberFormat = new Intl.NumberFormat('en-US')

//Map Properties
var mapmargin = {top : 25, left:50, right: 50, bottom : 25},
    mapheight = 375 - mapmargin.top - mapmargin.bottom,
    mapwidth = 800 - mapmargin.left - mapmargin.right;
var mapcolor = "rgb(170, 255, 255)"

// Map Projection
var projection = d3.geoMercator()
  .translate([mapwidth+150, mapheight+130]) // translate to center of screen
  .scale([350]); // scale things down so see entire US

var path = d3.geoPath() 
  .projection(projection); 

var map = d3.select("#map")
  .append("svg")
  .attr("class","map")
  .attr("width", mapwidth - 250)
  .attr("height", mapheight)
  .style("background", mapcolor)
  .style("border-radius","0.25em")

var map2 = d3.select("#map2")
  .append("svg")
  .attr("width", mapwidth - 250)
  .attr("height", mapheight)
  .style("background", mapcolor)
  .style("border-radius","0.25em")

var map3 = d3.select("#map3")
  .append("svg")
  .attr("width", mapwidth - 250)
  .attr("height", mapheight)
  .style("background", mapcolor)
  .style("border-radius","0.25em")

// Slider Key
var yearx = d3.scaleLinear().domain([2006, 2014]).range([0,1698]);
var yearxAxis = d3.axisBottom().scale(yearx).tickFormat(d3.format("d")).ticks(5);
var yeartext = d3.select("#yeartext")
  .append("svg")
  .attr("width","1760")
  .attr("height","30")
  //.style("background", mapcolor)

yeartext.append("g")
	.attr("class","yearAxis")
  	.attr("transform", "translate(15,10)")
  	.call(yearxAxis)

// Legend Base
var w = 140, h = mapheight-35;

var key = d3.select("body")
	.append("svg")
	.attr("id", "key")
	.attr("class","map")
	.attr("width", w)
	.attr("height", h+20)
	.style("border-radius", "0em")
	.style("background", mapcolor)
	.attr("class", "legend");

var legend = key.append("defs")
	.append("svg:linearGradient")
	.attr("id", "gradient")
	.attr("x1", "100%")
	.attr("y1", "0%")
	.attr("x2", "100%")
	.attr("y2", "100%")
	.attr("spreadMethod", "pad");

legend.append("stop")
	.attr("id","stop")
	.attr("offset", "0%")
	.attr("stop-color", "#E71212")
	.attr("stop-opacity", 1);
	
legend.append("stop")
	.attr("offset", "100%")
	.attr("stop-color", "#EFEFEF")
	.attr("stop-opacity", 1);

key.append("rect")
	.attr("id","rect1")
	.attr("width", 40)
	.attr("height", h)
	.style("fill", "url(#gradient)")
	.attr("transform", "translate(20,10)");

var y = d3.scaleLinear()
	.range([h, 10])
	.domain([0, 1]);

var yAxis = d3.axisRight(y);

key.append("g")
	.attr("class", "y axis")
	.attr("transform", "translate(61,10)")
	.call(yAxis)

key.append('text').attr("id","Mapaxistext")
	.attr('text-anchor', 'middle')
	.attr("transform","translate(15,155)rotate(-90)")
	.style('font-size', 17)
	.text("Number of deaths per 100,000 people");

//Second Map key
var key2 = d3.select("body")
	.append("svg")
	.attr("id", "key2")
	.attr("width", w)
	.attr("height", h+20)
	.style("border-radius", "0em")
	.style("background", mapcolor)
	.attr("class", "legend");

var legend2 = key2.append("defs")
	.append("svg:linearGradient")
	.attr("id", "gradient2")
	.attr("x1", "100%")
	.attr("y1", "0%")
	.attr("x2", "100%")
	.attr("y2", "100%")
	.attr("spreadMethod", "pad");

legend2.append("stop")
	.attr("id","stop2")
	.attr("offset", "0%")
	.attr("stop-color", "#E71212")
	.attr("stop-opacity", 1);
	
legend2.append("stop")
	.attr("offset", "100%")
	.attr("stop-color", "#EFEFEF")
	.attr("stop-opacity", 1);

key2.append("rect")
	.attr("id","rect2")
	.attr("width", 40)
	.attr("height", h)
	.style("fill", "url(#gradient2)")
	.attr("transform", "translate(20,10)");

var y2 = d3.scaleLinear()
	.range([h, 10])
	.domain([0, 1]);

var yAxis2 = d3.axisRight(y2)

key2.append("g")
	.attr("class", "y axis")
	.attr("transform", "translate(61,10)")
	.call(yAxis2)

key2.append('text').attr("id","Mapaxistext2")
	.attr('text-anchor', 'middle')
	.attr("transform","translate(15,155)rotate(-90)")
	.style('font-size', 15)
	.text("Number of deaths per 100,000 people");

// Third Map Key
var key3 = d3.select("body")
	.append("svg")
	.attr("id", "key3")
	.attr("width", w)
	.attr("height", h+20)
	.style("border-radius", "0em")
	.style("background", mapcolor)
	.attr("class", "legend");

var legend3 = key3.append("defs")
	.append("svg:linearGradient")
	.attr("id", "gradient3")
	.attr("x1", "100%")
	.attr("y1", "0%")
	.attr("x2", "100%")
	.attr("y2", "100%")
	.attr("spreadMethod", "pad");

legend3.append("stop")
	.attr("id","stop2")
	.attr("offset", "0%")
	.attr("stop-color", "#E71212")
	.attr("stop-opacity", 1);
	
legend3.append("stop")
	.attr("offset", "100%")
	.attr("stop-color", "#EFEFEF")
	.attr("stop-opacity", 1);

key3.append("rect")
	.attr("id","rect3")
	.attr("width", 40)
	.attr("height", h)
	.style("fill", "url(#gradient3)")
	.attr("transform", "translate(20,10)");

var y3 = d3.scaleLinear()
	.range([h, 10])
	.domain([0, 1]);

var yAxis3 = d3.axisRight(y3);

key3.append("g")
	.attr("class", "y axis")
	.attr("transform", "translate(61,10)")
	.call(yAxis3)

key3.append('text').attr("id","Mapaxistext3")
	.attr('text-anchor', 'middle')
	.attr("transform","translate(15,155)rotate(-90)")
	.style('font-size', 15)
	.text("Number of deaths per 100,000 people");

// file info
var file = "DeathCause.csv"
var file2 = 'Income.csv'
var file3 = 'Senate.csv'
var measure = "All causes"
var measure2 = 'GDP'
var measure3 = 'REPUBLICAN'
var curr_year = 2015
var measure_names = ["GDP","Log(GDP)","Labor Force Participation","People with less than 9 years of education/people with college degree or above",
	"Unemployment rate","Average household size","Poverty rate","Number of corruption convictions per 1,000,000 people",
	"Gini coefficient", "Black/white", "Hispanic/white"]
var measure_descriptors = ["Dollars", "log( Dollars )","Percentage of population working/seeking work","Ratio",
	"Percentage of labor force unemployed","People per household","Percent of population in poverty","Ratio",
	"Percentage of inequality","Ratio", "Ratio"]

function fileeqfile2() {
	if(file==file2){return true}
	else {return false}
}

function DropDownClick(dataset, input) {
	if(input=="Alzheimers disease"){
		input = "Alzheimer's disease"
	}
	measure = input
	file = dataset
	updateMap(false,curr_year,measure)
}

function DropDownClick2(dataset, input) {
	measure2 = input
	file2 = dataset
	updateMap2(false,curr_year,measure2)
}

function DropDownClick3(dataset, input) {
	if(input=="Alzheimers disease"){
		input = "Alzheimer's disease"
	}
	measure3 = input
	file3 = dataset
	updateMap3(false,curr_year,measure3)
}

// Sliders
document.getElementById('year').addEventListener('change', function() {
	curr_year = this.value;
	//console.log("curr_year ", curr_year);
	updateMap(false,curr_year,measure);
	updateMap2(false,curr_year,measure2);
	updateMap3(false,curr_year,measure3);
});

// Update Function
drawGraph("DeathCause.csv", "Alabama", measure, '#E71212', true)
drawGraph2("Income.csv", "Alabama", measure2, '#207847', true)
drawGraph3("Senate.csv", "Alabama", measure3, "#334ADC", true)
updateMap(true,2014,measure);
updateMap2(true,2014,measure2);
updateMap3(true,2014,measure3);
function updateMap(start,year,measure) {
	// Load data
	d3.csv(file, function(data) {
		var dataArray = [];
		var simpleData = data.filter(function(entry) {
			if(entry.year == year & entry.measure == measure & entry.state != 'United States'){
				return entry;
			}
			else{return false}
		})
	
		for (var i = 0; i < simpleData.length; i++) {
			dataArray.push(parseFloat(simpleData[i].value))		
		}
		//console.log(simpleData)
		//console.log(dataArray)
		
		var minVal = d3.min(dataArray)
		var maxVal = d3.max(dataArray)
		//console.log(minVal, maxVal)

		var lowColor = "#EFEFEF"
		//if(file === 'DeathCause.csv'){
		//	var highColor = '#E71212'
		//}
		//else if(file === 'Income.csv'){
		//	var highColor ='#258f41'
		//}
		var highColor = '#E71212'
		var ramp = d3.scaleLinear().domain([minVal,maxVal]).range([lowColor,highColor])
		if(start==true){
			var tooltip = d3.select("body")
				.append("div").attr("id","tooltip")
				.style("position", "absolute")
				.style("z-index", "10")
				.style("visibility", "hidden")
				.style("background", "#fff")
				.style("background-color", "white")
				.style("border", "solid")
				.style("border-width", "2px")
				.style("border-radius", "5px")
				.style("padding", "5px")
				.text("Should not be seeing this");
		}
		else{
			var tooltip = d3.selectAll("#tooltip")
		}

		// Load GeoJSON and merge with desired data
		d3.json("us_states_hexgrid.json", function(json) {
		
			for (var i = 0; i < simpleData.length; i++) {
				var dataState = simpleData[i].state;
				var dataValue = simpleData[i].value;
				
				// Find the corresponding state inside the GeoJSON
				for (var j = 0; j < json.features.length; j++) {
					var jsonState = json.features[j].properties.name;

					if (dataState == jsonState) {
						json.features[j].properties.value = dataValue;
						//console.log(jsonState, json.features[j].properties.value)
						break;
					}
				}
			}
			if(start==true){
				//console.log('hi')

				map.selectAll("path")
				  .data(json.features)
				  .enter()
				  .append("path")
				  .attr("id","ColorPath")
				  .attr("d", path)
				  .style("stroke", "#4E4E4E")
				  .style("stroke-width", "1")
				  .style("fill", function(d) { return ramp(d.properties.value) })
				  .on("mouseover", handleMouseOver)
				  .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
				  .on("mouseout", handleMouseOut)
				  .on("click", handleClick);
				  
				  // Labels
				map.append("g")
					.selectAll("labels")
					.data(json.features)
					.enter()
      			  	.append("text")
					.attr("class","label")
                 	.attr("x", function(d){return path.centroid(d)[0]})
                  	.attr("y", function(d){return path.centroid(d)[1]})
                  	.text(function(d){ return d.properties.iso3166_2})
				  	.attr("text-anchor", "middle")
        		  	.attr("alignment-baseline", "central")
        		  	.style("font-size", 11)
                  	.style("fill", "black");
			}
			else{
				map.selectAll("#ColorPath")
					.data(json.features)
					.style("fill", function(d) { return ramp(d.properties.value) })
					.on("mouseover", handleMouseOver)
					.on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
					.on("mouseout", handleMouseOut)
					.on("click", handleClick)
					;
			}
				function handleClick(d) {
					drawGraph(file, d.properties.name, measure, highColor, false)
					drawBar(file,d.properties.name,curr_year,start=false)
				}
				function handleMouseOver(d) {
					tooltip.text(d.properties.name + ": " + internationalNumberFormat.format(d.properties.value));
					color = ramp(d.properties.value)
					d3.select(this).style("stroke-width", "4")
						.style("fill", d3.rgb(color).darker(0.5))
					map.selectAll(".label")
						.style("visibility", "hidden")
					return tooltip.style("visibility", "visible").style("stroke", "black")
				}
				function handleMouseOut() {
					d3.select(this).style("stroke-width", "1")
					d3.select(this).style("fill", d3.rgb(color))
					map.selectAll(".label")
						.style("visibility", "visible")
						.style("fill","black")
					return tooltip.style("visibility", "hidden");
				}
	
		});
		
		legend.select("stop").transition().attr("stop-color",highColor)
		Mapy = d3.scaleLinear()
			.range([h, 0])
			.domain([minVal, maxVal])
		MapyAxis = d3.axisRight(Mapy)
		key.select("g").transition().call(MapyAxis)

		if(file=="Income.csv"){
			var i = measure_names.indexOf(measure)
			var metric = measure_descriptors[i]
		}
		else{
			var metric = "Number of deaths per 100,000 people"
		}
		//console.log(metric)
		key.select('#Mapaxistext')
			.transition()
			.text(metric)
	});
}

function updateMap2(start,year,measure) {
	// Load data
	d3.csv(file2, function(data) {
		var dataArray = [];
		var simpleData = data.filter(function(entry) {
			if(entry.year == year & entry.measure == measure & entry.state != 'United States'){
				return entry;
			}
			else{return false}
		})
	
		for (var i = 0; i < simpleData.length; i++) {
			dataArray.push(parseFloat(simpleData[i].value))		
		}
		//console.log(simpleData)
		//console.log(dataArray)
		
		var minVal = d3.min(dataArray)
		var maxVal = d3.max(dataArray)
		//console.log(minVal, maxVal)

		var lowColor = "#EFEFEF"
		//if(file === 'DeathCause.csv'){
		//	var highColor = '#E71212'
		//}
		//else if(file === 'Income.csv'){
		//	var highColor ='#258f41'
		//}
		var highColor = '#258f41'
		var ramp2 = d3.scaleLinear().domain([minVal,maxVal]).range([lowColor,highColor])
		if(start==true){
			var tooltip = d3.select("body")
				.append("div").attr("id","tooltip")
				.style("position", "absolute")
				.style("z-index", "10")
				.style("visibility", "hidden")
				.style("background", "#fff")
				.style("background-color", "white")
				.style("border", "solid")
				.style("border-width", "2px")
				.style("border-radius", "5px")
				.style("padding", "5px")
				.text("Should not be seeing this");
		}
		else{
			var tooltip = d3.selectAll("#tooltip")
		}

		// Load GeoJSON and merge with desired data
		d3.json("us_states_hexgrid.json", function(json) {

			for (var i = 0; i < simpleData.length; i++) {
				var dataState = simpleData[i].state;
				var dataValue = simpleData[i].value;

				// Find the corresponding state inside the GeoJSON
				for (var j = 0; j < json.features.length; j++) {
					var jsonState = json.features[j].properties.name;

					if (dataState == jsonState) {
						json.features[j].properties.value = dataValue;
						break;
					}
				}
			}
			if(start==true){
				map2.selectAll("path")
					.data(json.features)
					.enter()
					.append("path")
					.attr("id","ColorPath2")
					.attr("d", path)
					.style("stroke", "#4E4E4E")
					.style("stroke-width", "1")
					.style("fill", function(d) { return ramp2(d.properties.value) })
					.on("mouseover", handleMouseOver)
					.on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
					.on("mouseout", handleMouseOut)
					.on("click", handleClick);

				map2.append("g")
					.selectAll("labels")
					.data(json.features)
					.enter()
      			  	.append("text")
					.attr("class","label")
                 	.attr("x", function(d){return path.centroid(d)[0]})
                  	.attr("y", function(d){return path.centroid(d)[1]})
                  	.text(function(d){ return d.properties.iso3166_2})
				  	.attr("text-anchor", "middle")
        		  	.attr("alignment-baseline", "central")
        		  	.style("font-size", 11)
                  	.style("fill", "black")
					.on("mouseover", handleMouseOver)
					.on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
					.on("mouseout", handleMouseOut)
					.on("click", handleClick);;
			}
			else{
				map2.selectAll("#ColorPath2")
					.data(json.features)
					.style("fill", function(d) { return ramp2(d.properties.value) })
					.on("mouseover", handleMouseOver)
					.on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
					.on("mouseout", handleMouseOut)
					.on("click", handleClick)
					;
			}
				function handleClick(d) {
					drawGraph2(file2, d.properties.name, measure, highColor, false)
				}
				function handleMouseOver(d) {
					tooltip.text(d.properties.name + ": " + internationalNumberFormat.format(d.properties.value));
					color = ramp2(d.properties.value)
					d3.select(this).style("stroke-width", "4")
						.style("fill", d3.rgb(color).darker(0.5))
					map2.selectAll(".label")
						.style("visibility", "hidden")
					return tooltip.style("visibility", "visible").style("stroke", "black")
				}
				function handleMouseOut() {
					d3.select(this).style("stroke-width", "1")
					d3.select(this).style("fill", d3.rgb(color))
					map2.selectAll(".label")
						.style("visibility", "visible")
						.style("fill","black")
					return tooltip.style("visibility", "hidden");
				}
	
		});
		legend2.select("#stop2").transition().attr("stop-color",highColor)
		Mapy2 = d3.scaleLinear()
			.range([h, 0])
			.domain([minVal, maxVal])
		MapyAxis2 = d3.axisRight(Mapy2)
		key2.select("g").transition().call(MapyAxis2)

		if(file2=="Income.csv"){
			var i = measure_names.indexOf(measure)
			var metric = measure_descriptors[i]
		}
		else{
			var metric = "Number of deaths per 100,000 people"
		}
		//console.log(metric)
		key2.select('#Mapaxistext2')
			.transition()
			.text(metric)
	});
}

function updateMap3(start,year,measure) {
	// Load data
	d3.csv(file3, function(data) {
		var dataArray = [];
		var simpleData = data.filter(function(entry) {
			//console.log(entry.year, String(year))
			if(entry.year == String(year) & entry.measure == measure & entry.state != 'United States'){
				return entry;
			}
			else{return false}
		})
	
		for (var i = 0; i < simpleData.length; i++) {
			dataArray.push(parseFloat(simpleData[i].value))		
		}
		console.log(simpleData)
		console.log(dataArray)
		
		var minVal = d3.min(dataArray)
		var maxVal = d3.max(dataArray)
		//console.log(minVal, maxVal)

		var lowColor = "#EFEFEF"
		//if(file === 'DeathCause.csv'){
		//	var highColor = '#E71212'
		//}
		//else if(file === 'Income.csv'){
		//	var highColor ='#258f41'
		//}
		var highColor = "#334ADC"
		var ramp3 = d3.scaleLinear().domain([minVal,maxVal]).range([lowColor,highColor])
		if(start==true){
			var tooltip = d3.select("body")
				.append("div").attr("id","tooltip")
				.style("position", "absolute")
				.style("z-index", "10")
				.style("visibility", "hidden")
				.style("background", "#fff")
				.style("background-color", "white")
				.style("border", "solid")
				.style("border-width", "2px")
				.style("border-radius", "5px")
				.style("padding", "5px")
				.text("Should not be seeing this");
		}
		else{
			var tooltip = d3.selectAll("#tooltip")
		}

		// Load GeoJSON and merge with desired data
		d3.json("us_states_hexgrid.json", function(json) {

			for (var i = 0; i < simpleData.length; i++) {
				var dataState = simpleData[i].state;
				var dataValue = simpleData[i].value;

				// Find the corresponding state inside the GeoJSON
				for (var j = 0; j < json.features.length; j++) {
					var jsonState = json.features[j].properties.name;

					if (dataState == jsonState) {
						json.features[j].properties.value = dataValue;
						break;
					}
				}
			}
			if(start==true){
				map3.selectAll("path")
					.data(json.features)
					.enter()
					.append("path")
					.attr("id","ColorPath3")
					.attr("d", path)
					.style("stroke", "#4E4E4E")
					.style("stroke-width", "1")
					.style("fill", function(d) { return ramp3(d.properties.value) })
					.on("mouseover", handleMouseOver)
					.on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
					.on("mouseout", handleMouseOut)
					.on("click", handleClick);

				map3.append("g")
					.selectAll("labels")
					.data(json.features)
					.enter()
      			  	.append("text")
					.attr("class","label")
                 	.attr("x", function(d){return path.centroid(d)[0]})
                  	.attr("y", function(d){return path.centroid(d)[1]})
                  	.text(function(d){ return d.properties.iso3166_2})
				  	.attr("text-anchor", "middle")
        		  	.attr("alignment-baseline", "central")
        		  	.style("font-size", 11)
                  	.style("fill", "black")
					.on("mouseover", handleMouseOver)
					.on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
					.on("mouseout", handleMouseOut)
					.on("click", handleClick);;
			}
			else{
				map3.selectAll("#ColorPath3")
					.data(json.features)
					.style("fill", function(d) { return ramp3(d.properties.value) })
					.on("mouseover", handleMouseOver)
					.on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
					.on("mouseout", handleMouseOut)
					.on("click", handleClick)
					;
			}
				function handleClick(d) {
					drawGraph3(file3, d.properties.name, measure, highColor, false)
				}
				function handleMouseOver(d) {
					tooltip.text(d.properties.name + ": " + internationalNumberFormat.format(d.properties.value));
					color = ramp3(d.properties.value)
					d3.select(this).style("stroke-width", "4")
						.style("fill", d3.rgb(color).darker(0.5))
					map3.selectAll(".label")
						.style("visibility", "hidden")
					return tooltip.style("visibility", "visible").style("stroke", "black")
				}
				function handleMouseOut() {
					d3.select(this).style("stroke-width", "1")
					d3.select(this).style("fill", d3.rgb(color))
					map3.selectAll(".label")
						.style("visibility", "visible")
						.style("fill","black")
					return tooltip.style("visibility", "hidden");
				}
	
		});
		legend3.select("#stop2").transition().attr("stop-color",highColor)
		Mapy3 = d3.scaleLinear()
			.range([h, 0])
			.domain([minVal, maxVal])
		MapyAxis3 = d3.axisRight(Mapy3)
		key3.select("g").transition().call(MapyAxis3)

		if(file3=="Income.csv"){
			var i = measure_names.indexOf(measure)
			var metric = measure_descriptors[i]
		}
		else{
			var metric = "Vote Percentage"
		}
		//console.log(metric)
		key3.select('#Mapaxistext3')
			.transition()
			.text(metric)
	});
}

// Linegraph
var graphmargin = {top: 75, right: 85, bottom: 60, left: 90},
			graphwidth = 775 - graphmargin.left - graphmargin.right,
			graphheight = 500 - graphmargin.top - graphmargin.bottom;

var svg = d3.select("#linegraph")
	.append("svg")
	.attr("width", graphwidth + graphmargin.left + graphmargin.right)
	.attr("height", graphheight + graphmargin.top + graphmargin.bottom)
	.style("background","#EFEFEF")
	.style("border-radius","0.25em")
	.append("g")
	.attr("transform",
		"translate(" + graphmargin.left + "," + graphmargin.top + ")");

var x = d3.scaleLinear().range([0,graphwidth-100]);
var xAxis = d3.axisBottom().scale(x).tickFormat(d3.format("d"));
svg.append("g")
	.attr("transform", "translate(0," + graphheight + ")")
	.attr("class","myXaxis")

	var y = d3.scaleLinear().range([graphheight, 0]);
	var ya2 = d3.scaleLinear().range([graphheight, 0]);
	var ya3 = d3.scaleLinear().range([graphheight, 0]);
	var yAxis = d3.axisLeft(y);
	svg.append("g")
		.attr("class","myYaxis")
	var yAxis2 = d3.axisRight(ya2);
	svg.append("g")
		.attr("class","myYaxis2")
	var yAxis3 = d3.axisRight(ya3);
	svg.append("g")
		.attr("class","myYaxis3")

function drawGraph(file, state, measure, color,start) {
	function sortByKey(array, key) {
		return array.sort(function(a, b) {
			var x = a[key]; var y = b[key];
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});
	}

	d3.csv(file, function(data){
		var graphData = data.filter(function(entry) {
			if(entry.measure == measure & entry.state == state & entry.year >= 2005 & entry.year <= 2015){
				return entry;
			}
		})
		var minVal = parseFloat(graphData[0].value)
		var maxVal = parseFloat(graphData[0].value)
		graphData = sortByKey(graphData, "year")
		for (var i = 0; i < graphData.length; i++) {
			if(minVal > parseFloat(graphData[i].value)){
				minVal = parseFloat(graphData[i].value)
			}
			if(maxVal < parseFloat(graphData[i].value)){
				maxVal = parseFloat(graphData[i].value)
			}
		}

	updateGraph(graphData, minVal, maxVal, color, start, measure)
	function updateGraph(data, minVal, maxVal, color, start, measure) {
		color = d3.rgb(color).darker(1)
		// X axis:
		x.domain([2005, 2015]);
		svg.selectAll(".myXaxis").transition()
			.duration(2000)
			.call(xAxis);

		// Y axis
		y.domain([minVal, maxVal]);
		svg.selectAll(".myYaxis")
			.transition()
			.duration(2000)
			.ease(d3.easeExp,8)
			.call(yAxis);

		if(start==true){
			// Title
			svg.append('text').attr("id",'titletext')
			.attr('x', graphwidth/2)
			.attr('y', -50)
			.attr('text-anchor', 'middle')
			.style('font-size', 18)
			.style("fill", d3.rgb(color).darker(0.25))
			.text(state + ": " + measure)
			
			// X label
			svg.append('text')
			.attr('x', graphwidth/2)
			.attr('y', graphheight + 40)
			.attr('text-anchor', 'middle')
			.style('font-size', 20)
			.text('Year');
			
			// Y label
			svg.append('text').attr("id","axistext")
			.attr('text-anchor', 'middle')
			.attr('transform', 'translate(-60,' + graphheight/2 + ')rotate(-90)')
			.style('font-size', 20)
			.style("fill", d3.rgb(color).darker(0.25))
			.text("Number of deaths per 100,000 people");

			svg.selectAll("circle")
				.data(data)
				.enter()
				.append("circle").attr("class","graph1")
				.attr("cx", function (d) { return x(d.year); } )
				.attr("cy", function (d) { return y(d.value); } )
				.style("fill", color)
				.attr("r",1)
				.attr("opacity", 0)
				.transition()
				.duration(3000)
				.attr("r", 5)
				.attr("opacity",0.5)

		}
		else{
			svg.select('#titletext')
				.transition()
				.style("fill", d3.rgb(color).darker(0.25))
				.text(state + ": " + measure)

			if(file=="Income.csv"){
				var i = measure_names.indexOf(measure)
				var metric = measure_descriptors[i]
			}
			else{
				var metric = "Number of deaths per 100,000 people"
			}
			svg.select('#axistext')
				.transition()
				.style("fill", d3.rgb(color).darker(0.25))
				.text(metric)

			svg.selectAll(".graph1")
				.data(data)
				.transition()
				.duration(750)
				.attr("cx", function (d) { return x(d.year); } )
				.attr("cy", function (d) { return y(d.value); } )
				.attr("opacity", 0.5)
				.attr("r", 5)
				.style("fill", color)
		}
		}
	})
}

function drawGraph2(file, state, measure, color,start) {
	function sortByKey(array, key) {
		return array.sort(function(a, b) {
			var x = a[key]; var y = b[key];
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});
	}

	d3.csv(file, function(data){
		var graphData = data.filter(function(entry) {
			if(entry.measure == measure & entry.state == state & entry.year >= 2005 & entry.year <= 2015){
				return entry;
			}
		})
		var minVal = parseFloat(graphData[0].value)
		var maxVal = parseFloat(graphData[0].value)
		graphData = sortByKey(graphData, "year")
		for (var i = 0; i < graphData.length; i++) {
			if(minVal > parseFloat(graphData[i].value)){
				minVal = parseFloat(graphData[i].value)
			}
			if(maxVal < parseFloat(graphData[i].value)){
				maxVal = parseFloat(graphData[i].value)
			}
		}

	updateGraph2(graphData, minVal, maxVal, color, start, measure)
	function updateGraph2(data, minVal, maxVal, color, start, measure) {
		color = d3.rgb(color).brighter(1)
		// Y axis
		ya2.domain([minVal, maxVal]);
		svg.selectAll(".myYaxis2")
			.attr("transform", "translate(500,0)")
			.transition()
			.duration(2000)
			.ease(d3.easeExp,8)
			.call(yAxis2);

		if(start==true){
			// Title
			svg.append('text').attr("id",'titletext2')
			.style("fill", d3.rgb(color).darker(0.25))
			.attr('x', graphwidth/2)
			.attr('y', -30)
			.attr('text-anchor', 'middle')
			.style('font-size', 18)
			.text(state + ": " + measure)
			
			// Y label
			svg.append('text').attr("id","axistext2")
			.attr('text-anchor', 'middle')
			.attr('transform', 'translate(560,' + graphheight/2 + ')rotate(-90)')
			.style('font-size', 20)
			.style("fill", d3.rgb(color).darker(0.25))
			.text("Dollars");
			
			svg.selectAll("dot")
				.data(data)
				.enter()
				.append("circle").attr("class","graph2")
				.attr("cx", function (d) { return x(d.year); } )
				.attr("cy", function (d) { return ya2(d.value); } )
				.style("fill", color)
				.attr("r",1)
				.attr("opacity", 0)
				.transition()
				.duration(3000)
				.attr("r", 5)
				.attr("opacity",0.5)

		}
		else{
			svg.select('#titletext2')
				.transition()
				.style("fill", d3.rgb(color).darker(0.25))
				.text(state + ": " + measure)

			if(file=="Income.csv"){
				var i = measure_names.indexOf(measure)
				var metric = measure_descriptors[i]
			}
			else{
				var metric = "Number of deaths per 100,000 people"
			}
			svg.select('#axistext2')
				.transition()
				.style("fill", d3.rgb(color).darker(0.25))
				.text(metric)

			
			svg.selectAll(".graph2")
				.data(data)
				.transition()
				.duration(750)
				.attr("cx", function (d) { return x(d.year); } )
				.attr("cy", function (d) { return ya2(d.value); } )
				.attr("opacity", 0.5)
				.attr("r", 5)
				.style("fill", color)
		}
		}
	})
}

function drawGraph3(file, state, measure, color,start) {
	function sortByKey(array, key) {
		return array.sort(function(a, b) {
			var x = a[key]; var y = b[key];
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});
	}

	d3.csv(file, function(data){
		var graphData = data.filter(function(entry) {
			if(entry.measure == measure & entry.state == state){
				return entry;
			}
		})
		var minVal = parseFloat(graphData[0].value)
		var maxVal = parseFloat(graphData[0].value)
		graphData = sortByKey(graphData, "year")
		for (var i = 0; i < graphData.length; i++) {
			if(minVal > parseFloat(graphData[i].value)){
				minVal = parseFloat(graphData[i].value)
			}
			if(maxVal < parseFloat(graphData[i].value)){
				maxVal = parseFloat(graphData[i].value)
			}
		}
	console.log(graphData)
	updateGraph3(graphData, minVal, maxVal, color, start, measure)
	function updateGraph3(data, minVal, maxVal, color, start, measure) {
		//color = d3.rgb(color).brighter(1)
		// Y axis
		ya3.domain([minVal, maxVal]);
		svg.selectAll(".myYaxis3")
			.attr("transform", "translate(590,0)")
			.transition()
			.duration(2000)
			.ease(d3.easeExp,8)
			.call(yAxis3);

		if(start==true){
			// Title
			svg.append('text').attr("id",'titletext3')
			.style("fill", d3.rgb(color).darker(0.25))
			.attr('x', graphwidth/2)
			.attr('y', -10)
			.attr('text-anchor', 'middle')
			.style('font-size', 18)
			.text(state + ": " + measure)
			
			// Y label
			svg.append('text').attr("id","axistext3")
			.attr('text-anchor', 'middle')
			.attr('transform', 'translate(650,' + graphheight/2 + ')rotate(-90)')
			.style('font-size', 20)
			.style("fill", d3.rgb(color).darker(0.25))
			.text("Dollars");
			
			svg.selectAll("dot")
				.data(data)
				.enter()
				.append("circle").attr("class","graph3")
				.attr("cx", function (d) { return x(d.year); } )
				.attr("cy", function (d) { return ya3(d.value); } )
				.style("fill", color)
				.attr("r",1)
				.attr("opacity", 0)
				.transition()
				.duration(3000)
				.attr("r", 5)
				.attr("opacity",0.5)

		}
		else{
			svg.select('#titletext3')
				.transition()
				.style("fill", d3.rgb(color).darker(0.25))
				.text(state + ": " + measure)

			if(file=="Income.csv"){
				var i = measure_names.indexOf(measure)
				var metric = measure_descriptors[i]
			}
			if(file=="Senate.csv"){
				var metric = "Vote Percentage"
			}
			else{
				var metric = "Number of deaths per 100,000 people"
			}
			svg.select('#axistext3')
				.transition()
				.style("fill", d3.rgb(color).darker(0.25))
				.text(metric)

			
			svg.selectAll(".graph3")
				.data(data)
				.transition()
				.duration(750)
				.attr("cx", function (d) { return x(d.year); } )
				.attr("cy", function (d) { return ya3(d.value); } )
				.attr("opacity", 0.5)
				.attr("r", 5)
				.style("fill", color)
		}
		}
	})
}

//bar - graph
const barWidth = 500
const barHeight = 600
const barmargin = {top:50, bottom:50, left: 50, right: 50}
const bar1 = d3.select('#bar-chart')
	.append('svg')
	.attr('height', barHeight - barmargin.top - barmargin.bottom)
	.attr('width', barWidth - barmargin.left-barmargin.right)
	.attr('viewBox',[0,0,barWidth,barHeight]);
	
bar1.append("g")
	 .attr('class','mybargraph');

drawBar("DeathCause.csv","Alabama",2015,start=true)
function drawBar(file, state,year,start) {
	console.log(year)
	d3.csv(file,function(data){
		var graphData = data.filter(function(entry){
			if(entry.state == state && entry.year == year && entry.measure != "All causes"){
				entry.value = +entry.value
				return entry;
			}
		})
		console.log((graphData))
		
		updateBarGraph(graphData, start)
		function updateBarGraph(graphData, start){
			const barmargin = {top:50, bottom:50, left: 120, right: 50}
			const innerWidth = barWidth - barmargin.left - barmargin.right
			const innerHeight = barHeight - barmargin.top - barmargin.bottom
				
			const xScale = d3.scaleLinear()
				.domain([0, d3.max(graphData, d => d.value)])
				.range([0, innerWidth]);
			
			const yScale = d3.scaleBand()
				.domain(graphData.map(d => d.measure))
				.range([0, innerHeight])
				.padding(0.1);

			console.log(yScale.range());
			
			if (start==true) {
				const g= bar1.append('g')
					.attr('transform', `translate(${barmargin.left}, ${barmargin.top})`);
		
				g.append('g').call(d3.axisLeft(yScale));	
				g.append('g').attr("class","Bar1xAxis").call(d3.axisBottom(xScale))
					.attr('transform', `translate(0, ${innerHeight})`);
		
				g.selectAll('rect').data(graphData)
					.enter().append('rect')
					.attr('y', d => yScale(d.measure))
					.attr('width', d => xScale(d.value))
					.attr('height', 40)
					.attr('fill', "#E65C5C");
			}
			else{
				bar1.selectAll('g').select(".Bar1xAxis").transition().duration(750).call(d3.axisBottom(xScale))
				bar1.selectAll('rect').data(graphData)
				.transition()
				.duration(750)
				.attr('y', d => yScale(d.measure))
				.attr('width', d => xScale(d.value))
				.attr('height', 40)
				.attr('fill', "#E65C5C");
			}
		}
	})

}