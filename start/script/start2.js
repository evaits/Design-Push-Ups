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
    let arrow = document.querySelector('.arrow');
    var animation = arrow.animate(
        [{ transform: 'rotate(90deg)' }, { transform: 'rotate(0)' }],
        100
    );
    animation.addEventListener('finish', function () {
        arrow.style.transform = 'rotate(0)';
    });
}

function animateCloseMenu() {
    let arrow = document.querySelector('.arrow');
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
    });
});

// Get data
function save_data() {
    // First Name
    let count = 0;
    let firstName = document.querySelector('#FirstName');
    let block_firstName = document.querySelector('.firstName');
    if (firstName.value.length < 2) {
        firstName.classList.add('placeholder');
        block_firstName.style.background = '#D7D7D7';
        firstName.style.background = '#D7D7D7';
        block_firstName.onclick = function () {
            firstName.classList.remove('placeholder');
            block_firstName.style.background = '#F7F8F8';
            firstName.style.background = '#F7F8F8';
        };
        count++;
    }

    // Last Name
    let lastName = document.querySelector('#LastName');
    let block_lastName = document.querySelector('.lastName');
    if (lastName.value.length < 2) {
        lastName.classList.add('placeholder');
        block_lastName.style.background = '#D7D7D7';
        lastName.style.background = '#D7D7D7';
        block_lastName.onclick = function () {
            lastName.classList.remove('placeholder');
            block_lastName.style.background = '#F7F8F8';
            lastName.style.background = '#F7F8F8';
        };
        count++;
    }

    // Gender
    let gender_value = window.gender_global;
    let gender = document.querySelector('#gender');
    let context_gender = document.querySelector('.context');
    let block_gender = document.querySelector('.gender');
    if (gender_value == undefined) {
        gender.classList.add('placeholder');
        context_gender.style.background = '#D7D7D7';
        gender.style.background = '#D7D7D7';
        block_gender.onclick = function () {
            gender.classList.remove('placeholder');
            context_gender.style.background = '#F7F8F8';
            gender.style.background = '#F7F8F8';
        };
        count++;
    }

    // Age
    age = document.querySelector('.age');
    let block_age = document.querySelector('.birthday');
    if (age.value < 3 || age.value > 100) {
        age.classList.add('placeholder');
        block_age.style.background = '#D7D7D7';
        age.style.background = '#D7D7D7';
        block_age.onclick = function () {
            age.classList.remove('placeholder');
            block_age.style.background = '#F7F8F8';
            age.style.background = '#F7F8F8';
        };
        count++;
    }

    // Weight
    weight = document.querySelector('.weight_inp');
    let block_weight = document.querySelector('.weight');
    if (weight.value < 10 || weight.value > 300) {
        weight.classList.add('placeholder');
        block_weight.style.background = '#D7D7D7';
        weight.style.background = '#D7D7D7';
        block_weight.onclick = function () {
            weight.classList.remove('placeholder');
            weight.style.background = '#F7F8F8';
            block_weight.style.background = '#F7F8F8';
        };
        count++;
    }

    // Height
    height = document.querySelector('.height_inp');
    let block_height = document.querySelector('.height');
    if (height.value < 50 || height.value > 250) {
        height.classList.add('placeholder');
        block_height.style.background = '#D7D7D7';
        height.style.background = '#D7D7D7';
        block_height.onclick = function () {
            height.classList.remove('placeholder');
            block_height.style.background = '#F7F8F8';
            height.style.background = '#F7F8F8';
        };
        count++;
    }

    if (count != 0) {
        alert('Invalid Data');
        return;
    }

    user = {
        firstName: firstName.value,
        lastName: lastName.value,
        gender: gender_value,
        age: age.value,
        weight: weight.value,
        height: height.value
    };
    localStorage.setItem('user', JSON.stringify(user));
    location = 'start3.html';
}
