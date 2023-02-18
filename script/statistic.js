if(localStorage.getItem("arr") == null){
    localStorage.setItem("arr", 0)
    localStorage.setItem('best', 0)
  }

// Arr
let arr = []
arr = localStorage.getItem("arr")
arr = arr.split(',')
for(let i = 0; i<arr.length; i++){
  arr[i] = Number(arr[i])
}

let sum = 0
for(let i = 0; i<arr.length; i++){
    sum += Number(arr[i])
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
for(let i = 0; i<date.length && i<6; i++){
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
labels.unshift('today')

// Get value from localStorage
let data = []
for(let i = 0; i<labels.length; i++){
    data.push(localStorage.getItem(date[i]))
}
data.unshift(sum)
// data = data.reverse()

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
    // Days
let days = document.querySelector('.days').innerHTML = data.length + ' days'

    // Times
let times = 0;
for(let i = 0; i<data.length; i++){
    times += Number(data[i])
}
for(let i = 0; i<arr.length; i++){
    times += Number(arr[i])
}
let repeats = document.querySelector('.times').innerHTML = times + ' times in ' + data.length + ' days' 


    // Best
let best = localStorage.getItem('best')
document.querySelector('.best').innerHTML = best + ' times in one approach'

// Back
function goBack(){
    window.history.back();
};