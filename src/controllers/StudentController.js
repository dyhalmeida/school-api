import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    try {
      const students = await Student.findAll();
      return res.json(students);
    } catch (e) {
      console.error(e);
      return res.status(400).json({ errors: ['Erro desconhecido, contate o administrador do sistema'] });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID do estudante não identificado'] });
      }
      const student = await Student.findByPk(id, { attributes: ['id', 'name', 'email'] });
      if (!student) {
        return res.status(400).json({ errors: ['Estudante não existe'] });
      }
      return res.json(student);
    } catch (e) {
      console.error(e);
      return res.status(400).json({ errors: ['Erro desconhecido, contate o administrador do sistema'] });
    }
  }

  async store(req, res) {
    try {
      const { name, email } = req.body;
      const { id } = await Student.create({ name, email });
      return res.json({ id, name, email });
    } catch (e) {
      console.error(e);
      const errors = e.errors.map((erro) => erro.message);
      return res.status(400).json({ errors });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      if (!id) {
        return res.status(400).json({ errors: ['ID do estudante não identificado'] });
      }
      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(400).json({ errors: ['Estudante não existe'] });
      }
      await student.update({ name, email });
      return res.json({ id, name, email });
    } catch (e) {
      console.error(e);
      const errors = e.errors.map((erro) => erro.message);
      return res.status(400).json({ errors });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID do estudante não identificado'] });
      }
      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(400).json({ errors: ['Estudante não existe'] });
      }
      await student.destroy();
      return res.json();
    } catch (e) {
      console.error(e);
      return res.status(400).json({ errors: ['Erro desconhecido, contate o administrador do sistema'] });
    }
  }
}

export default new StudentController();
