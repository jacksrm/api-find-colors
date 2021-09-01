import express, { Request, Response } from 'express';
import fs from 'fs';

function pesquisaCor(match: string, coresData: any[]) {
  const cor = coresData.find((cor) => {
    return new RegExp(match, 'i').test(cor.name);
  });

  return cor;
}

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  const coresDataFile = fs.readFileSync(`${__dirname}/coresData.json`, {
    encoding: 'utf-8',
  });
  const coresData = JSON.parse(coresDataFile);

  const { pesquisa } = req.query

  if (!pesquisa) return res.status(200).json({ cores: coresData });

  const cor = pesquisaCor(pesquisa as string, coresData);

  return res.status(200).json({ cor });
});

app.listen(3333, () => {
  console.log('App running on http://localhost:3333');
});
