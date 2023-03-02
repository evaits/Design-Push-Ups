      // Modal
let count_modal = 0
let btn = document.querySelector('.btn-new')
let footer = document.querySelector('.footer')
function open_modal() {
    if(count_modal%2==0){
        count_modal++
        
        footer.style.background = 'rgba(0, 42, 255, 0.23)'
        let user = JSON.parse(localStorage.getItem('user'))
        user.lang == 'en' ? btn.innerHTML = 'Close' : btn.innerHTML = 'Закрити'
        

        document.querySelector('.modal-bg').style.display = 'block'
    }
    else {
        count_modal++

        let user = JSON.parse(localStorage.getItem('user'))
        user.lang == 'en' ? btn.innerHTML = 'New' : btn.innerHTML = 'Новий'
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

  document.querySelector('.modal-bg').style.display = 'none'
  location.reload()
}


        // Print Data

// Get arr
let arr = []
arr = localStorage.getItem("arr")
arr = arr.split(',')
for(let i = 0; i<arr.length; i++){
  arr[i] = Number(arr[i])
}

if(arr[0] !== 0) {
    let main = document.querySelector('main')

    // Add tags
    let block; // div | class - block
    let top; // div | top
    let top_left
    let top_p
    let edit; //img | edit
    let bottom; // div | bottom
    let left_block; // div | left-block
    let motivation_img; // img | class - motivation-img
    let left_text; // div | left-text
    let left_state; // p | left-state
    let left_motivation
    let right_block; // div | right-block
    let repeats_img; // img | repeats-img
    let right_text; // div | right-text
    let right_state; // p | right-state
    let repeats

    // Print
    for(let i = 0; i<arr.length; i++){

        // Create tags
        block = document.createElement('div')
        top = document.createElement('div')
        top_left = document.createElement('div')
        top_p = document.createElement('span')
        edit = document.createElement('img')
        bottom = document.createElement('div')
        left_block = document.createElement('div')
        motivation_img = document.createElement('img')
        left_text = document.createElement('div')
        left_state = document.createElement('p')
        left_motivation = document.createElement('p')
        right_block = document.createElement('div')
        repeats_img = document.createElement('img')
        right_text = document.createElement('div')
        right_state = document.createElement('p')
        repeats = document.createElement('p')

        // Add Class Name
        block.className = 'block'
        top.className = 'top'
        top_p.className = 'lng-approach'
        edit.className = 'edit'
        bottom.className = 'bottom'
        left_block.className = 'left-block'
        motivation_img.className = 'motivation-img'
        left_text.className = 'left-text'
        left_state.className = 'left-state lng-state'
        left_motivation.className = 'lng-leftMotivation'
        right_block.className = 'right-block'
        repeats_img.className = 'repeats-img'
        right_text.className = 'right-text'
        right_state.className = 'right-state'
        repeats.className = 'lng-repeats'

        // Add context
        top_left.innerHTML = i+1
        top_p.innerHTML = ' approach'
        edit.setAttribute('src', 'img/today-approaches/edit.png')
        edit.setAttribute('onclick', 'edit_modal('+ i +')')
        motivation_img.setAttribute('src', 'img/today-approaches/motivation.png')
        left_motivation.innerHTML = 'You could'
        left_state.innerHTML = 'Good'
        repeats_img.setAttribute('src', 'img/today-approaches/repeats.png')
        repeats.innerHTML = 'Repeats'
        right_state.innerHTML = arr[i]

        // Add in site
        main.append(block)
        block.append(top)
        top.append(top_left)
        top_left.append(top_p)
        top.append(edit)
        block.append(bottom)
        bottom.append(left_block)
        left_block.append(motivation_img)
        left_block.append(left_text)
        left_text.prepend(left_state)
        left_text.append(left_motivation)
        bottom.append(right_block)
        right_block.append(repeats_img)
        right_block.append(right_text)
        right_text.prepend(right_state)
        right_text.append(repeats)
    }

}
// If arr = []
else{
    let main = document.querySelector('.main')
    let p = document.createElement('p')
    p.className = 'lack'
    
    
    // Import user
    let user = JSON.parse(localStorage.getItem('user'))
    user.lang == 'en' ? p.innerHTML = "No more approach today." : p.innerHTML = "Сьогодні ще ні одного підходу."
    
    main.append(p)
}

// Edit
function edit_modal(count) {
    // Styles
    document.querySelector('.modal-bg-edit').style.display = 'block'
    let title = document.querySelector('.count').innerHTML = count+1 

    let user = JSON.parse(localStorage.getItem('user'))
    user.lang == 'en' ? btn.innerHTML = 'Close' : btn.innerHTML = 'Закрити'
    btn.setAttribute('onclick', 'close_editModal()')
    footer.style.background = 'rgba(0, 42, 255, 0.23)'
    document.querySelector('.input').setAttribute('placeholder', arr[count])
    // Send var
    var count = count
    window.globalVar = count
}

function close_editModal() {
    document.querySelector('.modal-bg-edit').style.display = 'none'
    let user = JSON.parse(localStorage.getItem('user'))
    user.lang == 'en' ? btn.innerHTML = 'New' : btn.innerHTML = 'Новий'
    btn.setAttribute('onclick', 'open_modal()')
    footer.style.background = ''
}

// Delete function
function delete_data() {
    let count = window.globalVar
    arr.splice(count, 1)
    localStorage.setItem('arr', arr)
    // Style
    document.querySelector('.modal-bg-edit').style.display = 'none'
    btn.setAttribute('onclick', 'open_modal()')
    footer.style.background = ''

    location.reload()
}

// Save changes
function save_changes() {
    let input = document.querySelector('.input').value
    if (input == ''){
        alert('Error')
    } 
    else {
        let count = window.globalVar
        arr[count] = Number(input)
        localStorage.setItem('arr', arr)
        close_editModal()
        location.reload()
    }
}

    // Localisation
// Get user
let user = localStorage.getItem('user')
user = JSON.parse(user)

// Check lang
if(user.lang == undefined){
  user.lang = 'en'
}

// Change url
location.href = window.location.pathname + '#' + user.lang

const arrLeng = ['en', 'ua']

function changeLang() {
  let hash = window.location.hash
  hash = hash.substring(1)
  if(!arrLeng.includes(hash)){
    location.href = window.location.pathname + '#en'
    location.reload() 
  }
  user = hash
  for(let key in todayLng){
    if(key == 'title'){
      const text = document.querySelector('.lng-' + key)
      if(text == null){continue}
      text.innerHTML = todayLng[key][hash]
    }
    const text = document.querySelectorAll('.lng-' + key)
    if(text == null){continue}
    for(let i = 0; i<text.length; i++){
      text[i].innerHTML = todayLng[key][hash]
    }
  }
}

changeLang()