import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Product = sequelize.define("Product", {
  name: { type: DataTypes.STRING, allowNull: false },
  quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
  price: { type: DataTypes.FLOAT, allowNull: false },
});