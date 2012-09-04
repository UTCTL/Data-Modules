<?php if ($wrapper): ?><div<?php print $attributes; ?>><?php endif; ?>  
  <div<?php print $content_attributes; ?>>    
    <?php if ($breadcrumb): ?>
      <div id="breadcrumb" class="grid-<?php print $columns; ?>"><?php print $breadcrumb; ?></div>
    <?php endif; ?>    
    <?php if ($messages): ?>
      <div id="messages" class="grid-<?php print $columns; ?>"><?php print $messages; ?></div>
    <?php endif; ?>
    <?php 
    print $content; ?>
  </div>
<?php if ($wrapper): ?></div><?php endif; ?>

<script type="text/javascript">
	
jQuery(document).ready(function(){
	var section;
	
	jQuery(".block-block-3").append('<div class="print-menu"><ul><li><a href="#" id="print-all">Print all</a></li><li><a href="#" id="print-current">Print current section</a></li></ul></div>');

	jQuery(".assignment-section").hide();
	
	jQuery("#region-sidebar-second").fadeIn(500,function(){
	section = jQuery(".assignment-sections").find(".assignment-section").first();
	jQuery(".section-link").first().addClass('active');
  section.fadeIn(500);
	});
	
  	jQuery(".section-link").click(function(){
      jQuery('body,html').animate({
          scrollTop: 0
       }, 500);
      jQuery(".section-link").removeClass('active');
  	jQuery(this).addClass('active');
  	var sectionId = Number(jQuery(this).attr("rel"));
	section = jQuery(".assignment-sections").find(".assignment-section").eq(sectionId);
	jQuery(".assignment-section:visible").fadeOut(500, function () {
		jQuery(".assignment-section").hide();
		section.fadeIn(500);
	});
  	return false;
  	});
  	
  	jQuery("#print-all").click(function(){
	  	jQuery(".assignment-section").show();
	  	window.print();
	  	jQuery(".assignment-section").hide();
	  	section.show();
  	});
  	
  	jQuery("#print-current").click(function(){
      jQuery(".assignment-section").hide();
  		section.show();
  		window.print();
  	});
    if (!!jQuery('.region-sidebar-second-inner').offset()) {
    var sidebarTop = jQuery('.region-sidebar-second-inner').offset().top;
    var sidebarWidth = jQuery('.region-sidebar-second-inner').width();
    var sidebarHeight = jQuery('.region-sidebar-second-inner').height();
     jQuery(window).scroll(function(){
          var windowTop = jQuery(window).scrollTop();
            if (sidebarTop < windowTop) {
                  jQuery('.region-sidebar-second-inner').css({ position: 'fixed', top: 0 });
                  jQuery('.region-sidebar-second-inner').width(sidebarWidth);
                 jQuery('.region-sidebar-second-inner').height(sidebarHeight); 
                }
            else {
                  jQuery('.region-sidebar-second-inner').css('position','static');
            }
     });
    }
});
</script>
