$(document).on("mobileinit", function(){
  $(function(){
  let usuarios = [
    {
      "id":1,
      "nombre": "A",
      "email": "A@gmail.com"
    },
    {
      "id":2,
      "nombre": "B",
      "email": "B@gmail.com"
    },
    {
      "id":3,
      "nombre": "C",
      "email": "C@gmail.com"
    }
  ];

  $("#prueba").find('.ui-content').text(usuarios[0].nombre);

  $.ajax({
    url: 'users.json',
    type: 'GET',
    dataType: 'json'
  })
  .done(function(data){
    console.log(data);
  });

  
});
});