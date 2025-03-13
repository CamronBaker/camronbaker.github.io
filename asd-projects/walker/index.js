/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var walker = {
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 0,
  } 
  var walker2 = {
    positionX: 390,
    positionY: 390,
    speedX: 0,
    speedY: 0,
  }
  var KEY = {
    LEFT: 37,
    RIGHT: 39,
    DOWN: 40,
    UP: 38,
  }
  var KEY2 = {
    W: 87,
    A: 65,
    S: 83,
    D: 68,
  }
 ;
  // Game Item Objects
 var width = $("#board").width();
 var height = $("#board").height();

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  var interval2 = setInterval(newFrame2, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown2);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp2);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallcollision();
    redrawGameItem();
  }
  function newFrame2() {
    repositionGameItem2();
    wallcollision2();
    redrawGameItem2();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT){
        console.log("left pressed");
        walker.speedX = -5;
    }
    if (event.which === KEY.RIGHT){
      console.log("right pressed");
      walker.speedX = 5;
    }
    if (event.which === KEY.UP){
      console.log("up pressed");
      walker.speedY = -5;
    }
    if (event.which === KEY.DOWN){
      console.log("down pressed");
      walker.speedY = 5;
    }
  }
  function handleKeyDown2(event){
    if (event.which === KEY2.A){
      console.log("A pressed");
      walker2.speedX = -5;
  }
  if (event.which === KEY2.D){
    console.log("D pressed");
    walker2.speedX = 5;
  }
  if (event.which === KEY2.W){
    console.log("W pressed");
    walker2.speedY = -5;
  }
  if (event.which === KEY2.S){
    console.log("S pressed");
    walker2.speedY = 5;
  }
  }
  function handleKeyUp(event){
    if (event.which === KEY.LEFT){
      console.log("left raised");
      walker.speedX = 0;
  }
    if (event.which === KEY.RIGHT){
    console.log("right raised");
    walker.speedX = 0;
  }
    if (event.which === KEY.UP){
    console.log("up raised");
    walker.speedY = 0;
  }
    if (event.which === KEY.DOWN){
    console.log("down raised");
    walker.speedY = 0;
  }
  }
  function handleKeyUp2(event){
    if (event.which === KEY2.A){
      console.log("A raised");
      walker2.speedX = 0;
  }
    if (event.which === KEY2.D){
    console.log("D raised");
    walker2.speedX = 0;
  }
    if (event.which === KEY2.W){
    console.log("W raised");
    walker2.speedY = 0;
  }
    if (event.which === KEY2.S){
    console.log("S raised");
    walker2.speedY = 0;
  }
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);
    // turn off event handlers
    $(document).off();
  }
  function repositionGameItem(){
    walker.positionX += walker.speedX;
    walker.positionY += walker.speedY;
  }
  function repositionGameItem2(){
      walker2.positionX += walker2.speedX;
      walker2.positionY += walker2.speedY;
  }
  function wallcollision(){
    if (walker.positionX < 0){
      walker.positionX = 0
    }
    if (walker.positionY < 0){
      walker.positionY = 0
    }
    if (walker.positionY > height - 50){
      walker.positionY = height - 50
    }
    if(walker.positionX > width - 50){
      walker.positionX = width - 50 
    }
  }
  function wallcollision2(){
    if (walker2.positionX < 0){
      walker2.positionX = 0
    }
    if (walker2.positionY < 0){
      walker2.positionY = 0
    }
    if (walker2.positionY > height - 50){
      walker2.positionY = height - 50
    }
    if(walker2.positionX > width - 50){
      walker2.positionX = width - 50 
    }
  }
  function redrawGameItem(){
   $("#walker").css("left", walker.positionX);
   $("#walker").css("top", walker.positionY); 
  }
  function redrawGameItem2(){
    $("#walker2").css("left", walker2.positionX);
    $("#walker2").css("top", walker2.positionY); 
   }

}
