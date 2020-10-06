console.log($);

// 1
$(document.body).css('text-align', 'center');

// 2
$('#title h2').html('New title');

// 3
$('.subtitle-box').css('background', 'pink');

// 4
//$('.temp').css('opacity', '0');
$('.temp').hide();

// 5
$('.reason').css('border-style', 'dashed');

// 6
$('#first-list li').css('font-weight', 'bold');

// 7
$('#first-list li:last-child').css('text-decoration', 'underline');

// 8
$('#first-list li:nth-child(2)').css('text-decoration', 'line-through');

// 9
$('.second-list > *').css('font-style', 'italic');

// 10
$('ul > *').css('font-size', '0.5em');

// 11
$('.unused-box label').remove();

// 12
$('.unused-box').append('<p>Second sentence</p>');

// 13
$('.unused-box').prepend('<p>First sentence</p>');

// 14
//$('.unused-box').removeClass('unused-box').addClass('used-box');
$('.unused-box').attr('class', 'used-box');

// 15
$('.used-box').click( (event) => {
    $(event.currentTarget).toggleClass('used-boxed-clicked');
});