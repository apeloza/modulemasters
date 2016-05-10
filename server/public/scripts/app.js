var biosArray;
$(document).ready(function(){

getBios();
$('body').append(biosArray);
console.log(biosArray);
});

function getBios(){
$.ajax({
  type: 'GET',
  url: '/bios',
  success: function(bios){
    console.log(bios);
    biosArray = bios;
    $('.namecontainer').text(biosArray.modulemasters[0].name);
    console.log("It worked" + biosArray);
  }
});

}
