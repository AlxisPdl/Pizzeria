'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pizzas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      prix_petite: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      prix_moyenne: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      prix_grande: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      image: {
        type: Sequelize.BLOB,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      }
    })
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('pizzas');
  }
};
