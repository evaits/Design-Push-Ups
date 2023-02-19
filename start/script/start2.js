        // Open Drop Menu

let count_menu = 0
function open_dropMenu() {
    if(count_menu%2==0){
        count_menu++
        let drop_menu = document.querySelector('.drop-menu')
        drop_menu.style.display = 'block'
        animateOpenMenu()
    }
    else{
        count_menu = 0
        let drop_menu = document.querySelector('.drop-menu')
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
function addInput(gender) {
    document.querySelector('#gender').value = gender
    count_menu = 1
    open_dropMenu()
}


// Jquery click outside input
$(document).ready(function () {
    $(document).mouseup( function(e){ // событие клика по веб-документу
		if(count_menu%2 != 0){
            var drop_menu = $('.drop-menu')
            var div = $( ".gender" ); // тут указываем ID элемента
            if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
			drop_menu.hide(); // скрываем его
            animateCloseMenu()
            count_menu = 0
		}
        }
	});
}); 