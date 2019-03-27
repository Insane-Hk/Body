$(function() {
    $(".informations").hide();

    $(".infobulle").hover(function() {

        $(".informations .BodyPart-Title").text($(this).data('part'));
        $(".informations .BodyPart-Description").text($(this).data('description'));

        $(".informations").fadeIn();
    }, function() {
        $(".informations").fadeOut();
    });
});