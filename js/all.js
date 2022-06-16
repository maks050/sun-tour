/*form*/
let callback = `<div class="form_wrapper callback boxshdw">
  <div class="form_header">Закажите обратный звонок</div>
  <div class="form_addmsg">*Если Вы спешите - укажите только свой номер телефона</div>
  <form name="form">
    <div class="inpt_wrpr">
      <input type="text" name="f_phone" value="" class="" placeholder="Номер телефона*">
      <input type="text" name="f_phone_time" value="" class="" placeholder="Удобное время для звонка">
      <input type="text" name="f_name" value="" class="" placeholder="Ваше имя">
    </div>
    <div class="f_submit"><input type="submit" class="send_btn" value="Отправить"></div>
  </form>
  <div class="f_submit"><input class="close_btn" type="button"></div>
</div>`

function start_form(name) {  
  $(document).ready(function() {
    $('.'+ name).click(function() {
      $('<div class="form-wrap">'+ callback +'</div>').insertAfter('#content');
      $('<div class="form_bg"></div>').insertAfter('.form-wrap');
      $("head").append("<link href='./css/" + name +".css' rel='stylesheet' type='text/css'>");
      $('.close_btn, .form_bg').on('click', function(e) {remove_form();});
    });
  });
}

function remove_form(){ 
 $('.form_bg, .form-wrap').fadeOut(300, function(){ $(this).remove() }) 
}

start_form('callback');


/*to-top btn*/
$(document).ready(function() {
  var btn = $('#Go_Top');  
  $(window).scroll(function() {     
    if ($(window).scrollTop() > 300) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });
});