const api = `https://restcountries.com/v3.1/all`;
// const api = `https://restcountries.com/v3.1/name/india`;
console.log("----1----");

const fetchCont = async () => {
  console.log("----2----");
  const apiResponse = await fetch(api);
  const data = await apiResponse.json();
  // console.log("data-0--",);
  // console.log("----3----", data[0]?.name?.common);
  data.forEach((countries) => {
    const { flags: { svg, alt } = {} } = countries || {};
    console.log("countries", countries);
    const [mainDiv] = document.getElementsByClassName("main");

    const contDiv = document.createElement("div");
    contDiv.innerHTML = `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src=${svg} alt=${alt}>
  <div class="card-body">
    <h5 class="card-title">${countries?.name?.common}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Language: ${countries?.languages}</li>
    <li class="list-group-item">Population: ${countries?.population}</li>
    <li class="list-group-item">Continent: ${countries?.continents.map(
      (vinay) => vinay
    )}</li>
    <li class="list-group-item">Capital: ${
      Array.isArray(countries?.capital)
        ? countries?.capital.map((cap) => cap)
        : countries?.capital
    }</li>

  </ul>
  <div class="card-body">
    <button  class="card-link" onclick=${goToCountry()}>Visit</button>
    <button  class="card-link">Go Back</button>
  </div>
</div>`;

    mainDiv.append(contDiv);
  });
};

const goToCountry = () => {
  console.log("click");
};
