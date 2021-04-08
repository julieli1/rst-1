// declares variable in minutes
let startmin = 0
// converts minutes into seconds
let time = startmin * 60

document.getElementById('start').addEventListener('click', countdown)

function countdown() {
  // updates the startmin into input value
  startmin = document.getElementById('input').value
  startmin = parseInt(startmin)
  time = startmin * 60

  // updates the countown every one second
  let x = setInterval(countdown, 1000)
  // calculates how many minutes are left
  let minutes = Math.floor(time / 60)
  // modulus, division remainder
  let seconds = time % 60

  // makes it two digits so it's more aesthetically pleasing
  let m = String(minutes).padStart(2, '0')
  let s = String(seconds).padStart(2, '0')

  // updates the time negatively so that it's a countdown and not a timer
  time--

  // updates the html so we can see the timer going
  document.getElementById('time-left').innerHTML = m + ':' + s

  // prevents the timer going into negative time
  while ((minutes <= 0) && (seconds <=0)) {
    x = clearInterval(x)
  }
}
