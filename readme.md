
## Getting Started
Primeiro instale as dependências:
```bash
npm install
```

Após, configure o projeto com suas credenciais:
- em `.env.local` Substituir *USUARIO* e *SENHA* pelo seu (mesmo para logar no computador);
- em `.env`  Substituir *NOMEDOBANCO* pelo seu banco de dados; (certifique-se de já ter criado o banco anteriormente);

## Rodando a Aplicação
Execute o comando para criar a tabela no banco de dados:
```bash
prisma migrate dev
```

Rode a aplicação:
```bash
npm run dev
```

- Certifique-se de estar rodando **MySQL** no **XAMPP**;
- Certifique-se de estar conectado na **intranet**;

**Acesse a URL no navegador para executar a API:** `http://localhost:3000/pages/api/`.