const dropdowns = document.querySelectorAll("select");
const amountInput = document.querySelector(".amount input");
const msg = document.querySelector(".msg");
const button = document.querySelector("button");
const exchangeIcon = document.querySelector(".exchange-icon");
const flags = document.querySelectorAll(".select-container img");

const BASE_URL = "https://open.er-api.com/v6/latest/";

// 🔥 Populate Dropdowns Dynamically
for (let select of dropdowns) {
  for (let currencyCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currencyCode;
    newOption.value = currencyCode;

    if (select === dropdowns[0] && currencyCode === "USD") {
      newOption.selected = "selected";
    } else if (select === dropdowns[1] && currencyCode === "INR") {
      newOption.selected = "selected";
    }

    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
    updateExchangeRate();
  });
}

// 🔄 Update Flag
function updateFlag(element) {
  let currencyCode = element.value;
  let countryCode = countryList[currencyCode];
  let img = element.parentElement.querySelector("img");

  img.src = `https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`;
}

// 🔁 Get Exchange Rate
async function updateExchangeRate() {
  let amount = amountInput.value;
  if (amount === "" || amount < 1) {
    amount = 1;
    amountInput.value = "1";
  }

  const fromCurrency = dropdowns[0].value;
  const toCurrency = dropdowns[1].value;

  const URL = `${BASE_URL}${fromCurrency}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    const rate = data.rates[toCurrency];
    const finalAmount = (amount * rate).toFixed(2);

    msg.innerText = `${amount} ${fromCurrency} = ${finalAmount} ${toCurrency}`;

  } catch (error) {
    msg.innerText = "Error fetching exchange rate.";
    console.error(error);
  }
}

// 🔁 Swap Currencies
exchangeIcon.addEventListener("click", () => {
  let temp = dropdowns[0].value;
  dropdowns[0].value = dropdowns[1].value;
  dropdowns[1].value = temp;

  updateFlag(dropdowns[0]);
  updateFlag(dropdowns[1]);

  updateExchangeRate();
});

// 🎯 Button Click
button.addEventListener("click", (e) => {
  e.preventDefault();
  updateExchangeRate();
});

// 🚀 On Load
window.addEventListener("load", () => {
  updateExchangeRate();
});
