const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener("click", function () {
  //When this element is clicked, the code inside the anonymous function (the function without a name) will be executed.
  links.classList.toggle("show_nav"); // Within the event listener function, this line toggles the class "show_nav" on the links element. Specifically, it uses the classList.toggle method to add the class if it's not present and remove it if it is present. This class is likely used for styling or controlling the visibility of the navigation menu.
});
