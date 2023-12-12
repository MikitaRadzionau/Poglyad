var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var button = document.querySelector(".btn");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("huge-container")
}
// button.onclick = function(){
//     button.classList.toggle("active")
// }