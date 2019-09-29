var canvas = document.getElementById("canvas");
var ctx    = canvas.getContext("2d");
var canResize = false;


//resize canvas maintaining aspect ratio
function resizeCanvas() {               //heights/widths lower than 230/290 are too small to resize well
	if (canResize && window.innerHeight >= 230 && window.innerWidth >= 290) {
		var windowWidth     = window.innerWidth;
		var windowHeight    = window.innerHeight;
		var padding         = 20;
		var buttonRowHeight = 30
		var border          = 1;
		var gameElemStyle   = document.getElementById("game").style
		var possibleWidth   = windowWidth - padding * 2;
		var possibleHeight  = windowHeight - padding * 2;
		
		if (possibleWidth * (3/4) <= possibleHeight) {
			var newWidth    = possibleWidth;
			var newHeight   = possibleWidth * (3/4);
		}
		else {
			var newHeight    = possibleHeight;
			var newWidth     = possibleHeight * (4/3);
		}
		
		gameElemStyle.width  = (newWidth).toString();
		canvas.style.width   = (newWidth - border*2).toString();
		
		gameElemStyle.height = (newHeight).toString();
		canvas.style.height  = (newHeight - buttonRowHeight - border*2).toString();
		
		
		console.log("resized the canvas");
		console.groupCollapsed("new dimensions:");
		console.info("canvas width: " + canvas.style.width);
		console.info("canvas height: " + canvas.style.height);
		console.groupEnd();
	}
}
window.onresize = resizeCanvas;


//fullscreen game
function fullscreenGame() {
	canResize = true;
	
	//change button attributes
	var fbutton = document.getElementById("button");
	fbutton.src = "images/minimizeButton.png";
	fbutton.alt = "minimize button";
	fbutton.title = "minimize";
	fbutton.setAttribute("onclick", "minimize()");
	
	//hide other elements
	document.getElementById("title").style.display = "none";
	document.getElementById("about").style.display = "none";
	
	//fullscreen the browser
	var doc = document.documentElement;
	if (doc.requestFullscreen) {
	  doc.requestFullscreen();
	} else if (doc.msRequestFullscreen) {
	  doc.msRequestFullscreen();
	} else if (doc.mozRequestFullScreen) {
	  doc.mozRequestFullScreen();
	} else if (doc.webkitRequestFullscreen) {
	  doc.webkitRequestFullscreen();
	}
	
	//remove body border
	document.getElementsByTagName("body")[0].style.width = "auto";
}


function minimize() {
	canResize = false;
	
	//change button attributes
	var fbutton = document.getElementById("button");
	fbutton.src = "images/fullscreenButton.png";
	fbutton.alt = "fullscreen button";
	fbutton.title = "fullscreen"
	fbutton.setAttribute("onclick", "fullscreenGame()");
	
	//show other elements
	document.getElementById("title").style.display = "initial";
	document.getElementById("about").style.display = "initial";
	
	//unfullscreen the browser
	if (document.exitFullscreen) {
	  document.exitFullscreen();
	} else if (document.msExitFullscreen) {
	  document.msExitFullscreen();
	} else if (document.mozCancelFullScreen) {
	  document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) {
	  document.webkitExitFullscreen();
	}
	
	//restore body border
	var body = document.getElementsByTagName("body")[0];
	body.removeAttribute("style");
	
	//reset canvas and #game size
	var gameElem = document.getElementById("game");
	canvas.removeAttribute("style");
	gameElem.removeAttribute("style");
}