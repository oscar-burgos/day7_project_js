

var body = document.body;
console.log(body);

document.addEventListener("keydown", function(event) {

  var x = event.keyCode;
  document.getElementById("keycode-display").innerHTML = event.keyCode;
  document.getElementById("text-display").innerHTML = x;
})
