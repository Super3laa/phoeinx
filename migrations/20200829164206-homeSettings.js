'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('homeSettings',{
      id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true,
      },
      articleId:{
        type:Sequelize.INTEGER,
        allowNull:true,
        references:{
          model:'articles',
          key:'id',
        }
      },
      projectId:{
        type:Sequelize.INTEGER,
        allowNull:true,
        references:{
          model:'projects',
          key:'id',
        }
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
    return queryInterface.dropTable('homeSettings');
  }
};
