

let elTable = document.getElementById('see-also')
let elForm = document.getElementById('select-country')
let selectElement = document.getElementById('output_variables')
let input = document.getElementById('search')
let paragraph = document.getElementById('definition')

function loadJSON(callback) {
  var xobj = new XMLHttpRequest()
  xobj.overrideMimeType('application/json')
  xobj.open('GET', '../JSON/lcomvars.json', true)
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == '200') {
      callback(xobj.responseText)
    }
  }
  xobj.send(null)
}

loadJSON()

let Countries = function(name, region, language, description, keywords){
  this.countryName = name
  this.countryRegion = region
  this.countryLanguage = language
  this.countryDescription = description
  this.countryKeywords = keywords
}

let countriesArray = []
let selectedCountry = []

countriesArray.push(Ethiopia, Egypt, Comoros, Nigeria, Botswana, CongoDRC, SouthAfrica, Bhutan, Korea, Russia, Netherlands, UK, Germany, UAE, SaudiArabia, Oman, Bahrain, Qatar, USA, Guatemala)

let typed = input.value.toLocaleLowerCase()

let clickHandler = function(){
  removeDefinition()
  for(let i = 0; i < countriesArray.length; i++){
    if(input.value === countriesArray[i].countryName){
      selectedCountry.push(countriesArray[i])
      let definition = document.createElement('p')
      paragraph.appendChild(definition)
      definition.innerText = countriesArray[i].countryDescription
    }
  }
  removeSeeAlso()
  for(let i = 0; i < countriesArray.length; i++){
    let countryNameString = countriesArray[i].countryName.split('_')
    let inputValueSplit = input.value.split('_')
    for(let j = 0; j < inputValueSplit.length; j++) {
      if (countryNameString.includes(inputValueSplit[j]) && inputValueSplit[j] !== 'of') {
        let elRow = document.createElement('li')
        elTable.appendChild(elRow)
        elRow.innerText = countriesArray[i].countryName
        elRow.setAttribute('id', countriesArray[i].countryName)
        elRow.addEventListener('click', clickHandlerSeeAlso)
        break
      }
    }
  }
  selectedCountry = []
}

let displayFunc = function(){
  let displayResults = countriesArray.filter(function(test){
    return test.countryName === typed
  })
  return displayResults
}

let populateForm = function() {
  elForm.appendChild(selectElement)
  for (let i = 0; i < countriesArray.length; i++) {
    let option = document.createElement('option')
    selectElement.appendChild(option)
    option.innerText = countriesArray[i].countryName
  }
}

let removeSeeAlso = function(){
  while (elTable.hasChildNodes()) {
    elTable.removeChild(elTable.firstChild)
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