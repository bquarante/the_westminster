$(document).ready(function($)
{
	'use strict';
	var iOS = parseFloat(('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0,''])[1]).replace('undefined', '3_2').replace('_', '.').replace('_', '')) || false;
	var ie78 = $('html').hasClass('lt-ie9');

	if((iOS === false) && (ie78 === false)){
		$('#background').parallax('50%', 0.4);
		$('#wrapper').parallax('50%', 0.1);
	}
});