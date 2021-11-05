function toggle() {
  const modal = document.querySelector('.modal-overlay')

  if (modal.classList.contains('active')) {
    modal.classList.remove('active')
  } else {
    modal.classList.add('active')
  }
}

const transations = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '23/01/2021'
  },
  {
    id: 2,
    description: 'Criação de Website	',
    amount: 500000,
    date: '26/01/2021	'
  },
  {
    id: 3,
    description: 'Aluguel',
    amount: -150000,
    date: '26/01/2021'
  },
  {
    id: 4,
    description: 'App',
    amount: 200000,
    date: '27/01/2021'
  }
]

const Transation = {
  all: transations,
  add(transation) {
    Transation.all.push(transation)
  },
  incomes () {
    let income = 0;

    Transation.all.forEach((transation) => {
      if (transation.amount > 0) income += transation.amount;
    })

    return income
  },
  expenses () {
    let expense = 0;

    Transation.all.forEach((transation) => {
      if (transation.amount < 0) expense += transation.amount;
    })

    return expense;
  },
  total () {
    return Transation.incomes() + Transation.expenses()
  }
}

const DOM = {
  transationContainer: document.querySelector('#data-table tbody'),

  addTransition(transation, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction(transation)

    DOM.transationContainer.appendChild(tr)
  },
  innerHTMLTransaction(transation) {
  const CSSclass = transation.amount > 0 ? 'income' : 'expense'
  const amount = Utils.formatCurrency(transation.amount)

    const html = `
      <td class="description">${transation.description}</td>
      <td class="${CSSclass}">${amount}</td>
      <td class="date">${transation.date}</td>
      <th><img src="assets/minus.svg" alt="Remover transação"></th>
    `

    return html
  },
  updateBalance() { 
    document.getElementById('incomeDisplay').innerHTML = Utils.formatCurrency(Transation.incomes())
    document.getElementById('expenseDisplay').innerHTML = Utils.formatCurrency(Transation.expenses())
    document.getElementById('totalDisplay').innerHTML = Utils.formatCurrency(Transation.total())
  }
}

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? '-' : ''

    value = String(value).replace(/\D/g, "")
    
    value = Number(value) / 100

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })

    return ( signal + value )
  }
}

transations.forEach( function(transation) {
  DOM.addTransition(transation)
})

DOM.updateBalance()
