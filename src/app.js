import express from 'express';
import morgan from 'morgan';

import editorialroutes from './routes/editorial.routes';
import libroroutes from './routes/libro.routes';

const app=express();
var cors=require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.get('/',function(req,res,next){
    res.send('Bienvenido a Node JS ....');
});
app.use("/editorial",editorialroutes);
app.use("/libro",libroroutes);
export default app;