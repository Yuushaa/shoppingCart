const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const requests = require('./requests');

router.get('/',function(req,res){
  res.send('Hola Mundo');
});

router.get('/properties',function(req,res){
  res.sendFile(path.join(__dirname+'/views/properties.html'));
});

router.get('/property/:id',function(req,res){
    res.sendFile(path.join(__dirname+'/views/property.html'));
  });

router.get('/cart',function(req,res){
  res.sendFile(path.join(__dirname+'/views/cart.html'));
});

// BACKEND PROXIED ROUTES
app.get('/getProperties', (req, res) => {
  const url = 'http://localhost:3000/getProperties';
  requests.get(url, res);
});

app.get('/getProperty/:id', (req, res) => {
  const id = req.params.id;
  const url = 'http://localhost:3000/getProperty/'+id;
  requests.get(url, res);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.post('/shoppingProcess', (req, res) => {
    const data = req.body;
    const url = 'http://localhost:3000/shoppingProccess';
    requests.post(url, data, res);
});

//add the router
app.use('/', router);
app.use(express.static(__dirname + '/public'));

app.listen(80, () => console.log(`Shopping cart listening on port 80!`));
