let elList = document.getElementById('see-also')
let elForm = document.getElementById('select-variable')
let selectElement = document.getElementById('output_variables')
let input = document.getElementById('search')
let paragraph = document.getElementById('definition')

let variablesArray = []

$.getJSON('https://raw.githubusercontent.com/hsloss/search-countries/newNamesForVariables/JSON/lcomvars.json', response => {
  response.data.forEach((val) => {
    let newVar = new Variables(val.name, val.sample_value, val.primary_definition)
    variablesArray.push(newVar)
  })
})

let Variables = function(name, value, definition){
  this.name = name
  this.sample_val = value
  this.primary_definition = definition
}
let selectedVariable = []

let typed = input.value.toLocaleLowerCase()

let clickHandler = function(){
  removeDefinition()
  for(let i = 0; i < variablesArray.length; i++){
    if(input.value === variablesArray[i].name){
      selectedVariable.push(variablesArray[i])
      let definition = document.createElement('p')
      paragraph.appendChild(definition)
      definition.innerText = variablesArray[i].primary_definition
    }
  }
  removeSeeAlso()
  for(let i = 0; i < variablesArray.length; i++){
    let nameString = variablesArray[i].name.split('_')
    let inputValueSplit = input.value.split('_')
    for(let j = 0; j < inputValueSplit.length; j++) {
      if (nameString.includes(inputValueSplit[j]) && inputValueSplit[j] !== 'of') {
        let elLI = document.createElement('li')
        elList.appendChild(elLI)
        elLI.innerText = variablesArray[i].name
        elLI.setAttribute('id', variablesArray[i].name)
        elLI.addEventListener('click', clickHandlerSeeAlso)
        break
      }
    }
  }
  selectedVariable = []
}

let displayFunc = function(){
  let displayResults = variablesArray.filter(function(test){
    return test.name === typed
  })
  return displayResults
}

let populateForm = function() {
  elForm.appendChild(selectElement)
  for (let i = 0; i < variablesArray.length; i++) {
    let option = document.createElement('option')
    selectElement.appendChild(option)
    option.innerText = variablesArray[i].name
  }
}

let removeSeeAlso = function(){
  while (elList.hasChildNodes()) {
    elList.removeChild(elList.firstChild)
  }
}

let removeDefinition = function(){
  while (paragraph.hasChildNodes()) {
    paragraph.removeChild(paragraph.firstChild)
  }
}

let clickHandlerSeeAlso = function(){
  input.value = event.target.id
  clickHandler()
}

input.addEventListener('change', clickHandler)
displayFunc()
populateForm()