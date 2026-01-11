import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

export const Auth = sequelize.define('Auth', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	username: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})
