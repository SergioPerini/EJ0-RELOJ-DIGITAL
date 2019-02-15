$(document).ready(function(){
  
  function time() { 
    var t = new Date();
        horas = t.getHours();
        minutos = t.getMinutes();
        segundos = t.getSeconds();
    
        horas = ( horas < 10 ? "0" : "" ) + horas;
        minutos = ( minutos < 10 ? "0" : "" ) + minutos;
        segundos = ( segundos < 10 ? "0" : "" ) + segundos;
    
        $(".dhoras").html(horas);
        $(".dminutos").html(minutos);
        $(".dsegundos").html(segundos);

    };
    
    var clock = window.setInterval(time, 1000);

});