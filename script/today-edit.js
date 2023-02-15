      // Modal
let count_modal = 0
let btn = document.querySelector('.btn-new')
let footer = document.querySelector('.footer')
function open_modal() {
    if(count_modal%2==0){
        count_modal++
        
        footer.style.background = 'rgba(0, 42, 255, 0.20)'
        btn.innerHTML = 'Close'

        document.querySelector('.modal-bg').style.display = 'block'
    }
    else {
        count_modal++

        btn.innerHTML = 'New'
        footer.style.background = ''
        document.querySelector('.modal-bg').style.display = 'none'
    }
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
  footer.style.background = ''
  btn.innerHTML = 'New'
  document.querySelector('.modal-bg').style.display = 'none'
  location.href=location.href;
}


// Save Date
let today = new Date()

today = Date.parse(today)
today = new Date(today).toLocaleString('en-US')
today = today.slice(0, 9)
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

        // Print Data

// Get arr
let arr = []
arr = localStorage.getItem("arr")
arr = arr.split(',')
for(let i = 0; i<arr.length; i++){
  arr[i] = Number(arr[i])
}
console.log(arr)

if(arr[0] !== 0) {
    let main = document.querySelector('main')

    // Add tags
    let block; // div | class - block
    let top; // div | top
    let edit; //img | edit
    let bottom; // div | bottom
    let left_block; // div | left-block
    let motivation_img; // img | class - motivation-img
    let left_text; // div | left-text
    let left_state; // p | left-state
    let right_block; // div | right-block
    let repeats_img; // img | repeats-img
    let right_text; // div | right-text
    let right_state; // p | right-state

    // Print
    for(let i = 0; i<arr.length; i++){

        // Create tags
        block = document.createElement('div')
        top = document.createElement('div')
        edit = document.createElement('img')
        bottom = document.createElement('div')
        left_block = document.createElement('div')
        motivation_img = document.createElement('img')
        left_text = document.createElement('div')
        left_state = document.createElement('p')
        right_block = document.createElement('div')
        repeats_img = document.createElement('img')
        right_text = document.createElement('div')
        right_state = document.createElement('p')

        // Add Class Name
        block.className = 'block'
        top.className = 'top'
        edit.className = 'edit'
        bottom.className = 'bottom'
        left_block.className = 'left-block'
        motivation_img.className = 'motivation-img'
        left_text.className = 'left-text'
        left_state.className = 'left-state'
        right_block.className = 'right-block'
        repeats_img.className = 'repeats-img'
        right_text.className = 'right-text'
        right_state.className = 'right-state'

        // Add context
        top.innerHTML = i+1 + ' approach'
        edit.setAttribute('src', 'img/today-approaches/edit.png')
        motivation_img.setAttribute('src', 'img/today-approaches/motivation.png')
        left_text.innerHTML = 'You could'
        left_state.innerHTML = 'Good'
        repeats_img.setAttribute('src', 'img/today-approaches/repeats.png')
        right_text.innerHTML = 'Repeats'
        right_state.innerHTML = arr[i]

        // Add in site
        main.append(block)
        block.append(top)
        top.append(edit)
        block.append(bottom)
        bottom.append(left_block)
        left_block.append(motivation_img)
        left_block.append(left_text)
        left_text.prepend(left_state)
        bottom.append(right_block)
        right_block.append(repeats_img)
        right_block.append(right_text)
        right_text.prepend(right_state)
    }

}