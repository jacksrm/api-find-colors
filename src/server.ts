import express from 'express';

const app = express();

app.get('/', (req,res) => res.json({ message: 'Hello World' }));

app.listen(3333, () => { console.log('App running on http://localhost:3333') }); 