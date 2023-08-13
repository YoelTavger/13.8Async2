async function getJokes() {
  const response = await fetch(
    "https://api.humorapi.com/jokes/search?api-key=03bd5730078f42efac53ed4b90308e1d");
  const data = await response.json();
  return data.jokes[0].joke;
}
getJokes().then((joke) => {
  const div = document.createElement("div");
  div.textContent = joke;
  document.body.appendChild(div);
});
