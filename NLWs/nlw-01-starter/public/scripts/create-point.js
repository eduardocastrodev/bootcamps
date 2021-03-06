function populateUFs() {
  const ufSelect = document.querySelector("select[name=uf]")

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => res.json())
    .then((states) => {
      for (const state of states) {
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
      }
    })
}

populateUFs()

function getCities(event) {
  const citySelect = document.querySelector("select[name=city]")
  const stateInput = document.querySelector("input[name=state]")

  const ufValue = event.target.value

  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

  citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
  citySelect.disabled = true

  fetch(url)
    .then((res) => res.json())
    .then((cities) => {
      for (const city of cities) {
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
      }

      citySelect.disabled = false
    })
}

document.querySelector("select[name=uf]").addEventListener("change", getCities)

// Itens de coleta
// Pegar todos os li's
const itemsToCollect = document.querySelectorAll(".items-grid")

for (const item of itemsToCollect) {
  item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

//Itens Selecionados
let selectedItems = []

function handleSelectedItem(event) {
  const itemLi = event.target
  // Adicionar ou remover uma classe com JS -> add , remove, toggle
  itemLi.classList.toggle("selected")
  const itemId = itemLi.dataset.id

  // console.log('ITEM ID: ', itemId)  // teste itemId

  // Verificar se existem itens selecionados
  // Pegar itens selecionados
  const alreadySelected = selectedItems.findIndex(
    (item) => {
      const itemFound = item == itemId // true or false
      return itemFound
    } // Este código pode ser substituido pelo código abaixo
  ) // const alreadySelected = selectedItems.findIndex.findIndex( item => item == itemId)

  if (alreadySelected >= 0) {
    // quando clicado, se já estiver selecionado, tirar da seleção
    const filteredItems = selectedItems.filter((item) => {
      const itemIsDifferent = item != itemId // false
      return itemIsDifferent
    })

    selectedItems = filteredItems
  } else {
    // quando clicado, se não estiver selecionado, adicionar a seleção
    selectedItems.push(itemId)
  }

  //console.log('selectedItems: ', selectedItems) // teste selectedItems

  // atualizar o campo escondido com itens selecionados
  collectedItems.value = selectedItems
}
