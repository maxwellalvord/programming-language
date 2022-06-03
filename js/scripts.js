$(document).ready(function() {
  
  $("form#matchmaking").submit(function(event) {
  
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();
    

  if (age < 30 && gender === 'male') {
    $("#match").text("Miley Cyrus"); 
  } else if (age > 30 && gender === 'male') {
    $("#match").text("Emma Stone");
  } else if (age < 30 && gender === 'female') {
     $("#match").text("Johnny Depp");
  } else /*(age > 30 && gender === 'female')*/ {
    $("#match").text("Patrick Osten");
  }
  event.preventDefault();
  });
  $("#hide-match").click(function(event) {
    $("#match").text("");
    $("#age").val("");
  })
});