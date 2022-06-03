
// updated the parameters below to match the names within the function
function progLang(time, speed, pay, sleep, num) {
  /* logic for each if/else still needs to be adjusted, 
  don't forget to use && / ||to mean 'and' / || */
  if ((time === speed) && (pay === sleep) && (num === pay)) {
    return "equilaterial";
  } else if ((sideOne + sideTwo) <= (sideThree)) {
    return "Not a Triangle";
  }  else if ((sideOne + sideThree) <= sideTwo) {
    return "Not a Triangle";
  } else if ((sideThree + sideTwo) <= sideOne) {
    return "Not a Triangle";
  } else if ((sideOne === sideTwo) || (sideThree === sideOne) || (sideTwo === sideThree)) {
    return "isosceles";
  } else {
    return "scalene";
  }
};

$(document).ready(function() {
  $("form#matchmaking").submit(function(event) {
    event.preventDefault();

    //adjusted the ID names to match the ones on the html (input1/input2/input3)
    const time = parseInt($("input#time").val());
    const speed = $parseInt("select#speed").val();
    const pay = parseInt($("input#pay").val());
    const sleep = parseInt($("input#sleep").val());
    const cream = $parseInt($("input#num").val());
    // updated the arguments below to match the variable names above
    let result = progLang(time, speed, pay, sleep, num);
    
    $("#output").text(result);
  });
});