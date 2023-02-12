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
