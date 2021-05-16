import * as express from 'express';

import { allCountries } from './all-countries'
import { RestCountry } from './rest-country';
import { Country } from './country';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/all', (req, res) => {
  res.send(compactCountries(allCountries))
});

app.get('/formatted', (req, res) => {
  const countries = compactCountries(allCountries);
  const json = JSON.stringify(countries, null, 2);
  res.send(json);
});

app.get('/continents/:continent', (req, res) => {
  const continent = req.params['continent'];
  const countries = compactCountries(allCountries);
  const filteredCountries = countries.filter(country => country.continent === continent);
  res.send(filteredCountries);
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

function compactCountries(countries: Array<RestCountry>): Array<Country> {
  const result = countries.map(
    c => ({
      name: c.name,
      continent: c.region,
      area: c.area,
      capital: c.capital,
      flag: c.flag,
      latlng: [c.latlng[0], c.latlng[1]],
      population: c.population,
      topLevelDomain: c.topLevelDomain,
    } 
  ));

  return result;
}