/* 
Services contêm a lógica de negócio da aplicação.
É aqui que ficam as regras principais do sistema.
Exemplos de lógica:

- criar usuários
- validar dados
- calcular valores
- aplicar regras do sistema
- processar dados
*/

import db from '../database/db.js'
import User from '../model/userModel.js'

function createUser(name, email)
{
    if (!name || name.trim() === "")
    {
        throw new error("Nome e obrigatorio!");
    }
    if (!email || !email.trim() === "")
    {
        throw new error("Email e obrigatorio");
    }
    // verificar se o email ja existe
    // const emailExists = db.users.find(user => user.email === email);
    // if (emailExists)
    // {
    //     throw new error("Email ja foi cadastrado");
    // }
    const id = db.users.length + 1;
    const newUser = new User(id, name, email);

    db.users.push(newUser);
    return newUser;
}

function getUser()
{
    return db.users;
}

function getUserByid(id)
{
    const user = db.users.find(u => u.id === id);
    if (!user)
    {
        throw new error("User nao encontrado!");
    }
    return user;
}

function updateUser(id, name, email)
{
    const user = db.users.find(u=> u.id === id);
    if (!user)
    {
        throw new error("user not found");
    }

    if (name)
        user.name = name;
    if (email)
        user.email = email;
    return user;
}

function deleteUser(id)
{
    const idx = db.users.findIndex(u=> u.id === id);
    if (idx === -1)
    {
        throw new error("user not found");
    }
    db.user.splice(idx, 1);
}

export default {createUser, getUser, getUserByid, updateUser}