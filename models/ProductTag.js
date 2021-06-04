const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
     // reference to Product model
     model: Product,

     // column name of the referenced model
     key: 'id',

     // This declares when to check the foreign key constraint. PostgreSQL only.
     //deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
       references: {
     // reference to Tag model
     model: Tag,

     // column name of the referenced model
     key: 'id',

     // This declares when to check the foreign key constraint. PostgreSQL only.
     //deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
