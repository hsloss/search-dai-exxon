
let elTable = document.getElementById('see-also')
let elForm = document.getElementById('select-country')
let selectElement = document.getElementById('output_variables')
let input = document.getElementById('search')
let paragraph = document.getElementById('definition')

let Countries = function(name, region, language, description, keywords){
  this.countryName = name
  this.countryRegion = region
  this.countryLanguage = language
  this.countryDescription = description
  this.countryKeywords = keywords
}

let countriesArray = []
let selectedCountry = []

let Ethiopia  = new Countries('federal_republic_of_ethiopia','africa','amharic','Ethiopia, officially the Federal Democratic Republic of Ethiopia, is a country in the Horn of Africa. It shares borders with Eritrea to the north, Djibouti to the northeast, Somalia to the east, Sudan and South Sudan to the west, and Kenya to the south. With over 102 million inhabitants, Ethiopia is the most populous landlocked country in the world and the second-most populous nation on the African continent. It occupies a total area of 1,100,000 square kilometres (420,000 sq mi), and its capital and largest city is Addis Ababa.')
let Egypt  = new Countries('arab_republic_of_egypt','africa','arabic','Egypt, officially the Arab Republic of Egypt, is a country spanning the northeast corner of Africa and southwest corner of Asia by a land bridge formed by the Sinai Peninsula. Egypt is a Mediterranean country bordered by the Gaza Strip and Israel to the northeast, the Gulf of Aqaba to the east, the Red Sea to the east and south, Sudan to the south, and Libya to the west. Across the Gulf of Aqaba lies Jordan, across the red sea lies Saudi Arabia, and across the Mediterranean lie Greece, Turkey and Cyprus, although none share a land border with Egypt.')
let Comoros  = new Countries('union_of_comoros','africa','arabic, french','The Comoros, officially the Union of the Comoros, is an island country in the Indian Ocean located at the northern end of the Mozambique Channel off the eastern coast of Africa between northeastern Mozambique, the french region of Mayotte and northwestern Madagascar. The capital and largest city in Comoros is Moroni. The religion of the majority of the population is Sunni Islam.')
let Nigeria  = new Countries('federal_republic_of_nigeria','africa','english','Nigeria, officially the Federal Republic of Nigeria is a country between Central and West Africa, bordering Niger in the north, Chad in the northeast, Cameroon in the southeast, and Benin in the west. Its coast in the south is located on the Gulf of Guinea in the Atlantic Ocean. The federal republic comprises 36 states and the Federal Capital Territory, where the capital, Abuja is located. Nigeria is officially a democratic secular country.')
let Botswana  = new Countries('republic_of_botswana','africa','english, setswana','Botswana, officially the Republic of Botswana, is a landlocked country located in Southern Africa. Formerly the British protectorate of Bechuanaland, Botswana adopted its new name after becoming independent within the Commonwealth on 30 September 1966. Since then, it has maintained a strong tradition of stable representative democracy, with a consistent record of uninterrupted democratic elections and the best perceived corruption ranking in Africa since at least 1998.')
let CongoDRC  = new Countries('democratic_republic_of_the_congo','africa','french','The Democratic Republic of the Congo, also known as DR Congo, the DRC, Congo-Kinshasa, East Congo, or simply the Congo, is the southernmost country located in Central Africa. It is sometimes referred to by its former name of Zaire, which was its official name between 1971 and 1997. The DRC borders the Central African Republic to the north; South Sudan to the northeast; Uganda, Rwanda, Burundi and Tanzania to the east; Zambia to the south; Angola to the southwest; and the Republic of the Congo and the Atlantic Ocean to the west. It is the second-largest country in Africa after Algeria (the largest in Sub-Saharan Africa) by area and the 11th-largest in the world. With a population of over 78 million, the Democratic Republic of the Congo is the most populated officially Francophone country, the fourth-most-populated country in Africa, and the 16th-most-populated country in the world.')
let SouthAfrica  = new Countries('republic_of_south_africa','africa','zulu, xhosa','South Africa, officially the Republic of South Africa (RSA), is the southernmost country in Africa. It is bounded to the south by 2,798 kilometres (1,739 mi) of coastline of Southern Africa stretching along the South Atlantic and Indian Oceans; to the north by the neighbouring countries of Namibia, Botswana, and Zimbabwe; and to the east and northeast by Mozambique and Swaziland (Eswatini); and it surrounds the enclaved country of Lesotho. South Africa is the largest country in Southern Africa and the 25th-largest country in the world by land area and, with over 57 million people, is the world\'s 24th-most populous nation. It is the southernmost country on the mainland of the Old World or the Eastern Hemisphere. About 80 percent of South Africans are of Sub-Saharan African ancestry, divided among a variety of ethnic groups speaking different African languages, nine of which have official status. The remaining population consists of Africa\'s largest communities of European (White), Asian (Indian), and multiracial (Coloured) ancestry.')
let Bhutan  = new Countries('kingdom_of_bhutan','asia','dzongkha','Bhutan, officially the Kingdom of Bhutan, is a landlocked country in South Asia. Located in the Eastern Himalayas, it is bordered by Tibet Autonomous Region of China in the north, the Sikkim state of India and the Chumbi Valley of Tibet in the west, the Arunachal Pradesh state of India in the east, and the states of Assam and West Bengal in the south. Bhutan is geopolitically in South Asia and is the region\'s second least populous nation after the Maldives. Thimphu is its capital and largest city, while Phuntsholing is its financial center.')
let Korea  = new Countries('democratic_republic_of_korea','asia','korean','South Korea, officially the Republic of Korea (ROK), is a country in East Asia, constituting the southern part of the Korean Peninsula and lying to the east of the Asian mainland. The name Korea is derived from Goguryeo which was one of the great powers in East Asia during its time, ruling most of the Korean Peninsula, Manchuria, parts of the Russian Far East and Inner Mongolia, under Gwanggaeto the Great. South Korea lies in the north temperate zone and has a predominantly mountainous terrain. It comprises an estimated 51.4 million residents distributed over 100,363 km2 (38,750 sq mi). The capital and largest city is Seoul, with a population of 10 million.')
let Russia  = new Countries('russian_federation','asia','russian','Russia, officially the Russian Federation, is a country in Eurasia. At 17,125,200 square kilometres (6,612,100 sq mi),[14] Russia is the largest country in the world by area, covering more than one-eighth of the Earth\'s inhabited land area, and the ninth most populous, with about 144.5 million people as of 2018, excluding Crimea. About 77% of the population live in the western, European part of the country. Russia\'s capital, Moscow, is the largest metropolitan area in Europe proper and one of the largest cities in the world; other major cities include Saint Petersburg, Novosibirsk, Yekaterinburg and Nizhny Novgorod. Extending across the entirety of Northern Asia and much of Eastern Europe, Russia spans eleven time zones and incorporates a wide range of environments and landforms. From northwest to southeast, Russia shares land borders with Norway, Finland, Estonia, Latvia, Lithuania and Poland (both with Kaliningrad Oblast), Belarus, Ukraine, Georgia, Azerbaijan, Kazakhstan, China, Mongolia and North Korea. It shares maritime borders with Japan by the Sea of Okhotsk and the U.S. state of Alaska across the Bering Strait.')
let Netherlands  = new Countries('kingom_of_the_netherlands','europe','dutch','The Netherlands is a country located mainly in Northwestern Europe. Together with three island territories in the Caribbean (Bonaire, Sint Eustatius and Saba), it forms a constituent country of the Kingdom of the Netherlands. The European portion of the Netherlands consists of twelve provinces and borders Germany to the east, Belgium to the south, and the North Sea to the northwest, sharing maritime borders in the North Sea with Belgium, the United Kingdom, and Germany. The five largest cities in the Netherlands are Amsterdam, Rotterdam, The Hague, Utrecht (forming the Randstad megalopolis) and Eindhoven (leading the Brabantse Stedenrij). Amsterdam is the country\'s capital, while The Hague holds the seat of the States General, Cabinet and Supreme Court. The Port of Rotterdam is the largest port in Europe and the world\'s largest outside Asia.')
let UK  = new Countries('united_kingdom','europe','english','The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a sovereign country lying off the north-western coast of the European mainland. The United Kingdom includes the island of Great Britain, the north-eastern part of the island of Ireland and many smaller islands.Northern Ireland is the only part of the United Kingdom that shares a land border with another sovereign state‍—‌the Republic of Ireland. Apart from this land border, the United Kingdom is surrounded by the Atlantic Ocean, with the North Sea to its east, the English Channel to its south and the Celtic Sea to its south-south-west, giving it the 12th-longest coastline in the world. The Irish Sea lies between Great Britain and Ireland. With an area of 242,500 square kilometres (93,600 sq mi), the United Kingdom is the 78th-largest sovereign state in the world. It is also the 22nd-most populous country, with an estimated 66.0 million inhabitants in 2017.')
let Germany  = new Countries('federal_republic_of_germany','europe','german','Germany, officially the Federal Republic of Germany, is a country in Central and Western Europe, lying between the Baltic and North seas to the north, and the Alps to the south. It borders Denmark to the north, Poland and the Czech Republic to the east, Austria and Switzerland to the south, and France, Luxembourg, Belgium and the Netherlands to the west. Germany includes 16 constituent states, covers an area of 357,386 square kilometres (137,988 sq mi), and has a largely temperate seasonal climate. With nearly 83 million inhabitants, it is the second most populous state of Europe after Russia, the most populous state lying entirely in Europe, as well as the most populous member state of the European Union. Germany\'s capital and largest metropolis is Berlin, while its largest conurbation is the Ruhr, with its main centres of Dortmund and Essen. The country\'s other major cities are Hamburg, Munich, Cologne, Frankfurt, Stuttgart, Düsseldorf, Leipzig, Bremen, Dresden, Hannover, and Nuremberg.')
let UAE  = new Countries('united_arab_emirates','middle_east','arabic','The United Arab Emirates, sometimes simply called the Emirates, is a country in Western Asia at the southeast end of the Arabian Peninsula on the Persian Gulf, bordering Oman to the east and Saudi Arabia to the south, as well as sharing maritime borders with Qatar to the west and Iran to the north. The sovereign absolute monarchy is a federation of seven emirates consisting of Abu Dhabi (which serves as the capital), Ajman, Dubai, Fujairah, Ras al-Khaimah, Sharjah and Umm al-Quwain. Each emirate is governed by a ruler; together, they jointly form the Federal Supreme Council. One of the rulers serves as the President of the United Arab Emirates. In 2013, the UAE\'s population was 9.2 million, of which 1.4 million are Emirati citizens and 7.8 million are expatriates.')
let SaudiArabia  = new Countries('kingdom_of_saudi_arabia','middle_east','arabic','Saudi Arabia, officially the Kingdom of Saudi Arabia, is a country in Western Asia constituting the bulk of the Arabian Peninsula. With a land area of approximately 2,150,000 km2 (830,000 sq mi), Saudi Arabia is the largest sovereign state in the Middle East, geographically the fifth-largest in Asia, second-largest in the Arab world after Algeria and 12th-largest in the world. Saudi Arabia is bordered by Jordan and Iraq to the north, Kuwait to the northeast, Qatar, Bahrain, and the United Arab Emirates to the east, Oman to the southeast and Yemen to the south. It is separated from Israel and Egypt by the Gulf of Aqaba. It is the only nation with both a Red Sea coast and a Persian Gulf coast, and most of its terrain consists of arid desert, lowland and mountains. Saudi Arabia is the largest economy in the Middle East as of October 2018 and the 18th largest in the world.')
let Oman  = new Countries('sultanate_of_oman','middle_east','arabic','Oman, officially the Sultanate of Oman, is an Arab country on the southeastern coast of the Arabian Peninsula in Western Asia. Its official religion is Islam. Holding a strategically important position at the mouth of the Persian Gulf, the country shares land borders with the United Arab Emirates to the northwest, Saudi Arabia to the west, and Yemen to the southwest, and shares marine borders with Iran and Pakistan. The coast is formed by the Arabian Sea on the southeast and the Gulf of Oman on the northeast. The Madha and Musandam exclaves are surrounded by the UAE on their land borders, with the Strait of Hormuz (which it shares with Iran) and Gulf of Oman forming Musandam\'s coastal boundaries.')
let Bahrain  = new Countries('kingdom_of_bahrain','middle_east','arabic','Bahrain, officially the Kingdom of Bahrain, is an island country in the Persian Gulf. The sovereign state comprises a small archipelago centered around Bahrain Island, situated between the Qatar peninsula and the north eastern coast of Saudi Arabia, to which it is connected by the 25-kilometre (16 mi) King Fahd Causeway. Bahrain\'s population is 1,234,571 (c. 2010), including 666,172 non-nationals. It is 765.3 square kilometres (295.5 sq mi) in size, making it the third-smallest nation in Asia after the Maldives and Singapore.')
let Qatar  = new Countries('state_of_qatar','middle_east','arabic','Qatar, officially the State of Qatar, is a country located in Western Asia, occupying the small Qatar Peninsula on the northeastern coast of the Arabian Peninsula. Whether the sovereign state should be regarded as a constitutional or an absolute monarchy is disputed. Its sole land border is with neighboring Gulf Cooperation Council (GCC) monarchy Saudi Arabia to the south, with the rest of its territory surrounded by the Persian Gulf. An arm of the Persian Gulf separates Qatar from the nearby Bahrain.')
let USA  = new Countries('united_states_of_america','north_america','english','The United States of America (USA), commonly known as the United States (U.S. or US) or America, is a country composed of 50 states, a federal district, five major self-governing territories, and various possessions. At 3.8 million square miles (9.8 million km2), the United States is the world\'s third- or fourth-largest country by total area and slightly smaller than the entire continent of Europe\'s 3.9 million square miles (10.1 million km2). With a population of over 325 million people, the U.S. is the third most populous country. The capital is Washington, D.C., and the largest city by population is New York City. Forty-eight states and the capital\'s federal district are contiguous in North America between Canada and Mexico. The State of Alaska is in the northwest corner of North America, bordered by Canada to the east and across the Bering Strait from Russia to the west. The State of Hawaii is an archipelago in the mid-Pacific Ocean. The U.S. territories are scattered about the Pacific Ocean and the Caribbean Sea, stretching across nine official time zones. The extremely diverse geography, climate, and wildlife of the United States make it one of the world\'s 17 megadiverse countries.')
let Guatemala  = new Countries('republic_of_guatemala','north_america','spanish','Guatemala, officially the Republic of Guatemala, is a country in Central America bordered by Mexico to the north and west, Belize and the Caribbean to the northeast, Honduras to the east, El Salvador to the southeast and the Pacific Ocean to the south. With an estimated population of around 16.6 million, it is the most populated country in Central America. Guatemala is a representative democracy; its capital and largest city is Nueva Guatemala de la Asunción, also known as Guatemala City.')

countriesArray.push(Ethiopia, Egypt, Comoros, Nigeria, Botswana, CongoDRC, SouthAfrica, Bhutan, Korea, Russia, Netherlands, UK, Germany, UAE, SaudiArabia, Oman, Bahrain, Qatar, USA, Guatemala)

let typed = input.value.toLocaleLowerCase()

let clickHandler = function(){
  removeDefinition()
  for(let i = 0; i < countriesArray.length; i++){
    if(input.value === countriesArray[i].countryName){
      selectedCountry.push(countriesArray[i])
      console.log(countriesArray[i])
      let definition = document.createElement('p')
      paragraph.appendChild(definition)
      definition.innerText = countriesArray[i].countryDescription
    } 
  }
  removeSeeAlso()
  for(let i = 0; i < countriesArray.length; i++){
    let j=0
    if (countriesArray[i].countryRegion === selectedCountry[j].countryRegion|| countriesArray[i].countryLanguage === selectedCountry[j].countryLanguage) {
      let elRow = document.createElement('li')
      elTable.appendChild(elRow)
      elRow.innerText = countriesArray[i].countryName
    }
  }
  selectedCountry = []
}



let displayFunc = function(){
  let displayResults = countriesArray.filter(function(test){
    return test.countryName === typed
  })
  console.log(displayResults)
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

input.addEventListener('change', clickHandler)
displayFunc()
populateForm()
// displaySeeAlso()