var popupOuter = document.querySelector(".popup-outer");
var popupInner = document.querySelector(".popup .message");

function showPopup(event) {

  if (event.target.matches(".avatar")) {
    fetch ("https://icanhazdadjoke.com/",{
      headers:{
        'accept':'application/json'
      }
    })
    .then(response => response.json())
    .then(dadJoke => {
      popupInner.innerHTML = `
      <h2>Another f***ing dad joke:</h2>
      <p>${dadJoke.joke}<p>
      `; 
    });
    
    popupOuter.classList.add("open");
  } else if (event.target.matches(".closer, .popup-outer")){
    popupOuter.classList.remove("open");
  } else return;

  event.preventDefault();
}

document.addEventListener("click", showPopup);