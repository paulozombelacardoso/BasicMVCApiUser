//Controllers recebem e controlam as requisições HTTP.

import userServices from "../services/userServices.js";

function createUser(req, res) {
    try {
        const { name, email } = req.body

        const user = userServices.createUser(name, email);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({message: error. message});
    }
}

function getUser(req, res) {
    const users = userServices.getUser();
    res.json(users);
}

function getUserByid(req, res)
{
    try {
        const id = parseInt(req.params.id);
        const user = userServices.getUserByid(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

function updateUser(req, res)
{
    try {
        const id = parseInt(req.params.id);
        const {name, email} = req.body;
        const user = userServices.updateUser(id, name, email);
        res.status(201).json({message: "user update with sucess", data: user});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

function deleteUser(req, res)
{
    try {
        const id = parseInt(req.params.id);
        userServices.deleteUser(id);
        res.status(200).json({message: "user delete with sucess"});
    } catch (error) {
        
    }
}

export default { createUser, getUser, getUserByid , updateUser, deleteUser }