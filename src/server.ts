import express, { Request, Response } from 'express';

const app = express();

app.use(express.json())

app.get('/', (req: Request, res: Response) =>
  res.json({ message: 'Hello World' }),
);

app.listen(3333, () => {
  console.log('App running on http://localhost:3333');
});
