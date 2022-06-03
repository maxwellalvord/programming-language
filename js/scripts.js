$(document).ready(function() {
  
  $("form#matchmaking").submit(function(event) {
  
    const time = parseInt($("input#time").val());
    const speed = $("select#speed").val();
    

  if (time < 30 && speed === 'Slow') {
    $("#match").text("C Sharp"); 
  } else if (time > 30 && speed === 'Slow') {
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
    $("#age").val("");
  })
});