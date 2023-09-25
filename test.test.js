const calcularFaturamento = require('./src/main.js');

test('A função calcularFaturamento existe', () => {
  expect(calcularFaturamento).toBeDefined()
  expect(typeof calcularFaturamento).toBe("function");
});

test('Faturamento quando não há compras', () => {
  expect(calcularFaturamento()).toBe(0)
})

test('Faturamento de uma compra com um único item', () => {
  const compraUnica = {
    itens: [{
      nome: "Camiseta",
      valor: 10
    }]
  }
  expect(calcularFaturamento(compraUnica)).toBe(10)
})

test('Faturamento de uma compra com vários itens', () => {
  const compraUnica = {
    itens: [
      {
        nome: "Camiseta",
        valor: 10
      },
      {
        nome: "Calça",
        valor: 90
      },
      {
        nome: "Meia",
        valor: 20
      }
    ]
  }
  expect(calcularFaturamento(compraUnica)).toBe(120)
})

test('Faturamento de várias compras com um único item', () => {
  const compra1 = {
    itens: [{
      nome: "Camiseta",
      valor: 10
    }]
  }

  const compra2 = {
    itens: [{
      nome: "Calça",
      valor: 90
    }]
  }

  const compra3 = {
    itens: [{
      nome: "Meia",
      valor: 20
    }]
  }
  expect(calcularFaturamento(compra1, compra2, compra3)).toBe(120)
})

test('Faturamento de várias compras com uma quantidade variável de itens', () => {
  const compra1 = {
    itens: [
      { nome: 'Camiseta', valor: 30 },
      { nome: 'Calça Jeans', valor: 40 },
      { nome: 'Tênis', valor: 50 }
    ]
  };
  
  const compra2 = {
    itens: [
      { nome: 'Livro', valor: 10 },
      { nome: 'Caneta', valor: 10 },
      { nome: 'Caderno', valor: 20 }
    ]
  };
  
  const compra3 = {
    itens: [
      { nome: 'Smartphone', valor: 30 },
      { nome: 'Fone de Ouvido', valor: 30 }
    ]
  };
  
  const compra4 = {
    itens: [
      { nome: 'Máquina de Café', valor: 90 },
      { nome: 'Cápsulas de Café', valor: 10 }
    ]
  };
  
  const compra5 = {
    itens: [
      { nome: 'Monitor', valor: 40 },
      { nome: 'Teclado', valor: 20 },
      { nome: 'Mouse', valor: 10 }
    ]
  };
  
  expect(calcularFaturamento(compra1, compra2, compra3, compra4, compra5)).toBe(390)
})