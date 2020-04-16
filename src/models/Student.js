import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 150],
            msg: 'Nome do aluno deve ter entre 3 e 150 caracteres',
          },

        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        unique: {
          msg: 'E-mail já existe',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
    },
    {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.File, { foreignKey: 'student' });
  }
}
