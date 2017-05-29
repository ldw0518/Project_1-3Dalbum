$(function() {
	var oL = $('#album ul li').size();
	var Deg = 360/oL;
	var xDeg = 0, yDeg = -10, xs, ys, p = null;
	for(var i=oL-1; i>=0; i--) {
		$('#album ul li').eq(i).css({
			"transition":"1s "+(oL-i)*0.15+"s transform,.5s "+(1+oL*0.15)+"s opacity",
			"transform":"rotateY("+Deg*i+"deg) translateZ(350px)",
			"opacity":"1"
		 	
		});
	}
});