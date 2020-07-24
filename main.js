$(document).ready(function(){
  //richiamare funzione per scorrere sule immagini quando clicco su pulsante prev
  $('.prev').click(function(){
   prevImage();
  });
  //stessa funzione ma cliccando sul pulsante next
  $('.next').click(function(){
   nextImage();
 });

 $('.nav i').click(function(){ //trovo la posizione del pallino cliccato
   var posizione= $(this).index();
   console.log(posizione);
    //rimuovo classe active
   $('img').removeClass('active');
   //dare classe active all'elemento con indice trovato attraverso il metodo eq()
   $('img').eq(posizione).addClass('active');
   //rimuovo la classe active a tutti i pallini
   $('.nav i').removeClass('active');
   //dare la classe al pallino giusto
   $('.nav i').eq(posizione).addClass('active');
 });


  //FUNZIONI//

  //funzione next
  function nextImage(){
   var activeImage = $('.images img.active');
   var dot = $('.nav i.active')

   //tolgo la cera//
   activeImage.removeClass('active');
   dot.removeClass('active');

   //metto la cera//
   if(activeImage.hasClass('last')==true){
   $('.images img.first').addClass('active');
   $('.nav i.first').addClass('active');
   }else {
    activeImage.next().addClass('active');
    dot.next().addClass('active');
    }
  }

  //funzione prev
  function prevImage(){
   var activeImage = $('.images img.active');
   var dot = $('.nav i.active');

   //tolgo la cera
   activeImage.removeClass('active');
   dot.removeClass('active');

   //metto la cera
   if(activeImage.hasClass('first')){
   $('.images img.last').addClass('active');
   $('.nav i.last').addClass('active');
   }else {
   activeImage.prev().addClass('active');
   dot.prev().addClass('active');
   }

  }



});
