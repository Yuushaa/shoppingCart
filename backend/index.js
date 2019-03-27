const express = require('express');
const app = express();
const port = 3000;
const ShoppingProcess=require('./controllers/ShoppingProcessController');
const PropertiesController=require('./controllers/PropertiesController');
const bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors({
    origin: 'http://localhost:9000',
    optionsSuccessStatus: 200
}));

app.options('*', cors());

app.get('/', (req, res) => res.send('Welcome to 100Ladrillos'));

app.get('/getProperties', (req, res) => {
    const propertiesController=new PropertiesController();
    propertiesController.getProperties(res);
});

app.get('/getProperty/:id', (req, res) => {
    const id = req.params.id;
    const propertiesController=new PropertiesController();
    propertiesController.getProperty(res, id);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.post('/shoppingProcess', (req, res) => {
    const data = req.body;
    const shoppingProcessController=new ShoppingProcess();
    
    shoppingProcessController.makeProcess(res, data);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
