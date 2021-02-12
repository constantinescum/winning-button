function random(id) {
  var noButtons = document.getElementById('no-buttons').value;
  if (Math.floor(Math.random() * noButtons) == id) {
    alert("You won!");
  } else {
    alert("You lost!");
  }
}

function choose() {
  var noButtons = document.getElementById('no-buttons').value;
  for (var i = 1; i <= noButtons; ++i) {
    document.getElementById("buttons").innerHTML +=
    `<button class="btn btn-primary mr-2" id="button${i}" type="button"
             onclick="return random(${i});">Button ${i}</button>`;
  }
  return false;
}
