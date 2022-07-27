import express from 'express';

import { initDatabase } from './models/initDB';

export const app = express();

app.get('/hello', (req, res) => {
    console.log(req, res)
    res.json({ success: true })
})

const portNumber = 3000
app.listen(portNumber, () => {
    initDatabase();
    console.log(`server start on port ${portNumber}`)
});