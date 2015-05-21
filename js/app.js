
var width = 440;
var height = 25;

var svg = d3.select("main").append("svg")
    .attr("width", 400)
    .attr("height", 600);

var rect = svg.append("rect")
    .attr("class", "rect")
    .attr("width", 400)
    .attr("height", 600)
    .attr("transform", "translate(300)");

drawSource(100, 0, 100);
drawSource(100, 0, 300);
drawSource(100, 0, 500);

function drawSource(amp, x, y) {
    var circ = svg.append("circle")
        .attr("class", "dot")
        .attr("r", 8)
        .attr("cy", 610 - y)
        .attr("cx", width / 2 + x);

    setInterval(function() {
      svg.append("circle")
          .attr("class", "ring")
          .attr("cy", 610 - y)
          .attr("cx", width / 2 + x)
          .attr("r", 6)
          .style("stroke-width", 3)
          .style("stroke", "gray")
        .transition()
          .ease("linear")
          .duration(1000)
          .style("stroke-opacity", .7)
          .style("stroke-width", 1)
          .style("stroke", "gray")
          .attr("r", 1000)
          .remove();
    }, amp);
}










