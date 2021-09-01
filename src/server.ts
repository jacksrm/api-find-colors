import express, { Request, Response } from 'express';
import fs from 'fs';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  const coresDataFile = fs.readFileSync(`${__dirname}/coresData.json`, { encoding: 'utf-8'});
  const coresData = JSON.parse(coresDataFile);

  return res.status(200).json({ cores: coresData });
});

app.listen(3333, () => {
  console.log('App running on http://localhost:3333');
});
