1. `mkdir server && cd server && npm init`
2. `npm install express --save`
3. Create the index.js file:
   ```javascript
   const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
    ```
4. add `app.use(express.static('public'))`
