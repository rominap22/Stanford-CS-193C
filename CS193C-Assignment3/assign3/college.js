var colleges = new Array(
		{name: "Stanford", type: "private", sathigh: 1570, satlow: 1380, tuition: 44757},
		{name: "UC Berkeley", type: "public", sathigh: 1500, satlow: 1250, tuition: 13844},
		{name: "UC Santa Cruz", type: "public", sathigh: 1280, satlow: 1000, tuition: 13398},
		{name: "USF", type: "private", sathigh: 1270, satlow: 1070, tuition: 41450},
		{name: "SCU", type: "private", sathigh: 1380, satlow: 1190, tuition: 43812},
		{name: "Mills College", type: "private", sathigh: 1250, satlow: 1040, tuition: 42918}
		);


function updateTable() {
  var types = document.getElementsByName("type");
  var collegeType = "";
  for (var i = 0; i < types.length; i++) {
    if (types[i].checked) {
        collegeType = types[i].value;
        break;
    }
  }
  var satMax = Number.MAX_SAFE_INTEGER;
  var tuitionPrice = Number.MAX_SAFE_INTEGER;
  var satMin = -Number.MAX_SAFE_INTEGER;
  if (document.getElementById("textboxHigh").value != "") {
    satMax = document.getElementById("textboxHigh").value;
  } if (document.getElementById("textboxLow").value != "") {
    satMin = document.getElementById("textboxLow").value;
  } if (document.getElementById("textboxTuition").value != "") {
    tuitionPrice = document.getElementById("textboxTuition").value;
  }
  var newTable = "";
  var count = 0;
  for (var i = 0; i < colleges.length; i++) {
    var college = colleges[i];
    if ((college.type == collegeType || collegeType == "") && college.satlow >= satMin && college.sathigh <= satMax && college.tuition <= tuitionPrice) {
      if (count % 2 == 0) {
        newTable += "<tr><td>" + college.name + "</td><td>" + college.sathigh + "</td><td>" + college.satlow + "</td><td>" + college.tuition + "</td></tr>";
      } else {
        newTable += "<tr class=\"toColor\"><td>" + college.name + "</td><td>" + college.sathigh + "</td><td>" + college.satlow + "</td><td>" + college.tuition + "</td></tr>";
      }
      count++;
    }
  }
  document.getElementById("updatedTable").innerHTML = newTable;
}

document.getElementById("updateButton").addEventListener("click", updateTable, false);

document.addEventListener("DOMContentLoaded", function() {
  var newTable = "";
  var count = 0;
  for (var i = 0; i < colleges.length; i++) {
    var college = colleges[i];
    if (count % 2 == 0) {
      newTable += "<tr><td>" + college.name + "</td><td>" + college.sathigh + "</td><td>" + college.satlow + "</td><td>" + college.tuition + "</td></tr>";
    } else {
      newTable += "<tr class=\"toColor\"><td>" + college.name + "</td><td>" + college.sathigh + "</td><td>" + college.satlow + "</td><td>" + college.tuition + "</td></tr>";
    }
    count++;
  }
  document.getElementById("updatedTable").innerHTML = newTable;;
});