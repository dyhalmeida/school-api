import Sequelize, { Model } from 'sequelize';
import urlConfig from '../config/url';

export default class File extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Nome original do arquino não deve ser vázio',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Nome do arquino não deve ser vázio',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${urlConfig.url}/images/${this.getDataValue('filename')}`;
        },
      },
    },
    {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student' });
  }
}
