function edit(name, prepend){
    let div = document.querySelector('.' + name)
    let prepend_block = document.querySelector('.' + prepend)


    


    // Check Type
    if((name == 'firstName') || (name == 'lastName')){
        let placeholder = document.querySelector('.placeholder_' + name).textContent

        // Create Elements
        let block = document.createElement('div')
        let input = document.createElement('input')
        let img = document.createElement('img')

        // Add Atributs
        block.className = 'block block_' + name
        img.className = 'img'
        img.setAttribute('src', 'img/personal-data/' + name + '.png')
        input.className = 'input'
        input.setAttribute('placeholder', placeholder)

        // Add on page
        div.replaceWith(block)
        block.append(img)
        block.append(input)

        // Focus
        input.focus()
    }
    else if(name == 'gender'){
        // Create Elements
        let block = document.createElement('div')
        let context = document.createElement('div')
        let img = document.createElement('img')
        let input = document.createElement('input')
        let arrow = document.createElement('img')
        let drop_menu = document.createElement('div')
        let male = document.createElement('div')
        let hr = document.createElement('hr')
        let female = document.createElement('div')

        // Add Atributs
        block.className = 'block gender'
        context.className = 'context'
        context.setAttribute('onclick', ('open_dropMenu()'))
        img.className = 'img'
        img.setAttribute('src', 'img/personal-data/gender.png')
        input.className = 'input'
        input.setAttribute('disabled', true)
        input.setAttribute('placeholder', 'Choose Gender')
        input.value = ''
        input.id = 'gender'
        arrow.setAttribute('src', 'img/Start/arrow.png')
        arrow.className = 'arrow gender-arr'

        drop_menu.className = 'drop-menu'
        male.className = 'male'
        male.setAttribute('onclick', 'addInput("Male")')
        male.innerHTML = 'Male'
        female.className = 'female'
        female.setAttribute('onclick', 'addInput("Female")')
        female.innerHTML = 'Female'

         // Add on page
         div.replaceWith(block)
         block.append(context)
         context.append(img)
         context.append(input)
         context.append(arrow)

         block.append(drop_menu)
         drop_menu.append(male)
         drop_menu.append(hr)
         drop_menu.append(female)

         // Focus
        input.focus()
    }
    else{
        input.type = 'number'
    }
    
    
}


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
    let arrow = document.querySelector('.gender-arr')
    var animation = arrow.animate([
      {transform: 'rotate(90deg)'},
      {transform: 'rotate(0)'}
    ], 100);
      animation.addEventListener('finish', function() {
      arrow.style.transform = 'rotate(0)';
    });
}

function animateCloseMenu() {
    let arrow = document.querySelector('.gender-arr')
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

