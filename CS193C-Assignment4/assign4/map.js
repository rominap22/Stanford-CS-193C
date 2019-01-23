const small = new Image();
small.src = "map-s.gif";
const medium = new Image();
medium.src = "map-m.gif";
const large = new Image();
large.src = "map-l.gif";
const xlarge = new Image();
xlarge.src = "map-xl.gif";
const IMAGES = [small, medium, large, xlarge];
const LOCATIONS = new Array({
    names: ["Gates"], x: 1558, y: 1461}, 
	{
    names: ["MemChu", "Memorial Church"], x: 1845, y: 1883}, 
	{
    names: ["Tresidder Union", "Tresidder"], x: 1804, y: 2225}, 
	{
    names: ["Florence Moore Hall", "Florence Moore", "FloMo"], x: 1705, y: 2496}, 
	{
    names: ["Bookstore", "Book Store"], x: 2022, y: 2144}, 
	{
    names: ["MemAud", "Memorial Auditorium", "Memorial Hall"], x: 2262, y: 1600}, 
	{
    names: ["Green Library", "Green"], x: 2173, y: 1898}, 
	{
    names: ["Meyer Library", "Meyer"], x: 2157, y: 2026}
);
const MARGIN = 100;
const BORDER_THICKNESS = 15;
var index = 0;
var mapFrame = document.getElementById("mapFrame");
var map = document.getElementById("map");
var controlPanel = document.getElementById("controlPanel");
var searchBox = document.getElementById("search");
mapFrame.style.position = "absolute";
controlPanel.style.position = "absolute";

function resize() {
    mapFrame.style.width = window.innerWidth - 2 * MARGIN + "px";
    mapFrame.style.height = window.innerHeight - MARGIN + "px";
    mapFrame.style.left = MARGIN / 4 + "px";
    mapFrame.style.top = MARGIN / 2 + "px";
    controlPanel.style.width = MARGIN + "px";
    controlPanel.style.right = MARGIN / 8 + "px";
    controlPanel.style.top = MARGIN + "px";
}

function center(event) {
    if (event.clientX >= MARGIN / 4 + BORDER_THICKNESS && event.clientX <= MARGIN / 4 + 10 + parseFloat(mapFrame.style.width) &&
        event.clientY >= MARGIN / 2 + BORDER_THICKNESS && event.clientY <= MARGIN / 2 + 10 + parseFloat(mapFrame.style.height)) {
        setPosition(event.clientX, event.clientY);
    }
}

function zoom(event) {
    var previousX = parseFloat(window.getComputedStyle(map).getPropertyValue("left")) - parseFloat(mapFrame.style.width) / 2;
    var previousY = parseFloat(window.getComputedStyle(map).getPropertyValue("top")) - parseFloat(mapFrame.style.height) / 2;
    var previousWidth = IMAGES[index].width;
    var previousHeight = IMAGES[index].height;
    if (event.target.id == "zoomIn" && index < IMAGES.length - 1) {
        index++;
    } else if (event.target.id == "zoomOut" && index > 0) {
        index--;
    } else {
        return;
    }
    map.style.left = parseFloat(mapFrame.style.width) / 2 + IMAGES[index].width * previousX / previousWidth + "px";
    map.style.top = parseFloat(mapFrame.style.height) / 2 + IMAGES[index].height * previousY / previousHeight + "px";
    map.src = IMAGES[index].src;
}

function move(event) {
    width = 1;
    height = 1;
    var endWidth = parseFloat(mapFrame.style.width) / 2;
    var endHeight = parseFloat(mapFrame.style.height) / 2;
    var loop = setInterval(function() {
        if (width > endWidth || height > endHeight) {
            clearInterval(loop);
            return;
        } else {
            if (event.target.id == "east") {
                map.style.left = parseFloat(window.getComputedStyle(map).getPropertyValue("left")) - 1 + "px";
                width++;
            } else if (event.target.id == "west") {
                map.style.left = parseFloat(window.getComputedStyle(map).getPropertyValue("left")) + 1 + "px";
                width++;
            } else if (event.target.id == "north") {
                map.style.top = parseFloat(window.getComputedStyle(map).getPropertyValue("top")) + 1 + "px";
                height++;
            } else if (event.target.id = "south") {
                map.style.top = parseFloat(window.getComputedStyle(map).getPropertyValue("top")) - 1 + "px";
                height++;
            }
        }
    }, 1);
}

document.getElementById("map").ondragstart = function() {
    return false;
};

function drag(event) {
    var initialX = parseFloat(window.getComputedStyle(map).getPropertyValue("left"));
    var initialY = parseFloat(window.getComputedStyle(map).getPropertyValue("top"));
    var mouseDownX = event.clientX;
    var mouseDownY = event.clientY;

    function dragMap(event) {
        document.getElementById("mapFrame").style.cursor = "move";
        map.style.left = initialX + event.clientX - mouseDownX + "px";
        map.style.top = initialY + event.clientY - mouseDownY + "px";
    }

    function dropMap(event) {
        document.getElementById("mapFrame").style.cursor = "default";
        document.removeEventListener("mousemove", dragMap, false);
        document.removeEventListener("mouseup", dropMap, false);
    }
    if (mouseDownX >= MARGIN / 4 + BORDER_THICKNESS && mouseDownX <= MARGIN / 4 + 10 + parseFloat(mapFrame.style.width) &&
        mouseDownY >= MARGIN / 2 + BORDER_THICKNESS && mouseDownY <= MARGIN / 2 + 10 + parseFloat(mapFrame.style.height)) {
        document.addEventListener("mouseup", dropMap, false);
        document.addEventListener("mousemove", dragMap, false);
    }
}

function setPosition(posX, posY) {
    var centerOfFrameX = MARGIN / 4 + BORDER_THICKNESS + parseFloat(mapFrame.style.width) / 2;
    var centerOfFrameY = MARGIN / 2 + BORDER_THICKNESS + parseFloat(mapFrame.style.height) / 2;
    var endX = centerOfFrameX - posX;
    var endY = centerOfFrameY - posY;
    var countX = 1;
    var countY = 1;
    var loop = setInterval(function() {
        if (countX > Math.abs(endX) && countY > Math.abs(endY)) {
            clearInterval(loop);
            return;
        } else {
            if (endX > 0 && countX < Math.abs(endX)) {
                map.style.left = parseFloat(window.getComputedStyle(map).getPropertyValue("left")) + 1 + "px";
                countX++;
            } else if (endX < 0 && countX < Math.abs(endX)) {
                map.style.left = parseFloat(window.getComputedStyle(map).getPropertyValue("left")) - 1 + "px";
                countX++;
            } else if (endX == 0) {
                clearInterval(loop);
                return;
            }
            if (endY > 0 && countY < Math.abs(endY)) {
                map.style.top = parseFloat(window.getComputedStyle(map).getPropertyValue("top")) + 1 + "px";
                countY++;
            } else if (endY < 0 && countY < Math.abs(endY)) {
                map.style.top = parseFloat(window.getComputedStyle(map).getPropertyValue("top")) - 1 + "px";
                countY++;
            } else if (endY == 0) {
                clearInterval(loop);
                return;
            }
        }
    }, 1);
}
searchBox.addEventListener("click", function() {searchBox.value = "";}, false);

function search() {
    var place = searchBox.value;
    for (var i = 0; i < LOCATIONS.length; i++) {
        for (var j = 0; j < LOCATIONS[i].names.length; j++) {
            if (place.toLowerCase() == LOCATIONS[i].names[j].toLowerCase()) {
                setPosition(LOCATIONS[i].x * IMAGES[index].width / IMAGES[3].width +
                    parseFloat(window.getComputedStyle(map).getPropertyValue("left")) +
                    MARGIN / 4 + BORDER_THICKNESS,
                    LOCATIONS[i].y * IMAGES[index].height / IMAGES[3].height +
                    parseFloat(window.getComputedStyle(map).getPropertyValue("top")) +
                    MARGIN / 2 + BORDER_THICKNESS
                );
                return;
            }
        }
    }
    searchBox.value = "Place not found.";
}

window.addEventListener("load", resize, false);
window.addEventListener("resize", resize, false);
document.addEventListener("mousedown", drag, false);
document.getElementById("zoomIn").addEventListener("click", zoom, false);
document.getElementById("zoomOut").addEventListener("click", zoom, false);
document.getElementById("north").addEventListener("click", move, false);
document.getElementById("east").addEventListener("click", move, false);
document.getElementById("west").addEventListener("click", move, false);
document.getElementById("south").addEventListener("click", move, false);
document.addEventListener("dblclick", center, false);
document.getElementById("find").addEventListener("click", search, false);