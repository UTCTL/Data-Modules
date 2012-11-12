jQuery(document).ready(function(){

if (!!jQuery('.region-sidebar-second').offset()) {
    var sidebarTop = jQuery('.region-sidebar-second').offset().top-120;
    var sidebarWidth = jQuery('.region-sidebar-second').width();
    var sidebarHeight = jQuery('.region-sidebar-second').height();
     jQuery(window).scroll(function(){
          var windowTop = jQuery(window).scrollTop();
            if (sidebarTop < windowTop) {
                  jQuery('.region-sidebar-second').css({ position: 'fixed', top: 0 });
                  jQuery('.region-sidebar-second').width(sidebarWidth);
                 jQuery('.region-sidebar-second').height(sidebarHeight); 
                }
            else {
                  jQuery('.region-sidebar-second').css('position','static');
            }
     });
    }
    
jQuery(".assignment-sections .field-items #section-0").siblings().hide();
jQuery(".section-link").click(function () {
	var divname= this.id;
		jQuery(divname).show("slow").siblings().hide("slow");
});

});