$('.mov').waypoint( function(dir) {
	if ( dir === 'down' )
         $(this)
         .removeClass('slideOutRight')
         .addClass('slideInRight');
 	}, {
    	offset: '80%'
});

$('.mov2').waypoint( function(dir) {
	if ( dir === 'down' )
         $(this)
         .removeClass('slideOutLeft')
         .addClass('slideInLeft');
 	}, {
    	offset: '80%'
});