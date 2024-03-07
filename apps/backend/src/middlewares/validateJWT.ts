import * as jwt from 'jsonwebtoken';

import { Response, NextFunction } from 'express';

export default function validateJWT(req: any, res: Response, next: NextFunction): void {
  const bearerToken = req.header('Authorization');

  if (!bearerToken) {
    res.status(401).json({ message: 'Token not found' });
    return
  }

  const token = bearerToken.split(' ')[1]

  try {
    const decoded = jwt.verify(token as string, process.env.JWT_SECRET as string ?? 'jwt_secret');
    const { username } = decoded as { username: string };

    req.username = username;
    
    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
    return
  }
}

