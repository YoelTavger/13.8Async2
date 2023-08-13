async function getJokes() {
  const response = await fetch("https://api.humorapi.com/jokes/search");
  const dataJokes = await response.json();
  console.log(dataJokes);
}
getJokes()
