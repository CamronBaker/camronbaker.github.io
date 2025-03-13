// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
applyFilter(reddify);
applyFilterNoBackground(decreaseBlue);
applyFilterNoBackground(increaseGreenByBlue);
  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
for(var i = 0; i < image.length; i++){
  var row = image[i];
  for (var x = 0; x < row.length; x++){
    var rgbString = row[x];
    var rgbNumbers = rgbStringToArray(rgbString);
    filterFunction(rgbNumbers);
    rgbString = rgbArrayToString(rgbNumbers);
    row[x] = rgbString;
  }
}
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
  var background = image [0][0];
  for(var i = 0; i < image.length; i++){
    var row = image[i];
    for (var x = 0; x < row.length; x++){
      var rgbString = row[x];
      if (rgbString !== background) {
        var rgbNumbers = rgbStringToArray(rgbString);
        filterFunction(rgbNumbers);
        rgbString = rgbArrayToString(rgbNumbers);
        row[x] = rgbString;
      }
    }
  }
}
// TODO 5: Create the keepInBounds function
function keepInBounds(boundary){
  if (boundary < 0){
    return 0;
  }
  else if (boundary > 255){
    return 255;
  }
  else if (boundary > 0 && boundary < 255){
    return boundary;
  }
}

// TODO 3: Create reddify function
function reddify(arr){
  arr[RED] = 200;
}

// TODO 6: Create more filter functions
function decreaseBlue(decrease){
  decrease[BLUE] = keepInBounds(decrease[BLUE] - 50);
}
function increaseGreenByBlue(increase){
  increase[GREEN] = keepInBounds(increase[GREEN] + increase[BLUE]);
}

// CHALLENGE code goes below here
