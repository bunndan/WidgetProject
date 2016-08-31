(function() {
// Brandon Ma - August 24, 2016
// jQuery loading code source: http://www.developerknowhow.com/886/how-to-build-a-javascript-widget
// Icon assets by Google: https://design.google.com/icons/#ic_tag_faces

var jQuery;

// Load jQuery if it's not present
if (window.jQuery === undefined || window.jQuery.fn.jquery !== '3.1.0') { // Checking for latest version
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
              scriptLoadHandler();
          }
      };
    } else { // Other browsers
      script_tag.onload = scriptLoadHandler;
    }
    // Locate the header. Otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
} else {
    // Using the jQuery version in the window
    jQuery = window.jQuery;
    main(); //our main JS functionality
}

function scriptLoadHandler() {
    jQuery = window.jQuery.noConflict(true);
    main(); 
}

function main() { 
    jQuery(document).ready(function($) {
        // Load CSS file
        var css_link = $("<link>", { 
            rel: "stylesheet", 
            type: "text/css", 
            href: "style.css" 
        });
        css_link.appendTo('head');
		css_link = $("<link>", { 
            rel: "stylesheet", 
            type: "text/css", 
            href: "https://fonts.googleapis.com/css?family=Raleway" 
        }); // Google font
        css_link.appendTo('head');
		
        // Load HTML
		$('#widget-menubar-container').html(""+
		"<ul id='widget-menubar'>"+
			"<li class='widget-active'>"+
				"<a href='#checkin' class='menu-selector'>"+
					"<img src='assets/ic_location_on_black_24dp_2x.png' class='widget-image-icon'>"+
					"<span class='widget-menubar-name' data-badge='3'>CHECK IN</span>"+
				"</a>"+
			"</li>"+
			"<li>"+
				"<a href='#events' class='menu-selector'>"+
					"<img src='assets/ic_event_black_24dp_2x.png' class='widget-image-icon'>"+
					"<span class='widget-menubar-name' data-badge='1'>EVENTS</span>"+
				"</a>"+
			"</li>"+
			"<li>"+
				"<a href='#account' class='menu-selector'>"+
					"<img src='assets/ic_person_black_24dp_2x.png' class='widget-image-icon'>"+
					"<span class='' data-badge=''>ACCOUNT</span>"+
				"</a>"+
			"</li>"+
			"<li>"+
				"<a href='#settings' class='menu-selector'>"+
					"<img src='assets/ic_settings_black_24dp_2x.png' class='widget-image-icon'>"+
					"<span class='' data-badge=''>SETTINGS</span>"+
				"</a>"+
			"</li>"+
			"<li>"+
				"<li class='widget-dropdown-menu'>"+
					"<a href='#profile' class='widget-dropdown-name menu-selector'>"+
						"<img src='assets/ic_person_outline_black_24dp_2x.png' class='widget-image-icon'>"+
						"<span class='' data-badge=''>MY PROFILE</span>"+
					"</a>"+
					"<div class='widget-dropdown-content'>"+
						"<a href='#invite'>INVITE FRIENDS</a>"+
						"<a href='#search'>FIND FRIENDS</a>"+
						"<a href='#logout'>LOG OUT</a>"+
					"</div>"+
				"</li>"+
			"</li>"+
			"<li>"+
				"<a href='#edit' class='menu-selector'>"+
					"<img src='assets/ic_mode_edit_black_24dp_2x.png' class='widget-image-icon'>"+
					"<span class='' data-badge=''>EDIT</span>"+
				"</a>"+
			"</li>"+
		"</ul>"
		);
		
		jQuery("#widget-menubar li a").click(function(event) {
			jQuery(this).parent().addClass("widget-active");
			jQuery(this).parent().siblings().removeClass("widget-active");
		});
		
		jQuery(".widget-dropdown-content a").click(function(event) {
			jQuery(this).parent().parent().addClass("widget-active");
			jQuery(this).parent().parent().siblings().removeClass("widget-active");
		});
    });
}

})();
