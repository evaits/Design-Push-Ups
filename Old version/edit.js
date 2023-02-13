if (localStorage.getItem('arr')) {
    let ul = document.querySelector('ul')
    let arr = localStorage.getItem('arr')
    let today = localStorage.getItem('today')


    let sum;
    arr = arr.split(',')  
    for(let i = 0; i<arr.length; i++){
        arr[i] = Number(arr[i])
    }
    arr.map((item) => sum += item);

    let li;
    let div;
    let span1;
    let span2;
    var btn;

    for(let i = 0; i<localStorage.length; i++){
        if((localStorage.key(i)=='arr') || (localStorage.key(i) == "today")){
            continue
        }
        li = document.createElement('li')
        div = document.createElement('div')
        span1 = document.createElement('span')
        span2 = document.createElement('span')
        btn = document.createElement('button')
        
    
        li.className = "table"
        div.className = "info";
        span1.className = "data"
        span2.className = "number"
        btn.className = "btn"
        btn.id = '_'+i


        local = localStorage.key(i)
        
        span1.innerHTML = local
        span2.innerHTML = localStorage.getItem(local)
        btn.innerHTML = "Edit"
        

        div.append(span1)
        div.append(span2)
        li.append(div)
        li.append(btn)
        ul.prepend(li)
    }
}


// Close modal
let modal = document.querySelector(".modal")
let inp = document.querySelector("#much")

function close_modal() {
    modal.style.display = "none"
    inp.value = ''
}

// Do focus on btn