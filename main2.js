$(function () {
    let headerElem = $('header');
    let logo = $('#logo');
    let navMenu = $('#nav-menu');
    let navToggle = $('#nav-toggle');

   $('#properties-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
   });

   $('#testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev"><</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">></a>'
   });

   navToggle.on('click', () => {
       navMenu.css('right', '0');
   });

   $('#close-flyout').on('click', () => {
        navMenu.css('right', '-100%');
   });

   $(document).on('click', (e) => {
       let target = $(e.target);
       if (!(target.closest('#nav-toggle').length > 0 || target.closest('#nav-menu').length > 0)) {
           navMenu.css('right', '-100%');
       }
   });

   $(document).scroll(() => {
       let scrollTop = $(document).scrollTop();

       if (scrollTop >= 200) {
           navMenu.addClass('is-sticky');
           logo.css('color', '#000');
        //    headerElem.css('background', 'rgb(207,12,12)');
           navToggle.css('border-color', '#000');
           navToggle.find('.strip').css('background-color', '#000');
       } else {
           navMenu.removeClass('is-sticky');
           logo.css('color', '#fff');
        //    headerElem.css('background', 'rgb(212, 212, 212)');
           navToggle.css('bordre-color', '#fff');
           navToggle.find('.strip').css('background-color', '#fff');
       }

       headerElem.css(scrollTop >= 200 ? {'padding': '0'} : {'padding': '0', 'box-shadow': 'none' });
   });

   $(document).trigger('scroll');

   

   var elements = $('.accordion-single-details');
    
elements.each(function() {
  var detailsHeight = $(this).css('height');
  $(this).css('max-height', '0px');

  $(this).siblings('.accordion-single-brief').on('click', function() {
    
    var accordionDetails = $(this).siblings('.accordion-single-details');
    
    if (!$(this).parent().hasClass('open')) {
      $(this).parent().addClass('open');
      $(this).siblings('.accordion-single-details').css('max-height', detailsHeight);
    } else {
      $(this).parent().removeClass('open');
      $(this).siblings('.accordion-single-details').css('max-height', '0px');
    }
  });
});

$(document).ready(function(){


    var current = 1
	var total = $('.content-wrapper').length;
	
	$('.total-slide').text(total);
		
	$('.arrow-container .btn-prev').on('click', function() {
		if(current <= 1) {
			current = total;
		} else {
			current--;
		}
		
		updateSlide();
	});
	
	$('.arrow-container .btn-next').on('click', function() {
		if(current >= total) {
			current = 1;
		} else {
			current++;
		}
		
		updateSlide();
	});
	
	function updateSlide() {
		$('.content-wrapper').removeClass('active');
		$('.content-wrapper[data-id="' + current + '"]').addClass('active');
		$('.current-slide').text(current);
		$('.total-slide').text(total);
	}


    $("#uno").hide();
    $("#dos").hide();
    $("#tres").hide();
    $("#cinco").hide();
    $("#seis").hide();
    $(".circlecross").click(cerrar);
    $("#pri").click(abriruno);
    $("#sec").click(abrirdos);
    $("#ter").click(abrirtres);
    $("#qui").click(abrircinco);
    $("#six").click(abrirseis);
    $("#faunoleft").click(abrircinco);
    $("#faunoright").click(abrirdos);
    $("#fadosleft").click(abriruno);
    $("#fadosright").click(abrirtres);
    $("#fatresleft").click(abrirdos);
    $("#fatresright").click(abrircinco);
    $("#facincoleft").click(abrirtres);
    $("#facincoright").click(abrirseis);
    $("#faseisleft").click(abrircinco);
    $("#faseisright").click(abriruno);
      });
    
    function abriruno(){
    $("#uno").show();
    $("#seis").hide();
    $("#dos").hide();
    $(".main").hide();
    }
     function abrirdos(){
    $("#dos").show();
    $("#tres").hide();
    $("#uno").hide();
    $(".main").hide();
    }
    function abrirtres(){
    $("#tres").show();
    $(".main").hide();
    $("#cinco").hide();
    $("#dos").hide();
    }
     function abrircinco(){
    $("#cinco").show();
    $(".main").hide();
    $("#seis").hide();
    $("#tres").hide();
    }
     function abrirseis(){
    $("#seis").show();
    $(".main").hide();
    $("#cinco").hide();
    $("#uno").hide();
    }
    
    
    function cerrar(){
    $(".big").hide();
    $(".main").show();
    }

    


});
