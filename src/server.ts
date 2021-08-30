import soma from '@utils/soma';
import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ message: 'Hello World', soma: soma(10, 12) }));

app.listen(3333, () => { console.log('App running on http://localhost:3333'); });
