let produtos = [
  {
    id: 1,
    nome: "Paracetamol 750mg",
    categoria: "Medicamento",
    preco: 12.90,
    descricao: "Analgésico e antitérmico para dores e febre",
    estoque: 200
  },
  {
    id: 2,
    nome: "Ibuprofeno 400mg",
    categoria: "Medicamento",
    preco: 18.50,
    descricao: "Anti-inflamatório e analgésico",
    estoque: 150
  },
  {
    id: 3,
    nome: "Protetor Solar FPS 50",
    categoria: "Dermocosmético",
    preco: 39.99,
    descricao: "Protetor solar de alta proteção",
    estoque: 80
  }
];

let clientes = [
  {
    id: 1,
    nome: "Ana Souza",
    email: "ana@email.com",
    telefone: "(11) 99876-5432",
    dataCadastro: "2024-01-15"
  },
  {
    id: 2,
    nome: "Carlos Pereira",
    email: "carlos@email.com",
    telefone: "(11) 99712-3344",
    dataCadastro: "2024-02-20"
  }
];

let pedidos = [
  {
    id: 1,
    clienteId: 1,
    itens: [
      { produtoId: 1, quantidade: 1, precoUnitario: 12.90 },
      { produtoId: 3, quantidade: 1, precoUnitario: 39.99 }
    ],
    valorTotal: 52.89,
    status: "concluído",
    data: "2024-11-25T10:30:00"
  }
];

module.exports = { produtos, clientes, pedidos };
