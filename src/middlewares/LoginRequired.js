import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ errors: ['Acesso não autorizado'] });
  }
  const [, token] = authorization.split(' ');

  try {
    const { id, email } = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    console.error(e);
    return res.status(401).json({ errors: ['Token inválido ou expirado'] });
  }
};
