/*
This function accepts a string (expecting 'section' or 'subsection'),
searches the current URL and returns the corresponding number.
*/
function getParameterByName(name)
{
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location);
	if (results == null)
	{
		return "";
	}
	else
	{
		return decodeURIComponent(results[1].replace(/\+/g, " "));
	}
}

jQuery(document).ready(function ()
{

	jQuery.address.externalChange(function (e)
	{
		var section = getParameterByName("section");
		var subsection = getParameterByName("subsection");


		if (section && subsection)
		{
			jQuery('.assignment-sections .field-items #section-' + section + ' #subsection-' + subsection).show();
			jQuery('.assignment-sections .field-items #section-' + section + ' #subsection-' + subsection).siblings().hide();
			jQuery(".assignment-sections .field-items #section-" + section).fadeIn("fast").siblings().fadeOut("fast");
			jQuery("#block-block-3 #section-" + section).parent().siblings().children('.section-link').addClass("section-inactive");
			jQuery("#block-block-3 #section-" + section).parent().siblings().children('.section-link').removeClass("section-active");
			jQuery("#block-block-3 #section-" + section).addClass("section-active");
			jQuery("#block-block-3 #section-" + section).removeClass("section-inactive");
			jQuery("#block-block-3 #section-" + section).parent().siblings().children(".subsection-links").slideUp('fast');
			jQuery(".assignment-sections .field-items #section-" + section + " .field-type-file .field-items #section-0").siblings().show();

			/* 		SUBSECTIONS		 */
			jQuery("#block-block-3 #section-" + section).parent().children('.subsection-links').slideDown('fast');
			jQuery(".subsection-link").css("color", "#333");
			jQuery("#block-block-3 #section-" + section).parent().children('.subsection-links').find('#subsection-0').css('color', '#E4543A');

			var t = jQuery("#block-block-3 #section-" + section).parent().children('.subsection-links');
			t.children().children('#subsection-' + subsection).trigger('click');
		}
		else if (section)
		{
			jQuery("#block-block-3 #section-" + section).trigger('click');
		}
		else if (!subsection && !section && e["value"] == "/")
		{
			jQuery("#block-block-3 #section-0").trigger('click');
		}

	});
	var isMobile = false;
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))
	{
		isMobile = true;
	}



	if ( !! jQuery('.region-sidebar-second').offset())
	{
		var sidebarTop = jQuery('.region-sidebar-second').offset().top - 10;
		var sidebarHeight = jQuery('.region-sidebar-second').height();
		jQuery(window).scroll(function ()
		{
			var windowTop = jQuery(window).scrollTop();
			if (sidebarTop < windowTop)
			{
				if (isMobile)
				{
					jQuery('.region-sidebar-second').css('margin-top', windowTop - 100);
				}
				else
				{
					jQuery('.region-sidebar-second').css(
					{
						position: 'fixed',
						top: 10,
						left: 890
					});
				}
			}
			else if (!isMobile)
			{
				jQuery('.region-sidebar-second').css('position', 'static');
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

	/* 	Click event handler for "Sections" in the right nav */
	jQuery(".section-link").click(function ()
	{
		var divname = this.id;
		jQuery.address.value(jQuery(this).attr("href"));
		jQuery.address.update();

		/* 		SECTIONS */
		jQuery('.assignment-sections .field-items #' + divname + ' #subsection-0').show();
		jQuery('.assignment-sections .field-items #' + divname + ' #subsection-0').siblings().hide();
		jQuery(".assignment-sections .field-items #" + divname).fadeIn("fast").siblings().fadeOut("fast");
		jQuery("#block-block-3 #" + divname).parent().siblings().children('.section-link').addClass("section-inactive");
		jQuery("#block-block-3 #" + divname).parent().siblings().children('.section-link').removeClass("section-active");
		jQuery("#block-block-3 #" + divname).addClass("section-active");
		jQuery("#block-block-3 #" + divname).removeClass("section-inactive");
		jQuery("#block-block-3 #" + divname).parent().siblings().children(".subsection-links").slideUp('fast');
		jQuery(".assignment-sections .field-items #" + divname + " .field-type-file .field-items #section-0").siblings().show();

		/* 		SUBSECTIONS		 */
		jQuery("#block-block-3 #" + divname).parent().children('.subsection-links').slideDown('fast');
		jQuery(".subsection-link").css("color", "#333");
		jQuery("#block-block-3 #" + divname).parent().children('.subsection-links').find('#subsection-0').css('color', '#E4543A');
	});

	/* 	Click event handler for "Subsections" in the right nav */
	jQuery(".subsection-link").click(function ()
	{
		jQuery.address.value(jQuery(this).attr("href"));
		jQuery.address.update();
		var sectionID = jQuery(this).parent().parent().parent().children('.section-link').attr('id');
		var divname = this.id;
		jQuery("#block-block-3 #" + sectionID).parent().siblings().children('.section-link').css('color', '#333');
		jQuery("#block-block-3 #" + sectionID).css('color', '#E4543A');

		jQuery("#block-block-3 ul li ul li a").css('color', '#333');
		jQuery(this).css('color', '#E4543A');
		jQuery('.assignment-sections .field-items #' + sectionID + " #" + divname).fadeIn("fast").siblings().fadeOut("fast");
	});
	/* 	jQuery.address.autoUpdate(false); */
	var section = getParameterByName("section");
	var subsection = getParameterByName("subsection");
	if (section)
	{

		jQuery("#block-block-3 #section-" + section).trigger('click');
	}

	if (section && subsection)
	{
		var t = jQuery("#block-block-3 #section-" + section).parent().children('.subsection-links');
		t.children().children('#subsection-' + subsection).trigger('click');
	}
});