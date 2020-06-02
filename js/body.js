var count;
var timer;
//Get main container banner
var DOM_mainContainer = document.getElementById("container");
var WIDTH_MAIN = DOM_mainContainer.offsetWidth;
var HEIGHT_MAIN = DOM_mainContainer.offsetHeight;
var timePassedBufer = 0, timePassedGoBufer = 0;
var timePassed, timePassedGO;
var start;
var passBubble1 = false;

//Styles
var styleBanner = "width: ${WIDTH_MAIN} px; height: ${HEIGHT_MAIN} px; position: absolute; left: 0;top: 0; ";

var styleDino = "position: absolute; width: 130px; position: absolute; left: 109px; top: 238px;";
var styleDinoStop = "position: absolute; left: 0px; top: -20px; visibility: hidden;";

var styleCounterMeter = "width: 115px; position: absolute; left: 20px; top: 0px;";
var styleCounterEnergy = "width: 115px; position: absolute; left: 165px; top: 0px;";
var styleCounterMeterImg = "width: 115px; position: absolute; left: 5px; top: 5px;";
var styleCounterEnergyImg = "width: 115px; position: absolute; left: 180px; top: 5px;";
var styleCounterEnergyFull = "width: 80px; height:51px; position: absolute; left: 180px; top: 5px; overflow: hidden;";
var styleCounterEnergyImgFull = "width: 115px; margin: 0px 0px 0px 0px; position: absolute; left: 0px; top: 0px;";

var styleGameTableMeters = "width: 70px; position: absolute; top: 70%;";
var styleBubble1 = "position: absolute; left: 5%; background-image: url('images/bubble.png'); background-repeat: no-repeat; background-position: 3px 0px; width: 125px; height: 125px;  animation: animatedBubble1 5s linear;";
var styleBubble2 = "position: absolute; left: 50%; background-image: url('images/bubble.png'); background-repeat: no-repeat; background-position: -133px 0px; width: 125px; height: 125px; animation: animatedBubble2 7s linear ;";
var styleBubble3 = "position: absolute; left: 20%; background-image: url('images/bubble.png'); background-repeat: no-repeat; background-position: 3px -125px; width: 125px; height: 125px; animation: animatedBubble3 10s linear ;";
var styleBubble4 = "position: absolute; left: 60%; background-image: url('images/bubble.png'); background-repeat: no-repeat; background-position: -133px -125px; width: 125px; height: 125px; animation: animatedBubble4 12s linear ;";
var styleCursor = "position: absolute; left:  16%;; top: 190px; overflow: hidden; opacity: 1; -webkit-animation: pulsing 2s infinite;  animation: pulsing 2s infinite;";
var styleCursorPress = "position: absolute; left:  16%;; top: 190px; overflow: hidden; opacity: 1; -webkit-animation: pulsing2 2s infinite;  animation: pulsing2 2s infinite;";
var styleCursorText = "position: absolute; left:  6%;; top: 110px; overflow: hidden; opacity: 1; -webkit-animation: pulsing2 2s infinite;  animation: pulsing2 2s infinite;";
var styleMessage = "position: inherit; opacity: 0; animation: hide 1s linear;";

var styleLogoSlide3 = "position: absolute; top: -50px;";

//Conten slide 1
var srcBackground = "images/Banner-vertical.png";
var srcBackground2 = "images/top-right.png";
var srcTextNewGame = "images/text-new-game.png";
var srcLogoRastishka = "images/icon.png";
var srcLogoBig = "images/logo-big.png";

//Conten slide 3
var srcTextThirdSlide = "images/text-slide-3.png";
var srcBtnThirdSlide = "images/button-slide-3.png";
var srcLogoSmall = "images/logo-small.png";

var DOM_Background = document.createElement("img");
var DOM_Background2 = document.createElement("img");
var DOM_TextNewGame = document.createElement("img");
var DOM_TextSecondSlide = document.createElement("img");
var DOM_BtnSecondSlide = document.createElement("img");
var DOM_LogoRastishka = document.createElement("img");
var DOM_LogoRastishkaSlide3 = document.createElement("img");
var DOM_LogoBig = document.createElement("img");
var DOM_LogoSmall = document.createElement("img");
var DOM_IconApp = document.createElement("img");
var DOM_IconsMarkets = document.createElement("img");
var startTimerslideOne;


//Content slide 2
var srcDino = "images/Dino_1.gif";
var srcDinoStop = "images/dino.png";
var DOM_Dino = document.createElement("img");
var DOM_Dino_Stop = document.createElement("img");
var srcGameLayer1 = "images/bg-2.png";
var srcGameLayer2 = "images/game-layer-2.png";
var srcGameLayer3 = "images/game-layer-3.png";
var srcGameLayer4 = "images/game-layer-4.png";
var srcGameLayer5 = "images/game-layer-5.png";
var srcGameLayer6 = "images/game-layer-6.png";
var srcCounterMeter = "images/counter-meters.png";
var srcCounterEnergy = "images/counter-energy-100.png";
var srcCounterEnergyFull = "images/counter-energy-0.png";
var srcCursor = "images/cursor.png";
var srcCursorPress = "images/cursor-press.png";
var srcCursorText = "images/n.png";
var srcMessageSk = "images/sk.png";
var srcMessageM = "images/m.png";
var srcMessageS = "images/s.png";
var srcMessageC = "images/c.png";

var DOM_GameLayer1 = document.createElement("img");
var DOM_GameLayer2 = document.createElement("div");
var DOM_GameLayer3 = document.createElement("div");
var DOM_GameLayer4 = document.createElement("div");
var DOM_GameLayer5 = document.createElement("div");
var DOM_GameLayer6 = document.createElement("div");
var DOM_GameMetersCount = document.createElement("p");
var DOM_GameEnergyCount = document.createElement("p");
var DOM_Bubble1 = document.createElement("div");
var DOM_Bubble2 = document.createElement("div");
var DOM_Bubble3 = document.createElement("div");
var DOM_Bubble4 = document.createElement("div");
var DOM_cursor = document.createElement("img");
var DOM_cursor_press = document.createElement("img");
var DOM_cursor_text = document.createElement("img");


var DOM_messageC = document.createElement("img");
var DOM_messageM = document.createElement("img");
var DOM_messageS = document.createElement("img");
var DOM_messageSk = document.createElement("img");


//Counters
var DOM_CounterMeter = document.createElement("div");
var DOM_CounterEnergy = document.createElement("div");
var DOM_CounterEnergyFull = document.createElement("div");
var DOM_CounterMeterImg = document.createElement("img");
var DOM_CounterEnergyImg = document.createElement("img");
var DOM_CounterEnergyImgFull = document.createElement("img");

DOM_Dino.src = srcDino;
DOM_Dino.style.cssText = styleDino;

DOM_Dino_Stop.src = srcDinoStop;
DOM_Dino_Stop.style.cssText = styleDinoStop;

DOM_GameLayer1.src = srcGameLayer1;
DOM_GameLayer1.style.cssText = styleBanner;
DOM_GameLayer2.id = "animatedBackground2";
DOM_GameLayer3.id = "animatedBackground3";
DOM_GameLayer4.id = "animatedBackground4";
DOM_GameLayer5.id = "animatedBackground5";
DOM_GameLayer6.id = "animatedBackground6";

DOM_CounterMeter.style.cssText = styleCounterMeter;
DOM_CounterMeter.appendChild(DOM_GameMetersCount);
DOM_CounterMeterImg.src = srcCounterMeter;
DOM_CounterMeterImg.style.cssText = styleCounterMeterImg;

DOM_CounterEnergy.style.cssText = styleCounterEnergy;
DOM_CounterEnergy.appendChild(DOM_GameEnergyCount);
DOM_CounterEnergyImg.src = srcCounterEnergy;
DOM_CounterEnergyImg.style.cssText = styleCounterEnergyImg;

DOM_CounterEnergyFull.style.cssText = styleCounterEnergyFull;
DOM_CounterEnergyFull.appendChild(DOM_CounterEnergyImgFull);
DOM_CounterEnergyImgFull.src = srcCounterEnergyFull;
DOM_CounterEnergyImgFull.style.cssText = styleCounterEnergyImgFull;

DOM_Bubble1.style.cssText = styleBubble1;
DOM_Bubble2.style.cssText = styleBubble2;
DOM_Bubble3.style.cssText = styleBubble3;
DOM_Bubble4.style.cssText = styleBubble4;

DOM_messageC.src = srcMessageC;
DOM_messageC.style.cssText = styleMessage;
DOM_messageM.src = srcMessageM;
DOM_messageM.style.cssText = styleMessage;
DOM_messageS.src = srcMessageS;
DOM_messageS.style.cssText = styleMessage;
DOM_messageSk.src = srcMessageSk;
DOM_messageSk.style.cssText = styleMessage;

DOM_cursor.src = srcCursor;
DOM_cursor.style.cssText = styleCursor;
DOM_cursor_press.src = srcCursorPress;
DOM_cursor_press.style.cssText = styleCursorPress;
DOM_cursor_text.src = srcCursorText;
DOM_cursor_text.style.cssText = styleCursorText;


//Start Slide One------------------------------------------------------------
function startSlideOne() {

	DOM_Background.src = srcBackground;
	DOM_Background.style.cssText = styleBanner;

	DOM_Background2.src = srcBackground2;
	DOM_Background2.style.cssText = styleBanner;


	DOM_TextNewGame.src = srcTextNewGame;
	DOM_TextNewGame.style.cssText = styleBanner;


	DOM_LogoRastishka.src = srcLogoRastishka;
	DOM_LogoRastishka.style.cssText = styleBanner;

	DOM_LogoBig.src = srcLogoBig;
	DOM_LogoBig.style.cssText = styleBanner;

	DOM_mainContainer.appendChild(DOM_Background);
	DOM_mainContainer.appendChild(DOM_Background2);
	DOM_mainContainer.appendChild(DOM_TextNewGame);
	DOM_mainContainer.appendChild(DOM_LogoRastishka);
	DOM_mainContainer.appendChild(DOM_LogoBig);

	startTimerslideOne = setTimeout(endSlideOne, 3000);

};
//End First Slide------------------------------------------------------------


function endSlideOne() {
	clearTimeout(startTimerslideOne);
	console.log("endSlideOne");
	DOM_mainContainer.removeChild(DOM_Background);
	DOM_mainContainer.removeChild(DOM_TextNewGame);
	DOM_mainContainer.removeChild(DOM_LogoRastishka);

	startSlideTwo();
};

//Start Slide 2------------------------------------------------------------
function startSlideTwo() {
	count = 0;
	DOM_mainContainer.appendChild(DOM_GameLayer1);
	DOM_mainContainer.appendChild(DOM_GameLayer2);
	DOM_mainContainer.appendChild(DOM_GameLayer3);
	DOM_mainContainer.appendChild(DOM_Dino);
	DOM_mainContainer.appendChild(DOM_Dino_Stop);
	DOM_mainContainer.appendChild(DOM_Bubble1);
	DOM_mainContainer.appendChild(DOM_Bubble2);
	DOM_mainContainer.appendChild(DOM_Bubble3);
	DOM_mainContainer.appendChild(DOM_Bubble4);
	DOM_mainContainer.appendChild(DOM_CounterMeterImg);
	DOM_mainContainer.appendChild(DOM_CounterMeter);
	DOM_mainContainer.appendChild(DOM_CounterEnergyImg);
	DOM_mainContainer.appendChild(DOM_CounterEnergyFull);
	DOM_mainContainer.appendChild(DOM_CounterEnergy);

	initGameSlide2();
}

function initGameSlide2() {
	//count = count + 10;

	start = Date.now(); // запомнить время начала

	timer = setInterval(function () {
		timePassed = timePassedBufer + Math.round(1.5 * (Date.now() - start) / 1000);
		timePassedGo = timePassedGoBufer + (1.5 * (Date.now() - start) / 1000);
		DOM_GameMetersCount.innerText = timePassed + "m";
		DOM_GameEnergyCount.innerText = Math.round((15 - timePassedGo) * 6) + "%";
		DOM_CounterEnergyFull.style.cssText = "width: " + Math.round(80 * ((15 - timePassedGo) * 6 / 100)) + "px; height:51px; position: absolute; left: 180px; top: 5px; overflow: hidden;";
		// Условие, если проценты меньше 0 то показываем финишный слайд.
		//DOM_GameMetersCount.innerText = "150m";
		if ((15 - timePassedGo) < 1) endSlideTwo();
		if ((15 - timePassedGo) < 1) clearInterval(timer);
		if (DOM_Bubble1.offsetTop >= 150 && !passBubble1) PauseSlide2();
		if (DOM_Bubble1.offsetTop >= 500) DOM_mainContainer.removeChild(DOM_Bubble1);
		if (DOM_Bubble2.offsetTop >= 500) DOM_mainContainer.removeChild(DOM_Bubble2);
		if (DOM_Bubble3.offsetTop >= 500) DOM_mainContainer.removeChild(DOM_Bubble3);
		if (DOM_Bubble4.offsetTop >= 500) DOM_mainContainer.removeChild(DOM_Bubble4);
	}, 20);
}
// Paused Slide 2
function PauseSlide2() {
	DOM_mainContainer.appendChild(DOM_cursor);
	DOM_mainContainer.appendChild(DOM_cursor_press);
	DOM_mainContainer.appendChild(DOM_cursor_text);
	timePassedBufer = timePassed;
	timePassedGoBufer = timePassedGo;
	DOM_GameLayer1.style.animationPlayState = "paused";
	DOM_GameLayer2.style.animationPlayState = "paused";
	DOM_GameLayer3.style.animationPlayState = "paused";
	DOM_GameLayer4.style.animationPlayState = "paused";
	DOM_GameLayer5.style.animationPlayState = "paused";
	DOM_GameLayer6.style.animationPlayState = "paused";
	DOM_Bubble1.style.animationPlayState = "paused";
	DOM_Bubble2.style.animationPlayState = "paused";
	DOM_Bubble3.style.animationPlayState = "paused";
	DOM_Bubble4.style.animationPlayState = "paused";
	DOM_Dino.style.cssText = "visibility: hidden;";
	DOM_Dino_Stop.style.cssText = "position: absolute; left: 0px; top: -20px; visibility: visible;";
	clearInterval(timer);
	DOM_Bubble1.addEventListener("mousedown", () => { continuationSlide2(); });
	DOM_cursor.addEventListener("mousedown", () => { continuationSlide2(); });
	DOM_cursor_press.addEventListener("mousedown", () => { continuationSlide2(); });
	DOM_cursor_text.addEventListener("mousedown", () => { continuationSlide2(); });
	DOM_Bubble1.addEventListener("touchstart", () => { continuationSlide2(); });
	DOM_cursor.addEventListener("touchstart", () => { continuationSlide2(); });
	DOM_cursor_press.addEventListener("touchstart", () => { continuationSlide2(); });
	DOM_cursor_text.addEventListener("touchstart", () => { continuationSlide2(); });
};

// Paused Slide 2
function continuationSlide2() {
	//initGameSlide2();
	passBubble1 = true;
	DOM_GameLayer1.style.animationPlayState = "running";
	DOM_GameLayer2.style.animationPlayState = "running";
	DOM_GameLayer3.style.animationPlayState = "running";
	DOM_GameLayer4.style.animationPlayState = "running";
	DOM_GameLayer5.style.animationPlayState = "running";
	DOM_GameLayer6.style.animationPlayState = "running";
	DOM_Bubble1.style.backgroundImage = "none";
	DOM_Bubble1.appendChild(DOM_messageS);
	DOM_mainContainer.removeChild(DOM_cursor);
	DOM_mainContainer.removeChild(DOM_cursor_press);
	DOM_mainContainer.removeChild(DOM_cursor_text);
	DOM_Bubble1.style.animationPlayState = "running";
	DOM_Bubble2.style.animationPlayState = "running";
	DOM_Bubble3.style.animationPlayState = "running";
	DOM_Bubble4.style.animationPlayState = "running";
	DOM_Dino.style.cssText = styleDino;
	DOM_Dino_Stop.style.cssText = "visibility: hidden;";

	DOM_Bubble2.addEventListener("mousedown", () => {
		DOM_Bubble2.style.backgroundImage = "none";
		DOM_Bubble2.appendChild(DOM_messageM)
	});
	DOM_Bubble3.addEventListener("mousedown", () => {
		DOM_Bubble3.style.backgroundImage = "none";
		DOM_Bubble3.appendChild(DOM_messageSk)
	});
	DOM_Bubble4.addEventListener("mousedown", () => {
		DOM_Bubble4.style.backgroundImage = "none";
		DOM_Bubble4.appendChild(DOM_messageC)
	});

	DOM_Bubble2.addEventListener("touchstart", () => {
		DOM_Bubble2.style.backgroundImage = "none";
		DOM_Bubble2.appendChild(DOM_messageM)
	});
	DOM_Bubble3.addEventListener("touchstart", () => {
		DOM_Bubble3.style.backgroundImage = "none";
		DOM_Bubble3.appendChild(DOM_messageSk)
	});
	DOM_Bubble4.addEventListener("touchstart", () => {
		DOM_Bubble4.style.backgroundImage = "none";
		DOM_Bubble4.appendChild(DOM_messageC)
	});

	initGameSlide2();
};


function endSlideTwo() {
	DOM_mainContainer.removeChild(DOM_GameLayer1);
	DOM_mainContainer.removeChild(DOM_GameLayer2);
	DOM_mainContainer.removeChild(DOM_GameLayer3);
	//DOM_mainContainer.removeChild(DOM_GameLayer4);
	//DOM_mainContainer.removeChild(DOM_GameLayer5);
	DOM_mainContainer.removeChild(DOM_CounterMeterImg);
	DOM_mainContainer.removeChild(DOM_CounterMeter);
	DOM_mainContainer.removeChild(DOM_CounterEnergyImg);
	DOM_mainContainer.removeChild(DOM_CounterEnergyFull);
	DOM_mainContainer.removeChild(DOM_CounterEnergy);
	DOM_mainContainer.removeChild(DOM_Dino);
	DOM_mainContainer.removeChild(DOM_Dino_Stop);
	//DOM_mainContainer.removeChild(DOM_GameLayer6);
	startSlideThree();
};
//End Slide 2-------------------------------------------------------------

//Start Slide 3------------------------------------------------------------
function startSlideThree() {
	DOM_Background.src = srcBackground;
	DOM_Background.style.cssText = styleBanner;

	DOM_Background2.src = srcBackground2;
	DOM_Background2.style.cssText = styleBanner;

	DOM_TextSecondSlide.src = srcTextThirdSlide;
	DOM_TextSecondSlide.style.cssText = styleBanner;

	DOM_BtnSecondSlide.src = srcBtnThirdSlide;
	DOM_BtnSecondSlide.style.cssText = styleBanner;

	DOM_LogoSmall.src = srcLogoSmall;
	DOM_LogoSmall.style.cssText = styleBanner;

	DOM_LogoRastishkaSlide3.src = srcLogoRastishka;
	DOM_LogoRastishkaSlide3.style.cssText = styleLogoSlide3;

	DOM_mainContainer.appendChild(DOM_Background);
	DOM_mainContainer.appendChild(DOM_Background2);
	DOM_mainContainer.appendChild(DOM_TextSecondSlide);
	DOM_mainContainer.appendChild(DOM_BtnSecondSlide);
	DOM_mainContainer.appendChild(DOM_LogoSmall);
	DOM_mainContainer.appendChild(DOM_LogoRastishkaSlide3);
	//DOM_mainContainer.appendChild(DOM_IconsMarkets);
	startAnime3();
};



//Step by step run app
startSlideOne();

var RAF = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function (callback) { window.setTimeout(callback, 1000 / 60); }
	;

var DOM_IconApp_Position = {
	posY: -500,
	speedY: 10,
	update: function () {
		DOM_LogoRastishka.style.top = this.posY + "px";
		DOM_LogoRastishka.style.opacity = this.opacity;
	}
};

var DOM_TextNewGame_Position = {
	posY: 600,
	speedY: 15,
	opacity: 0,
	update: function () {
		DOM_TextNewGame.style.top = this.posY + "px";
		DOM_TextNewGame.style.opacity = this.opacity;
	}
}

var DOM_BtnSecondSlide_Position = {
	posY: -500,
	speedY: 20,
	update: function () {
		DOM_TextSecondSlide.style.top = this.posY + "px";
		DOM_TextSecondSlide.style.opacity = this.opacity;
	}
};

var DOM_TextSecondSlide_Position = {
	posY: 600,
	speedY: 10,
	opacity: 0,
	update: function () {
		DOM_BtnSecondSlide.style.top = this.posY + "px";
		DOM_BtnSecondSlide.style.opacity = this.opacity;
	}
}

startAnime();

function startAnime() {
	RAF(tick);
};

function tick() {
	DOM_IconApp_Position.posY += DOM_IconApp_Position.speedY;
	DOM_IconApp_Position.opacity += 0.016;
	if (DOM_IconApp_Position.posY >= 0) DOM_IconApp_Position.posY = 0;
	if (DOM_IconApp_Position.opacity >= 1) DOM_IconApp_Position.opacity = 1;
	DOM_IconApp_Position.update();

	DOM_TextNewGame_Position.posY -= DOM_TextNewGame_Position.speedY;
	DOM_TextNewGame_Position.opacity += 0.017;
	if (DOM_TextNewGame_Position.posY <= 0) DOM_TextNewGame_Position.posY = 0;
	if (DOM_TextNewGame_Position.opacity >= 1) DOM_TextNewGame_Position.opacity = 1;
	DOM_TextNewGame_Position.update();

	RAF(tick);
};

DOM_IconApp_Position.update();


function startAnime3() {
	RAF(tick3);
}

function tick3() {
	DOM_BtnSecondSlide_Position.posY += DOM_BtnSecondSlide_Position.speedY;
	DOM_BtnSecondSlide_Position.opacity += 0.016;
	if (DOM_BtnSecondSlide_Position.posY >= 10) DOM_BtnSecondSlide_Position.posY = 10;
	if (DOM_BtnSecondSlide_Position.opacity >= 1) DOM_BtnSecondSlide_Position.opacity = 1;
	DOM_BtnSecondSlide_Position.update();

	DOM_TextSecondSlide_Position.posY -= DOM_TextSecondSlide_Position.speedY;
	DOM_TextSecondSlide_Position.opacity += 0.017;
	if (DOM_TextSecondSlide_Position.posY <= 0) DOM_TextSecondSlide_Position.posY = 0;
	if (DOM_TextSecondSlide_Position.opacity >= 1) DOM_TextSecondSlide_Position.opacity = 1;
	DOM_TextSecondSlide_Position.update();

	RAF(tick3);
}

//startSlideThree();
//startAnime3();



/*admixAPI.on('load', function () {
	admixAPI.init({
		'resize': [
			{
				'name': 'state-1',
				'width': '650px',
				'height': '250px'
			}
		]
	});
	function $(id) {
		return document.getElementById(id);
	}

	DOM_BtnSecondSlide.onclick = function(){
		admixAPI.click('https://rastishka.ar.team/app/');
	};
	/*document.body.onselectstart = function() {
		return false;
	}
});*/