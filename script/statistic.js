if(localStorage.getItem("arr") == null){
    localStorage.setItem("arr", 0)
    localStorage.setItem('best', 0)
  }

// Sort and get Dates
let ms = []

for(let i = 0; i<localStorage.length; i++){
  if((localStorage.key(i)=='arr') || (localStorage.key(i) == "today") || (localStorage.key(i) == 'best')){
      continue
  }

  ms.push(Date.parse(localStorage.key(i)))
}

ms.sort((a, b) => b - a);

const date = []
for(let i = 0; i<ms.length; i++){
  date.push(Intl.DateTimeFormat('en-US').format(ms[i]))
}
let labels = []
for(let i = 0; i<date.length && i<7; i++){
    // Get date from Local Storage
    date_localStorage = date[i]

    // Reform date
    reform_date = date_localStorage.slice(0,4)
    reform_date = reform_date.replace('/', '.')
    if(reform_date.length == 4){
    reform_date = '0' + reform_date
    }
    reform_date = reform_date[3]+reform_date[4] + reform_date[2] + reform_date[0] + reform_date[1]
    labels.push(reform_date)
}

// Get value from localStorage
let data = []
for(let i = 0; i<labels.length; i++){
    data.push(localStorage.getItem(date[i]))
}

// Graf
var ctx = document.querySelector('.graf');
Chart.defaults.color = 'white';
Chart.defaults.font.family = 'Poppins';
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Repeats',
            data: data,
            borderColor: 'white',
            fontcolor: 'white',
            cubicInterpolationMode: 'monotone',
            borderWidth: 2,
            pointHitRadius: 20,
            pointBorderColor: 'white',
        }]
    },
    options: {
        scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'white'
              },
            },
            x: {
                grid: {
                  display: false
                }
            },
            
        },
        elements: {
            point:{
                radius: 1,
                displayColors: false
            }
            
        },
        
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                usePointStyle: true,
                displayColors: false,
                titleColor: '#ADA4A5',
                titleFont: {weight: '400'},
                bodyColor: '#7B6F72',
                backgroundColor: '#FFFFFF',
            },
            
        },
        
    }
});



        // Print stat
// Arr
let arr = []
arr = localStorage.getItem("arr")
arr = arr.split(',')
for(let i = 0; i<arr.length; i++){
  arr[i] = Number(arr[i])
}

    // Days
let days = document.querySelector('.days')
arr[0] == 0 ? days.innerHTML = data.length + ' days' : days.innerHTML = data.length+1 + ' days'
console.log(data)


    // Times
let times = 0;
for(let i = 0; i<data.length; i++){
    times += Number(data[i])
}
for(let i = 0; i<arr.length; i++){
    times += Number(arr[i])
}
let repeats = document.querySelector('.times')

arr[0] == 0 ? repeats.innerHTML = times + ' times in ' + data.length + ' days' : repeats.innerHTML = times + ' times in ' + Number(data.length+1) + ' days'

    // Best
let best = localStorage.getItem('best')
document.querySelector('.best').innerHTML = best + ' times in one approach'