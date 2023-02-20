// Get user
let user = localStorage.getItem('user')
user = JSON.parse(user)

// Print Data
document.querySelector('.name').innerHTML = user.FirstName + ' ' + user.LastName

document.querySelector('.height').innerHTML = user.height + 'cm'

document.querySelector('.weight').innerHTML = user.weight + 'kg'

document.querySelector('.age').innerHTML = user.age + 'yo'

let avatar = document.querySelector('.avatar')

if(user.sex == 'Female') {
    avatar.setAttribute('src', 'img/profile/avatar-woman.png')
}
else{
    avatar.setAttribute('src', 'img/profile/avatar-boy.png')
}

// Back
function goBack(){
    window.history.back();
};