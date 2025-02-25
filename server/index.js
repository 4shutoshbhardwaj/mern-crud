import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './routes/userRoute.js';

const app=express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();


const PORT=process.env.PORT||5000;
const url=process.env.MONGOURL;

mongoose.connect(url).then(()=>{

    console.log('DB Connected Successfully');
    app.listen(PORT,()=>{
        console.log(`Server is running on ${PORT}`);
    })

}).catch((err)=>console.log(err));

app.use('/api',route);