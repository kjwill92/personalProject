require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller')
const aws = require('aws-sdk');
const session = require('express-session');

const app = express();

app.use(express.static(__dirname+'/../build'))

app.use(bodyParser.json());
//auth stuff
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
})

//AWS-S3 stuff
const {
  S3_BUCKET
} = process.env

aws.config.region = 'us-west-1';

app.get('/sign-s3', (req, res) => {
  const s3 = new aws.S3();
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    res.write(JSON.stringify(returnData));
    res.end();
  });
});
 
//edit
app.get('/api/admin/edit/:id', controller.getSingleProduct)
//admin orders
app.get('/api/admin/orders', controller.getAllOrders)
// app.put('/api/orders/:id')
app.delete('/api/orders/:id/:customer', controller.removeOrders)
// //admin showcase
app.get('/api/admin/products', controller.getAllProducts)
app.post('/api/new/product', controller.makeNewProduct)
app.put('/api/products/:id', controller.updateProducts)
app.delete('/api/products/:id', controller.removeProducts)
//home page
app.get('/api/products', controller.getAllProducts)
//Request page
app.post('/api/orders', controller.makeRequest)

//-->>> auth0
app.get('/auth/callback', controller.authCallback)
app.get('/api/user-data', controller.userData)
app.get('/api/logout', controller.logout)


const port = process.env.SERVER_PORT || 3076;
app.listen(port, () => {
  console.log(`Server is up: ${port}`);
})