var sound = new Audio("./ringtone.mp3");
sound.loop = true;

var clock = document.getElementById("clock");

var currentTime = setInterval(function () {
  //stores time and date
  var date = new Date();

  // to convert time after 12 into 1, 2
  var hours = date.getHours();
  hours = hours % 12 || 12;
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = date.getHours() < 12 ? "AM" : "PM";

  if (hours < 0) {
    hours = hours * -1;
  } else if (hours == 00) {
    hours = 12;
  } else {
    hours = hours;
  }

  clock.textContent =
    addZero(hours) +
    ":" +
    addZero(minutes) +
    ":" +
    addZero(seconds) +
    ":" +
    ampm;
}, 1000);

function addZero(time) {
  return time < 10 ? "0" + time : (time = time);
}

//to show hours in clock
function showHours() {
  var select = document.getElementById("alarm-hours");
  var hrs = 12;

  for (i = 1; i <= hrs; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i);
  }
}

showHours();

//to show minutes in clock
function showMinutes() {
  var select = document.getElementById("alarm-min");
  var min = 59;

  for (i = 1; i <= min; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i);
  }
}

showMinutes();

//to show seconds in clock
function showSeconds() {
  var select = document.getElementById("alarm-sec");
  var sec = 59;

  for (i = 1; i <= sec; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i);
  }
}

showSeconds();

//set alarm
function setAlarm() {
  alert("alarm added successfully");
  var hr = document.getElementById("alarm-hours");
  var min = document.getElementById("alarm-min");
  var sec = document.getElementById("alarm-sec");
  var ampm = document.getElementById("ampm");

  var selectHrs = hr.options[hr.selectedIndex].value;
  var selectMin = min.options[min.selectedIndex].value;
  var selectSec = sec.options[sec.selectedIndex].value;
  var selectAp = ampm.options[ampm.selectedIndex].value;

  var alarmTime =
    selectHrs + ":" + selectMin + ":" + selectSec + ":" + selectAp;

  console.log(alarmTime);

  hr.disabled = true;
  min.disabled = true;
  sec.disabled = true;
  ampm.disabled = true;

  //for play item
  setInterval(function () {
    var date = new Date();
    var hours = 12 - date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = date.getHours() < 12 ? "AM" : "PM";

    if (hours < 0) {
      hours = hours * -1;
    } else if (hours == 00) {
      hours = 12;
    } else {
      hours = hours;
    }

    var currentTime = (clock.textContent =
      addZero(hours) +
      ":" +
      addZero(minutes) +
      ":" +
      addZero(seconds) +
      ":" +
      ampm);

    if (alarmTime == currentTime) {
      sound.play();
    }
  }, 1000);
}

function clearAlarm() {
  document.getElementById("alarm-hours").disabled = false;
  document.getElementById("alarm-min").disabled = false;
  document.getElementById("alarm-sec").disabled = false;
  document.getElementById("ampm").disabled = false;

  sound.pause();
}
