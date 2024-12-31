import express from 'express'
import morgan from 'morgan' // a logger - to see all types of request made to server in log

import userRoutes from './routes/user.routes.js';

import connect from './db/db.js'; // if error shows - use ctrl + shift + p then reload window
connect();

const app = express(); // express server created 

app.use(morgan('dev'));

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRoutes);

// dummy route 
app.get('/', (req,res) => {
    res.send('Hello World');
});

export default app;

// listen in server.js - because we will use socket.io and it require http server
// so making it separate to use