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
    window.gender_global = gender;
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

// Get data
function save_data() {
  // First Name
  let firstName = document.querySelector('#FirstName').value
  if(firstName.length < 2){
    alert('Error')
    return
  }

  // Last Name
  let lastName = document.querySelector('#LastName').value
  if(lastName.length < 2){
    alert('Error')
    return
  }

  // Gender
  let gender = window.gender_global;
  if(gender == undefined ){alert('Error')}

  // Age
  age = document.querySelector('.age').value
  if((age < 3) || (age > 100)){
    alert('Error')
    return
  }

  // Weight
  weight = document.querySelector('.weight').value
  if((weight < 10) || (weight > 300)){
    alert('Error')
    return
  }

  // Height
  height = document.querySelector('.height').value
  if((height < 50) || (height > 250)){
    alert('Error')
    return
  }

  user = {
    FirstName: firstName,
    LastName: lastName,
    sex: gender,
    age: age,
    weight: weight,
    height: height
  }
  localStorage.setItem('user', JSON.stringify(user));
}