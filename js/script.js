/*=============================================*/
/* ================= WOW.js ==================*/
/*===========================================*/
$(function(){
  new WOW().init();
});

/*===========================================================*/
/*===================== COUNT ANIMATION ==================== */
/*===========================================================*/

$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

/*===========================================================*/
/*===================== COUNT ANIMATION ==================== */
/*===========================================================*/

const updateScrollPercentage = function() { 
  const heightOfWindow = window.innerHeight,
        contentScrolled = window.pageYOffset,
        bodyHeight = document.body.offsetHeight,
        percentage = document.querySelector("[data-scrollPercentage] .percentage")
        percentageVal = document.querySelector("#percentage-value")
  
  if(bodyHeight - contentScrolled <= heightOfWindow) {
      percentageVal.textContent = percentage.style.width = "100%"
  }
  else {
      const total = bodyHeight - heightOfWindow,
      got = contentScrolled,
      percent = parseInt((got/total) * 100)
      percentageVal.textContent = percentage.style.width = percent + "%"
  }
}
 
window.addEventListener('scroll', updateScrollPercentage)
 
/*==========================================================*/
/*====================== SCROLL TO TOP ==================== */
/*==========================================================*/

$('.scrolltotop').click(function(){
	$('html,body').animate({scrollTop: 0}, 'slow');
});
$(window).scroll(function(){
	if($(window).scrollTop()<500){
    $('.scrolltotop').css('display', 'none'),
		$('.scrolltotop').fadeOut();
	} else {
    $('.scrolltotop i').css('color', '#65795c'),
    $('.scrolltotop').css('display', 'block'),
		$('.scrolltotop').fadeIn();
	}
});

/*=========================================================*/
/* =============== HEADER CONTACT BUTTON ================= */
/*=========================================================*/

var elements = $('.modal-overlay, .modal');

$('.modal-phone-btn').click(function(){
    elements.addClass('active'); 
});

$('.close-modal').click(function(){
    elements.removeClass('active');
});

$('.stopcallBtn').click(function(){
  elements.removeClass('active');
});


var elements2 = $('.modal-overlay-2, .modal-2');

$('.modal-mail-btn').click(function(){
  elements2.addClass('active');
});

$('.close-modal').click(function(){
  elements2.removeClass('active');
});

$('.stopcallBtn').click(function(){
  elements2.removeClass('active');
});


var elements3 = $('.modal-overlay-3, .modal-3');

$('.modal-map-btn').click(function(){
  elements3.addClass('active');
});

$('.close-modal').click(function(){
  elements3.removeClass('active');
});

$('.stopcallBtn').click(function(){
  elements3.removeClass('active');
});


var elements4 = $('.modal-overlay-4, .modal-4');

$('.modal-hour-btn').click(function(){
  elements4.addClass('active');
});

$('.close-modal').click(function(){
  elements4.removeClass('active');
});

$('.stopcallBtn').click(function(){
  elements4.removeClass('active');
});

/*=========================================================*/
/* =============== HEADER CONTACT BUTTON ================= */
/*=========================================================*/

var toggle = document.querySelector('.toggle-btn input')
var animate = setInterval(() => {
    toggle.checked = !toggle.checked
}, 3000)

document.querySelector('body').addEventListener('click', () => {
  clearInterval(animate);
});

/*=========================================================*/
/* =================== NAVBAR ON SCROLL ================== */
/*=========================================================*/

$(window).scroll(function(){
  var x = window.matchMedia("(min-width : 993px)");
  var scroll = $(window).scrollTop();
  var navbar = $('header');
  var scrollpercent = $('#scroll-percent');
  
  if((x.matches) && (scroll > 600)){
      navbar.addClass('active');
      scrollpercent.addClass('active');
  } else {
    navbar.removeClass('active');
    scrollpercent.removeClass('active');
  }
});

$(window).scroll(function(){
  var x = window.matchMedia("(max-width : 992px)");
  var scroll = $(window).scrollTop();
  var navbar = $('header');
  var scrollpercent = $('#scroll-percent');
  
  if((x.matches) && (scroll > 600)){
      navbar.addClass('active-mob');
      scrollpercent.addClass('active-mob');
  } else {
    navbar.removeClass('active-mob');
    scrollpercent.removeClass('active-mob');
  }
});

