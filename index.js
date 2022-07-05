const formulaDisplay = document.querySelector(".formulaDisplay");
const mainDisplay = document.querySelector(".mainDisplay")

const numberGrp = document.querySelector(".NumButton_group");

const allClear = document.querySelector(".allClear")

const deleteBtn = document.querySelector(".delete")

const equal = document.querySelector(".equal")

// if all clear button is clicked, the main display & forumulaDisplay will both return to 0
allClear.addEventListener('click',function(){
  mainDisplay.textContent= 0
  formulaDisplay.textContent = 0;
})

numberGrp.addEventListener('click', function(e){
   if(e.target.nodeName ==="LI"){
    console.log(e.target)
    let key = e.target.textContent;
    console.log(key)
    mainDisplay.textContent = key;
  }
})





