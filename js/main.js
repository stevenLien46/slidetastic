// Marvel Slide
//

(function($) {
	$.fn.extend({
		slidetastic: function(){
			// alert( 'Length: ' + $(this).length); //this is for the selector it is on the left side of the function
			$(this).each(function(){

				//the following this is referencing the item we are looping to
				$(this).addClass("slidetastic-container"); //this add a class called slidetastic-container in the ul  
				slidetasticDisplaySlide( $(this), 1);
				setInterval(slidetasticAuto, 2000);

			});

		}
	});
}(jQuery));

function slidetasticDisplaySlide( target, number )
{
	$(target).find('li').hide();
	$(target).find('li:nth-child('+number+')').show();
}

function slidetasticAuto()
{
	var current = $('.slidetastic-container li:visible').index();
	var total = $('.slidetastic-container li').length;

	var next = (current + 1) % total;

	slidetasticDisplaySlide( $('.slidetastic-container'), next + 1);
}