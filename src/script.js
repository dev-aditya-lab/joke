let URL = "https://hindi-jokes-api.onrender.com/jokes?api_key=23064c947a301e78c2bac6f7eb8c";
let joke = document.querySelector("#joke");
let newjoke = document.querySelector("#newJokeBtn")
let loader = document.querySelector("#loader");

// Function to fetch joke from API

async function getJoke () {
    joke.textContent = "";
    loader.classList.remove('hidden');
  try {
    let response = await fetch(URL);
    let data = await response.json();
    loader.classList.add('hidden'); 
    joke.textContent = data.jokeContent;
  } catch (error) {
    loader.classList.add('hidden'); 
    console.error("Error fetching joke:", error);
  }
}



getJoke();  