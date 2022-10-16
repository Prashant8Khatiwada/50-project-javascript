const jokeEl = document.getElementById("jokes");
const btn = document.querySelector(".btn");

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeEl.innerText = data.joke;
}
