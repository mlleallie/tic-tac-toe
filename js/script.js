$(function(){
  var clickCount = 0;

  $('.gameSquare').click(function(){
    clickCount += 1;
    console.log(clickCount);
      if ((clickCount % 2) == 0) {
        $(this).addClass('beyonce')
      } else {
        $(this).addClass('taylor')
      };


      if (($('#s1').hasClass('beyonce') && $('#s2').hasClass('beyonce') && $('#s3').hasClass('beyonce')) || ($('#s1').hasClass('beyonce') && $('#s4').hasClass('beyonce') && $('#s7').hasClass('beyonce')) || ($('#s1').hasClass('beyonce') && $('#s5').hasClass('beyonce') && $('#s9').hasClass('beyonce')) || ($('#s2').hasClass('beyonce') && $('#s5').hasClass('beyonce') && $('#s8').hasClass('beyonce')) || ($('#s3').hasClass('beyonce') && $('#s6').hasClass('beyonce') && $('#s9').hasClass('beyonce')) || ($('#s3').hasClass('beyonce') && $('#s5').hasClass('beyonce') && $('#s7').hasClass('beyonce'))  ){
        alert('Beyonce wins! Taylor sucks!');
      }
  });

});
