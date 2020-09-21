$( document ).ready(function() {
	$('.owl-carousel').owlCarousel({
        item: 1,
        nav:false,
        loop:true,
        margin:10,
        dots: true,
        // navText: ['', ''],
        responsive:{
            0:{
                items:1,
                nav:false
            }
        }
    })
});

// $(document).ready(function() {
 
//   $("#owl-demo").owlCarousel({
 
//       navigation : true, // Show next and prev buttons
//       slideSpeed : 300,
//       paginationSpeed : 400,
//       singleItem:true
 
//       // "singleItem:true" is a shortcut for:
//       // items : 1, 
//       // itemsDesktop : false,
//       // itemsDesktopSmall : false,
//       // itemsTablet: false,
//       // itemsMobile : false
 
//   });
 
// });