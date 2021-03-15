let countDownDate = new Date();

let x = setInterval(function () {
  let now = new Date().getTime();
  let left = countDownDate.setHours(22, 00, 00) - now;

  let hours = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((left % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML =
    hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);
