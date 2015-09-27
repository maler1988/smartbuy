$(function(){
	$('body').run();
});

$.fn.run = function() {
	var $root = this;
	console.log('RUN!');
	$root.find('#category').click(function(){
		$root.find('.category-coupons').toggleClass( "hidden" );
	});
};






