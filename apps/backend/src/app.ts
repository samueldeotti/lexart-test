import { Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import loginRouter from './routes/login.routes';
import productsRouter from './routes/products.routes';
import signupRouter from './routes/signup.routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/products', productsRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;