/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
var hamburger = document.querySelector("nav>button");
var header = document.getElementsByTagName("header")[0];
var hamburgerButton = document.querySelector("nav>button");
var nav = document.querySelector("body>header>div>nav>ul");
var search = document.querySelector("body>header>div>div");
var div = document.querySelector("body>div");
var footer = document.querySelector("body>footer");
var h1 = document.querySelector("body>header>h1");
var p = document.querySelector("body>header>div:nth-of-type(2)>p");
var body = document.getElementsByTagName("body")[0];
var articles = [].slice.call(document.querySelectorAll("body>div>section>article"));
var asideArticles = [].slice.call(document.querySelectorAll("body>div>aside>section>article"));
var scroll1;
var scroll2;

header.classList.remove("nojs");
h1.classList.add("invisibleFade");
h1.classList.add("invisible");
p.classList.add("invisible");
nav.classList.add("invisible");
search.classList.add("invisible");

// In- en uitvouwen articles
 
function toggleClosed(indexNumber){
	articles[indexNumber].classList.toggle("closed");
}

// Section

for (var i=0; i<articles.length; i++){
	articles[i].classList.add("closed");
}

articles[0].addEventListener("click", function(){
	articles[0].classList.toggle("closed");
});

articles[1].addEventListener("click", function(){
	toggleClosed(1);
});

articles[2].addEventListener("click", function(){
	toggleClosed(2);
});

if (articles[3]){
	articles[3].addEventListener("click", function(){
		toggleClosed(3);
	});
}

if (articles[4]){
	articles[4].addEventListener("click", function(){
			toggleClosed(4);
	});
}

// Aside

for (var i=0; i<asideArticles.length; i++){
	asideArticles[i].classList.add("closed");
}

asideArticles[0].addEventListener("click", function(){
	asideArticles[0].classList.toggle("closed");
});

asideArticles[1].addEventListener("click", function(){
	asideArticles[1].classList.toggle("closed");
});

asideArticles[2].addEventListener("click", function(){
	asideArticles[2].classList.toggle("closed");
});

asideArticles[3].addEventListener("click", function(){
	asideArticles[3].classList.toggle("closed");
});

asideArticles[4].addEventListener("click", function(){
	asideArticles[4].classList.toggle("closed");
});

asideArticles[5].addEventListener("click", function(){
	asideArticles[5].classList.toggle("closed");
});

asideArticles[6].addEventListener("click", function(){
	asideArticles[6].classList.toggle("closed");
});

asideArticles[7].addEventListener("click", function(){
	asideArticles[7].classList.toggle("closed");
});

// Hamburger
hamburger.addEventListener("click", function(){
	if ((!hamburger.classList.contains("hamburgerActive")) && (!hamburger.classList.contains("hamburgerNotActive"))){
		hamburger.classList.add("hamburgerNotActive");
	}
	hamburger.classList.toggle("hamburgerActive");
	hamburger.classList.toggle("hamburgerNotActive");
	header.classList.toggle("hamburgerActive");
	body.classList.toggle("hamburgerActive");
	nav.classList.toggle("invisible");
	p.classList.toggle("invisible");
	div.classList.toggle("hamburgerActive");
	footer.classList.toggle("hamburgerActive");
	h1.classList.remove("invisible");
	h1.classList.toggle("invisibleFade");
	search.classList.toggle("invisible");
	if (hamburger.classList.contains("hamburgerActive")){
		header.style.marginTop = 0;
	}
});
 
setInterval(function(){
	scroll1 = body.scrollTop;
	setTimeout(function(){
		scroll2 = body.scrollTop;
	}, 0.1);
	if (scroll1>scroll2){
			if (body.scrollTop>64){
				header.classList.add("scrollDown");
			} else {
				for (var i=0; i<=64; i++){
					if (body.scrollTop == i){
						header.style.marginTop = -i + "px";
					}
				}
			}
		} else if (scroll1<scroll2){
			header.classList.remove("scrollDown");
			header.style.marginTop = "0";
		}
}, 0.2);

// function displaywheel(e){
//     var evt=window.event || e; //equalize event object
//     var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta; //check for detail first so Opera uses that instead of wheelDelta
//     // document.getElementById("wheelvalue").innerHTML=delta //delta returns +120 when wheel is scrolled up, -120 when down

// 	if (!header.classList.contains("hamburgerActive")){
// 		if (delta<0){
// 			if (body.scrollTop>64){
// 				header.classList.add("scrollDown");
// 			} else {
// 				for (var i=0; i<=64; i++){
// 					if (body.scrollTop == i){
// 						console.log(i);
// 						header.style.marginTop = -i + "px";
// 					}
// 				}
// 			}
// 		} else if (delta>0){
// 			header.classList.remove("scrollDown");
// 			header.style.marginTop = "0";
// 		}
//     }
// }

// var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel"; //FF doesn't recognize mousewheel as of FF3.x
 
// if (document.attachEvent){ //if IE (and Opera depending on user setting)
//     document.attachEvent("on"+mousewheelevt, displaywheel);
// } else if (document.addEventListener){ //WC3 browsers
//     document.addEventListener(mousewheelevt, displaywheel, false);
// }

// Bron scrollen: http://www.javascriptkit.com/javatutors/onmousewheel.shtml

