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
   
// Get user
let user = localStorage.getItem('user')
user = JSON.parse(user)

        // Print History
if(date.length > 0){
  let blocks = document.querySelector('.blocks')
  
  // Add tags
  let block; // div | block
  let left_info; // div | left-info
  let h6; //h6 | date;
  let repeats; // div | repeats
  let br; // br
  let span; // span
  let right_info; // div | right_info
  let dots; // div | dots
  let percent; // div | percent


  for(let i = 0; i<date.length; i++){

    // Create tags
    block = document.createElement('div')
    left_info = document.createElement('div')
    h6 = document.createElement('h6')
    repeats = document.createElement('div')
    br = document.createElement('br')
    span = document.createElement('span')
    right_info = document.createElement('div')
    dots = document.createElement('div')
    btn_delete = document.createElement('div')
    percent = document.createElement('div')

    // Add Class Name
    block.className = 'block'
    left_info.className = 'left-info'
    h6.className = 'date'
    repeats.className = 'repeats'
    span.className = 'lng-repeats'
    right_info.className = 'right-info'
    dots.className = 'dots'
    btn_delete.className = 'delete lng-delete delete-'+i
    percent.className = 'percent'

    // Get date from Local Storage
    date_localStorage = date[i]
    if(date_localStorage.length == 8){
      repeats.innerHTML = localStorage.getItem(date_localStorage);
      date_localStorage = date_localStorage.split('')
      date_localStorage.splice(2,0,'0')
      date_localStorage = date_localStorage.join('')
    }
    else{
      repeats.innerHTML = localStorage.getItem(date_localStorage);
    }

    // Reform date
    reform_date = date_localStorage.slice(0,4)
    reform_date = reform_date.replace('/', '.')
    if(reform_date.length == 4){
      reform_date = '0' + reform_date
    }
    reform_date = reform_date[3]+reform_date[4] + reform_date[2] + reform_date[0] + reform_date[1]

    // Add context
    h6.innerHTML = reform_date;
    span.innerHTML = 'REPEATS';
    dots.innerHTML = '...';
    btn_delete.innerHTML = 'Delete';
    dots.setAttribute('onclick', 'open_delete('+ i +')')

    // Percent settings
    timeVar = localStorage.getItem(date_localStorage) 
    if((timeVar >= Number(user.daily)) && user.lang == 'en'){
      percent.innerHTML = 'Done'
    }
    else if((timeVar <= Number(user.daily) && user.lang == 'en')){
      percent.innerHTML = 'Nearly'
    }
    if((timeVar >= Number(user.daily)) && user.lang == 'ua'){
      percent.innerHTML = 'Добре'
      percent.style.fontFamily = '"Roboto Mono", monospace'
      percent.style.fontWeight = '400'
    }
    else if((timeVar <= Number(user.daily) && user.lang == 'ua')){
      percent.innerHTML = 'Зле'
      percent.style.fontFamily = '"Roboto Mono", monospace'
      percent.style.fontWeight = '400'
    }
    
    delete timeVar
    // Add in site
    blocks.append(block);
    block.append(left_info)
    left_info.append(h6)
    left_info.append(repeats)
    repeats.append(span)
    block.append(right_info)
    right_info.append(dots)
    dots.append(btn_delete)
    right_info.append(br)
    right_info.append(percent)

  }

}

// Delete
function open_delete(count) {
  let btn = document.querySelector('.delete-'+count)
  btn.style.display = 'block'
  btn.setAttribute('onclick', 'delete_fun()')
  var count = count
  window.globalVar = count
}

function delete_fun() {
    let count = globalVar
    let delete_ask = confirm('Are you sure?')
    if(delete_ask){
        let key = date[count]
        localStorage.removeItem(key)
        location.reload()
    }
}

// Jquery click outside btn
$(document).ready(function () {
    $(document).mouseup( function(e){ // событие клика по веб-документу
		var delete_btn = $('.delete')
        var div = $( ".dots" ); // тут указываем ID элемента
		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
			delete_btn.hide(); // скрываем его
		}
	});
});

    // Localisation
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
  for(key in historyLng){
    const text = document.querySelectorAll('.lng-' + key)
    for(let i = 0; i<text.length; i++){
      text[i].innerHTML = historyLng[key][hash]
      if((key == 'delete') && (hash == 'ua')){
        text[i].style.right = "-3px"
      }
      text[i].style.fontFamily = '"Roboto Mono", monospace'
    }
  }
  
}

changeLang()
	