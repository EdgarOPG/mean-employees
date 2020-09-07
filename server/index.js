const express = require('express');
const morgan = require('morgan');
const employeeRoutes = require('./routes/employee.routes');

const app = express();

const { mongoose } = require('./database');

//// Settings
app.set('port', process.env.PORT || 3000 );

//// Middleware
// HTTP request logger
app.use(morgan('dev'));
// Set JSON
app.use(express.json());

//// Routes
app.use('/api/employees', employeeRoutes);

app.listen(app.get('port'), () =>{
    console.log(`Server on Port ${app.get('port')}`);
});