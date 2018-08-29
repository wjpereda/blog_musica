$(document).ready(main);
var contador=1;
function main(){
	$('.barMenu').click(function(){
		if (contador==1){
			//$('nav').animate({left:'0'});
			$('.menu').animate({left:'0'});
			contador=0;
		}
		else{
			$('.menu').animate({left:'-100%'});
			contador=1;
		}
	});
}