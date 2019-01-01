//CONTACT POPUP
function togglePopup(popupid){
  if (popupid.classList.contains('active')) {
    popupid.classList.remove("active");
  } else {
    removeAllClass("active");
    popupid.classList.add("active");
  }
}


function removeAllClass(className){
  const elements = document.getElementsByClassName(className);
  while(elements.length > 0){
      elements[0].classList.remove(className);
  }
} 



// SCROLL ARROW
$(document).ready(function () {
  $(window).scroll(function (x) {
    if (x.originalEvent.pageY <= 100) {
      $("#scrolltop").hide()
    } else {
      $("#scrolltop").show()
    }
  });
  // END OF SCROLL ARROW 


  //     $("p").mouseout(function(){
  //       $("p").css("widthr", "50%");
  //     });
  //   });


  // $(".icondiv").mouseover(function() {
  //     $(this).children(".description").show();
  // }).mouseout(function() {
  //     $(this).children(".description").hide();
  // });

  // $( "p" ).hover(
  //     function() {
  //       $( this ).append( $( "<span> COOL</span>" ) );
  //     }, function() {
  //       $( this ).find( "span:last" ).remove();
  //     }
  //   );

  // $(function () {
  //     $('[data-toggle="tooltip"]').tooltip()
  //   })

 

  // $(".open").on("click", function (e) {

  //   $(".popup, .popup-content").addClass("active");
  // });

  // $(".close, .popup").on("click", function () {
  //   $(".popup, .popup-content").removeClass("active");
  //   $(".popup, .popup-content").addClass("active");
  // });
});