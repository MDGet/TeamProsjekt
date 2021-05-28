//modell
const app = document.getElementById("app");
let array = ["","","","","","",""]

//view
function updateView(){
    let html;
    html=`
    <div id="story">
    
    <button id="lisa"   onclick="setArray0('Lisa')">Lisa</button>
    <button id="skolen" onclick="setArray1('Skolen')">Skolen</button>
    <button id="kjolen" onclick="setArray2('Kjolen')">Kjolen</button>
    <button id="per"    onclick="setArray3('Per')">Per</button>
    <button id="vesten" onclick="setArray4('Vesten')">Vesten</button>
    <button id="pål"    onclick="setArray5('Pål')">Pål</button>
    <button id="sverre" onclick="setArray6('Sverre')">Sverre</button>
    
    </br>
     <b>${array[0]}</b> Gikk til  
     <b>${array[1]}</b>
     </br>
     trippe, tripp, tripp det sa.
     </br>
     I den nye,   <b>${array[2]}</b>
     </br>
     trippet hun så glad.
     </br>
     <b>${array[3]}</b>  han stod for presten,
     </br>
     I det nye <b>${array[4]}</b>
     liknet han på far..
     </br>
     Nå er <b> ${array[5]} </b> og <b> ${array[6]} </b>
     gamle kan du tro.
     </br>
     Men den gamle visa
     synger begge to.
     </br>
    <button onclick="reset()">Reset</button>
    </div>
    `
    app.innerHTML = html;
}
//controller
updateView()
function setArray0(inputValue){
    array[0] = inputValue
    updateView()
}
function setArray1(inputValue){
    array[1] = inputValue
    updateView()
}
function setArray2(inputValue){
    array[2] = inputValue
    updateView()
}
function setArray3(inputValue){
    array[3] = inputValue
    updateView()
}
function setArray4(inputValue){
    array[4] = inputValue
    updateView()
}
function setArray5(inputValue){
    array[5] = inputValue
    updateView()
}
function setArray6(inputValue){
    array[6] = inputValue
    updateView()
}

function reset() {
    array = ["", "", "", "", "","",""];
    updateView();
  }
