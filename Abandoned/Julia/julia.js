console.log("I'm loaded");

const numOfPhotos = 10;
var photoNum = 0;


//fullscreen game
function fullscreenGallery() {
	//change button attributes
	var galleryButton = document.getElementById("fullscreenButton");
	galleryButton.src = "images/minimizeButton.png";
	galleryButton.alt = "minimize button";
	galleryButton.title = "minimize";
	galleryButton.setAttribute("onclick", "minimizeGallery()");
	
	//hide other elements
	document.getElementsByTagName("content")[0].style.display = "none";
	document.getElementById("heading").style.display = "none";
	
	//resize gallery cell
	document.getElementById("gallery").style.width  = "100%";
	document.getElementById("gallery").style.height = "100%";
	document.getElementsByTagName("header")[0].style.height = "100%";
	document.getElementsByTagName("header")[0].style.padding = "0px";
	
	//show photo selection buttons
	document.getElementsByClassName("photoButton")[0].style.display = "initial";
	document.getElementsByClassName("photoButton")[1].style.display = "initial";
	
	//end slideshow and hide all photos apart from first one
	for (photo of document.getElementsByClassName("photo")) {
		//end slideshow
		photo.style.animationDuration = "0s";
		
		//hide all photos apart from first one
		if (photo.id[5] != photoNum) {
			photo.style.opacity = 0;
		}
	}
}


function minimizeGallery() {	
	//change button attributes
	var galleryButton = document.getElementById("fullscreenButton");
	galleryButton.src = "images/fullscreenButton.png";
	galleryButton.alt = "fullscreen button";
	galleryButton.title = "fullscreen"
	galleryButton.setAttribute("onclick", "fullscreenGallery()");

	//undo style changes
	document.getElementsByTagName("content")[0].removeAttribute("style");
	document.getElementById("heading").removeAttribute("style");
	document.getElementById("gallery").removeAttribute("style");
	document.getElementsByTagName("header")[0].removeAttribute("style");
	
	//hide photo selection buttons
	document.getElementsByClassName("photoButton")[0].removeAttribute("style");
	document.getElementsByClassName("photoButton")[1].removeAttribute("style");
}


function nextPhoto() {
	//advance photo
	document.getElementById("photo" + photoNum).style.opacity = 0;
	if (photoNum + 1 <= numOfPhotos - 1) {
		photoNum++;
	}
	else {
		photoNum = 0;
	}
	document.getElementById("photo" + photoNum).style.opacity = 1;
	
	console.log("Advanced photo");
	console.info("photo number " + photoNum);
}


function lastPhoto() {
	//retrace photo
	document.getElementById("photo" + photoNum).style.opacity = 0;
	if (photoNum - 1 >= 0) {
		photoNum--;
	}
	else {
		photoNum = numOfPhotos - 1;
	}
	document.getElementById("photo" + photoNum).style.opacity = 1;
	
	console.log("Retraced photo");
	console.info("photo number " + photoNum);
}