$(document).ready(function(){
  //richiamare funzione per scorrere sule immagini quando clicco su pulsante prev
  $('.prev').click(function(){
   prevImage();
  });
  //stessa funzione ma cliccando sul pulsante next
  $('.next').click(function(){
   nextImage();
  });

  //FUNZIONI//

  //funzione next
  function nextImage(){
   var activeImage = $('.images img.active');
   var dot = $('.nav i.active')

   //tolgo classe//
   activeImage.removeClass('active');
   dot.removeClass('active');

   //mettere classe next//
   if(activeImage.hasClass('last')==true){
   $('.images img.first').addClass('active');
   $('.nav i.first').addClass('active');
   }else{
    activeImage.next().addClass('active');
    dot.next().addClass('active');
    }
  }

  //funzione prev
  function prevImage(){
   var activeImage = $('.images img.active');
   var dot = $('.nav i.active');
   activeImage.removeClass('active');
   dot.removeClass('active');

   if(activeImage.hasClass('first')){
   $('.images img.last').addClass('active');
   $('.nav i.last').addClass('active');
   }else {
   activeImage.prev().addClass('active');
   dot.prev().addClass('active');
   }

  }



});
