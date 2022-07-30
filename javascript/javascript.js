window.addEventListener('DOMContentLoaded', function () {
  $(".hide").ready(function () {
    $(".hide").fadeIn(0);
  });

  $('.menu-trigger').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('main').removeClass('open');
      $('nav').removeClass('open');
      $('.overlay').removeClass('open');
    } else {
      $(this).addClass('active');
      $('main').addClass('open');
      $('nav').addClass('open');
      $('.overlay').addClass('open');
    }
  });

  $('.overlay').on('click', function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $('.menu-trigger').removeClass('active');
      $('main').removeClass('open');
      $('nav').removeClass('open');
    }
  });

  $('a[href^="#"]').on('click', function () {

    if ($('.menu-trigger').hasClass('active')) {
      $("*").css("transition", "all 0s")

      $('.menu-trigger').removeClass('active');
      $('main').removeClass('open');
      $('nav').removeClass('open');
      $('.overlay').removeClass('open');
    }

    var adjust = 0;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');

    $("*").css('transition', '');
    return false;
  });

  $("html, body").ready(function () {
    $(".top").addClass("top-load");

    setTimeout(function () {
      $(".top-border").addClass("top-load");
    }, 1000);

    setTimeout(function () {
      $(".top-txt").addClass("top-load");
    }, 2000);
  });

  $(".port-img").mouseover(function () {
    $(this).find(".port-img-title").addClass("p-i-hover");
  });
  $(".port-img").mouseout(function () {
    $(this).find(".port-img-title").removeClass("p-i-hover");
  });

  $("#f-top-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000, 'swing');
    return false;
  });
});