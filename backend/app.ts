import express from 'express'
import cors from 'cors';
import type { Request, Response } from 'express';
import router from './router/UserRouter.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', router);

app.listen(3000, (err) => {
    if (err)
        console.log();
    else
         console.log(`server running ${3000}`);
})