// User
if(localStorage.getItem('user') == null) {
    location = 'start/start1.html'
}

// Get user
let user = JSON.parse(localStorage.getItem('user'));

// Print Language
let lang_info = document.querySelector('.lang-data');
user.lang == 'en'
    ? (lang_info.innerHTML = 'English')
    : (lang_info.innerHTML = 'Ukrainian');

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
        [{ transform: 'rotate(-90deg)' }, { transform: 'rotate(0)' }],
        100
    );
    animation.addEventListener('finish', function () {
        arrow.style.transform = 'rotate(0)';
    });
}

function animateCloseMenu() {
    let arrow = document.querySelector('.arrow');
    var animation = arrow.animate(
        [{ transform: 'rotate(0)' }, { transform: 'rotate(-90deg)' }],
        100
    );
    animation.addEventListener('finish', function () {
        arrow.style.transform = 'rotate(-90deg)';
    });
}

// Print gender to Input
function addInput(type) {
    let inp = document.querySelector('.lang-data');
    type == 'en' ? (inp.innerHTML = 'English') : (inp.innerHTML = 'Ukrainian');
    count_menu = 1;
    user.lang = type;
    localStorage.setItem('user', JSON.stringify(user));
    open_dropMenu();
    location.reload();
}

// Jquery click outside input
$(document).ready(function () {
    $(document).mouseup(function (e) {
        // событие клика по веб-документу
        if (count_menu % 2 != 0) {
            var drop_menu = $('.drop-menu');
            var div = $('.language'); // тут указываем ID элемента
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

// Localization
if (user.lang == undefined) {
    user.lang = 'en';
    localStorage.setItem('user', JSON.stringify(user));
}

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
        for (key in settingsLng) {
            const text = document.querySelectorAll('.lng-' + key);
            for (let i = 0; i < text.length; i++) {
                text[i].innerHTML = settingsLng[key]['ua'];
                text[i].style.fontFamily = '"Roboto Mono",monospace';
            }
        }
    }
}

changeLang();

// Dell Statistics
function dell_stat() {
    if ((user.lang == 'en')) {
        let ask = confirm('Do you want to delete Statistics??');
        if (ask) {
            let prom = prompt('Write "Delete"');
            if (prom == 'Delete') {
                let i = 0;
                do {
                    let local = localStorage.key(i);
                    if (local == 'user' || local == 'today') {
                        i++;
                    } else {
                        localStorage.removeItem(local);
                        i = 0;
                    }
                } while (localStorage.length > 2);
                alert('Statistics Deleted');
                location.reload();
            } else {
                alert('The operation is cancelled');
            }
        } else {
            alert('The operation is cancelled');
        }
    } else {
        let ask = confirm('Ти хочеш видалити Статистику?');
        if (ask) {
            let prom = prompt('Напишіть "Видалити"');
            if (prom == 'Видалити') {
                let i = 0;
                do {
                    let local = localStorage.key(i);
                    if (local == 'user' || local == 'today') {
                        i++;
                    } else {
                        localStorage.removeItem(local);
                        i = 0;
                    }
                } while (localStorage.length > 2);
                alert('Статистика Видалена');
                location.reload();
            } else {
                alert('Операція припинена');
            }
        } else {
            alert('Операція припинена');
        }
    }
}

// Dell Account
function dell_acc() {
    if ((user.lang == 'en')) {
        let ask = confirm('Do you want to delete Account?');
        if (ask) {
            let prom = prompt('Write "Delete"');
            if (prom == 'Delete') {
                localStorage.clear()
                alert('Account Deleted');
                location.reload();
            } else {
                alert('The operation is cancelled');
            }
        } else {
            alert('The operation is cancelled');
        }
    } else {
        let ask = confirm('Ти хочеш видалити Аккаунт?');
        if (ask) {
            let prom = prompt('Напишіть "Видалити"');
            if (prom == 'Видалити') {
                localStorage.clear()
                alert('Аккаунт Видалена');
                location.reload();
            } else {
                alert('Операція припинена');
            }
        } else {
            alert('Операція припинена');
        }
    }
}