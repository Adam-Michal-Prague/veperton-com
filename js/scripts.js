
$(document).ready(function(){/* off-canvas sidebar toggle */

  $('[data-toggle=offcanvas]').click(function() {
    $(this).toggleClass('visible-xs text-center');
    $(this).find('i').toggleClass('glyphicon-chevron-right glyphicon-chevron-left');
    $('.row-offcanvas').toggleClass('active');
    $('#lg-menu').toggleClass('hidden-xs').toggleClass('visible-xs');
    $('#xs-menu').toggleClass('visible-xs').toggleClass('hidden-xs');
    $('#btnShow').toggle();
  });

  $('#about').click(function() {
    $('#about').addClass('about-active');
    $('#skills').removeClass('skills-active');
    $('#projects').removeClass('projects-active');
    $('#connect').removeClass('connect-active');
    $('#market').removeClass('market-active');
	$('#gallery').removeClass('gallery-active');
	$('#codebat').removeClass('codebat-active');
	
    $("#aboutcontent").fadeIn('slow');
    $("#skillscontent").css({"display":"none"});
    $("#projectscontent").css({"display":"none"});
    $("#connectcontent").css({"display":"none"});
	$("#marketcontent").css({"display":"none"});
	$("#gallerycontent").css({"display":"none"});
	$("#codebatcontent").css({"display":"none"});
	
  });

  $('#skills').click(function() {
    $('#skills').addClass('skills-active');
    $('#about').removeClass('about-active');
    $('#projects').removeClass('projects-active');
    $('#connect').removeClass('connect-active');
	$('#market').removeClass('market-active');
	$('#gallery').removeClass('gallery-active');
	$('#codebat').removeClass('codebat-active');

    $("#aboutcontent").css({"display":"none"});
    $("#skillscontent").fadeIn('slow');
    $("#projectscontent").css({"display":"none"});
    $("#connectcontent").css({"display":"none"});
	$("#marketcontent").css({"display":"none"});
	$("#gallerycontent").css({"display":"none"});
	$("#codebatcontent").css({"display":"none"});
  });

  $('#projects').click(function() {
    $('#projects').addClass('projects-active');
    $('#skills').removeClass('skills-active');
    $('#about').removeClass('about-active');
    $('#connect').removeClass('connect-active');
	$('#market').removeClass('market-active');
	$('#gallery').removeClass('gallery-active');
	$('#codebat').removeClass('codebat-active');

    $("#aboutcontent").css({"display":"none"});
    $("#skillscontent").css({"display":"none"});
    $("#projectscontent").fadeIn('slow');
    $("#connectcontent").css({"display":"none"});
	$("#marketcontent").css({"display":"none"});
	$("#gallerycontent").css({"display":"none"});
	$("#codebatcontent").css({"display":"none"});
  });

  // $('#resume').click(function() {
  //   $('#resume').addClass('resume-active');
  //   $('#skills').removeClass('skills-active');
  //   $('#projects').removeClass('projects-active');
  //   $('#about').removeClass('about-active');
  //   $('#connect').removeClass('connect-active');
  
  //
  // });

  $('#connect').click(function() {
    $('#connect').addClass('connect-active');
    $('#skills').removeClass('skills-active');
    $('#projects').removeClass('projects-active');
    $('#about').removeClass('about-active');
	$('#market').removeClass('market-active');
	$('#gallery').removeClass('gallery-active');
	$('#codebat').removeClass('codebat-active');

    $("#aboutcontent").css({"display":"none"});
    $("#skillscontent").css({"display":"none"});
    $("#projectscontent").css({"display":"none"});
    $("#connectcontent").fadeIn('slow');
	$("#marketcontent").css({"display":"none"});
	$("#gallerycontent").css({"display":"none"});
	$("#codebatcontent").css({"display":"none"});
  });
  
  $('#market').click(function() {
    $('#connect').removeClass('connect-active');
    $('#skills').removeClass('skills-active');
    $('#projects').removeClass('projects-active');
    $('#about').removeClass('about-active');
	$('#market').addClass('market-active');
	$('#gallery').removeClass('gallery-active');
	$('#codebat').removeClass('codebat-active');

    $("#aboutcontent").css({"display":"none"});
    $("#skillscontent").css({"display":"none"});
    $("#projectscontent").css({"display":"none"});
    $("#connectcontent").css({"display":"none"});
	$("#marketcontent").fadeIn('slow');
	$("#gallerycontent").css({"display":"none"});
	$("#codebatcontent").css({"display":"none"});
  });
  
  $('#gallery').click(function() {
    $('#connect').removeClass('connect-active');
    $('#skills').removeClass('skills-active');
    $('#projects').removeClass('projects-active');
    $('#about').removeClass('about-active');
	$('#market').removeClass('market-active');
	$('#gallery').addClass('gallery-active');
	$('#codebat').removeClass('codebat-active');

    $("#aboutcontent").css({"display":"none"});
    $("#skillscontent").css({"display":"none"});
    $("#projectscontent").css({"display":"none"});
    $("#connectcontent").css({"display":"none"});
	$("#marketcontent").css({"display":"none"});
	$("#gallerycontent").fadeIn('slow');
	$("#codebatcontent").css({"display":"none"});
  });
  
  $('#codebat').click(function() {
    $('#connect').removeClass('connect-active');
    $('#skills').removeClass('skills-active');
    $('#projects').removeClass('projects-active');
    $('#about').removeClass('about-active');
	$('#market').removeClass('market-active');
	$('#gallery').removeClass('gallery-active');
	$('#codebat').addClass('codebat-active');
	

    $("#aboutcontent").css({"display":"none"});
    $("#skillscontent").css({"display":"none"});
    $("#projectscontent").css({"display":"none"});
    $("#connectcontent").css({"display":"none"});
	$("#marketcontent").css({"display":"none"});
	$("#codebatcontent").fadeIn('slow');
	$("#gallerycontent").css({"display":"none"});
  });

  $('#about-xs').click(function() {
    $('#about-xs').addClass('about-active');
    $('#skills-xs').removeClass('skills-active');
    $('#projects-xs').removeClass('projects-active');
    $('#connect-xs').removeClass('connect-active');
	$('#market-xs').removeClass('market-active');
	$('#gallery-xs').removeClass('gallery-active');
	$('#codebat-xs').removeClass('codebat-active');

    $("#aboutcontent").fadeIn('slow');
    $("#skillscontent").css({"display":"none"});
    $("#projectscontent").css({"display":"none"});
    $("#connectcontent").css({"display":"none"});
	$("#marketcontent").css({"display":"none"});
	$("#gallerycontent").css({"display":"none"});
	$("#codebatcontent").css({"display":"none"});
  });

  $('#skills-xs').click(function() {
    $('#skills-xs').addClass('skills-active');
    $('#about-xs').removeClass('about-active');
    $('#projects-xs').removeClass('projects-active');
    $('#connect-xs').removeClass('connect-active');
	$('#market-xs').removeClass('market-active');
	$('#gallery-xs').removeClass('gallery-active');
	$('#codebat-xs').removeClass('codebat-active');

    $("#aboutcontent").css({"display":"none"});
    $("#skillscontent").fadeIn('slow');
    $("#projectscontent").css({"display":"none"});
    $("#connectcontent").css({"display":"none"});
	$("#marketcontent").css({"display":"none"});
	$("#gallerycontent").css({"display":"none"});
	$("#codebatcontent").css({"display":"none"});
  });

  $('#projects-xs').click(function() {
    $('#projects-xs').addClass('projects-active');
    $('#skills-xs').removeClass('skills-active');
    $('#about-xs').removeClass('about-active');
    $('#connect-xs').removeClass('connect-active');
	$('#market-xs').removeClass('market-active');
	$('#gallery-xs').removeClass('gallery-active');
	$('#codebat-xs').removeClass('codebat-active');

    $("#aboutcontent").css({"display":"none"});
    $("#skillscontent").css({"display":"none"});
    $("#projectscontent").fadeIn('slow');
    $("#connectcontent").css({"display":"none"});
	$("#marketcontent").css({"display":"none"});
	$("#gallerycontent").css({"display":"none"});
	$("#codebatcontent").css({"display":"none"});
  });

  

  $('#connect-xs').click(function() {
    $('#connect-xs').addClass('connect-active');
    $('#skills-xs').removeClass('skills-active');
    $('#projects-xs').removeClass('projects-active');
    $('#about-xs').removeClass('about-active');
	$('#market-xs').removeClass('market-active');
	$('#gallery-xs').removeClass('gallery-active');
	$('#codebat-xs').removeClass('codebat-active');

    $("#aboutcontent").css({"display":"none"});
    $("#skillscontent").css({"display":"none"});
    $("#projectscontent").css({"display":"none"});
    $("#connectcontent").fadeIn('slow');
	$("#marketcontent").css({"display":"none"});
	$("#gallerycontent").css({"display":"none"});
	$("#codebatcontent").css({"display":"none"});
  });
  
  $('#market-xs').click(function() {
    $('#market-xs').addClass('market-active');
    $('#skills-xs').removeClass('skills-active');
    $('#projects-xs').removeClass('projects-active');
    $('#about-xs').removeClass('about-active');
	$('#connect-xs').removeClass('connect-active');
	$('#gallery-xs').removeClass('gallery-active');
	$('#codebat-xs').removeClass('codebat-active');

    $("#aboutcontent").css({"display":"none"});
    $("#skillscontent").css({"display":"none"});
    $("#projectscontent").css({"display":"none"});
    $("#connectcontent").css({"display":"none"});
	$("#marketcontent").fadeIn('slow');
	$("#gallerycontent").css({"display":"none"});
	$("#codebatcontent").css({"display":"none"});
  });
  
  $('#gallery-xs').click(function() {
    $('#gallery-xs').addClass('gallery-active');
	$('#market-xs').removeClass('market-active');
    $('#skills-xs').removeClass('skills-active');
    $('#projects-xs').removeClass('projects-active');
    $('#about-xs').removeClass('about-active');
	$('#connect-xs').removeClass('connect-active');
	$('#codebat-xs').removeClass('codebat-active');

    $("#aboutcontent").css({"display":"none"});
    $("#skillscontent").css({"display":"none"});
    $("#projectscontent").css({"display":"none"});
    $("#connectcontent").css({"display":"none"});
	$("#marketcontent").css({"display":"none"});
	$("#gallerycontent").fadeIn('slow');
	$("#codebatcontent").css({"display":"none"});
  });
  
  $('#codebat-xs').click(function() {
	$('#about-xs').removeClass('about-active');
    $('#skills-xs').removeClass('skills-active');
    $('#projects-xs').removeClass('projects-active');
    $('#connect-xs').removeClass('connect-active');
	$('#market-xs').removeClass('market-active');
	$('#gallery-xs').removeClass('gallery-active');
    $('#codebate-xs').addClass('codebat-active');
	
    $("#aboutcontent").css({"display":"none"});
    $("#skillscontent").css({"display":"none"});
    $("#projectscontent").css({"display":"none"});
    $("#connectcontent").css({"display":"none"});
	$("#marketcontent").css({"display":"none"});
	$("#gallerycontent").css({"display":"none"});
	$("#codebatcontent").fadeIn('slow');
  });

  $(".hoverpanel").hover(
    function () {
      $(this).addClass("shadow-z-2");
    },
    function () {
      $(this).removeClass("shadow-z-2");
    }
  );

  cheet('v i n a y p a u l i s c a n c e r o u s', function () {
    window.open('/img/cancer.png','mywindow');
  });

});


 