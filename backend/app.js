import express from 'express'
import morgan from 'morgan' // a logger - to see all types of request made to server in log

import userRoutes from './routes/user.routes.js';
import projectRoutes from './routes/project.routes.js';

import aiRoutes from './routes/ai.routes.js';

import cookieParser from 'cookie-parser';
import cors from 'cors';


import connect from './db/db.js'; // if error shows - use ctrl + shift + p then reload window
connect();

const app = express(); // express server created 

app.use(cors());
app.use(morgan('dev'));

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

app.use('/users', userRoutes);
app.use('/projects', projectRoutes);
app.use("/ai", aiRoutes)

// dummy route 
app.get('/', (req,res) => {
    res.send('Hello World');
});

export default app;

// listen in server.js - because we will use socket.io and it require http server
// so making it separate to use