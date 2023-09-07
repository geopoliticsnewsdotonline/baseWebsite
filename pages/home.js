function openNav() {
   document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  $(window).scroll(function(){
   var sticky = $('#Top-Nav'),
       scroll = $(window).scrollTop(); 
   if (scroll >= 100) sticky.addClass('fixed');
   else sticky.removeClass('fixed');
 });