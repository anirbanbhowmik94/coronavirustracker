async function fetchData(){
  let coutryDataCall = fetch('https://coronavirus-19-api.herokuapp.com/countries/india');
  let globalDataCall = fetch('https://coronavirus-19-api.herokuapp.com/all');
  let allCountriesDataCall = fetch('https://coronavirus-19-api.herokuapp.com/countries');
  Promise.all([coutryDataCall,globalDataCall,allCountriesDataCall])
    .then(dataset => Promise.all(dataset.map(data => data.json())))
    .then(masterData => {
      let indiaData = masterData[0];
      let globalData = masterData[1];
      let countryData = masterData[2];
      $("#splash").delay(2000).fadeOut();
      renderIndiaData(indiaData);
      renderGlobalData(globalData);
      countryData.forEach(function(data){
        renderCountryData(data);
      })
      $("#country").delay(1000).fadeIn();
    });
}

function renderIndiaData(indiaData){
  document.getElementById("country").innerHTML += `
  <div class="row">
    <div class="col s12 m4">
      <div class="card center white">
        <div class="card-content black-text">
          <span class="card-title">Total Cases</span>
          <hr>
          <p class="deep-purple-text">${indiaData.cases}</p>
        </div>
      </div>
    </div>
    <div class="col s12 m4">
      <div class="card center white">
        <div class="card-content black-text">
          <span class="card-title">Active Cases</span>
          <hr>
          <p class="orange-text">${indiaData.active}</p>
        </div>
      </div>
    </div>
    <div class="col s12 m4">
      <div class="card center white">
        <div class="card-content black-text">
          <span class="card-title">Reported Today</span>
          <hr>
          <p class="brown-text">${indiaData.todayCases}</p>
        </div>
      </div>
    </div>
    <div class="col s12 m4">
      <div class="card center white">
        <div class="card-content black-text">
          <span class="card-title">Deaths</span>
          <hr>
          <p class="grey-text">${indiaData.deaths}</p>
        </div>
      </div>
    </div>
    <div class="col s12 m4">
      <div class="card center white">
        <div class="card-content black-text">
          <span class="card-title">Critical</span>
          <hr>
          <p class="red-text">${indiaData.critical}</p>
        </div>
      </div>
    </div>
    <div class="col s12 m4">
      <div class="card center white">
        <div class="card-content black-text">
          <span class="card-title">Recovered</span>
          <hr>
          <p class="green-text">${indiaData.recovered}</p>
        </div>
      </div>
    </div>
  </div> 
  `
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
function renderCountryData(countryData){ 
  document.getElementById("countryList").innerHTML += `
    <li class="collection-item avatar">
      <i class="material-icons circle red">flag</i>
      <span class="title">${countryData.country}</span>
      <table class="responsive-table striped centered">
        <thead>
          <tr>
            <th>Total Cases</th>
            <th>Active Cases</th>
            <th>Reported Today</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="deep-purple-text">${countryData.cases}</td>
            <td class="amber-text">${countryData.active}</td>
            <td class="brown-text">${countryData.todayCases}</td>
            <td class="grey-text">${countryData.deaths}</td>
            <td class="green-text">${countryData.recovered}</td>
          </tr>
        </tbody>
      </table>
    </li>
  `
} 