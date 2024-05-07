console.log("Loaded ModalScript.js")
var mod1 = document.getElementById("modal_hud_one");  
var btn1 = document.getElementById("btn_one");  
var span = document.getElementsByClassName("close")[0]; 
btn1.onclick = function() {
  mod1.style.display = "block"; 
}
window.onclick = function(event) {
  if (event.target == mod1) {
    mod1.style.display = "none";  
  }
}
window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = 'If you exit all your output text and logged text will be lost! Are you sure you wish';

    (e || window.event).returnValue = confirmationMessage; 
    return confirmationMessage; 
});