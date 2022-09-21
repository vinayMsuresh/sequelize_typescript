import { Request, Response } from "express";
import Usermodel from "../Models/UserModel";

const getAllUsers = async(req: Request, res: Response) => {
    try{
        const users = await Usermodel.findAll({ raw: true});
        res.send(users);
    } catch (e) {
        res.send(e);
    }
}

const getUserById = async(req: Request, res: Response) => {
    try{
        const users = await Usermodel.findOne({
            where:{
                user_id: req.params.id
            },
            raw: true
        });
        res.send(users);
    } catch (e) {
        res.send(e);
    }
}

const postUser = async(req: Request, res: Response) => {
    try{
        const users = await Usermodel.create(req.body);
        res.send(users);
    } catch (e) {
        res.send(e);
    }
}

const updateUser = async(req: Request, res: Response) => {
    try{
        await Usermodel.update(req.body, { where: {user_id: req.params.id}});
        res.send('user updated successfully');
    } catch(e) {
        res.send(e);
    }
}
const deleteUser = async(req: Request, res: Response) => {
    try{
        const users = await Usermodel.destroy({ where: {user_id: req.params.id}});
        res.json({status: users, msg: 'User deleted successfully'});
    } catch(e) {
        res.send(e);
    }
}

const updateUserByName = async(req: Request, res: Response) => {
    try{
        await Usermodel.update({
            name: req.body.name
        }, { where: {
            user_id: req.params.id
        }});
        res.send('The name updated successfully');
    } catch (e) {

    }
}

const updateUserByEmail = async(req: Request, res: Response) => {
    try{
        await Usermodel.update({
            email: req.body.email
        }, { where: {
            user_id: req.params.id
        }});
        res.send('The email updated successfully');
    } catch (e) {

    }
}
export default {
    getAllUsers,
    getUserById,
    postUser,
    deleteUser,
    updateUser,
    updateUserByEmail,
    updateUserByName
}
    