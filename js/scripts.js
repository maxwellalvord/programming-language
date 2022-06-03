
function progLang(time, speed, pay, sleep, num) {
 
  if ((time !== speed) && (pay !== time) && (num !== speed)) {
    return "C Sharp";
  } else if ((time + speed) <= (pay + sleep) || (num === sleep)) {
    return "Ruby";
  } else {
    return "Python";
  }
};

$(document).ready(function() {
  $("form#prog").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("input#input1").val());
    const number2 = parseInt($("input#input2").val());
    const number3 = parseInt($("input#input3").val());
    const number4 = parseInt($("input#input4").val());
    const number5 = parseInt($("input#input5").val());
  
    let result = progLang(number1, number2, number3, number4, number5);

    // $("#output").text("hey" + fname + " " + lname + " ,you should study " + result + "! Google is a good place to start!");
    });
  $("form#creds").submit(function(event) {
    event.preventDefault();
    const fname = $("input#input00").val();
    const lname = $("input#input0").val();
    $("#output").text("hey" + fname + " " + lname + " ,you should study " + result + "! Google is a good place to start!");
  });
});
