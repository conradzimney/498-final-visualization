
var width = 800; 
var height = 300; 

var svg = d3.select("#viz").append("svg")
    .attr("class", "guy")
    .attr("width", width)
    .attr("height", height);

var rect = svg.append("rect")
    .attr("class", "rect")
    .attr("width", width)
    .attr("height", height);

//drawSource(300, 0, 100);
//drawSource(400, 0, 300);

// TO DO STILL (5/31/15 6:30 pm) :
// 
// Make drawsource function stop its original drawing when slider happens
// Scientific encoding of amplitude and frequency to our viz (is it correct?)
// Make slider single and not ranged
// Reflections (establish dissapation function)
// 

var amplitude = 10;
var frequency = 400;

drawSource(frequency, amplitude, 100, 150);

function drawSource(freq, amp, x, y, isRef) {
  if (!isRef) {
    var circ = svg.append("circle")
        .attr("class", "dot")
        .attr("r", 8)
        .attr("cy", y)
        .attr("cx", x);
  }

    setInterval(function() {
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

function drawReflection(freq, amp, x, y) {
  drawSource(freq, .3*amp, x+700, y, true);
}

drawReflection(frequency, amplitude, 100, 150);


$(function() {
  $("#amp-slider").slider({
    range: true,
    min: 1,
    max: 10,
    value: 50,
    slide: function(event, ui) {
      $("#ampamount").val(ui.value);
      amplitude = ui.value;
      drawSource(frequency, ui.value, 100, 150);
    }
  });

});

$(function() {
  $("#freq-slider").slider({
    range: true,
    min: 20,
    max: 2000,
    value: 50,
    slide: function(event, ui) {
      $("#freqamount").val(ui.value);
      frequency = ui.value;
      drawSource(ui.value, amplitude, 100, 150);
    }
  });
});



