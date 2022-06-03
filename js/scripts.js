$(document).ready(function() {
  
  $("form#matchmaking").submit(function(event) {
  
    const time = parseInt($("input#time").val());
    const speed = $("select#speed").val();
    const pay = parseInt($("input#pay").val());
    const sleep = parseInt($("input#sleep").val());
    const cream = parseInt($("input#cream").val());
    
  if (time < 30 && speed === 'Fast' && pay > 10 && sleep < 6 && cream === 'Vanilla') {
    $("#match").text("C Sharp"); 
  } else if ((time > 30) && (speed === 'Slow')&& (pay > 10) && (sleep < 6 ) && (cream === 'Vanilla')) {
    $("#match").text("Python");
  } else if (time < 30 && speed === 'Fast') {
     $("#match").text("JavaScript");
  } else /*(age > 30 && speed === 'Fast')*/ {
    $("#match").text("C Sharp");
  }
  event.preventDefault();
  });
  $("#hide-match").click(function(event) {
    $("#match").text("");
    $("#time").val("");
    $("#speed").val("");
    $("#pay").val("");
    
    $("#sleep").val("");
    $("#cream").val("");
  })
});
