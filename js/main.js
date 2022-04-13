var elLabel1 = document.querySelector("#label1");
var elLabel2 = document.querySelector("#label2");
var elInput1 = document.querySelector("#input1");
var elInput2 = document.querySelector("#input2");
var elCurrency1 = document.querySelector("#currency1");
var elCurrency2 = document.querySelector("#currency2");
var changeBtn = document.querySelector("#change");
var submitBtn = document.querySelector(".form__submit");
var infolist = document.querySelector(".converter__list");
var clearBtn = document.querySelector(".converter__clear");
var warning = document.createElement("p");
warning.textContent = "";
elLabel1.append(warning);
warning.style.position = "absolute"

var one = 1;
var usdCours = 11330;


elCurrency1.textContent = "USD";
elCurrency2.textContent = "USZ";


changeBtn.addEventListener("click", (e) => {
  elInput2.value = "";
  elInput1.value = "";
  if (one == 1){
    elCurrency1.textContent = "USZ";
    elCurrency2.textContent = "USD";
    elCurrency1.setAttribute( 'style', 'color: #0d6efd !important' );
    elCurrency2.setAttribute( 'style', 'color: #0dcaf0 !important' );
    
    one++;
  }else {
    elCurrency1.textContent = "USD";
    elCurrency2.textContent = "USZ";
    elCurrency1.setAttribute( 'style', 'color: #0dcaf0 !important' );
    elCurrency2.setAttribute( 'style', 'color: #0d6efd !important' );
   
    one = 1
  }
})

submitBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  if(elCurrency1.textContent == "USZ") {
    elInput2.value = (Number(elInput1.value) / usdCours).toFixed(2);
  }else {
    elInput2.value = Number(elInput1.value) * usdCours
  }
  if(isNaN(elInput2.value)) {
    elInput2.value = "";
    elInput1.value = "";
    elInput1.setAttribute('style', 'border-color: red !important');
    warning.textContent = "Only enter numbers!";
    warning.style.color = "red"
  }else {
    elInput1.setAttribute('style', 'border-color: #ced4da !important')
    warning.textContent = "";
  }

  var newLi = document.createElement("li");
  var newP = document.createElement("p");
  newP.style.fontWeight = "600";
  newP.style.fontSize = "20px"
  if(elCurrency1.textContent == "USD"){
    newP.textContent = `${elInput1.value}$ => ${elInput2.value} so'm`;
    newP.style.color = "#0dcaf0"
  } else {
    newP.textContent = `${elInput1.value} so'm => ${elInput2.value}$`;
    newP.style.color = "#0d6efd"
  }
  if(elInput1.value == ""){
    newP.textContent = ""
  }
  newLi.append(newP);
  infolist.append(newLi);
})

clearBtn.addEventListener("click", (evt) => {
  infolist.innerHTML = ""
})

