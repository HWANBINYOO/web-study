$(function(){
  $('.btn_first').on('click', function(){
    $('.list').removeClass('rolling2');
    $('.list').addClass('rolling');
  });
  $('.btn_last').on('click', function(){
    $('.list').removeClass('rolling');
    $('.list').addClass('rolling2');
  });
    $('.btn_infinity').on('click', function(){
    $('.list').toggleClass('rolling3');
  });
  $('.btn_view').on('click', function(){
    $('.wrap').toggleClass('view');
  });

})
