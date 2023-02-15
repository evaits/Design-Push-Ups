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
  date.push(Intl.DateTimeFormat('en-US').format(ms[i]))
}
        
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


  for(let i = 0; i<date.length && i<4; i++){

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
    right_info.className = 'right-info'
    dots.className = 'dots'
    btn_delete.className = 'delete delete-'+i
    percent.className = 'percent'

    // Get date from Local Storage
    date_localStorage = date[i]

    // Reform date
    reform_date = date_localStorage.slice(0,4)
    reform_date = reform_date.replace('/', '.')
    if(reform_date.length == 4){
      reform_date = '0' + reform_date
    }
    reform_date = reform_date[3]+reform_date[4] + reform_date[2] + reform_date[0] + reform_date[1]

    // Add context
    h6.innerHTML = reform_date;
    repeats.innerHTML = localStorage.getItem(date_localStorage);
    span.innerHTML = 'REPEATS';
    dots.innerHTML = '...';
    btn_delete.innerHTML = 'Delete';
    dots.setAttribute('onclick', 'open_delete('+ i +')')

    // Percent settings
    localStorage.getItem(date_localStorage) >= 100 ? percent.innerHTML = 'Done' : percent.innerHTML = 'Sick';
    
    
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
        location = location
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
	