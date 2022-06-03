// updated the parameters below to match the names within the function
function triCalc(time, speed, pay, sleep, num) {
  /* logic for each if/else still needs to be adjusted, 
  don't forget to use && / ||to mean 'and' / || */
  if ((time !== speed) && (pay !== time) && (speed !== pay)) {
    return "C Sharp";
  } else if ((time + speed) <= (pay + sleep)) {
    return "Ruby";
  } else {
    return "Python";
  }
};

/*
const whatTriangle = function(sideOne, sideTwo, sideThree) {
  return sideOne <= (sideTwo + sideThree) && sideTwo <= (sideThree + sideOne) && sideThree <= (sideOne + sideTwo);
};
*/

$(document).ready(function() {
  $("form#triCalc").submit(function(event) {
    event.preventDefault();
    //adjusted the ID names to match the ones on the html (input1/input2/input3)
    const number1 = parseInt($("input#input1").val());
    const number2 = parseInt($("input#input2").val());
    const number3 = parseInt($("input#input3").val());
    // updated the arguments below to match the variable names above
    let result = triCalc(number1, number2, number3);
    
/*    
    number1 = parseInt($("#input1").val(""));
    number2 = parseInt($("#input2").val(""));
    number3 = parseInt($("#input3").val(""));
 */   
    $("#output").text(result);
    console.log("#output");
  });
});
































// // updated the parameters below to match the names within the function
// function progLang(time, speed, pay, sleep, num) {
//   /* logic for each if/else still needs to be adjusted, 
//   don't forget to use && / ||to mean 'and' / || */
//   if ((time === speed) && (pay === sleep) && (num === pay)) {
//     return "equilaterial";
//   // } else if ((sideOne + sideTwo) <= (sideThree)) {
//   //   return "Not a Triangle";
//   // }  else if ((sideOne + sideThree) <= sideTwo) {
//   //   return "Not a Triangle";
//   // } else if ((sideThree + sideTwo) <= sideOne) {
//   //   return "Not a Triangle";
//   // } else if ((sideOne === sideTwo) || (sideThree === sideOne) || (sideTwo === sideThree)) {
//   //   return "isosceles";
//   // } else {
//   //   return "scalene";
//   // }
//   }
// };

// $(document).ready(function() {
//   $("form#matchmake").submit(function(event) {
//     event.preventDefault();

//     //adjusted the ID names to match the ones on the html (input1/input2/input3)
//     const time = parseInt($("input#time").val());
//     const speed = $parseInt("select#speed").val();
//     const pay = parseInt($("input#pay").val());
//     const sleep = parseInt($("input#sleep").val());
//     const cream = $parseInt($("input#num").val());
//     // updated the arguments below to match the variable names above
//     let result = progLang(time, speed, pay, sleep, num);
    
//     $("#output").show(result);
//   });
// });