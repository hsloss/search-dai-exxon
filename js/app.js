
let elList = document.getElementById('see-also')
let elForm = document.getElementById('select-variable')
let selectElement = document.getElementById('output_variables')
let input = document.getElementById('search')
let paragraph = document.getElementById('definition')

let variablesArray = []
let selectedVariable = []
let typed = input.value.toLocaleLowerCase()

let Variables = function(name, value, definition){
  this.variablesName = name
  this.variablesValue = value
  this.variablesDefinition = definition
}

//Lines 18-23 pull data from JSON file and pushes it into a new array 'Variables'//
$.getJSON('https://raw.githubusercontent.com/hsloss/search-countries/newNamesForVariables/JSON/lcomvars.json', response => {
  response.data.forEach((val) => {
    let newVar = new Variables(val.name, val.sample_val, val.primary_definition)
    variablesArray.push(newVar)
  })
}).then(function(res){
  displayFunc()
  populateForm()
})

//on each click, a definition and a see also list is displayed for the selected variable
let clickHandler = function(){variablesArray
  removeDefinition()
  //lines 33-49 populates the selected variable's definition
  for(let i = 0; i < variablesArray.length; i++){
    if(input.value === variablesArray[i].variablesName){
      selectedVariable.push(variablesArray[i])
      let ehead = document.createElement('h2')
      paragraph.appendChild(ehead)
      let str = variablesArray[i].variablesName
      let res = str.replace(/_/g, ' ')
      ehead.innerText = res
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
  //lines 52-65 displays the selected variable's see also list.
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
  //clear the selectedVariable array so the array only has one value on each click
  selectedVariable = []
}

//displayFunc creates a filter of variables based on what is typed into the search bar//
let displayFunc = function(){
  let displayResults = variablesArray.filter(function(test){
    return test.variablesName === typed
  })
  return displayResults
}

//*If you want to search and filter by keyword, you can use the code below (lines 76-88)*
// //et displaySeeAlso = function (){
//   elForm.addEventListener('change', function(event) {
//     event.preventDefault()
//     removeSeeAlso()
//     for(let i = 0; i < countriesArray.length; i++){
//       let j=0
//       if (countriesArray[i].countryRegion === selectedCountry[j].countryRegion|| countriesArray[i].countryLanguage === selectedCountry[j].countryLanguage) {
//         let elRow = document.createElement('li')
//         elTable.appendChild(elRow)
//         elRow.innerText = countriesArray[i].countryName
//         console.log(countriesArray[i].countryName)
//       }
//     }

//populateForm populates all variable names as options in the select dropdown of the form.//
let populateForm = function() {
  elForm.appendChild(selectElement)
  for (let i = 0; i < variablesArray.length; i++) {
    let option = document.createElement('option')
    selectElement.appendChild(option)
    option.innerText = variablesArray[i].variablesName
  }
}

//on each click, the see also list for the previously selected variable is removed.//
let removeSeeAlso = function(){
  while (elList.hasChildNodes()) {
    elList.removeChild(elList.firstChild)
  }
}

//on each click, the definition for the previously selected variable is removed.//
let removeDefinition = function(){
  while (paragraph.hasChildNodes()) {
    paragraph.removeChild(paragraph.firstChild)
  }
}

//on each click in the see also list, assign the value from the see also list the same also as the input variable in the search bar.//
let clickHandlerSeeAlso = function(){
  input.value = event.target.id
  clickHandler()
}

input.addEventListener('change', clickHandler)