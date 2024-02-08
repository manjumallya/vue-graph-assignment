const express = require('express');
const app = express();
const testData = require('./test.json');
const cors = require('cors')

app.use(express.static('dist'));
app.use(cors());

app.listen(8080, () => {
    console.log('Server runnig on port 8080');
})

app.get('/api/data', (req, res) => {
    new Promise((resolve) => {
        setTimeout(() => {
            const response = testData;
            resolve(response);
        },2000);
    }).then((response) => {
        res.send(response);
    })
})