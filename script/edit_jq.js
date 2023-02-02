$(document).ready(function () {
    $('.btn').on("click", function(){
        
        var id = this.id
        id = id.slice(1)
        var date = localStorage.key(id)
        var value = localStorage.getItem(date)

        $('.modal-title').html(localStorage.key(id))
        $('.modal').css('display', 'block')
        $('#much').attr('placeholder', value)


        $('#btn-save').on("click", function(){
            var input = $('.input').val()
            if(input == ''){
                alert('Error');
                return
            }
            localStorage.setItem(date, input)
            location = location
        })

    })
    
});
