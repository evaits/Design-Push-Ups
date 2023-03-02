      // Print data
if(localStorage.getItem("arr") == null){
  localStorage.setItem("arr", 0)
}

if(localStorage.getItem("best") == null){
  localStorage.setItem('best', 0)
}

let arr = []
arr = localStorage.getItem("arr")
arr = arr.split(',')
for(let i = 0; i<arr.length; i++){
  arr[i] = Number(arr[i])
}


// Get user
let user = localStorage.getItem('user')
user = JSON.parse(user)

// Print Type of Sport
if(user.sport == 'Squat'){
  let header = document.querySelector('.header-title')
  header.innerHTML = 'Squatting'
  header.style.fontWeight = '600'
  let icon = document.querySelector('.icon')
  icon.style.backgroundImage = "url('img/Home/squat.png')";
  icon.style.backgroundSize = '35px'
  icon.style.backgroundPosition = '40px'
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
let daily_percent = Math.round(sum/Number(user.daily)*100)+'%'
if(sum<=Number(user.daily)){
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
  if((localStorage.key(i)=='arr') || (localStorage.key(i) == "today") || (localStorage.key(i) == 'best') || (localStorage.key(i) == 'user')){
      continue
  }

  ms.push(Date.parse(localStorage.key(i)))
}

ms.sort((a, b) => b - a);

const date = []
for(let i = 0; i<ms.length; i++){
  date.push(Intl.DateTimeFormat('en-US').format(ms[i]))
}

        // Print Activity Progress
if(date.length > 0){
  let blocks = document.querySelector('.activity-blocks')
  
  // Add tags
  let block; // div | class - block
  let date_html; // p
  let number_repeats; //div | class - number_repeats;
  let repeats_p; // p
  let img; // img | class - block-vector

  for(let i = 0; i<date.length && i<4; i++){

    // Create tags
    block = document.createElement('div')
    date_html = document.createElement('p')
    repeats_div = document.createElement('div')
    number_repeats = document.createElement('div')
    repeats_p = document.createElement('p')
    img = document.createElement('img')
    

    // Add Class Name
    block.className = 'block'
    repeats_div.className = 'repeats'
    repeats_p.className = 'lng-repeats'
    number_repeats.className = 'number-repeats'
    img.className = 'block-vector'

    // Get date from Local Storage
    date_localStorage = date[i]
    if(date_localStorage.length == 8){
      date_localStorage = date_localStorage.split('')
      date_localStorage.splice(2,0,'0')
      date_localStorage = date_localStorage.join('')
    }
    // Reform date
    reform_date = date_localStorage.slice(0,4)
    reform_date = reform_date.replace('/', '.')
    if(reform_date.length == 4){
      
      reform_date = '0' + reform_date
    }
    reform_date = reform_date[3]+reform_date[4] + reform_date[2] + reform_date[0] + reform_date[1]

    // Add context
    date_html.innerHTML = reform_date
    number_repeats.innerHTML = localStorage.getItem(date_localStorage)
    repeats_p.innerHTML = 'repeats'
    img.setAttribute('src', 'img/Home/activity-img.png')

    // Add in site
    blocks.append(block)
    block.append(date_html)
    block.append(repeats_div)
    repeats_div.append(number_repeats)
    repeats_div.append(repeats_p)
    block.append(img)
  }
}


// If date.length = 0
else{
  let blocks = document.querySelector('.activity-blocks')
  blocks.style.display = 'block'


  let p = document.createElement('p')
  p.className = 'lack'
  p.innerHTML = "It's your first day"

  blocks.append(p)
}

// Get Language
if(user.lang == undefined){
  user.lang = 'en'
}
location.href = window.location.pathname + '#' + user.lang
// Localisation
let select = document.querySelector('#lang')
const arrLeng = ['en', 'ua']

select.addEventListener('change', changeUrl)

function changeUrl() {
  let lang = select.value
  user.lang = lang
  localStorage.setItem('user', JSON.stringify(user));
  console.log(user)
  location.href = window.location.pathname + '#' + lang
  location.reload()
}

function changeLang() {
  let hash = window.location.hash
  hash = hash.substring(1)
  if(!arrLeng.includes(hash)){
    location.href = window.location.pathname + '#' + user.lang
    location.reload() 
  }
  select.value = hash
  for(let key in homeLng){
    if(key == 'repeats'){
      const text = document.querySelectorAll('.lng-repeats')
      for(let i = 0; i<text.length; i++){
        text[i].innerHTML = homeLng[key][hash]
      }
    }
    const text = document.querySelector('.lng-' + key)
    if(text == null){continue}
    text.innerHTML = homeLng[key][hash]
  }
}

changeLang()
