import { Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import loginRouter from './routes/login.routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/login', loginRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;