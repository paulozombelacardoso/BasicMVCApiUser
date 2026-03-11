/* 
-----------------------------------------------------
6. MODELS
-----------------------------------------------------

Models representam a estrutura dos dados.
Eles definem como um objeto deve ser organizado.
Exemplo de model:

Isso garante que todos os usuários tenham
a mesma estrutura de dados.
Em aplicações reais, models normalmente representam:
- tabelas de banco de dados
- coleções no MongoDB
- entidades do sistema
*/

class User
{
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

export default User;