let countDownDate = new Date("Mar 15, 2021 22:00:00").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();
  let left = countDownDate - now;

  let hours = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((left % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML =
    hours + "h