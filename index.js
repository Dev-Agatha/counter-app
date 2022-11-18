// // document.getElementById("count-el").innerText=5
// //  let myAge=24
// // console.log(myAge)

// // function increment() {
//     // console.log("This button has been clicked")
// // }

// // function number(){
// //     console.log(42)
// // }
// // number()


//     let lap1 = 34
//     let lap2 = 33
//     let lap3 = 36

// function total() {
//     console.log(lap1 + lap2 + lap3)
// }

// total()

// let count = document.getElementById("count")
//  console.log(count)



let value = 0
let newCount = 1
let countEd = document.getElementById("count")
let valInput = document.getElementById("val")
let reduce = document.getElementById("decrease")
 

function increment(){
  value = value + newCount  
  displayCount()
} 

function displayCount(){
  countEd.innerText = value  
  // displayCount()
} 

function reset(){
  value = 0
  newCount = 1 
  countEd.innerText = value
}

function changeCount(){
  if(valInput.value != ""){
    newCount = parseInt(valInput.value)
    alert(`Counter set successfully to ${newCount}`)
  }else{
    alert("Please enter a value.")
  }
}

function decrease(){
  
  if (value >= 0){
    let  newValue = value - newCount
    if(newValue >= 0){
      value = newValue
      countEd.innerText = value
    }else{
      alert(`Hey Your counter is set to ${newCount}, please reset your value`)
    }
    
  } 
}
   

  


