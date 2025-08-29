window.onload = pageLoad;

function pageLoad(){
	const btn = document.getElementById('start');
	btn.addEventListener('click',startGame);
}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var getsecond = 5;
	var second = 5; 
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	timer = setInterval(timeCount,TIMER_TICK);
	x.textContent = second;
	
	function timeCount(){
		var allbox = document.querySelectorAll("#layer div");
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		if(allbox.length >= 1){
			second--;
		}
		x.textContent = second;
		console.log(second);
		
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		if(allbox.length <= 0  && second >= 1){
			clearScreen();
			clearInterval(timer);
			alert("win");
			second = getsecond;
		}
		else if(allbox.length >= 1  && second <= 0){
			clearScreen();
			clearInterval(timer);
			second = getsecond;
			alert("Over");
		}
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById('numbox').value;
	var gameLayer = document.getElementById('layer');
	var colorDrop = document.getElementById('color').value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement('div');
		tempbox.className = "square "+colorDrop;
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.remove();
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll(".square");

	//delete all  div
	for (var i=0;i<allbox.length;i++){
		allbox[i].remove();
	}
}




