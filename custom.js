
/*STICKY HEADER*/
(function(){

  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.getElementById('site__header');

  var checkScroll = function() {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) { 
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }
    
    prevScroll = curScroll;
  };

  //var toggleHeader = function(direction, curScroll) {
//    if (direction === 2 && curScroll > 120) { 
//      
//      //replace 52 with the height of your header in px
//
//      header.classList.add('hide');
//      prevDirection = direction;
//    }
//    else if (direction === 1) {
//      header.classList.remove('hide');
//      prevDirection = direction;
//    }
//  };
//  
  window.addEventListener('scroll', checkScroll);

})();



/*GO TO TOP*/ 

$(".gototop").click(function () {
   $("html, body").animate({scrollTop: 0}, 1000);
}); 


$('.hero').slick({
  dots: true,
  infinite: true,
  autoplay:true,
  autoplaySpeed:4000,
  speed: 1000
});
 
 

$('.testimonial__slider').slick({
  dots: true,
  infinite: true,
  autoplay:false,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplaySpeed:4000,
  speed: 1500,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

         
        var links = this.el.find('.faq__header');
         
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('is__Open');

        if (!e.data.multiple) {
            $el.find('.faq__answer').not($next).slideUp().parent().removeClass('is__Open');
        };
    }   

    var accordion = new Accordion($('.faqs__wrap'), false);
});
 
 
 
 /*LET'S TALK*/ 

 $('.sidefFixBtn').click(function(){
                $('body').addClass('noScroll');
                $('.floatingcontForm').addClass('isOpened');
 });
 $('.floatingcontForm .close').click(function(){
                $('body').removeClass('noScroll');
                $('.floatingcontForm').removeClass('isOpened');
 });