// Get the button
document.querySelector("#add-time").addEventListener('click', cloneField)

// When you click the button


// Perform an action
function cloneField() {
  // Duplicar os campos. Que campos?
  const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true or false

  // Clear the fields. What fields?
  const fields = newFieldsContainer.querySelectorAll('input')
  // For each field: clear
  fields.forEach( function(field){
    field.value = ""
  })
    
  // Place on the page. Where to put?
  document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}
  