import bodyParser from 'body-parser';
import express from 'express';

import { initDatabase } from './models/initDB';
import { initUserRoutes } from './services/user.service';

export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initUserRoutes();

app.get('/hello', (req, res) => {
    console.log(req, res)
    res.json({ success: true })
})

const portNumber = 3000
app.listen(portNumber, () => {
    initDatabase();
    console.log(`server start on port ${portNumber}`)
});