// Modal
let count_modal = 0
function open_modal() {
    if(count_modal%2==0){
        count_modal++
        document.querySelector('.modal-bg').style.display = 'block'
        animateOpenModal()
    }
    else {
        count_modal++
        document.querySelector('.modal-bg').style.display = 'none'
        animateCloseModal()
    }
}

// Animation
function animateOpenModal() {
    let plus = document.querySelector('.plus')
    var animation = plus.animate([
        {transform: 'rotate(0)'},
        {transform: 'rotate(-45deg)'}
      ], 100);
      animation.addEventListener('finish', function() {
        plus.style.transform = 'rotate(-45deg)';
      });
}

function animateCloseModal() {
    let plus = document.querySelector('.plus')
    var animation = plus.animate([
        {transform: 'rotate(-45deg)'},
        {transform: 'rotate(0)'}
      ], 100);
      animation.addEventListener('finish', function() {
        plus.style.transform = 'rotate(0)';
      });
}