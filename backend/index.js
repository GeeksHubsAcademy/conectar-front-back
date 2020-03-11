import express from "express";
import morgan from "morgan";
const app = express();
const PORT =3000;
app.use(morgan('dev'))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/',(req,res)=>res.send('Hola express'))
app.listen(PORT,()=>console.log('server runing on PORT '+PORT));