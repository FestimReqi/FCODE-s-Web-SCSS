var cursor = document.querySelector(".cursor");
var cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function(e){
  cursor.style.cssText = cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});