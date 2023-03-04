if (localStorage.getItem("arr") == null) {
    localStorage.setItem("arr", 0);
}

if (localStorage.getItem("best") == null) {
    localStorage.setItem("best", 0);
}

// Arr
let arr = [];
arr = localStorage.getItem("arr");
arr = arr.split(",");
for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
}

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
}

// Sort and get Dates
let ms = [];

for (let i = 0; i < localStorage.length; i++) {
    if (
        localStorage.key(i) == "arr" ||
        localStorage.key(i) == "today" ||
        localStorage.key(i) == "best" ||
        localStorage.key(i) == "user"
    ) {
        continue;
    }

    ms.push(Date.parse(localStorage.key(i)));
}

ms.sort((a, b) => b - a);

const date = [];
for (let i = 0; i < ms.length; i++) {
    date.push(Intl.DateTimeFormat("en-US").format(ms[i]));
}
let labels = [];
for (let i = 0; i < date.length && i < 6; i++) {
    // Get date from Local Storage
    date_localStorage = date[i];
    if (date_localStorage.length == 8) {
        date_localStorage = date_localStorage.split("");
        date_localStorage.splice(2, 0, "0");
        date_localStorage = date_localStorage.join("");
    }

    // Reform date
    reform_date = date_localStorage.slice(0, 4);
    reform_date = reform_date.replace("/", ".");
    if (reform_date.length == 4) {
        reform_date = "0" + reform_date;
    }
    reform_date =
        reform_date[3] +
        reform_date[4] +
        reform_date[2] +
        reform_date[0] +
        reform_date[1];
    labels.push(reform_date);
}
labels.unshift("today");

// Get value from localStorage
let data = [];
for (let i = 0; i < labels.length; i++) {
    data.push(localStorage.getItem(date[i]));
}
data.unshift(sum);
// data = data.reverse()

// Graf
var ctx = document.querySelector(".graf");
Chart.defaults.color = "white";
Chart.defaults.font.family = "Poppins";
var myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: labels,
        datasets: [
            {
                label: "Repeats",
                data: data,
                borderColor: "white",
                fontcolor: "white",
                cubicInterpolationMode: "monotone",
                borderWidth: 2,
                pointHitRadius: 20,
                pointBorderColor: "white"
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: "white"
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        elements: {
            point: {
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
                titleColor: "#ADA4A5",
                titleFont: { weight: "400" },
                bodyColor: "#7B6F72",
                backgroundColor: "#FFFFFF"
            }
        }
    }
});

// Print stat

// Times
let times = 0;
for (let i = 0; i < data.length; i++) {
    times += Number(data[i]);
}

// Best
let best = localStorage.getItem("best");

// Get user
let user = localStorage.getItem("user");
user = JSON.parse(user);

// Print
if (user.lang == "en") {
    let days = (document.querySelector(".days").innerHTML =
        ms.length + 1 + " days");
    let repeats = (document.querySelector(".times").innerHTML =
        times + " times in " + Number(ms.length + 1) + " days");
    document.querySelector(".best").innerHTML = best + " times in one approach";
    if (user.sport == "Squat") {
        document.querySelector(".block-title-times").innerHTML = "You squatted";
    }
} else {
    let days = (document.querySelector(".days").innerHTML =
        ms.length + 1 + " днів");
    let repeats = (document.querySelector(".times").innerHTML =
        times + " повторів за " + Number(ms.length + 1) + " днів");
    document.querySelector(".best").innerHTML = best + " повтор за один підхід";
    if (user.sport == "Squat") {
        document.querySelector(".block-title-times").innerHTML = "Ти присів";
    } else {
        document.querySelector(".block-title-times").innerHTML = "Ти віджався";
    }
}

// Back
function goBack() {
    window.history.back();
}

        // Localisation
// Check lang
if (user.lang == undefined) {
    user.lang = "en";
}

// Change url
location.href = window.location.pathname + "#" + user.lang;

const arrLeng = ["en", "ua"];

function changeLang() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!arrLeng.includes(hash)) {
        location.href = window.location.pathname + "#en";
        location.reload();
    }
    user = hash;
    if (hash == "ua") {
        for (key in statLng) {
            const text = document.querySelectorAll(".lng-" + key);
            for (let i = 0; i < text.length; i++) {
                text[i].innerHTML = statLng[key][hash];
                if (key == "motivation1" || key == "motivation3") {
                    text[i].style.fontSize = "12px";
                }
                if (key == "titleDays") {
                    text[i].style.fontSize = "11px";
                }
                if (key == "titleBest") {
                    text[i].style.fontSize = "10.4px";
                }
                text[i].style.fontFamily = '"Roboto Mono",monospace';
            }
        }
    }
}

changeLang();

// Test
function a() {
    alert("Set item");
    localStorage.setItem("3/1/2023", 20);
    localStorage.setItem("3/2/2023", 40);
    location.reload();
}
