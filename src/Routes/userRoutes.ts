import express from "express";
import userController from "../controllers/user.controller";
const router = express.Router();


router.get('/', userController.getAllUsers);

router.post('/', userController.postUser);

router.get('/:id', userController.getUserById);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

router.put('/name/:id', userController.updateUserByName);

router.put('/email/:id', userController.updateUserByEmail);

export default router;