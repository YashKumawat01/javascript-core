// Functions without Async , here the result is executed but setimout is still waiting so its show "Undefined"

function fetchData() {
  setTimeout(() => {
    return "Data received";
  }, 2000);
}

let result = fetchData();
// console.log(result);


// ============================================================================================
// ============================================================================================
// ============================================================================================
// ============================================================================================

// Now we Use Promise which states :
/*
    “I don’t have the value now. I promise I’ll give it later.”

Three states:

Pending

Resolved

Rejected
*/

let myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("DAta is Resolved")

    },2000)
})

myPromise.then((res)=>{
    // console.log(res)
})


// ============================================================================================
// ============================================================================================
// ============================================================================================
// ============================================================================================

// Now we Use Async-Await Here

/*
Rule 1:

async makes a function return a Promise automatically.

Rule 2:

await pauses execution until Promise resolves.
*/


function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

async function getData() {
  let result = await fetchData();
  console.log("Result is shown")
  console.log(result);
}

// getData();

// ================================================================================================
// ================================================================================================
// ================================================================================================
// ================================================================================================


// Real World APi Example


async function getUser() {

  let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  let data =await response.json()
 console.log(data)
}
// getUser()



// ================================================================================================
// ================================================================================================
// ================================================================================================
// ================================================================================================


async function checkError(){
  try{
    let response = await fetch ("https://wrong-url.com")
    let data = await response.json();
    console.log(data)
  }
  catch(error){
    console.log("Error Occur")
  }
}
// checkError();


// =================================================================================================
// =================================================================================================
// =================================================================================================
// =================================================================================================
// =================================================================================================


//  Sequential await execution
/**
 Sequential (slow)
let a = await fetch(url1);
let b = await fetch(url2);


Waits for first, then second.
 */

// Parallel :

async function parallelChecking() {
  try {
    let [a, b] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/1"),
      fetch("https://jsonplaceholder.typicode.com/posts/2")
    ]);

    let data1 = await a.json();
    let data2 = await b.json();

    console.log(data1.title);
    console.log(data2.title);

  } catch (error) {
    console.log("Error:", error);
  }
}

// parallelChecking();

// =**************************************************************************************
// =**************************************************************************************
// =**************************************************************************************
// =**************************************************************************************
// =**************************************************************************************


async function getUser(id) {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    
    if (!response.ok) {
      throw new Error("User not found");
    }

    let data = await response.json();

    console.log("Name:", data.name);
    console.log("Email:", data.email);

  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getUser(2);

// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************
// ****************************************************************************************



// User is not Found 
async function getUser(id) {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (response.status === 404) {
      console.log("Invalid User ID");
      return;
    }

    if (!response.ok) {
      throw new Error("Server Error");
    }

    let data =  response.json();

    console.log("Name:", data.name);
    console.log("Email:", data.email);

  } catch (error) {
    console.log("Network Error");
  }
}

getUser(5);

