
var width = 800; 
var height = 300; 

var svg = d3.select("#viz").append("svg")
   .attr("width", width)
   .attr("height", height);

var rect = svg.append("rect")
   .attr("class", "rect")
   .attr("width", width)
   .attr("height", height);

window.audioContext = new window.webkitAudioContext();
var oscillator = window.audioContext.createOscillator();
   oscillator.type = 'sine';
   oscillator.connect(window.audioContext.destination);
var gainNode = window.audioContext.createGain();
   oscillator.connect(gainNode);
   gainNode.connect(window.audioContext.destination);
   oscillator.start();
   gainNode.gain.value = -1;
   oscillator.frequency.value = 100;

// TO DO STILL (6/2/15) :

// Add units to sliders

var amplitude = 0;
var frequency = 100;
var material = "None";
var cf = 0.0;
var source;
var muted = true;

// Timers:
var ref1;
var ref2;
var ref3;
var ref4;
var ref5;
var ref6;
var ref7;
var ref8;

// Intervals:
var ref_1;
var ref_2;
var ref_3;
var ref_4;
var ref_5;
var ref_6;
var ref_7;
var ref_8;

// Initialization // 

drawSource(frequency, amplitude, 100, 150);
drawReflections();

// Draw audio source and reflection functions //

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
   }, 50000/freq);
}

function drawReflections() {
   ref1 = setTimeout(function() {drawReflection1(frequency, cf*.85*amplitude, 100, 0); }, 400);
   ref2 = setTimeout(function() {drawReflection2(frequency, cf*.85*amplitude, 100, 300); }, 400);
   ref3 = setTimeout(function() {drawReflection3(frequency, cf*.85*amplitude, 0, 150); }, 400);
   ref4 = setTimeout(function() {drawReflection4(frequency, cf*.3*amplitude, 800, 150); }, 1700);
   ref5 = setTimeout(function() {drawReflection5(frequency, cf*.82*amplitude, 0, 0); }, 500);
   ref6 = setTimeout(function() {drawReflection6(frequency, cf*.82*amplitude, 0, 300); }, 500);
   ref7 = setTimeout(function() {drawReflection7(frequency, cf*.28*amplitude, 800, 0); }, 2100);
   ref8 = setTimeout(function() {drawReflection8(frequency, cf*.28*amplitude, 800, 300); }, 2100);
}

// Slider functions // 

$(function() {
   $("#amp-slider").slider({
      min: 0,
      max: 20,
      value: 0,
      slide: function(event, ui) {
         $("#ampamount").val(ui.value);
         clearAll();
         amplitude = ui.value * .5;
         if (!muted) {
            gainNode.gain.value = amplitude - 1;
         } else {
            gainNode.gain.value = -1;
         }
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
      value: 100,
      slide: function(event, ui) {
         $("#freqamount").val(ui.value);
         clearAll();
         frequency = ui.value;
         oscillator.frequency.value = ui.value;
         drawSource(ui.value, amplitude, 100, 150);
         drawReflections();
      }
   });
   $("#freqamount").val(frequency);
});

// Drop Down Menu //

document.getElementById("myselectform").onchange = function() {
   material = this.value;
   clearAll();
   if (material == "None") {
      cf = 0;
   } else if (material == "Brick Wall (No Paint)") {
      cf = 1 - .04;
   } else if (material == "Plaster") {
      cf = 1 - .06;
   } else if (material == "Concrete") {
      cf = 1 - .02;
   } else if (material == "Carpeting") {
      cf = 1 - .3;
   } else if (material == "Acoustic Tile") {
      cf = 1 - .7;
   } else if (material == "Plywood") {
      cf = 1 - .1;
   } else if (material == "Brick Wall (With Paint)") {
      cf = 1 - .02;
   } else if (material == "Drapes") {
      cf = 1 - .8;
   } else if (material == "Perforated Transite") {
      cf = 1 - .95;
   }  
   drawSource(frequency, amplitude, 100, 150);
   drawReflections();
}

// Oscillator Button // 

document.getElementById("sound-button").onclick = function() {
   if (!this.checked) {
      gainNode.gain.value = -1;
      muted = true;
   } else {
      gainNode.gain.value = amplitude - 1;
      muted = false;
   }
};

// Clear all Timers and Intervals // 

function clearAll() {
   clearInterval(source);
   clearInterval(ref_1);
   clearInterval(ref_2);
   clearInterval(ref_3);
   clearInterval(ref_4);
   clearInterval(ref_5);
   clearInterval(ref_6);
   clearInterval(ref_7);
   clearInterval(ref_8);
   clearTimeout(ref1);
   clearTimeout(ref2);
   clearTimeout(ref3);
   clearTimeout(ref4);
   clearTimeout(ref5);
   clearTimeout(ref6);
   clearTimeout(ref7);
   clearTimeout(ref8);
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
   }, 50000/freq);
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
   }, 50000/freq);
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
   }, 50000/freq);
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
   }, 50000/freq);
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
   }, 50000/freq);
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
   }, 50000/freq);
}

function drawReflection7(freq, amp, x, y) {
   ref_7 = setInterval(function() {
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
   }, 50000/freq);
}

function drawReflection8(freq, amp, x, y) {
   ref_8 = setInterval(function() {
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
   }, 50000/freq);
}




