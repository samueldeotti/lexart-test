import { Router } from 'express'
import loginRouter from './login.routes'
import productsRouter from './products.routes'

const router = Router()

router.use('/login', loginRouter);
router.get('/products', productsRouter);

export default router
