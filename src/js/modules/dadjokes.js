const api = "https://icanhazdadjoke.com/";

export const fetchJoke = fetch(api)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    document.querySelector(".quote").innerText = data[0];
  });
