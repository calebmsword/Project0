const express = require('express');
const app = express();
app.use(express.json());
import baseRouter from './routes/baseRouter'
import { Request, Response } from 'express';

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!'); // This will serve your request to '/'.
  });
app.use('/api', baseRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}...`);
});