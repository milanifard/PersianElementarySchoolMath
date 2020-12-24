$(document).ready(function () {

  $('.block').draggable({
    containment: 'window',
    stack: '.block',
    snap: true,
    snapMode: 'outer',
    snapTolerance: 13,
  });

  $('#blockTray').on('mousedown', function () {
    $('#instruction').fadeOut('slow');
  });

  // Make blocks rotate 90 deg on each click
  var angle = 90;

  $('.block').click(function () {
    if ($(this).attr('id') === "parallelogram") {
      // let skew_percent =  ((angle/360)%2) ? -1 : +1 ;
      let skew_percent = 1;
      
      $(this).css({

        '-webkit-transform': 'rotate(' + angle + 'deg) skew('+skew_percent*45+'deg)',
        '-moz-transform': 'rotate(' + angle + 'deg) skew('+skew_percent*45+'deg)',
        '-o-transform': 'rotate(' + angle + 'deg) skew('+skew_percent*45+'deg)'
      });
    } else {
      $(this).css({
        '-webkit-transform': 'rotate(' + angle + 'deg)',
        '-moz-transform': 'rotate(' + angle + 'deg)',
        '-o-transform': 'rotate(' + angle + 'deg)',
        '-ms-transform': 'rotate(' + angle + 'deg)'
      });
    }

    angle += 45;
  });

});