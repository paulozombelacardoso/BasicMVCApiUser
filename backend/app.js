import express from 'express'
import cors from 'cors'
import router from './router/UserRouter.js';


const app = express();
app.use(cors()); // Permite a conecao com o frontend
app.use(express.json());


app.use('/', router);
app.listen(3000, ()=>
{
    console.log("Server Rodadando Na Porta " + 3000);
});