
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

// TO DO STILL (6/1/15) :
// 
// DROP DOWN FOR MATERIAL AND FUNCTIONALITY (only enable reflections after material is chosen (initial material is
// perfectly absorbant))
// MAKE FREQUENCY MEANINGFUL REPRESENTATION
// FIND MEANINGFUL NUMBER FOR AMPLITUDE (and change amplitude for each reflection)
// 
// Descriptions for each interaction
// Scientific encoding of amplitude and frequency to our viz (is it correct?) Yes it is.
// 
//

var amplitude = 5;
var frequency = 1000;
var material;
var source;

// Timers:
var ref1;
var ref2;
var ref3;
var ref4;
var ref5;
var ref6;

// Intervals:
var ref_1;
var ref_2;
var ref_3;
var ref_4;
var ref_5;
var ref_6;

// Initialization // 

drawSource(frequency, amplitude, 100, 150);
drawReflections();

function drawSource(freq, amp, x, y) {
    var circ = svg.append("circle")
        .attr("class", "dot")
        .attr("r", 8)
        .attr("cy", y)
        .attr("cx", x);
   source = setInterval(function() {
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

function drawReflections() {
  ref1 = setTimeout(function() {drawReflection1(frequency, .3*amplitude, 100, 0); }, 400);
  ref2 = setTimeout(function() {drawReflection2(frequency, .3*amplitude, 100, 300); }, 400);
  ref3 = setTimeout(function() {drawReflection3(frequency, .3*amplitude, 0, 150); }, 400);
  ref4 = setTimeout(function() {drawReflection4(frequency, .3*amplitude, 800, 150); }, 1700);
  ref5 = setTimeout(function() {drawReflection5(frequency, .3*amplitude, 0, 0); }, 500);
  ref6 = setTimeout(function() {drawReflection6(frequency, .3*amplitude, 0, 300); }, 500);
}

// Slider functions // 

$(function() {
  $("#amp-slider").slider({
    min: 1,
    max: 20,
    value: 5,
    slide: function(event, ui) {
      $("#ampamount").val(ui.value);
      clearAll();
      amplitude = ui.value;
      drawSource(frequency, ui.value, 100, 150);
      drawReflections();
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
      clearAll();
      frequency = ui.value;
      drawSource(ui.value, amplitude, 100, 150);
      drawReflections();
    }
  });
  $("#freqamount").val(frequency);
});

// Clear all Timers and Intervals // 

function clearAll() {
    clearInterval(source);
    clearInterval(ref_1);
    clearInterval(ref_2);
    clearInterval(ref_3);
    clearInterval(ref_4);
    clearInterval(ref_5);
    clearInterval(ref_6);
    clearTimeout(ref1);
    clearTimeout(ref2);
    clearTimeout(ref3);
    clearTimeout(ref4);
    clearTimeout(ref5);
    clearTimeout(ref6);
}

// Draw Reflection Functions // 

function drawReflection1(freq, amp, x, y) {
   ref_1 = setInterval(function() {
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

function drawReflection2(freq, amp, x, y) {
   ref_2 = setInterval(function() {
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

function drawReflection3(freq, amp, x, y) {
   ref_3 = setInterval(function() {
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

function drawReflection4(freq, amp, x, y) {
   ref_4 = setInterval(function() {
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

function drawReflection5(freq, amp, x, y) {
   ref_5 = setInterval(function() {
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

function drawReflection6(freq, amp, x, y) {
   ref_6 = setInterval(function() {
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

// Attempted universal draw reflection function // 

// function drawReflection(freq, amp, x, y, reflection) {
//    reflection = setInterval(function() {
//       svg.append("circle")
//           .attr("class", "ring")
//           .attr("cy", y)
//           .attr("cx", x)
//           .attr("r", 6)
//           .style("stroke-width", amp)
//           .style("stroke", "gray")
//         .transition()
//           .ease("linear")
//           .duration(2000)
//           .style("stroke-opacity", .7)
//           .style("stroke-width", .3*amp)
//           .style("stroke", "gray")
//           .attr("r", 800)
//           .remove();
//     }, freq);
// }





