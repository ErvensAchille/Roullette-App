let colors = ["red", "green", "black"]
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
let usersBet = document.querySelector("#userBet")
let colorSelect = document.querySelector("#colorList")
let numberSelect = document.querySelector("#numberList")
let submit = document.querySelector("#submit")

// submit.forEach('click', function increment (){
// let tWins = 1
// let tLost = 1
// let mMade = 1
// let mLost = 1
// })

let outcome = []
outcome.push(colors.splice(Math.floor(Math.random()*colors.length), 1)) &&
outcome.push(numbers.splice(Math.floor(Math.random()*numbers.length), 1));




submit.addEventListener('click', function(){
    if (colorSelect && numberSelect !==outcome){
        tLost++
    for (mMade = 0; mMade <=tLost  ; mMade + usersBet){
        mMade = usersBet.value  //need to fix
    }
        alert("you lost" + usersBet.value) //figure out how to correctly target this
        alert("casino made" + usersBet.value)
    }else{
      tWins++
        mLost = mLost + userBet.value
        alert(+usersBet.value * 2)
        fetch('casinolife', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'tWins': +1,
            'tLost': +1,
            'mMade': +usersBet,
            'mLost':-usersBet
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
    }
    })





  


