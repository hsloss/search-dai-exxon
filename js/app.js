
let elList = document.getElementById('see-also')
let elForm = document.getElementById('select-variable')
let selectElement = document.getElementById('output_variables')
let input = document.getElementById('search')
let paragraph = document.getElementById('definition')

let variablesArray = []
let selectedCountry = []
let typed = input.value.toLocaleLowerCase()

let Variables = function(name, value, definition){
  this.variableName = name
  this.variableValue = value
  this.variableDefinition = definition
}

let MaxOpenLocalContent = new Variables('max_open_local_content', '40', 'max value possible for local content if all awardi… and expat labor from skills percentages/salaires')
let TotalLocalContent = new Variables('total_local_content', '70', 'prime_local_content + locally_awarded_local_content')

variablesArray.push(MaxOpenLocalContent, TotalLocalContent)

// $.getJSON('https://raw.githubusercontent.com/hsloss/search-countries/newNamesForVariables/JSON/lcomvars.json', response => {
//   response.data.forEach((val) => {
//     let newVar = new Variables(val.name, val.sample_value, val.primary_definition)
//     variablesArray.push(newVar)
//   })
// })

let clickHandler = function(){
  removeDefinition()
  for(let i = 0; i < variablesArray.length; i++){
    if(input.value === variablesArray[i].variableName){
      selectedCountry.push(variablesArray[i])
      console.log(variablesArray[i])
      let definition = document.createElement('p')
      paragraph.appendChild(definition)
      definition.innerText = variablesArray[i].variableDefinition
    }
  }
  removeSeeAlso()
  for(let i = 0; i < variablesArray.length; i++){
    let j=0
    if (variablesArray[i].variableValue === selectedCountry[j].variableValue|| variablesArray[i].countryLanguage === selectedCountry[j].countryLanguage) {
      let elLI = document.createElement('li')
      elList.appendChild(elLI)
      elLI.innerText = variablesArray[i].variableName
    }
  }
  selectedCountry = []
}

let displayFunc = function(){
  let displayResults = variablesArray.filter(function(test){
    return test.variableName === typed
  })
  console.log(displayResults)
  return displayResults
}

let populateForm = function() {
  elForm.appendChild(selectElement)
  for (let i = 0; i < variablesArray.length; i++) {
    let option = document.createElement('option')
    selectElement.appendChild(option)
    option.innerText = variablesArray[i].variableName
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

input.addEventListener('change', clickHandler)
displayFunc()
populateForm()