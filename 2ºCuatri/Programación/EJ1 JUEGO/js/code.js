













$(document).ready(function(){


	$("body").on("keydown", function(e) {
    	//alert(e.keyCode);
    	//alert(e.which);
    	if (e.which !== 0) {
        	switch(e.which){
        		//left - 37
        		case 37:
        			$(".usuario").css("left", "-=10px")
        			break;
        		//right - 39
        		case 39:
        		    $(".usuario").css("left", "+=10px")
        			break;
        		//up - 38
        		case 38:
        		    $(".usuario").css("top", "-=10px")
        			break;
        		//down - 40
        		case 40:
        		    $(".usuario").css("top", "+=10px")
        			break;
        		default:
        			break;

        	}
        }
    })
    //let num = (Math.random()*10)+1;
    //console.log('num'); 
    //let num = document.getElementById(id); //let num = document.getElementById("#" + ((Math.random()*10)+1)); 
    //$(num).css("display","none");

    
})


/*$(".ordenador").shuffle();

jQuery.fn.shuffle = function () {
    var j;
    for (var i = 0; i < this.length; i++) {
        j = Math.floor(Math.random() * this.length);
        $(this[i]).before($(this[j]));
    }
    return this;
};*/

/*$("#cajatxt").keydown(function(){
    $("#caja").html($(".guia").val());
});

for (i = 0; i <guia_palabra.length; i++){
    if ()
}*/

/*
for (i = 0; i < articulos.length; i++) {
    if (noticias[i].id == param) {
      div_logoSeg = document.createElement("div");
      div_logoSeg.classList.add("div_logo");
      det.appendChild(div_logoSeg);

      */