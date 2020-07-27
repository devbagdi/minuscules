$('#login-modal').click(function() {
     $('#loginmodal').modal();
})

   


$('.gallery-modal').click(function() {

    var modaltitle = $(this).attr('data-title');
    $('#modal-title').html(modaltitle);
    var modalImageSource = $(this).attr('data-imageSource');
    document.getElementById('modal-image').setAttribute("src",modalImageSource);
    var modalPicCredit = $(this).attr('data-picCredit');
    $('#name').html(modalPicCredit);
    var modalPicLocation = $(this).attr('data-picLocation');
    $('#location').html(modalPicLocation);
    var modalPicCaption = $(this).attr('data-picCaption');
    $('#modal-caption').html(modalPicCaption);
    var modalInstaHref = $(this).attr('data-instaHref');
    $("#instaHref").attr("href", modalInstaHref);
    var modalFacebookHref = $(this).attr('data-facebookHref');
    $("#facebookHref").attr("href", modalFacebookHref);
    var modalTwitterHref = $(this).attr('data-twitterHref');
    $("#twitterHref").attr("href", modalTwitterHref);
    $('#gallerymodal').modal();
});