import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(401).json({ errors: ['Acesso não autorizado'] });
      }
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ errors: ['Acesso não autorizado'] });
      }
      if (!await user.passwordIsValid(password)) {
        return res.status(401).json({ errors: ['Acesso não autorizado'] });
      }
      const token = jwt.sign({ id: user.id, email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN,
      });
      return res.json({ token });
    } catch (e) {
      console.error(e);
      return res.status(400).json({ errors: ['Erro desconhecido, contate o administrador do sistema'] });
    }
  }
}

export default new TokenController();
