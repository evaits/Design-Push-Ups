      // Modal
let count_modal = 0
function open_modal() {
    if(count_modal%2==0){
        count_modal++
        document.querySelector('.modal-bg').style.display = 'block'
        animateOpenModal()
    }
    else {
        count_modal++
        document.querySelector('.modal-bg').style.display = 'none'
        animateCloseModal()
    }
}

      // Animation
function animateOpenModal() {
    let plus = document.querySelector('.plus')
    var animation = plus.animate([
        {transform: 'rotate(0)'},
        {transform: 'rotate(-45deg)'}
      ], 100);
      animation.addEventListener('finish', function() {
        plus.style.transform = 'rotate(-45deg)';
      });
}

function animateCloseModal() {
    let plus = document.querySelector('.plus')
    var animation = plus.animate([
        {transform: 'rotate(-45deg)'},
        {transform: 'rotate(0)'}
      ], 100);
      animation.addEventListener('finish', function() {
        plus.style.transform = 'rotate(0)';
      });
}

      // Save data
function item(digit) {
  let item_id = digit
  window.item_global = item_id;
}

function save_data() {
  // Get global var
  let item_id = window.item_global;
  if(item_id==undefined) {
    item_id = 1
  }


  // Work with arr and Local Storage
  let arr = []
  arr = localStorage.getItem("arr")
  arr = arr.split(',')
  for(let i = 0; i<arr.length; i++){
      arr[i] = Number(arr[i])
  }

  if(arr[0] == 0){
    arr.shift()
  }
  arr.push(item_id)
  localStorage.setItem("arr", arr)

  // Close modal and reload
  animateCloseModal()
  document.querySelector('.modal-bg').style.display = 'none'
  location.href=location.href;
}


// Save Date
let today = new Date()
today = Intl.DateTimeFormat('en-GB').format(today)
today = today.slice(0, 10)
if(localStorage.getItem("today") == null){
  localStorage.setItem("today", today)
}

let sum1 = 0
if (localStorage.getItem('arr')){ 
  
  let arr1 = []
  arr1 = localStorage.getItem("arr")
  arr1 = arr1.split(',')
  for(let i = 0; i<arr1.length; i++){
    arr1[i] = Number(arr1[i])
  }
  arr1.map((item) => sum1 += item);
}



let localStorage_date = localStorage.getItem('today')
if(localStorage_date !== today){
  localStorage.setItem(localStorage_date, sum1)
  localStorage.setItem("today", today)
  
  localStorage.removeItem("arr")
  location = location
}




