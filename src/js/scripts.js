import {fetchJoke} from "./modules/dadjokes.js";


var popupOuter = document.querySelector(".popup-outer");
var popupInner = document.querySelector(".popup .message");

var avatarContent = `
<h2>Jokes will appear here</h2>
<p>If I figure this s**t out!!<p>
`;

function showPopup(event) {
  if (event.target.matches(".avatar")) {
    popupInner.innerHTML = avatarContent;
    popupOuter.classList.add("open");
  } else if (event.target.matches(".closer, .popup-outer")){
    popupOuter.classList.remove("open");
  } else return;

  event.preventDefault();
}

document.addEventListener("click", showPopup);