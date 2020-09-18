$('#login-modal').click(function() {
     $('#loginmodal').modal();
})

$('#myList a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})


function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  document.getElementById(cityName).classList.add("active");
}


   
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