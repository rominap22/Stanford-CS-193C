"use strict";
const IMAGE_HEIGHT = 600;
const IMAGE_WIDTH = 800;
const RIGHT_ARROW = "rightArrow.png";
const LEFT_ARROW = "leftArrow.png";
const arr = [
		{filename: "memchu.jpg",
		 caption: "Stanford Memorial Church - the church used to have an 80' bell tower, which fell in the 1906 earthquake."},
		{filename: "quad.jpg",
		 caption: "The Stanford Quad"},
		{filename: "hoop.jpg",
		 caption: "The <i>Red Hoop Fountain</i> with Green Library in the background."},
		{filename: "memorial-court.jpg",
		 caption: "Memorial Court (in the front of the Quad) with Rodin's <i>Burghers of Calais</i> statues."},
		{filename: "gates.jpg",
		 caption: "The Gates Building - home of Stanford Computer Science."},
		{filename: "stone-river.jpg",
		 caption: "The Stone River statue near the Cantor Arts Center (Stanford's own art museum)."},
];
var index = 0;
var right = false;
var left = false;
var gallery = document.getElementById('gallery');
var caption = document.getElementById("caption");
var rightOverlay = document.getElementById("rightOverlay");
var leftOverlay = document.getElementById("leftOverlay");

gallery.style.position = "absolute";
gallery.style.height = IMAGE_HEIGHT + "px";
gallery.style.width = IMAGE_WIDTH + "px";
caption.style.position = "absolute";
caption.style.bottom = "0px";
caption.style.width = IMAGE_WIDTH + "px";
rightOverlay.style.position = "absolute";
rightOverlay.style.right = "0px";
rightOverlay.style.top = "0px";
rightOverlay.style.height = IMAGE_HEIGHT + "px";
rightOverlay.style.width = IMAGE_WIDTH / 2 + "px";

rightOverlay.addEventListener("click", function() {
  index = (index + 1) % arr.length;
  document.getElementById('photo').src = arr[index].filename;
  document.getElementById("caption").innerHTML = arr[index].caption;
}, false);

rightOverlay.addEventListener("mouseover", function() {
  if (!right) {
    rightOverlay.innerHTML = '<img id="rightArrow" src="' + RIGHT_ARROW + '" alt="rightArrow" align="right">';
    right = true;
  }
}, false);

rightOverlay.addEventListener("mouseout", function() {
  right = false;
  rightOverlay.innerHTML = '';
}, false);

leftOverlay.style.position = "absolute";
leftOverlay.style.left = "0px";
leftOverlay.style.top = "0px";
leftOverlay.style.height = IMAGE_HEIGHT + "px";
leftOverlay.style.width = IMAGE_WIDTH / 2 + "px";

leftOverlay.addEventListener("click", function() { 
  index = (((index - 1) % arr.length) + arr.length) % arr.length;
  document.getElementById('photo').src = arr[index].filename;
  document.getElementById("caption").innerHTML = arr[index].caption;
}, false);

leftOverlay.addEventListener("mouseover", function() {
  if (!left) {
    leftOverlay.innerHTML = '<img id="leftArrow" src="' + LEFT_ARROW + '" alt="leftArrow" align="left">';
    left = true;
  }
}, false);

leftOverlay.addEventListener("mouseout", function() {
  left = false;
  leftOverlay.innerHTML = '';
}, false);

function resize() {
  gallery.style.top = ((window.innerHeight - IMAGE_HEIGHT) / 2) + "px";
  gallery.style.left = ((window.innerWidth - IMAGE_WIDTH) / 2) + "px";
}

window.addEventListener("load", resize, false);
window.addEventListener("resize", resize, false);