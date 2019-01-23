function red() {
	$(":header").addClass("redElements");
}
function fade() {
	$("#speakerHeading").fadeOut(1000);
}
$("#theRedButton").bind("click", red);
$("#theSpeakersButton").bind("click", fade);