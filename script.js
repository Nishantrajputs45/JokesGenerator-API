const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

jokeBtn.addEventListener("click", getJokes);

function getJokes() {
  joke.innerText = "";

  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      joke.innerText = `${item.joke}`;
    });
}
