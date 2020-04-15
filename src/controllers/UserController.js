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
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
      return res.json(users);
    } catch (e) {
      console.error(e);
      const errors = ['Erro desconhecido, contate o administrador do sistema'];
      return res.status(400).json({ errors });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID do usuário não identificado'] });
      }
      const user = await User.findByPk(id, { attributes: ['id', 'name', 'email'] });
      if (!user) {
        return res.status(400).json({ errors: ['Usuário não existe'] });
      }
      return res.json(user);
    } catch (e) {
      console.error(e);
      const errors = ['Erro desconhecido, contate o administrador do sistema'];
      return res.status(400).json({ errors });
    }
  }

  async update(req, res) {
    try {
      const { userId } = req;
      const { name, email, password } = req.body;

      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(400).json({ errors: ['Usuário não existe'] });
      }
      await user.update({ name, email, password });
      return res.json({ id: userId, name, email });
    } catch (e) {
      console.error(e);
      const errors = e.errors.map((erro) => erro.message);
      return res.status(400).json({ errors });
    }
  }

  async delete(req, res) {
    try {
      const { userId } = req;
      const user = await User.findByPk(userId, { attributes: ['id', 'name', 'email'] });
      if (!user) {
        return res.status(400).json({ errors: ['Usuário não existe'] });
      }
      await user.destroy();
      return res.json(user);
    } catch (e) {
      console.error(e);
      const errors = ['Erro desconhecido, contate o administrador do sistema'];
      return res.status(400).json({ errors });
    }
  }
}

export default new UserController();
