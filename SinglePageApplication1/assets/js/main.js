
$(document).ready(function(){
    $('.navbar li').click(function(e) {
        $('.navbar li.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        e.preventDefault();
    });
    
    $('#myCarousel').on('slid.bs.carousel', checkitem);

   
  });



function checkitem()                        // check function
{
	debugger;
    var $this = $('#myCarousel');
	$this.children('.carousel-control').removeClass("arrow-inactive");
    if ($('.carousel-inner .item:first').hasClass('active')) {
        $this.children('.left.carousel-control').addClass("arrow-inactive");
    } 
	if ($('.carousel-inner .item:last').hasClass('active')) {
        $this.children('.right.carousel-control').addClass("arrow-inactive");
    }
}  



