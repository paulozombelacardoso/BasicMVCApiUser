//Controllers recebem e controlam as requisições HTTP.

import type { Request, Response } from 'express';
import userServices from "../services/userServices.js";

function createUser(req: Request, res: Response) {
    try {
        const { name, email } = req.body

        const user = userServices.createUser(name, email);
        res.status(201).json(user);
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
}

function getUser(req: Request, res: Response) {
    const users = userServices.getUser();
    res.json(users);
}

function getUserByid(req: Request, res: Response)
{
    try {
        const id = parseInt(req.params.id as string);
        const user = userServices.getUserByid(id);
        res.status(200).json(user);
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
}

function updateUser(req: Request, res: Response)
{
    try {
        const id = parseInt(req.params.id as string);
        const {name, email} = req.body;
        const user = userServices.updateUser(id, name, email);
        res.status(201).json({message: "user update with sucess", data: user});
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
}

function deleteUser(req: Request, res: Response)
{
    try {
        const id = parseInt(req.params.id as string);
        userServices.deleteUser(id);
        res.status(200).json({message: "user delete with sucess"});
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
}

export default { createUser, getUser, getUserByid , updateUser, deleteUser }