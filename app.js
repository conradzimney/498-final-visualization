
var width = 800; 
var height = 300; 

var svg = d3.select("main").append("svg")
    .attr("class", "guy")
    .attr("width", width)
    .attr("height", height);

var rect = svg.append("rect")
    .attr("class", "rect")
    .attr("width", width)
    .attr("height", height);

//drawSource(300, 0, 100);
//drawSource(400, 0, 300);
drawSource(600, 100, 150);

function drawSource(amp, x, y) {
    var circ = svg.append("circle")
        .attr("class", "dot")
        .attr("r", 8)
        .attr("cy", y)
        .attr("cx", x);

    setInterval(function() {
      svg.append("circle")
          .attr("class", "ring")
          .attr("cy", y)
          .attr("cx", x)
          .attr("r", 6)
          .style("stroke-width", 3)
          .style("stroke", "gray")
        .transition()
          .ease("linear")
          .duration(2000)
          .style("stroke-opacity", .7)
          .style("stroke-width", 1)
          .style("stroke", "gray")
          .attr("r", 700)
          .remove();
    }, amp);
}