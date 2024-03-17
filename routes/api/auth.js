import { Router } from 'express';

import validateBody from '../../middlewares/validateBody.js';
import { registerSchema, loginSchema } from '../../schemas/users.js';
import authCtrl from '../../controllers/auth.js';
import { authenticate } from '../../middlewares/authenticate.js';

const router = Router();
const { register, login, getCurrent, logout } = authCtrl;

router.post('/register', validateBody(registerSchema), register);

router.post('/login', validateBody(loginSchema), login);

router.get('/current', authenticate, getCurrent);

router.post('/logout', authenticate, logout);

export default router;
