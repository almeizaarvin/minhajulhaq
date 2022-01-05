(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('DOMContentLoaded', function() {
  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);
  
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems);


});

$(document).ready(function(){

  $('.slider').slider({ 
      full_width: true,
      height : 800, // default - height : 400
    });

  $('.carousel').carousel();

  $('select').formSelect();

});

$(window).bind("resize",function(){
if($(this).width() < 975){
  $('#nav-logo').addClass('center');
  $('.caption h3').replaceWith(function () {
    return "<h4>" + $(this).html() + "</h4>";
  });

}
else{
  $('#nav-logo').removeClass('center');
  $('.caption h4').replaceWith(function () {
    return "<h3>" + $(this).html() + "</h3>";
  });
}
}).resize();


//CARD

// $(".card").mouseenter(function (e) {
//   if ($(this).find('> .card-reveal').length) {
//       if ($(e.target).is($('.card .activator')) || $(e.target).is($('.card .activator i'))) {
//           // Make Reveal animate up
//           $(this).find('.card-reveal').css({display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
//       }
//   }

//   $('.card-reveal').closest('.card').css('overflow', 'hidden');

// });

// $(".card").mouseleave(function () {
//   // Make Reveal animate down and display none
//   $(this).find('.card-reveal').velocity(
//           {translateY: 0},
//           {
//               duration: 225,
//               queue: false,
//               easing: 'easeInOutQuad',
//               complete: function () {
//                   $(this).css({display: 'none'});
//               }
//           });
// });