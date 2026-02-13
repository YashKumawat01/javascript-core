const URL = "https://meowfacts.herokuapp.com/";
const fact = document.querySelector(".facts")

const factBtn = document.querySelector("#get-fact")

// factBtn.addEventListener("click",getFacts)

const getFacts = async () => {
  console.log("getting data...");

  let response = await fetch(URL);
  let data = await response.json();

  console.log(data.data[0]); // ✅ correct
  fact.innerText = data.data[0]
};

// getFacts();

factBtn.addEventListener("click",getFacts)
