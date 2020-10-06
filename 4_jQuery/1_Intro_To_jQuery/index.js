console.log($);

$('#teleport-btn').click(() => {
    const left = $('.input-left'), right = $('.input-right');
    const left_value = left.val(), right_value = right.val();
    left.val(right_value);
    right.val(left_value);
});