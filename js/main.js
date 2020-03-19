async function fetchCountry(){
  let url = 'https://coronavirus-19-api.herokuapp.com/countries/india';
  let response = await fetch(url);
  let countryData = await response.json();
  $("#splash").delay(2000).fadeOut();
  renderCountryData(countryData);
  $("#country").delay(1000).fadeIn();
}

function renderCountryData(data){
  document.getElementById("country").innerHTML += `
  <div class="row">
    <div class="col s12 m4">
      <div class="card center white">
        <div class="card-content black-text">
          <span class="card-title">Total Cases</span>
          <hr>
          <p class="deep-purple-text">${data.cases}</p>
        </div>
      </div>
    </div>
    <div class="col s12 m4">
      <div class="card center white">
        <div class="card-content black-text">
          <span class="card-title">Active Cases</span>
          <hr>
          <p class="orange-text">${data.active}</p>
        </div>
      </div>
    </div>
    <div class="col s12 m4">
      <div class="card center white">
        <div class="card-content black-text">
          <span class="card-title">Reported Today</span>
          <hr>
          <p class="brown-text">${data.todayCases}</p>
        </div>
      </div>
    </div>
    <div class="col s12 m4">
      <div class="card center white">
        <div class="card-content black-text">
          <span class="card-title">Deaths</span>
          <hr>
          <p class="grey-text">${data.deaths}</p>
        </div>
      </div>
    </div>
    <div class="col s12 m4">
      <div class="card center white">
        <div class="card-content black-text">
          <span class="card-title">Critical</span>
          <hr>
          <p class="red-text">${data.critical}</p>
        </div>
      </div>
    </div>
    <div class="col s12 m4">
      <div class="card center white">
        <div class="card-content black-text">
          <span class="card-title">Recovered</span>
          <hr>
          <p class="green-text">${data.recovered}</p>
        </div>
      </div>
    </div>
  </div> 
  `
}

async function fetchGlobal(){
  let url = 'https://coronavirus-19-api.herokuapp.com/all';
  let response = await fetch(url);
  let globalData = await response.json();
  renderGlobalData(globalData);
}

function renderGlobalData(globalData){
  document.getElementById("global").innerHTML += `
  <div class="row">
    <div class="col s12 m4">
      <div class="card center white">
        <div class="card-content black-text">
          <span class="card-title">Cases</span>
          <hr>
          <p class="deep-purple-text">${globalData.cases}</p>
        </div>
      </div>
    </div>
    <div class="col s12 m4">
      <div class="card center white">
        <div class="card-content black-text">
          <span class="card-title">Deaths</span>
          <hr>
          <p class="grey-text">${globalData.deaths}</p>
        </div>
      </div>
    </div>
    <div class="col s12 m4">
      <div class="card center white">
        <div class="card-content black-text">
          <span class="card-title">Recovered</span>
          <hr>
          <p class="green-text">${globalData.recovered}</p>
        </div>
      </div>
    </div>
  </div>
  `;
}