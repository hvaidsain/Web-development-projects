var start = new Date().getTime();

		function getRandomColor() {
		  var letters = '0123456789ABCDEF';
		  var color = '#';
		  for (var i = 0; i < 6; i++) {
		    color += letters[Math.floor(Math.random() * 16)];
		  }
		  return color;
		}

		function displayObject() {

			var top = Math.random()*400;
			var left = Math.random()*400;
			var width = (Math.random()*300)+100 ; 

			if(Math.random()>0.5){
				document.getElementById('square').style.borderRadius = "50%";
			}else{
				document.getElementById('square').style.borderRadius = "0";
			}

			document.getElementById('square').style.top = top + "px";
			document.getElementById('square').style.left = left + "px";
			document.getElementById('square').style.width = width + "px";
			document.getElementById('square').style.height = width + "px";
			document.getElementById('square').style.backgroundColor = getRandomColor();


			document.getElementById('square').style.display ='block';

			start = new Date().getTime();
		}

		function appearAfterDelay() {

			setTimeout(displayObject,Math.random()*2000);
		}

		appearAfterDelay();


		document.getElementById('square').onclick = function(){

			document.getElementById('square').style.display = 'none';

			var end = new Date().getTime();

			var time = (end - start)/1000;

			document.getElementById('time').innerHTML = "Your response time :"+time+"s";


			appearAfterDelay();





		}


		

	
		
		