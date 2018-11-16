
let elList = document.getElementById('see-also')
let elForm = document.getElementById('select-variable')
let selectElement = document.getElementById('output_variables')
let input = document.getElementById('search')
let paragraph = document.getElementById('definition')

let variablesArray = []
let selectedCountry = []
let typed = input.value.toLocaleLowerCase()

let Variables = function(name, value, definition){
  this.variablesName = name
  this.variablesValue = value
  this.variablesDefinition = definition
}

// let MaxOpenLocalContent = new Variables('max_open_local_content', '40', 'max value possible for local content if all awardi… and expat labor from skills percentages/salaires')
// let TotalLocalContent = new Variables('total_local_content', '70', 'prime_local_content + locally_awarded_local_content')

// variablesArray.push(MaxOpenLocalContent, TotalLocalContent)

$.getJSON('https://raw.githubusercontent.com/hsloss/search-countries/newNamesForVariables/JSON/lcomvars.json', response => {
  response.data.forEach((val) => {
    let newVar = new Variables(val.name, val.sample_val, val.primary_definition)
    variablesArray.push(newVar)
  })
}).then(function(res){
  displayFunc()
  populateForm()
  variablesNamesArrayFunc()
  variablesValuesArrayFunc()
})

let clickHandler = function(){variablesArray
  removeDefinition()
  for(let i = 0; i < variablesArray.length; i++){
    if(input.value === variablesArray[i].variablesName){
      selectedCountry.push(variablesArray[i])
      let definition = document.createElement('p')
      paragraph.appendChild(definition)
      if(variablesArray[i].variablesDefinition === ''){
        definition.innerText = 'Definition not provided.'
      } else {
        definition.innerText = variablesArray[i].variablesDefinition
      }
    }
  }
  removeSeeAlso()
  for(let i = 0; i < variablesArray.length; i++){
    let variablesNameString = variablesArray[i].variablesName.split('_')
    let inputValueSplit = input.value.split('_')
    for(let j = 0; j < inputValueSplit.length; j++) {
      if (variablesNameString.includes(inputValueSplit[j]) && inputValueSplit[j] !== 'of') {
        let elLI = document.createElement('li')
        elList.appendChild(elLI)
        elLI.innerText = variablesArray[i].variablesName
        elLI.setAttribute('id', variablesArray[i].variablesName)
        elLI.addEventListener('click', clickHandlerSeeAlso)
        break
      }
    }
  }
  selectedCountry = []
}

let displayFunc = function(){
  let displayResults = variablesArray.filter(function(test){
    return test.variablesName === typed
  })
  return displayResults
}

let populateForm = function() {
  elForm.appendChild(selectElement)
  for (let i = 0; i < variablesArray.length; i++) {
    let option = document.createElement('option')
    selectElement.appendChild(option)
    option.innerText = variablesArray[i].variablesName
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