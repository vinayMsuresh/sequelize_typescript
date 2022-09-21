import sequelize from "../config/db";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';


interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    // Some fields are optional when calling UserModel.create() or UserModel.build()
    user_id: CreationOptional<number>;
    name: string;
    email: string;
  }
  
const Usermodel = sequelize.define<UserModel>('User', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
      },
  });
sequelize.sync({ alter: true}).then(()=>{}).catch((e)=> {throw e});


export default Usermodel;
