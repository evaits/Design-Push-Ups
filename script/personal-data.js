// Get user
let user = localStorage.getItem('user');
user = JSON.parse(user);

// Print Data
document.querySelector('.FirstName-data').innerHTML = user.firstName;

document.querySelector('.LastName-data').innerHTML = user.lastName;

document.querySelector('.gender-data').innerHTML = user.gender;

document.querySelector('.age-data').innerHTML = user.age + 'yo';

document.querySelector('.weight-data').innerHTML = user.weight + 'kg';

document.querySelector('.height-data').innerHTML = user.height + 'cm';

document.querySelector('.repeats').innerHTML = user.daily + ' Repeats';

document.querySelector('.type-data').innerHTML = user.sport;

let array_keys = [];
// Create Edit Window
function edit(name) {
    let div = document.querySelector('.' + name);
    let button = document.querySelector('.btn');
    button.innerHTML = 'Save';
    button.setAttribute('onclick', 'save_data()');
    array_keys.push(name);
    // Check Type
    if (name == 'firstName' || name == 'lastName') {
        let placeholder = document.querySelector(
            '.placeholder_' + name
        ).textContent;

        // Create Elements
        let block = document.createElement('div');
        let input = document.createElement('input');
        let img = document.createElement('img');

        // Add Atributs
        block.className = 'block block_' + name;
        img.className = 'img';
        img.setAttribute('src', 'img/personal-data/' + name + '.png');
        input.className = 'input input_' + name;
        input.setAttribute('placeholder', placeholder);

        // Add on page
        div.replaceWith(block);
        block.append(img);
        block.append(input);

        // Focus
        input.focus();
    } else if (name == 'gender') {
        // Create Elements
        let block = document.createElement('div');
        let context = document.createElement('div');
        let img = document.createElement('img');
        let input = document.createElement('input');
        let arrow = document.createElement('img');
        let drop_menu = document.createElement('div');
        let male = document.createElement('div');
        let hr = document.createElement('hr');
        let female = document.createElement('div');

        // Add Atributs
        block.className = 'block gender block_' + name;
        context.className = 'context';
        context.setAttribute('onclick', 'open_dropMenu()');
        img.className = 'img';
        img.setAttribute('src', 'img/personal-data/gender.png');
        input.className = 'input input_' + name;
        input.setAttribute('disabled', true);
        input.setAttribute('placeholder', 'Choose Gender');
        input.value = '';
        input.id = 'gender';
        arrow.setAttribute('src', 'img/Start/arrow.png');
        arrow.className = 'arrow gender-arr';

        drop_menu.className = 'drop-menu';
        male.className = 'male';
        male.setAttribute('onclick', 'addInput("Male")');
        male.innerHTML = 'Male';
        female.className = 'female';
        female.setAttribute('onclick', 'addInput("Female")');
        female.innerHTML = 'Female';

        // Add on page
        div.replaceWith(block);
        block.append(context);
        context.append(img);
        context.append(input);
        context.append(arrow);

        block.append(drop_menu);
        drop_menu.append(male);
        drop_menu.append(hr);
        drop_menu.append(female);

        // Focus
        open_dropMenu();
    } else if (name == 'age' || name == 'daily') {
        let placeholder = document.querySelector(
            '.placeholder_' + name
        ).textContent;

        // Create Elements
        let block = document.createElement('div');
        let input = document.createElement('input');
        let img = document.createElement('img');

        // Add Atributs
        block.className = 'block block_' + name;
        img.className = 'img';
        img.setAttribute('src', 'img/personal-data/' + name + '.png');
        input.className = 'input input_' + name;
        input.setAttribute('placeholder', placeholder);
        input.type = 'number';

        // Add on page
        div.replaceWith(block);
        block.append(img);
        block.append(input);

        // Focus
        input.focus();
    } else if (name == 'sport') {
        // Create Elements
        let block = document.createElement('div');
        let context = document.createElement('div');
        let img = document.createElement('img');
        let input = document.createElement('input');
        let arrow = document.createElement('img');
        let drop_menu = document.createElement('div');
        let push = document.createElement('div');
        let hr = document.createElement('hr');
        let squat = document.createElement('div');

        // Add Atributs
        block.className = 'block sport block_' + name;
        context.className = 'context';
        context.setAttribute('onclick', 'open_dropMenuSport()');
        img.className = 'img';
        img.setAttribute('src', 'img/personal-data/sport.png');
        input.className = 'input input_' + name;
        input.setAttribute('disabled', true);
        input.setAttribute('placeholder', 'Choose Gender');
        input.value = '';
        input.id = 'sport';
        arrow.setAttribute('src', 'img/Start/arrow.png');
        arrow.className = 'arrow sport-arr';

        drop_menu.className = 'drop-menu-sport';
        push.className = 'push';
        push.setAttribute('onclick', 'addInputSport("Push Up")');
        push.innerHTML = 'Push Up';
        squat.className = 'squat';
        squat.setAttribute('onclick', 'addInputSport("Squat")');
        squat.innerHTML = 'Squat';

        // Add on page
        div.replaceWith(block);
        block.append(context);
        context.append(img);
        context.append(input);
        context.append(arrow);

        block.append(drop_menu);
        drop_menu.append(push);
        drop_menu.append(hr);
        drop_menu.append(squat);

        // Focus
        open_dropMenuSport();
    } else {
        let placeholder = document.querySelector(
            '.placeholder_' + name
        ).textContent;

        // Create Elements
        let block_wrapper = document.createElement('div');
        let block = document.createElement('div');
        let img = document.createElement('img');
        let input = document.createElement('input');
        let img_block = document.createElement('img');

        // Add Atributs
        block_wrapper.className = 'block-wrapper';
        block.className = 'block last block_' + name;
        img.className = 'img';
        img.setAttribute('src', 'img/Start/' + name + '.png');
        input.className = 'input input_' + name;
        input.setAttribute('placeholder', placeholder);
        input.type = 'number';
        img_block.className = 'size';
        img_block.setAttribute(
            'src',
            'img/personal-data/' + name + '-block.png'
        );

        // Add on page
        div.replaceWith(block_wrapper);
        block_wrapper.append(block);
        block.append(img);
        block.append(input);
        block_wrapper.append(img_block);

        // Focus
        input.focus();
    }
}

function save_data() {
    let count = 0;
    for (let i = 0; i < array_keys.length; i++) {
        let element = document.querySelector('.input_' + array_keys[i]);
        if (element.value.length < 2) {
            let block = document.querySelector('.block_' + array_keys[i]);
            element.classList.add('placeholder');
            block.style.background = '#D7D7D7';
            element.style.background = '#D7D7D7';

            block.onclick = function () {
                element.classList.remove('placeholder');
                block.style.background = '#F7F8F8';
                element.style.background = '#F7F8F8';
            };
            count = 1;
        }
    }
    if (count != 0) {
        return;
    }
    for (let i = 0; i < array_keys.length; i++) {
        let element = document.querySelector('.input_' + array_keys[i]);
        let key = array_keys[i];
        user[key] = element.value;
    }

    // Save Data
    localStorage.setItem('user', JSON.stringify(user));
    location.reload();
}

function toProfile() {
    location = 'profile.html';
}

// Open Drop Menu SPort
let count_menuSport = 0;
function open_dropMenuSport() {
    if (count_menuSport % 2 == 0) {
        count_menuSport++;
        let drop_menu = document.querySelector('.drop-menu-sport');
        drop_menu.style.display = 'block';
        animateOpenMenuSport();
    } else {
        count_menuSport = 0;
        let drop_menu = document.querySelector('.drop-menu-sport');
        drop_menu.style.display = 'none';
        animateCloseMenuSport();
    }
}

// Animation Sport
function animateOpenMenuSport() {
    let arrow = document.querySelector('.sport-arr');
    var animation = arrow.animate(
        [{ transform: 'rotate(90deg)' }, { transform: 'rotate(0)' }],
        100
    );
    animation.addEventListener('finish', function () {
        arrow.style.transform = 'rotate(0)';
    });
}

function animateCloseMenuSport() {
    let arrow = document.querySelector('.sport-arr');
    var animation = arrow.animate(
        [{ transform: 'rotate(0)' }, { transform: 'rotate(90deg)' }],
        100
    );
    animation.addEventListener('finish', function () {
        arrow.style.transform = 'rotate(90deg)';
    });
}

// Open Drop Menu
let count_menu = 0;
function open_dropMenu() {
    if (count_menu % 2 == 0) {
        count_menu++;
        let drop_menu = document.querySelector('.drop-menu');
        drop_menu.style.display = 'block';
        animateOpenMenu();
    } else {
        count_menu = 0;
        let drop_menu = document.querySelector('.drop-menu');
        drop_menu.style.display = 'none';
        animateCloseMenu();
    }
}

// Animation
function animateOpenMenu() {
    let arrow = document.querySelector('.gender-arr');
    var animation = arrow.animate(
        [{ transform: 'rotate(90deg)' }, { transform: 'rotate(0)' }],
        100
    );
    animation.addEventListener('finish', function () {
        arrow.style.transform = 'rotate(0)';
    });
}

function animateCloseMenu() {
    let arrow = document.querySelector('.gender-arr');
    var animation = arrow.animate(
        [{ transform: 'rotate(0)' }, { transform: 'rotate(90deg)' }],
        100
    );
    animation.addEventListener('finish', function () {
        arrow.style.transform = 'rotate(90deg)';
    });
}

// Print gender to Input
function addInput(gender) {
    document.querySelector('#gender').value = gender;
    count_menu = 1;
    open_dropMenu();
    window.gender_global = gender;
}

// Print gender to Input Sport
function addInputSport(type) {
    document.querySelector('#sport').value = type;
    count_menuSport = 1;
    open_dropMenuSport();
}

// Jquery click outside input
$(document).ready(function () {
    $(document).mouseup(function (e) {
        // событие клика по веб-документу
        if (count_menu % 2 != 0) {
            var drop_menu = $('.drop-menu');
            var div = $('.gender'); // тут указываем ID элемента
            if (
                !div.is(e.target) && // если клик был не по нашему блоку
                div.has(e.target).length === 0
            ) {
                // и не по его дочерним элементам
                drop_menu.hide(); // скрываем его
                animateCloseMenu();
                count_menu = 0;
            }
        }
        if (count_menuSport % 2 != 0) {
            var drop_menu = $('.drop-menu-sport');
            var div = $('.sport'); // тут указываем ID элемента
            if (
                !div.is(e.target) && // если клик был не по нашему блоку
                div.has(e.target).length === 0
            ) {
                // и не по его дочерним элементам
                drop_menu.hide(); // скрываем его
                animateCloseMenuSport();
                count_menuSport = 0;
            }
        }
    });
});

//Localization
// Change url
location.href = window.location.pathname + '#' + user.lang;

const arrLeng = ['en', 'ua'];

function changeLang() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!arrLeng.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    // user = hash;
    if (hash == 'ua') {
        for (key in personalLng) {
            const text = document.querySelectorAll('.lng-' + key);
            for (let i = 0; i < text.length; i++) {
                text[i].innerHTML = personalLng[key]['ua'];
                text[i].style.fontFamily = '"Roboto Mono",monospace';
            }
        }
    }
}

changeLang();
