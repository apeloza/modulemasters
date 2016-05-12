
//biosArray stores the data to be displayed
var biosArray;
$(document).ready(function(){

//The data is fetched and then an event listener is created
getBios();
$('.col-md-3').on('click','.btn', addLikes);
$('.easteregg').on('click', rickAstley);
});

//This function fetches the information and puts it on the DOM.
function getBios(){
$.ajax({
  type: 'GET',
  url: '/bios',
  success: function(bios){
    biosArray = bios.modulemasters;

    for(i = 0; i < biosArray.length; i++){
      $('.person' + i).append('<h2 class = "name">' + biosArray[i].name + '</h2>');
      $('.person' + i).append('<p class="bio">' + biosArray[i].bio + '</p>');
      $('.person' + i).append('<img src ="' + biosArray[i].url + '"/>');
      $('.person' + i).append('<button class = "btn btn-default">Like Me!</button>');
    }
  }
});
}

//This function adds likes to the server data and appends it to the DOM.
function addLikes() {

  var name = $(this).parent().attr('id');
  var button = $(this);
  $.ajax({
    type: 'POST',
    url: '/likes/' + name,
    success: function(count) {

      if (button.parent().children().hasClass('likes')) {

        button.parent().find('.likes').text('Likes: ' + count.likes);

      } else {

        button.closest('.col-md-3').append('<p class = "likes">Likes: ' + count.likes + '</p>');
      }
    }
  });
}
//Does what it says
function rickAstley(){
$('body').toggleClass('astley');
}
