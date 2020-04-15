import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import student from '../models/Student';
import user from '../models/User';
import file from '../models/File';

const models = [student, user, file];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.postgres();
  }

  postgres() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
