
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn('students', 'email',
    {
      type: Sequelize.STRING,
      allowNul: false,
      unique: true,
    }),

  down: () => {},
};
