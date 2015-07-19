//Setting up

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;

////routes
var router = express.Router();
router.get('/', function(req, res){
    res.json({message: 'hello, this works'});
});
router.use(function(req, res, next){
    console.log('working');
    next();
});

app.use('/api', router);
app.listen(port);
console.log('please let this work on ' + port);


//Database
var mongoose = require('mongoose');
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');
var Person = require('./person');

//API
var braintree = require('braintree');

var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: 'ngm5w3r7phz46yxf',
    publicKey: '54sj755nx788ht74',
    privateKey: '792314534aeac7a2bff204c9d0e1a0ea'
});

router.route('/create_token').post(function(req, res){
    console.log('make token');
    //var person = new Person();
    gateway.clientToken.generate({
        customerToken: aCustomerId
    }, function(err, res){
        var clientToken = res.clientToken;
        console.log(clientToken);
        res.send(res.clientToken);
    });
    res.send('success');
});

router.route('/client_token').get(function(req, res){
    console.log('get client token');
});

router.route('/payment-methods').post(function(req, res){
    console.log('how would you like to pay?');
    var nonce = req.body.payment_method_nonce;
    //Use payment method nonce [here]

});

router.route('/pay').post(function(req, res){
    console.log('paid :)');
    gateway.trasnaction.sale({
        amount: '5.00',
        paymentMethodNonce: nonceFromTheClient
    }, function(err, result){
        res.send('There\'s an error ', err);
    });
});