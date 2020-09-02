'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('projects',{
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      image:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      title:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      description:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      github:{
        type: Sequelize.STRING,
        allowNull:true,
      },
      npm:{
        type: Sequelize.STRING,
        allowNull:true,
      },
      medium:{
        type: Sequelize.STRING,
        allowNull:true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }   
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('articles')

  }
};
