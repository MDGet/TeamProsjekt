var countOnClick = 0;
var square = ["", "", "", "", "", "", "", "", ""];
var appDiv = document.getElementById("appDiv");
show();

function show() {
  var html;
  html = ` <div id="hoved">
  <div id="square1" onclick="placeXorO(this)">${square[0]}</div>
  <div id="square2" onclick="placeXorO(this)">${square[1]}</div>
  <div id="square3" onclick="placeXorO(this)">${square[2]}</div>
  <div id="square4" onclick="placeXorO(this)">${square[3]}</div>
  <div id="square5" onclick="placeXorO(this)">${square[4]}</div>
  <div id="square6" onclick="placeXorO(this)">${square[5]}</div>
  <div id="square7" onclick="placeXorO(this)">${square[6]}</div>
  <div id="square8" onclick="placeXorO(this)">${square[7]}</div>
  <div id="square9" onclick="placeXorO(this)">${square[8]}</div>   
</div>`;
  appDiv.innerHTML = html;
}

function resetBoard() {
  square = ["", "", "", "", "", "", "", "", ""];
  countOnClick = 0;
  document.getElementById("feedback").innerHTML = "";
  show();
}

function placeXorO(squareNr) {
  var OorX = countOnClick % 2 == 0 ? "X" : "O";
  var id = squareNr.id;
  var nr = id.substr(6);
  var placeArray = nr - 1;
  if (square[placeArray] == "") {
    square[placeArray] = OorX;
    countOnClick++;
    document.getElementById("feedback").innerHTML = "";
  } else {
    document.getElementById("feedback").innerHTML = "Place taken, try again!";
  }
  show();
}