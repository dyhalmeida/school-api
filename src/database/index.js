import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import student from '../models/Student';

const models = [student];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.postgres();
  }

  postgres() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
