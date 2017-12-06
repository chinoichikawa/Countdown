$(function(){
	
	
	var setSecond = 10; //タイマーの秒数
	var setPause = setSecond; //ストップした際の秒数
	var time = setSecond; //残り秒数
	var timerId;
	
	
	//残り秒数を表示
	function textDisplay(){
		$("#countDown").text(time);
	};
	
	function countDown(){
		time--; //残り秒数を1減らす
		setPause = time;
		textDisplay();
	};
	
	function stop(){
		clearInterval(timerId);
		$('#countDown').removeClass('shake');
	};
	
	function start(){
		stop();
			timerId = setInterval(function(){
				if(time <= 0){
					clearInterval(timerId);
				}else if(time <= 4){
					$('#countDown').css('color', 'red');
					$('#countDown').addClass('shake');
					countDown();
				}else{
					countDown();
				}
			}, 1000);
	};

	
	textDisplay();
	

	$('.start').on('click', function(){
		time = setPause;
		textDisplay();
		start();
	});
	
	$('.stop').on('click', function(){
		stop();
	});
	
	$('.reset').on('click', function(){
		stop();
		time = setPause = setSecond;
		$('#countDown').css('color', 'black');
		$('#countDown').removeClass('shake');
		textDisplay();
	});
	
	
	
})