function getParameterByName(name)
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}

jQuery(document).ready(function(){
	var isMobile = false;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		isMobile = true;
	}
	
	

	if (!!jQuery('.region-sidebar-second').offset()) {
	    var sidebarTop = jQuery('.region-sidebar-second').offset().top-10;
/* 	    var sidebarWidth = jQuery('.region-sidebar-second').width(); */
	    var sidebarHeight = jQuery('.region-sidebar-second').height();
	    jQuery(window).scroll(function(){
	    	var windowTop = jQuery(window).scrollTop();
	    	if (sidebarTop < windowTop) {
	    		if(isMobile)
	    		{
		    		jQuery('.region-sidebar-second').css('margin-top', windowTop-100);
	    		}
	    		
	    		else
	    		{
		    		jQuery('.region-sidebar-second').css({ position: 'fixed', top: 10, left: 890 });
	    		}
/* 	    		jQuery('.region-sidebar-second').width(sidebarWidth); */
	    	}
	    	
	    	else if(!isMobile)
	    	{
	    		jQuery('.region-sidebar-second').css('position','static');
	    	}
	    	
	    	else
	    	{
		    	jQuery('.region-sidebar-second').css('margin-top', 0);
	    	}
	    });
	}
	    
	jQuery(".assignment-sections .field-items #section-0").siblings().hide();
	jQuery("#block-block-3 #section-0").css('color', '#E4543A');
	jQuery("#block-block-3 #section-0").parent().children('.subsection-links').show();
	jQuery(".section-link").click(function () {
		var divname = this.id;
		
/* 		SECTIONS */
		jQuery(".assignment-sections .field-items #" + divname).fadeIn("fast").siblings().fadeOut("fast");
		jQuery("#block-block-3 #" + divname).parent().siblings().children('.section-link').css('color', '#333');
		jQuery("#block-block-3 #" + divname).css('color', '#E4543A');
		jQuery("#block-block-3 #" + divname).parent().siblings().children(".subsection-links").slideUp('fast');

/* 		SUBSECTIONS		 */
		jQuery("#block-block-3 #" + divname).parent().children('.subsection-links').slideDown('fast');
		jQuery(".subsection-link").css("color", "#333");
	});
	
	jQuery(".subsection-link").click(function() {
		var sectionID = jQuery(this).parent().parent().parent().children('.section-link').attr('id');
		var divname = this.id;
		jQuery("#block-block-3 #" + sectionID).parent().siblings().children('.section-link').css('color', '#333');
		jQuery("#block-block-3 #" + sectionID).css('color', '#E4543A');
		
		jQuery("#block-block-3 ul li ul li a").css('color', '#333');
		jQuery(this).css('color', '#E4543A');

		jQuery('html, body').animate({
			scrollTop: jQuery('.assignment-sections .field-items #' + sectionID + " #" + divname).offset().top
			}, 500);
		return false;
	});
	
	var section = getParameterByName("section");
	var subsection = getParameterByName("subsection");
	if(section)
	{
		jQuery("#block-block-3 #section-" + section).trigger('click');	
	}
	
	if(section && subsection)
	{
		var t = jQuery("#block-block-3 #section-" + section).parent().children('.subsection-links');
		t.children().children('#subsection-' + subsection).trigger('click');
	}
});