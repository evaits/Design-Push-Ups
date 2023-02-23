// User
let user = localStorage.getItem('user')
user = JSON.parse(user)
document.querySelector('.title').innerHTML = 'Welcome, ' + user.firstName


        // Open Drop Menu
let count_menu = 0
function open_dropMenu() {
    if(count_menu%2==0){
        count_menu++
        let drop_menu = document.querySelector('.drop-menu-sport')
        drop_menu.style.display = 'block'
        animateOpenMenu()
    }
    else{
        count_menu = 0
        let drop_menu = document.querySelector('.drop-menu-sport')
        drop_menu.style.display = 'none'
        animateCloseMenu()
    }
}

        // Animation
function animateOpenMenu() {
    let arrow = document.querySelector('.arrow')
    var animation = arrow.animate([
      {transform: 'rotate(90deg)'},
      {transform: 'rotate(0)'}
    ], 100);
      animation.addEventListener('finish', function() {
      arrow.style.transform = 'rotate(0)';
    });
}

function animateCloseMenu() {
    let arrow = document.querySelector('.arrow')
    var animation = arrow.animate([
      {transform: 'rotate(0)'},
      {transform: 'rotate(90deg)'}
    ], 100);
      animation.addEventListener('finish', function() {
      arrow.style.transform = 'rotate(90deg)';
    });
}

// Print gender to Input
function addInput(type) {
    document.querySelector('#sport').value = type
    count_menu = 1
    open_dropMenu()
    window.gender_global = type;
}


// Jquery click outside input
$(document).ready(function () {
    $(document).mouseup( function(e){ // событие клика по веб-документу
		if(count_menu%2 != 0){
            var drop_menu = $('.drop-menu-sport')
            var div = $( ".sport" ); // тут указываем ID элемента
            if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
			drop_menu.hide(); // скрываем его
            animateCloseMenu()
            count_menu = 0
		}
        }
	});
  
}); 


// Save Data
function save_data() {
    let count = 0
    let goal = document.querySelector('.goal_inp')
    let block_goal = document.querySelector('.goal')
    if(goal.value.length < 2){
        goal.classList.add('placeholder')
        block_goal.style.background = '#D7D7D7'
        goal.style.background = '#D7D7D7'
        block_goal.onclick =  function(){
            goal.classList.remove('placeholder')
            block_goal.style.background = '#F7F8F8'
            goal.style.background = '#F7F8F8'
        }
        count++
    }
    
    let sport = document.querySelector('#sport')
    let context = document.querySelector('.context')
    let block_sport = document.querySelector('.sport')
    if(sport.value == '') {
        sport.classList.add('placeholder')
        context.style.background = '#D7D7D7'
        sport.style.background = '#D7D7D7'
        block_sport.onclick =  function(){
            sport.classList.remove('placeholder')
            context.style.background = '#F7F8F8'
            sport.style.background = '#F7F8F8'
        }
        count++
    }

    if(count != 0) {alert('Invaild Data'); return}
    let user = localStorage.getItem('user')
    user = JSON.parse(user)
    user.sport = sport.value
    user.daily = goal.value
    localStorage.setItem('user', JSON.stringify(user));
    location = '../index.html'
}