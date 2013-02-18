function getParameterByName(name)
{
/*   name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]"); */
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}

jQuery.address.change(function(event) {  
    // do something depending on the event.value property, e.g.  
    // $('#content').load(event.value + '.xml'); 
/*     alert("HEY!"); */
});

jQuery.address.externalChange(function(e){
/* 	alert(e['value']); */
var section = getParameterByName("section");
	var subsection = getParameterByName("subsection");
	
	
	if(section && subsection)
	{
		var t = jQuery("#block-block-3 #section-" + section).parent().children('.subsection-links');
		t.children().children('#subsection-' + subsection).trigger('click');
	}
	
	else if(section)
	{
		jQuery("#block-block-3 #section-" + section).trigger('click');	
	}
	
	else if(!subsection  && !section && e["value"]=="/")
	{
		jQuery("#block-block-3 #section-0").trigger('click');	
/* 		alert(e["value"]); */
	}
	
});

jQuery.address.internalChange(function(e){
/* 	alert(e["value"]); */
});

function setUrl(section, subsection)
{
	var regexPattern = /(\b\d+\b)/;
	var sectionNumber = section.match(regexPattern);
	var oldURL = document.URL;
	var replace = oldURL.match(/\?(.*)/);
	if(subsection)
	{
		var subsectionNumber = subsection.match(regexPattern);
		if(replace)
		{
			history.pushState({}, "Title", oldURL);
			window.history.replaceState({}, replace, "?section=" + sectionNumber[0] + "&subsection=" + subsectionNumber[0]);
		}
		
		else
		{
			window.history.pushState("url", "Title", document.URL + "?section=" + sectionNumber[0] + "&subsection=" + subsectionNumber[0]);
		}
	}
	
	else
	{
		if(replace)
		{
			jQuery(".address").value((".section-link #" + section).attr('href'));
			history.pushState({}, "Title", oldURL);
			window.history.replaceState({}, replace, "?section=" + sectionNumber[0]);
		}
		
		else
		{
			window.history.pushState("url", "Title", document.URL + '?section=' + sectionNumber[0]);
		}
	}
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
	jQuery('.assignment-sections .field-items #section-0 #subsection-0').siblings().hide();
	jQuery("#block-block-3 #section-0").addClass("section-active");
	jQuery("#block-block-3 #section-0").parent().siblings().children('.section-link').addClass("section-inactive");
	jQuery("#block-block-3 #section-0").parent().children('.subsection-links').show();
	jQuery("#block-block-3 #section-0").parent().find('#subsection-0').css('color', '#E4543A');
	jQuery(".section-link").click(function () {
		var divname = this.id;
		jQuery.address.value(jQuery(this).attr("href"));
/* 		setUrl(divname); */
		
/* 		SECTIONS */
		jQuery('.assignment-sections .field-items #' + divname + ' #subsection-0').show();
		jQuery('.assignment-sections .field-items #' + divname + ' #subsection-0').siblings().hide();
		jQuery(".assignment-sections .field-items #" + divname).fadeIn("fast").siblings().fadeOut("fast");
		jQuery("#block-block-3 #" + divname).parent().siblings().children('.section-link').addClass("section-inactive");
		jQuery("#block-block-3 #" + divname).parent().siblings().children('.section-link').removeClass("section-active");
		jQuery("#block-block-3 #" + divname).addClass("section-active");
		jQuery("#block-block-3 #" + divname).removeClass("section-inactive");
		jQuery("#block-block-3 #" + divname).parent().siblings().children(".subsection-links").slideUp('fast');

/* 		SUBSECTIONS		 */
		jQuery("#block-block-3 #" + divname).parent().children('.subsection-links').slideDown('fast');
		jQuery(".subsection-link").css("color", "#333");
		jQuery("#block-block-3 #" + divname).parent().children('.subsection-links').find('#subsection-0').css('color', '#E4543A');
	});
	
	jQuery(".subsection-link").click(function() {
		var sectionID = jQuery(this).parent().parent().parent().children('.section-link').attr('id');
		var divname = this.id;
/* 		setUrl(sectionID, divname); */
		jQuery("#block-block-3 #" + sectionID).parent().siblings().children('.section-link').css('color', '#333');
		jQuery("#block-block-3 #" + sectionID).css('color', '#E4543A');
		
		jQuery("#block-block-3 ul li ul li a").css('color', '#333');
		jQuery(this).css('color', '#E4543A');
		jQuery('.assignment-sections .field-items #' + sectionID + " #" + divname).fadeIn("fast").siblings().fadeOut("fast");
/* 		jQuery('html, body').animate({ */
/* 			scrollTop: jQuery('.assignment-sections .field-items #' + sectionID + " #" + divname).offset().top */
/* 			}, 500); */
/* 		return false; */
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