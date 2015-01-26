jQuery(".waypoint").each(function(index, element){
	function checkScrollPosition(){
		var scrollPosition = $(window).scrollTop();
		var waypointSelector = $(element).data("waypoint-selector");
	   	var waypointOffset = $(waypointSelector).offset().top;

		if(scrollPosition >= waypointOffset){
    		jQuery(element).addClass('waypoint-hit');
    	}

    	if(scrollPosition < waypointOffset){
    		jQuery(element).removeClass('waypoint-hit');	
    	}
	}

	$(window).scroll(checkScrollPosition);
	$(document).ready(checkScrollPosition);
});
