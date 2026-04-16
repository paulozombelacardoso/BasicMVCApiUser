import express from 'express'
const router = express.Router();
import userController from '../controllers/userControllers.js'

router.get('/users/:id', userController.getUserByid);// pegar por id
router.get('/users', userController.getUser); // pegar todos
router.post('/users', userController.createUser); // cadastrar user
router.put('/users/:id', userController.updateUser); // Actualizar o user
router.delete('/users/:id', userController.deleteUser);

export default router;