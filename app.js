(function($) {

	function setCookie(name, value, days) {
	  const d = new Date();
	  d.setTime(d.getTime() + (days*24*60*60*1000));
	  let expires = "expires="+ d.toUTCString();
	  document.cookie = name + "=" + value + ";" + expires + ";path=/";
	}
	
	function getCookie(cname) {
	  let name = cname + "=";
	  let decodedCookie = decodeURIComponent(document.cookie);
	  let ca = decodedCookie.split(';');
	  for(let i = 0; i <ca.length; i++) {
	    let c = ca[i];
	    while (c.charAt(0) == ' ') {
	      c = c.substring(1);
	    }
	    if (c.indexOf(name) == 0) {
	      return c.substring(name.length, c.length);
	    }
	  }
	  return "";
	}

	function checkCookie() {
	  var mode = getCookie("mode");
	  if ( mode == null || mode == 'dark' ) {
	  	$('.page').addClass('dark-mode');
	  	$('.page').removeClass('light-mode');
	  	$('.toggler-button').addClass('active');
	  } else {
	    $('.page').removeClass('dark-mode');
		  $('.page').addClass('light-mode');
		  $('.toggler-button').removeClass('active');
	  }
	}

	$(document).ready(function(e) {
		checkCookie();
		$('.toggler-button').on('click', function(e) {
			e.preventDefault();
			var mode = getCookie("mode");
			if ( mode == null  || mode == 'light' ) {
		  	setCookie('mode', 'dark', 365);
		  	checkCookie();
		  } else {
		  	setCookie('mode', 'light', 365);
		  	checkCookie();
		  }
		});
	});

})(jQuery);