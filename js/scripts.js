
// updated the parameters below to match the names within the function
function progLang(time, speed, pay, sleep, cream) {
  /* logic for each if/else still needs to be adjusted, 
  don't forget to use && / ||to mean 'and' / || */
  if (time < 30 && speed === 'Fast' && pay > 10 && sleep < 6 && cream === 'Vanilla') {
    return "C Sharp"; 
  } else if ((time > 30) && (speed === 'Slow')&& (pay > 10) && (sleep < 6 ) && (cream === 'Vanilla')) {
    return "Python";
  } else if (time < 30 && speed === 'Fast') {
     return "JavaScript";
  } else /*(age > 30 && speed === 'Fast')*/ {
    return "C Sharp";
  }
};

$(document).ready(function() {
  $("form#matchmaking").submit(function(event) {

    //adjusted the ID names to match the ones on the html (input1/input2/input3)
    const time = parseInt($("input#time").val());
    const speed = $("select#speed").val();
    const pay = parseInt($("input#pay").val());
    const sleep = parseInt($("input#sleep").val());
    const cream = parseInt($("input#cream").val());
    // updated the arguments below to match the variable names above
    let result = progLang(time, speed, pay, sleep, cream);
    
    $("#output").text(result);
    event.preventDefault();
  });
});