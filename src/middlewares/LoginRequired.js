import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ errors: ['Acesso não autorizado'] });
  }
  const [, token] = authorization.split(' ');

  try {
    const { id, email } = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({ where: { id, email } });

    if (!user) {
      return res.status(401).json({ errors: ['Acesso não autorizado'] });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    console.error(e);
    return res.status(401).json({ errors: ['Token inválido ou expirado'] });
  }
};
