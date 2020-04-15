const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users', [
    {
      name: 'Administrador',
      email: 'admin@school.com',
      password_hash: await bcryptjs.hash('b2-4ac', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
  ], {}),

  down: () => {},
};
