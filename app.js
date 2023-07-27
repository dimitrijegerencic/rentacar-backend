const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

/** Routing imports */

const stateRouting = require('./routing/state-routing');
const cityRouting = require('./routing/city-routing')
const classRouting = require('./routing/class-routing')
const companyRouting = require('./routing/company-routing')
const modelRouting = require('./routing/model-routing')
const vehicleRouting = require('./routing/vehicle-routing')
const userRouting = require('./routing/user-routing');
const reservationsRouting = require('./routing/reservation-routing');


/** DB connection imports */

const dbConnection = require('./common/db-connection');
const app = express();

app.use((_, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    0.
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use('/state', stateRouting);
app.use('/city', cityRouting);
app.use('/class', classRouting);
app.use('/company', companyRouting);
app.use('/model', modelRouting);
app.use('/vehicle', vehicleRouting);
app.use('/reservations', reservationsRouting)
app.use(userRouting);

app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3001, () => {
    console.log('Server is listening at port 3001');
})

dbConnection.authenticate()
    .then(connection => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })