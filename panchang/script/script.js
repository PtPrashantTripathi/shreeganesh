// Elements
let date_input = document.getElementById("date");
let time_input = document.getElementById("time");
var city_input = document.getElementById("city");
let tz_input = document.getElementById("tz");

let latitude_input = document.getElementById("lat");
let longitude_input = document.getElementById("lon");
let massage = document.getElementById("message");
let opt_switch = document.getElementById("advanced_options_switch");
let advanced_options = document.getElementById("advanced_options");

// Set current date time and timezone
let now = new Date;
date_input.valueAsDate = now;
time_input.value = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
tz_input.value = now.getTimezoneOffset() / -60;


function update_latlon_via_input() {
    if (city_input.value.length > 0) {
        console.log(city_input.value);
        let city_data = city_list.find(v => v[0] == city_input.value);
        if (Array.isArray(city_data)) {
            console.log(city_data);
            latitude_input.value = city_data[1];
            longitude_input.value = city_data[2];
            tz_input.value = city_data[3];
        }
        else {
            update_latlon_via_gps();
        }
    }
}

// Set default Geo Location
// Current : Ujjain, Madhya Pradesh, India (23.179300, 75.784912) 
function update_latlon_via_gps() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            latitude_input.value = position.coords.latitude;
            longitude_input.value = position.coords.longitude;
            tz_input.value = now.getTimezoneOffset() / -60;
        }
        );
    } else {
        massage.innerHTML = "Geolocation is not supported by this browser.";
    }
}


// Toggle Advanced Options
opt_switch.onchange = (e) => {
    console.log(e.target.checked);
    advanced_options.classList.toggle("active");
    if (advanced_options.style.maxHeight) {
        advanced_options.style.maxHeight = null;
    } else {
        update_latlon_via_gps();
        advanced_options.style.maxHeight = advanced_options.scrollHeight + "px";
    }
}

// Auto complete
var currentFocus;
city_input.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    closeAllLists();
    if (!val)
        return false;
    currentFocus = -1;

    a = document.createElement("div");
    a.setAttribute("id", this.id + "-ac-list");
    a.setAttribute("class", "ac-items");
    this.parentNode.appendChild(a);

    for (i = 0; i < city_list.length; i++) {
        if (city_list[i][0].toLowerCase().includes(val.toLowerCase())) {
            var regex = new RegExp(val, 'g');
            b = document.createElement("div");
            b.innerHTML = city_list[i][0].replace(regex, `<strong>${val}</strong>`);
            b.innerHTML += "<input type='hidden' value='" + city_list[i][0] + "'>";
            b.addEventListener("click", function (e) {
                city_input.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
                update_latlon_via_input();
            });
            a.appendChild(b);
        }
    }
});

city_input.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "-ac-list");
    if (x)
        x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
    } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
    } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
            if (x)
                x[currentFocus].click();
        }
    }
});
function addActive(x) {
    if (!x)
        return false;
    removeActive(x);
    if (currentFocus >= x.length)
        currentFocus = 0;
    if (currentFocus < 0)
        currentFocus = (x.length - 1);
    x[currentFocus].classList.add("ac-active");
}
function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("ac-active");
    }
}
function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("ac-items");
    for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != city_input) {
            x[i].parentNode.removeChild(x[i]);
        }
    }
}

// close the city option suggations on clicking anywhere in the screen
document.onclick = (e) => closeAllLists(e.target);


