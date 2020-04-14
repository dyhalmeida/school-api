import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const { name, email, password } = req.body;
      const { id } = await User.create({ name, email, password });
      return res.json({ id, name, email });
    } catch (e) {
      console.error(e);
      const errors = e.errors.map((erro) => erro.message);
      return res.status(400).json({ errors });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      console.error(e);
      const errors = ['Erro desconhecido, contate o administrador do sistema'];
      return res.status(400).json({ errors });
    }
  }
}

export default new UserController();
