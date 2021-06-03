$("document").ready(function(){
  const age = parseInt(prompt("How old are you?"));
  if (age >=18){
    $("#over-18").show();
  }
  else {
    $("#minor").show();
  }
});