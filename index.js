const display1El = document.querySelector(".formulaDisplay");
const display2El = document.querySelector(".mainDisplay");

const numbersEl = document.querySelectorAll(".number");
const operationEl = Array.from(document.querySelectorAll(".operator"));



const equalEl = document.querySelector(".equal");
const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");

const dot = document.querySelector('.dot')
const double = document.querySelector('.doubleZero')

// let dis1Num = "";
// let dis2Num = "";
// let result = null;
// let lastOperation = "";
// let haveDot = false;

let tempStorageDis2 = ""
let tempStorageDis1 = ""
let hold = ""
let formulaStorage = []

// //綁定數字按鈕
numbersEl.forEach((number)=>{
  number.addEventListener('click', TriggerDisplay)
})

function TriggerDisplay(e){
  tempStorageDis2 += e.target.innerText
  tempStorageDis1 += e.target.innerText
  display2El.innerText = tempStorageDis2
  display1El.innerText = tempStorageDis1
  console.log(tempStorageDis2 , tempStorageDis1, formulaStorage)
  
}

// //綁定運算子按鈕
operationEl.forEach((operator)=>{
  operator.addEventListener("click",TriggerOperation)
})

function TriggerOperation(e){
  let checkLength = formulaStorage.length
  if(formulaStorage.slice(-1) == "+" ||formulaStorage.slice(-1)== "-" ||formulaStorage.slice(-1)== "×" ||formulaStorage.slice(-1)== "÷" ||formulaStorage.slice(-1)== "" ){
    formulaStorage.push(tempStorageDis2)
  }

  console.log(formulaStorage);
   let realoperator = e.target.dataset.operator;
   formulaStorage.push(realoperator);
   tempStorageDis1 += e.target.innerText;
   tempStorageDis2 = "";
   display2El.innerText = e.target.innerText;
   display1El.innerText = tempStorageDis1;
}

// //小數點"."
dot.addEventListener("click",addDot)

function addDot(){
  if(!tempStorageDis2.includes('.')){
    tempStorageDis2 += "."
    tempStorageDis1 += "."
    display1El.innerText = tempStorageDis1
    display2El.innerText = tempStorageDis2
  }
}

// //00 double zero
double.addEventListener('click',addDoubleZero)

function addDoubleZero(){
  // console.log(tempStorageDis2)
  if(tempStorageDis2 !== 0 && tempStorageDis2 !==""){
    tempStorageDis2 +="00"
    tempStorageDis1 += "00"
    display1El.innerText = tempStorageDis1;
    display2El.innerText = tempStorageDis2;
  }
}

// console.log(tempStorageDis2)


// // 運算結果
equalEl.addEventListener('click',calculateResult)

function calculateResult(){
  formulaStorage.push(tempStorageDis2)
  console.log(formulaStorage)
  newFormula = formulaStorage.join('')
  console.log(eval(newFormula))
  display1El.innerText = tempStorageDis1;
  display2El.innerText = eval(newFormula);
  console.log(tempStorageDis2)
  tempStorageDis2 =''
  console.log(tempStorageDis2);
  tempStorageDis2 += eval(newFormula)
  console.log(tempStorageDis2)
  formulaStorage = []
  formulaStorage.push(eval(newFormula))
  console.log(formulaStorage)

}


// AC function
 clearAllEl.addEventListener('click',()=>{
  tempStorageDis1 = ''
  tempStorageDis2 = ''
  formulaStorage = []
  display1El.innerText = ''
  display2El.innerText = ""
 }) 

// Delete One number function
 clearLastEl.addEventListener("click", ()=>{
   if (display2El.innerText) {
   display2El.innerText = display2El.innerText.slice(0, -1);
   display1El.innerText = display2El.innerText.slice(0, -1);
 }
})



// 1. Dealing with numbers, ensuring only 1 dot 
// numbersEl.forEach((number) => {
//   number.addEventListener("click", (e) => {
//     display1El.innerText = display2El.innerText
//     // make sure there's only 1 dot in the display
//     if (e.target.innerText === "." && !haveDot) {
//       haveDot = true;

//       // if a dot already exists then it should return
//     } else if (e.target.innerText === "." && haveDot) {
//       return;
//     }
//       dis2Num += e.target.innerText
//       display2El.innerText = dis2Num;
//       console.log(display2El.innerText);
//     })
//   });


// // 2. Dealing with operators 
//  operationEl.forEach((operator)=>{
//   operator.addEventListener('click',(e)=>{
//     // prevent operators from displaying while there's no number displaying
//     if (!dis2Num) return;
//     //reset haveDot to allow have another dot in another number, e.g. 20.3 X 12.5
//     haveDot = false;
//       if (e.target.innerText === "÷") {
//         e.target.innerText = "/"
//       } else if (e.target.innerText === "×") {
//         e.target.innerText = " * "
//         // console.log(e.target)
//         }
//         // let operatiorName = e.target.innerText; 
//         // display1El.innerText += operatiorName
//       })

//     });




// issues:
// v only numbers can be firstly entered
// v multiply & divide symbol conversion


// - display top formula 
// - limit length of numbers on display, max 15
// - dot , add a zero in the front
// - after previous calculation, when press number buttons again, should display new calcutation process
