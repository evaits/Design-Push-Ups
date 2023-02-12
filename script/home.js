        // Print data
if(localStorage.getItem("arr") == null){
  localStorage.setItem("arr", 0)
}

let arr = []
arr = localStorage.getItem("arr")
arr = arr.split(',')
for(let i = 0; i<arr.length; i++){
  arr[i] = Number(arr[i])
}



// Print today statistic
let push = document.querySelector('.repeat')
let pod = document.querySelector('.approach')

let sum = 0
arr.map((item) => sum += item);
push.innerHTML = sum

arr[0] == 0 ? pod.innerHTML = 0 : pod.innerHTML = arr.length

let average = document.querySelector('.average')
average.innerHTML = Math.round(sum/arr.length) + '/ap'



// Daily goal
let daily_percent = sum/100*100+'%'
if(sum<=100){
  document.querySelector('.percent').innerHTML = daily_percent
  document.querySelector('.done').style.width = daily_percent
}
else {
  document.querySelector('.percent').innerHTML = daily_percent
  document.querySelector('.done').style.width = '100%'
}



        // Sort and get Dates
let ms = []
for(let i = 0; i<localStorage.length; i++){
  if((localStorage.key(i)=='arr') || (localStorage.key(i) == "today")){
      continue
  }

  ms.push(Date.parse(localStorage.key(i)))
  
}

ms.sort((a, b) => b - a);

const date = []
for(let i = 0; i<ms.length; i++){
  date.push(Intl.DateTimeFormat('en-GB').format(ms[i]))
}
console.log(date)


        // Print Activity Progress
if(localStorage.length-2 > 0){
  let blocks = document.querySelector('.activity-blocks')
}