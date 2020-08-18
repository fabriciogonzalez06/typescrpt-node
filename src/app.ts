import  express,{Router,Request,Response} from  'express';
import  routesIndex from './routes/index';
import bodyParser from 'body-parser';
const app:express.Application = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/api',routesIndex);


app.listen(3500,()=>{
    console.log('conectado en el puerto 3500');
});
















