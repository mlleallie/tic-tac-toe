$(function(){
  var clickCount = 0;


  $('.gold').click(function() {
    alert('Let the game begin. Taylor Swift, make your move.');

    });

  $('.gameSquare').click(function(){
    clickCount += 1;
    console.log(clickCount);
      if ((clickCount % 2) == 0) {
        $(this).addClass('beyonce')
      } else {
        $(this).addClass('taylor')
      };


      if (($('#s1').hasClass('beyonce') && $('#s2').hasClass('beyonce') && $('#s3').hasClass('beyonce')) || ($('#s1').hasClass('beyonce') && $('#s4').hasClass('beyonce') && $('#s7').hasClass('beyonce')) || ($('#s1').hasClass('beyonce') && $('#s5').hasClass('beyonce') && $('#s9').hasClass('beyonce')) || ($('#s2').hasClass('beyonce') && $('#s5').hasClass('beyonce') && $('#s8').hasClass('beyonce')) || ($('#s3').hasClass('beyonce') && $('#s6').hasClass('beyonce') && $('#s9').hasClass('beyonce')) || ($('#s3').hasClass('beyonce') && $('#s5').hasClass('beyonce') && $('#s7').hasClass('beyonce')) || ($('#s4').hasClass('beyonce') && $('#s5').hasClass('beyonce') && $('#s6').hasClass('beyonce')) || ($('#s1').hasClass('beyonce') && $('#s2').hasClass('beyonce') && $('#s3').hasClass('beyonce')) || ($('#s7').hasClass('beyonce') && $('#s8').hasClass('beyonce') && $('#s9').hasClass('beyonce')) ){
        alert('Beyonce wins! Taylor sucks!');
        var existingScore2 = $('#beyoncescore').text();
        var existing2number = parseInt(existingScore2)
        var newBeyScore = existing2number + 1;
        $('#beyoncescore').text(newBeyScore);
        console.log(newBeyScore);



      } else if (($('#s1').hasClass('taylor') && $('#s2').hasClass('taylor') && $('#s3').hasClass('taylor')) || ($('#s1').hasClass('taylor') && $('#s4').hasClass('taylor') && $('#s7').hasClass('taylor')) || ($('#s1').hasClass('taylor') && $('#s5').hasClass('taylor') && $('#s9').hasClass('taylor')) || ($('#s2').hasClass('taylor') && $('#s5').hasClass('taylor') && $('#s8').hasClass('taylor')) || ($('#s3').hasClass('taylor') && $('#s6').hasClass('taylor') && $('#s9').hasClass('taylor')) || ($('#s3').hasClass('taylor') && $('#s5').hasClass('taylor') && $('#s7').hasClass('taylor')) || ($('#s4').hasClass('taylor') && $('#s5').hasClass('taylor') && $('#s6').hasClass('taylor')) || ($('#s1').hasClass('taylor') && $('#s2').hasClass('taylor') && $('#s3').hasClass('taylor')) || ($('#s7').hasClass('taylor') && $('#s8').hasClass('taylor') && $('#s9').hasClass('taylor')) ){
        alert('Tay Swiz wins! Queen Bey sucks!');
        var existingScore1 = $('#taylorscore').text();
        var existing1number = parseInt(existingScore1)
        var newTayScore = existing1number + 1;
        $('#taylorscore').text(newTayScore);
        console.log(newTayScore);
      }
    });

   $('.letsplayagain').click(function() {
    alert('Rematch!');
    $('td').removeClass('beyonce');
    $('td').removeClass('taylor');
    });

  });

