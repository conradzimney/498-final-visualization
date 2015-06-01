
var width = 800; 
var height = 300; 

var svg = d3.select("#viz").append("svg")
    .attr("class", "guy")
    .attr("width", width)
    .attr("height", height);

// TO DO STILL (5/31/15 6:30 pm) :
// 
// Make drawsource function stop its original drawing when slider happens !!!!
// Scientific encoding of amplitude and frequency to our viz (is it correct?) Yes it is.
// 

var amplitude = 5;
var frequency = 600;
var myVar;

drawSource(frequency, amplitude, 100, 150, false);

function drawSource(freq, amp, x, y, isRef) {
    var rect = svg.append("rect")
    .attr("class", "rect")
    .attr("width", width)
    .attr("height", height);
  if (!isRef) {
    var circ = svg.append("circle")
        .attr("class", "dot")
        .attr("r", 8)
        .attr("cy", y)
        .attr("cx", x);
  }

   myVar = setInterval(function() {
      svg.append("circle")
          .attr("class", "ring")
          .attr("cy", y)
          .attr("cx", x)
          .attr("r", 6)
          .style("stroke-width", amp)
          .style("stroke", "gray")
        .transition()
          .ease("linear")
          .duration(2000)
          .style("stroke-opacity", .7)
          .style("stroke-width", .3*amp)
          .style("stroke", "gray")
          .attr("r", 800)
          .remove();
    }, freq);
}

//drawReflections(frequency, amplitude, 100, 150);

$(function() {
  $("#amp-slider").slider({
    min: 1,
    max: 10,
    value: 5,
    slide: function(event, ui) {
      $("#ampamount").val(ui.value);
      clearInterval(myVar);
      amplitude = ui.value;
      drawSource(frequency, ui.value, 100, 150);
      //drawReflections(frequency, ui.value, 100, 150);
    }
  });
  $("#ampamount").val(amplitude);
});

$(function() {
  $("#freq-slider").slider({
    min: 20,
    max: 2000,
    value: 1000,
    slide: function(event, ui) {
      $("#freqamount").val(ui.value);
      clearInterval(myVar);
      frequency = ui.value;
      drawSource(ui.value, amplitude, 100, 150);
      //drawReflections(ui.value, amplitude, 100, 150);
    }
  });
  $("#freqamount").val(frequency);
});

function drawReflections(freq, amp, x, y) {
    setTimeout(function() {drawSource(freq, .3*amp, x, y - 150, true); }, 400);
    setTimeout(function() {drawSource(freq, .3*amp, x, y + 150, true); }, 400);
    setTimeout(function() {drawSource(freq, .3*amp, x - 100, y, true); }, 400);
    setTimeout(function() {drawSource(freq, .3*amp, x + 700, y, true); }, 1700);
    setTimeout(function() {drawSource(freq, .3*amp, x - 100, y - 150, true); }, 500);
    setTimeout(function() {drawSource(freq, .3*amp, x - 100, y + 150, true); }, 500);
}










