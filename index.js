const formulaDisplay = document.querySelector(".formulaDisplay");
const mainDisplay = document.querySelector(".mainDisplay")

const numbers = Array.from(document.querySelectorAll(".number"));

const operators = document.querySelector('.operators')

const allClear = document.querySelector(".allClear")

const deleteBtn = document.querySelector(".delete")

const equal = document.querySelector(".equal")





numbers.map((num)=>{
  num.addEventListener("click",function(e){
    
    switch (e.target.innerText) {
      // if AC button is clicked, the main display & forumulaDisplay will both return to ""
      case "AC":
        mainDisplay.textContent = "";
        formulaDisplay.textContent = "";
        break;
      case "=":
        // when equal button is clicekd, mainDisplay will display the result of calculation
        try {
          let result = eval(mainDisplay.textContent);
          mainDisplay.textContent = result;
        } catch {
          mainDisplay.innerText = "Error";
        }
        break;
      case "⌫":
        if (mainDisplay.innerText) {
          mainDisplay.innerText = mainDisplay.innerText.slice(0, -1);
        }
        break;
      default:
        mainDisplay.textContent += e.target.innerText;
      // display operators when them are clicked
      // display numbers when numbers are clicked
    }
  })
  })


// issues:
// - display top formula
// - limit numbers on display
// - only numbers can be firstly entered
// - 00 
// - dot
// - after previous calculation, when press number buttons again, should display new calcutation process
