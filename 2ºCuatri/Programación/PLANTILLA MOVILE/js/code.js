$(document).on("mobileinit", function(){

$(function () {


  //$("#info").accordion();




$(window).on("orientationchange", function(event){
  $("#orient").text("Este dispositivo está en modo" + event.orientation);
});

$(window).orientationchange();

$("body").pagecontainer({
  beforechange: function(event, ui){
    alert("cargando...");
  },
  change: function(event, ui){
    alert("cambio");
  }
})

});
$("#elem").on("swipe", function(){
  $(this).css("background-color", "red");
})
});