$(document).ready(function() {

var screenInput = [];
var oper = "";


// // SET UP CLICK LISTERNER TO PICK UP VALUE CLICKED
$('.buttons span').on('click', function(e){
   var screenText = $('#screen').text();
  $('#screen').text(screenText + $(e.target).text());

});

//CALCULATE FUNCTION
function calculate(a , b){

if (oper === "+"){
  return $('#screen').text(a + b);
}
if (oper === "-"){
  return $('#screen').text(a - b);
}
if (oper === "x"){
  return $('#screen').text(a * b);
}
else {
  return $('#screen').text(a / b);
}

}

//ACCESSING NUM AND OPER AND CALLING CALC FUNCTION
$('span').on('click', function(e) {
  var screenInput = $('#screen').text().split(oper);
  var a = parseInt(screenInput[0],10);
  var b = parseInt(screenInput[1],10);
  if($(e.target).hasClass('operator') && e.target.id !== ('calc')){
      oper = $(e.target).text();
    }
  if(e.target.id === ('calc')){
     return calculate(a, b);
   }

});

//CLEAR SCREEN
$('#cancel').on('click', function(){
  $('#screen').text(" ");
});


 });
