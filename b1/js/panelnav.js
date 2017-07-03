//var myScroll = []
function loaded() {
	  $('.panel-sliding-rw, .panel-tutorial-rw').each(function (index) {
	      new iScroll($(this).attr('id'), {
	        snap: true,
		momentum: false,
		hScrollbar: false,
		vScrollbar: false,
		onScrollEnd: function () {
			document.querySelector('#indicator > li.active').className = '';
			document.querySelector('#indicator > li:nth-child(' + (this.currPageX+1) + ')').className = 'active';
		}
		
		});
	   });
	   
	$('.panel-scrolling-rw').each(function (index) {
	      new iScroll($(this).attr('id'), {
		      //hScrollbar: false,
			//vScrollbar: false,
		      });
	   });
	   //console.log(iScroll)
}
//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
//document.addEventListener('DOMContentLoaded', loaded, false);
$(document).ready(function() {
	//loaded();
	setTimeout(function(){loaded()},5);
});