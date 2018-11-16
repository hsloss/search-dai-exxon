'use strict'

let backgroundColorsArray = ['rgba(0,0,0,0.9)',
  'rgba(0,0,128,0.9)',
  'rgba(0,0,255,0.9)',
  'rgba(0,128,0,0.9)',
  'rgba(0,128,128,0.9)',
  'rgba(0,255,0,0.9)',
  'rgba(0,255,255,0.9)',
  'rgba(128,0,0,0.9)',
  'rgba(128,0,128,0.9)',
  'rgba(128,128,0,0.9)',
  'rgba(128,128,128,0.9)',
  'rgba(192,192,192,0.9)',
  'rgba(255,0,0,0.9)',
  'rgba(255,0,255,0.9)',
  'rgba(255,255,0,0.9)',
  'rgba(255,255,255,0.9)',
  'rgba(0,0,0,0.8)',
  'rgba(0,0,128,0.8)',
  'rgba(0,0,255,0.8)',
  'rgba(0,128,0,0.8)',
  'rgba(0,128,128,0.8)',
  'rgba(0,255,0,0.8)',
  'rgba(0,255,255,0.8)',
  'rgba(128,0,0,0.8)',
  'rgba(128,0,128,0.8)',
  'rgba(128,128,0,0.8)',
  'rgba(128,128,128,0.8)',
  'rgba(192,192,192,0.8)',
  'rgba(255,0,0,0.8)',
  'rgba(255,0,255,0.8)',
  'rgba(255,255,0,0.8)',
  'rgba(255,255,255,0.8)',
  'rgba(0,0,0,0.7)',
  'rgba(0,0,128,0.7)',
  'rgba(0,0,255,0.7)',
  'rgba(0,128,0,0.7)',
  'rgba(0,128,128,0.7)',
  'rgba(0,255,0,0.7)',
  'rgba(0,255,255,0.7)',
  'rgba(128,0,0,0.7)',
  'rgba(128,0,128,0.7)',
  'rgba(128,128,0,0.7)',
  'rgba(128,128,128,0.7)',
  'rgba(192,192,192,0.7)',
  'rgba(255,0,0,0.7)',
  'rgba(255,0,255,0.7)',
  'rgba(255,255,0,0.7)',
  'rgba(255,255,255,0.7)',
  'rgba(0,0,0,0.6)',
  'rgba(0,0,128,0.6)',
  'rgba(0,0,255,0.6)',
  'rgba(0,128,0,0.6)',
  'rgba(0,128,128,0.6)',
  'rgba(0,255,0,0.6)',
  'rgba(0,255,255,0.6)',
  'rgba(128,0,0,0.6)',
  'rgba(128,0,128,0.6)',
  'rgba(128,128,0,0.6)',
  'rgba(128,128,128,0.6)',
  'rgba(192,192,192,0.6)',
  'rgba(255,0,0,0.6)',
  'rgba(255,0,255,0.6)',
  'rgba(255,255,0,0.6)',
  'rgba(255,255,255,0.6)',
  'rgba(0,0,0,0.5)',
  'rgba(0,0,128,0.5)',
  'rgba(0,0,255,0.5)',
  'rgba(0,128,0,0.5)',
  'rgba(0,128,128,0.5)',
  'rgba(0,255,0,0.5)',
  'rgba(0,255,255,0.5)',
  'rgba(128,0,0,0.5)',
  'rgba(128,0,128,0.5)',
  'rgba(128,128,0,0.5)',
  'rgba(128,128,128,0.5)',
  'rgba(192,192,192,0.5)',
  'rgba(255,0,0,0.5)',
  'rgba(255,0,255,0.5)',
  'rgba(255,255,0,0.5)',
  'rgba(255,255,255,0.5)',
  'rgba(0,0,0,0.4)',
  'rgba(0,0,128,0.4)',
  'rgba(0,0,255,0.4)',
  'rgba(0,128,0,0.4)',
  'rgba(0,128,128,0.4)',
  'rgba(0,255,0,0.4)',
  'rgba(0,255,255,0.4)',
  'rgba(128,0,0,0.4)',
  'rgba(128,0,128,0.4)',
  'rgba(128,128,0,0.4)',
  'rgba(128,128,128,0.4)',
  'rgba(192,192,192,0.4)',
  'rgba(255,0,0,0.4)',
  'rgba(255,0,255,0.4)',
  'rgba(255,255,0,0.4)',
  'rgba(255,255,255,0.4)',
  'rgba(0,0,0,0.3)',
  'rgba(0,0,128,0.3)',
  'rgba(0,0,255,0.3)',
  'rgba(0,128,0,0.3)',
  'rgba(0,128,128,0.3)',
  'rgba(0,255,0,0.3)',
  'rgba(0,255,255,0.3)',
  'rgba(128,0,0,0.3)',
  'rgba(128,0,128,0.3)',
  'rgba(128,128,0,0.3)',
  'rgba(128,128,128,0.3)',
  'rgba(192,192,192,0.3)',
  'rgba(255,0,0,0.3)',
  'rgba(255,0,255,0.3)',
  'rgba(255,255,0,0.3)',
  'rgba(255,255,255,0.3)',
  'rgba(0,0,0,0.2)',
  'rgba(0,0,128,0.2)',
  'rgba(0,0,255,0.2)',
  'rgba(0,128,0,0.2)',
  'rgba(0,128,128,0.2)',
  'rgba(0,255,0,0.2)',
  'rgba(0,255,255,0.2)',
  'rgba(128,0,0,0.2)',
  'rgba(128,0,128,0.2)',
  'rgba(128,128,0,0.2)',
  'rgba(128,128,128,0.2)',
  'rgba(192,192,192,0.2)',
  'rgba(255,0,0,0.2)',
  'rgba(255,0,255,0.2)',
  'rgba(255,255,0,0.2)',
  'rgba(255,255,255,0.2)',
  'rgba(0,0,0,0.1)',
  'rgba(0,0,128,0.1)',
  'rgba(0,0,255,0.1)',
  'rgba(0,128,0,0.1)',
  'rgba(0,128,128,0.1)',
  'rgba(0,255,0,0.1)',
  'rgba(0,255,255,0.1)',
  'rgba(128,0,0,0.1)',
  'rgba(128,0,128,0.1)',
  'rgba(128,128,0,0.1)',
  'rgba(128,128,128,0.1)',
  'rgba(192,192,192,0.1)',
  'rgba(255,0,0,0.1)',
  'rgba(255,0,255,0.1)',
  'rgba(255,255,0,0.1)',
  'rgba(255,255,255,0.1)',
  'rgba(0,0,0,0)',
  'rgba(0,0,128,0)',
  'rgba(0,0,255,0)',
  'rgba(0,128,0,0)',
  'rgba(0,128,128,0)',
  'rgba(0,255,0,0)',
  'rgba(0,255,255,0)',
  'rgba(128,0,0,0)',
  'rgba(128,0,128,0)',
  'rgba(128,128,0,0)',
  'rgba(128,128,128,0)',
  'rgba(192,192,192,0)',
  'rgba(255,0,0,0)',
  'rgba(255,0,255,0)',
  'rgba(255,255,0,0)',
  'rgba(255,255,255,0)',
]

let variablesNamesArray = []

let variablesNamesArrayFunc = function(){
  for(let i = 0; i < variablesArray.length; i++){
    let objName = variablesArray[i].variablesName
    variablesNamesArray.push(objName)
    let index = variablesNamesArray.indexOf('total_value')
    if (index > -1) {
      variablesNamesArray.splice(index, 1)
    }
  }
}

let variablesValuesArray = []

console.log(variablesNamesArray)

let variablesValuesArrayFunc = function(){
  for(let i = 0; i < variablesArray.length; i++){
    let objValue = parseInt(variablesArray[i].variablesValue)
    variablesValuesArray.push(objValue)
    let index = variablesValuesArray.indexOf('total_value')
    if (index > -1) {
      variablesValuesArray.splice(index, 1)
    }
  }
}

let elChartContainer = document.getElementById('chart-container')
let ctx = elChartContainer.getContext('2d')

//how can i write a function that takes in an array and returns the value of the array.

let displayChart = function(){
  let elChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: variablesNamesArray,
      datasets: [{
        label: 'Total Spend $',
        data: variablesValuesArray,
        backgroundColor: backgroundColorsArray,
        borderColor:
          'rgba(255,99,132,1)',
        borderWidth: 1
      },
      ]
    },
    options: {
      cutoutPercentage: '50',
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  })}

displayChart()