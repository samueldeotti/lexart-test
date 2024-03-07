import { Router } from 'express'
import loginRouter from './login.routes'
import productsRouter from './products.routes'
import signupRouter from './signup.routes'

const router = Router()

router.use('/login', loginRouter);
router.get('/products', productsRouter);
router.get('/signup', signupRouter);

export default router
