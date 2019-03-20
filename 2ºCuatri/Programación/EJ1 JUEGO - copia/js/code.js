$(document).ready(function () {

  $("#caja").draggable();

  $("#cont").droppable({
    drop: function (event) { $(this).html("Dropped!") },
    tolerance: "touch"
  })

  //$("#lista").selectable();

  $("#lista").sortable();

  $("#caja").resizable({
    handles:{
      'se': '#sezable'
    }
  })

  $("#info").accordion();

});


$(function(){
  $('body').on("keydown", function(e){
    if(e.witch !== 0){
      switch(e.which){
        case 37:
          $("#elem").css("left", "-=10px")
          break;
      }
    }
  })
})