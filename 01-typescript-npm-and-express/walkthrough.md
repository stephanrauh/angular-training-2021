1. `mkdir server && cd server && npm init`
2. `npm install express --save`
3. Create the index.js file:

   ```javascript
   const express = require('express');
   const app = express();
   const port = 3000;

   app.get('/', (req, res) => {
     res.send('Hello World!');
   });

   app.listen(port, () => {
     console.log(`Example app listening at http://localhost:${port}`);
   });
   ```

4. start the application with `node index.js`

5. convert `index.js` to idiomatic TypeScript. The TypeScript class is `server.ts`.

6. npm i typescript --save-dev

7. npm i  @types/node --save-dev

8. npm i @types/express --save-dev

9. run the server using `npx ts-node server.ts`.

10. add `app.use(express.static('public'))` to serve some static content

   1. create the folder `public`
   2. put an index.html into that folder

11. put the result of `https://restcountries.eu/rest/v2/all` into a file called `all-countries.ts`

12. Implement http://localhost:3000/all like so:
    ```typescript
    import { allCountries } from './all-countries'
    app.get('/all', (req, res) => {
        res.send(allCountries);
    });
    ```
13. Implement this (incomplete) function and talk about the error messages:
    ```typescript
    function compactCountries(countries: Array<Country>): Array<Country> {
    const result = countries.map(
        c => ({
        name: c.name
        } 
    ));

    return result;
    }
    ```
14. Finish implementing the function

15. Add a mapping `region => continent`

16. Make http://localhost:3000/all return the compact list of countries

17. Add a formatted version (`const json = JSON.stringify(countries, null, 2);`). Why isn't the result in the browser not formatted?

18. Implement a REST call filtering the countries of a continent:
    ```typescript
    app.get('/continents/:continent', (req, res) => {
    const continent = req.params['continent'];
    const countries = compactCountries(allCountries);
    const filteredCountries = countries.filter(country => country.continent === continent);
    res.send(filteredCountries);
    })
    ```

