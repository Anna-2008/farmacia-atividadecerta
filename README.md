# 💊 API RESTful - Sistema de Farmácia

API completa para gestão de farmácia desenvolvida com Node.js e Express, permitindo o gerenciamento de produtos, clientes e pedidos.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando o Projeto](#executando-o-projeto)
- [Endpoints da API](#endpoints-da-api)
- [Exemplos de Uso](#exemplos-de-uso)
- [Estrutura do Projeto](#estrutura-do-projeto)

## 🎯 Sobre o Projeto

Esta API foi desenvolvida para gerenciar operações básicas de uma farmácia, incluindo:

- **Produtos**: Cadastro e controle de medicamentos e dermocosméticos
- **Clientes**: Gestão de cadastro de clientes
- **Pedidos**: Processamento e acompanhamento de vendas

## 🚀 Tecnologias

- **Node.js** - Ambiente de execução JavaScript
- **Express.js** - Framework web para Node.js
- **CORS** - Middleware para habilitar CORS
- **Nodemon** - Ferramenta de desenvolvimento para auto-reload

## 📦 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

## 🔧 Instalação

1. Clone o repositório ou baixe os arquivos do projeto

2. Navegue até o diretório do projeto:
```bash
cd cafeteria-api
```

3. Instale as dependências:
```bash
npm install
```

## ▶️ Executando o Projeto

### Modo de Desenvolvimento (com auto-reload)
```bash
npm run dev
```

### Modo de Produção
```bash
npm start
```

O servidor será iniciado na porta **3000** (ou na porta definida na variável de ambiente PORT).

Acesse: `http://localhost:3000`

## 📡 Endpoints da API

### Rota Principal
```
GET /
```
Retorna informações sobre a API e seus endpoints disponíveis.

---

### 💊 Produtos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/produtos` | Lista todos os produtos |
| GET | `/api/produtos/:id` | Busca produto por ID |
| POST | `/api/produtos` | Cria novo produto |
| PUT | `/api/produtos/:id` | Atualiza produto existente |
| DELETE | `/api/produtos/:id` | Remove produto |

**Corpo da requisição (POST/PUT):**
```json
{
  "nome": "Paracetamol 750mg",
  "categoria": "Medicamento",
  "preco": 12.90,
  "descricao": "Analgésico e antitérmico",
  "estoque": 200
}
```

---

### 👥 Clientes

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/clientes` | Lista todos os clientes |
| GET | `/api/clientes/:id` | Busca cliente por ID |
| POST | `/api/clientes` | Cria novo cliente |
| PUT | `/api/clientes/:id` | Atualiza cliente existente |
| DELETE | `/api/clientes/:id` | Remove cliente |

**Corpo da requisição (POST/PUT):**
```json
{
  "nome": "Ana Souza",
  "email": "ana@email.com",
  "telefone": "(11) 99876-5432"
}
```

---

### 🛒 Pedidos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/pedidos` | Lista todos os pedidos |
| GET | `/api/pedidos/:id` | Busca pedido por ID |
| POST | `/api/pedidos` | Cria novo pedido |
| PUT | `/api/pedidos/:id` | Atualiza status do pedido |
| DELETE | `/api/pedidos/:id` | Cancela pedido |

**Corpo da requisição (POST):**
```json
{
  "clienteId": 1,
  "itens": [
    {
      "produtoId": 1,
      "quantidade": 2
    },
    {
      "produtoId": 3,
      "quantidade": 1
    }
  ]
}
```

**Corpo da requisição (PUT):**
```json
{
  "status": "concluído"
}
```

## 💡 Exemplos de Uso

### Listar todos os produtos
```bash
curl http://localhost:3000/api/produtos
```

### Criar um novo cliente
```bash
curl -X POST http://localhost:3000/api/clientes \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Maria Silva",
    "email": "maria@email.com",
    "telefone": "(11) 98765-4321"
  }'
```

### Criar um pedido
```bash
curl -X POST http://localhost:3000/api/pedidos \
  -H "Content-Type: application/json" \
  -d '{
    "clienteId": 1,
    "itens": [
      {"produtoId": 1, "quantidade": 2},
      {"produtoId": 2, "quantidade": 1}
    ]
  }'
```

## 📁 Estrutura do Projeto

```
cafeteria-api/
├── src/
│   ├── controllers/
│   │   ├── produtoController.js
│   │   ├── clienteController.js
│   │   └── pedidoController.js
│   ├── models/
│   │   └── data.js
│   ├── routes/
│   │   ├── produtoRoutes.js
│   │   ├── clienteRoutes.js
│   │   └── pedidoRoutes.js
│   └── server.js
├── package.json
├── package-lock.json
└── README.md
```

### Descrição dos Diretórios

- **controllers/**: Contém a lógica de negócio para cada recurso
- **models/**: Armazena os dados em memória (produtos, clientes, pedidos)
- **routes/**: Define as rotas da API para cada recurso
- **server.js**: Arquivo principal que inicializa o servidor Express

## 📝 Respostas da API

Todas as respostas seguem o padrão:

**Sucesso:**
```json
{
  "sucesso": true,
  "mensagem": "Operação realizada com sucesso",
  "dados": { }
}
```

**Erro:**
```json
{
  "sucesso": false,
  "mensagem": "Descrição do erro"
}
```

## ⚠️ Observações

- Esta API utiliza armazenamento em memória. Os dados serão perdidos ao reiniciar o servidor.
- Para uso em produção, considere implementar um banco de dados (MongoDB, PostgreSQL, etc.).
- Não há autenticação implementada. Para produção, adicione JWT ou outra forma de autenticação.

## 📄 Licença

ISC

## ✨ Autor

Seu Nome

---

Feito com ❤️ e Node.js
