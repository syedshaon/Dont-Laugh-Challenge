async function generateJoke() {
  const response = await fetch("http://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  //   console.log(data.joke);
  document.getElementById("newJoke").innerHTML = data.joke;
}

export default generateJoke;
