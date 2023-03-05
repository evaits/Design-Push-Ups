// Get user
let user = localStorage.getItem('user');
user = JSON.parse(user);

// Print Data
document.querySelector('.name').innerHTML =
    user.firstName + ' ' + user.lastName;

document.querySelector('.height').innerHTML = user.height + 'cm';

document.querySelector('.weight').innerHTML = user.weight + 'kg';

document.querySelector('.age').innerHTML = user.age + 'yo';

let avatar = document.querySelector('.avatar');

if (user.gender == 'Female') {
    avatar.setAttribute('src', 'img/profile/avatar-woman.png');
} else {
    avatar.setAttribute('src', 'img/profile/avatar-boy.png');
}

// Back
function goBack() {
    window.history.back();
}

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
    user = hash;
    if (hash == 'ua') {
        for (key in profileLng) {
            const text = document.querySelectorAll('.lng-' + key);
            for (let i = 0; i < text.length; i++) {
                text[i].innerHTML = profileLng[key]['ua'];
                text[i].style.fontFamily = '"Roboto Mono",monospace';
            }
        }
    }
}

changeLang();
