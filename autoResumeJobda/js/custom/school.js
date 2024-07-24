document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('highschool-search');
    const searchResultList = document.getElementById('search-result-list');
    const selectedSchoolDisplay = document.getElementById('selected-school-display');
    const selectedSchoolName = document.getElementById('selected-school-name');
    const selectedSchoolCode = document.getElementById('selected-school-code');
    const searchDiv = searchInput.closest('.search');
    const searchResult = searchDiv.querySelector('.searchResult');
    const highschoolData = [
                             {
                               "limitSize": 0,
                               "highschoolCode": "7901",
                               "highschoolName": "1 de Marzo"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8662",
                               "highschoolName": "1104 School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7897",
                               "highschoolName": "A.Y. Jackson Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8271",
                               "highschoolName": "Abilene High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8319",
                               "highschoolName": "Abundant Life Christian School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8489",
                               "highschoolName": "Academic music collage of Moscow state Tchaikovsky Conservatory"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8232",
                               "highschoolName": "ACG Strathallan"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9508",
                               "highschoolName": "ACS Cobham International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6715",
                               "highschoolName": "ACS고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8659",
                               "highschoolName": "Albany High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8092",
                               "highschoolName": "Alberta Education"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8690",
                               "highschoolName": "All Saints Anglican School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7351",
                               "highschoolName": "Allen Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6716",
                               "highschoolName": "Alma Michigan High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7510",
                               "highschoolName": "America English Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7980",
                               "highschoolName": "American Embassy School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7959",
                               "highschoolName": "American Embassy School India"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8779",
                               "highschoolName": "American Heritage School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8824",
                               "highschoolName": "American International School of Dhaka"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7379",
                               "highschoolName": "American International School of Guangzhou"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8098",
                               "highschoolName": "American School of Guatemala"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8018",
                               "highschoolName": "American School of Las Palmas"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6717",
                               "highschoolName": "American School of Paris"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6718",
                               "highschoolName": "American School of Radiology"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6719",
                               "highschoolName": "Amundsen H.S."
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7658",
                               "highschoolName": "Anglo Americano"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7987",
                               "highschoolName": "Antoine-Brossard"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7534",
                               "highschoolName": "Army and Navy Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7381",
                               "highschoolName": "Artesia High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8634",
                               "highschoolName": "Auburn Adventist Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8302",
                               "highschoolName": "Aurora Private School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8708",
                               "highschoolName": "Australian International School Singapore"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7499",
                               "highschoolName": "Ballard High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6720",
                               "highschoolName": "Bana-Hall high school"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8633",
                               "highschoolName": "Bangalore International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7474",
                               "highschoolName": "Barrie North Collegiate"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7516",
                               "highschoolName": "Baylor School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8065",
                               "highschoolName": "Bayview Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8165",
                               "highschoolName": "BCALC"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7464",
                               "highschoolName": "Beijing 2nd Normal High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7500",
                               "highschoolName": "Beijing BISS International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7875",
                               "highschoolName": "Beijing Concord College of Sino-Canada (북경중가학교)"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7489",
                               "highschoolName": "Beijing Huijia Private School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8068",
                               "highschoolName": "Beijing No.55 High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7195",
                               "highschoolName": "Beijing World Youth Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7964",
                               "highschoolName": "Beijing Yurong Shiyan High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7441",
                               "highschoolName": "Beijing Zhongshan High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6721",
                               "highschoolName": "Bell"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8755",
                               "highschoolName": "Bell International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7524",
                               "highschoolName": "Bellevue Christian School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6722",
                               "highschoolName": "Belmont High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7182",
                               "highschoolName": "Ben Lippen School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6723",
                               "highschoolName": "Bethel Christian High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6724",
                               "highschoolName": "Beverly Hills High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7984",
                               "highschoolName": "Birkenhead College"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8589",
                               "highschoolName": "Bishop Brady High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7858",
                               "highschoolName": "Bishop Seabury Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8683",
                               "highschoolName": "Bishop#39s College School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6725",
                               "highschoolName": "Blair Academy -New Jersey"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8152",
                               "highschoolName": "Blue Mountain Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7801",
                               "highschoolName": "Bolsa Grande HIgh School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7825",
                               "highschoolName": "Brent International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6726",
                               "highschoolName": "Brentwood College School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8212",
                               "highschoolName": "Brentwood Secondary College"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6727",
                               "highschoolName": "Brewster Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7517",
                               "highschoolName": "Brisbane Grammar School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8337",
                               "highschoolName": "Britannica International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9493",
                               "highschoolName": "British International School Vietnam"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8016",
                               "highschoolName": "British School of Gran Canaria"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6728",
                               "highschoolName": "Bronx High School of Science NY"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6729",
                               "highschoolName": "Brony High School of Science"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6730",
                               "highschoolName": "Brooklyn Tech High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8660",
                               "highschoolName": "Buena High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6731",
                               "highschoolName": "Burbank High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7200",
                               "highschoolName": "Burlington Central High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7044",
                               "highschoolName": "Burnaby North Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7995",
                               "highschoolName": "Burwood Girls High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7620",
                               "highschoolName": "C.legacy Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7458",
                               "highschoolName": "Cairo American College"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8787",
                               "highschoolName": "Calstone School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8618",
                               "highschoolName": "Calvary Baptist School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7485",
                               "highschoolName": "Calvary Christian School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6981",
                               "highschoolName": "Cambridge School of Weston"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6732",
                               "highschoolName": "Cambrige Rindge and Latin School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7523",
                               "highschoolName": "Campbell Collegiate Institute"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7668",
                               "highschoolName": "Canterbury School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8673",
                               "highschoolName": "Canyonville Christian Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7887",
                               "highschoolName": "Cardinal Mooney Catholic High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7657",
                               "highschoolName": "Carey Baptist Grammar School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7421",
                               "highschoolName": "Carson Graham Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8590",
                               "highschoolName": "Cary High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8146",
                               "highschoolName": "Cascadilla School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8250",
                               "highschoolName": "CATS College Canterbury"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7631",
                               "highschoolName": "CEI Hidalgo"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7713",
                               "highschoolName": "Central Catholic High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7783",
                               "highschoolName": "Central Kings Rural High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7974",
                               "highschoolName": "Centreville High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8130",
                               "highschoolName": "Century High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6854",
                               "highschoolName": "Chapel Hill - Chauncy Hall"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6733",
                               "highschoolName": "Charles M Russell High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7033",
                               "highschoolName": "Chatham Collegiate Institute"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7889",
                               "highschoolName": "Chattahoochee High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6734",
                               "highschoolName": "Cheshire Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6735",
                               "highschoolName": "Chicago Gordon Tech"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7298",
                               "highschoolName": "Christian Academy of Western New York"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6736",
                               "highschoolName": "Christopher Columbus High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7582",
                               "highschoolName": "Colegio Caesp"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7660",
                               "highschoolName": "Colegio Nacional Naciones Unidas"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7048",
                               "highschoolName": "Colegio San Agustin"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6737",
                               "highschoolName": "Colegio San Martin"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8248",
                               "highschoolName": "Colegio Ward"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8114",
                               "highschoolName": "Concord High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8857",
                               "highschoolName": "Connecticut High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6959",
                               "highschoolName": "Contra Costa Christian High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8821",
                               "highschoolName": "Cornelia Connelly High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7715",
                               "highschoolName": "Cornerstone Christian Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7868",
                               "highschoolName": "Cotter High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8184",
                               "highschoolName": "Crescent Heights High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7949",
                               "highschoolName": "Crestwood Preparatory College"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7797",
                               "highschoolName": "Culver Academies"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7502",
                               "highschoolName": "Cupertino High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7601",
                               "highschoolName": "Curtis High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8328",
                               "highschoolName": "Cushing Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8372",
                               "highschoolName": "Dalat International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8680",
                               "highschoolName": "Darlington School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6869",
                               "highschoolName": "David Crockett"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8639",
                               "highschoolName": "Davis High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8140",
                               "highschoolName": "Delia School of Canada"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7583",
                               "highschoolName": "DeQiang High-school"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6738",
                               "highschoolName": "Dulles High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6739",
                               "highschoolName": "Eagle Rock"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7787",
                               "highschoolName": "Eastbourne College of Arts"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7677",
                               "highschoolName": "El dorado"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8195",
                               "highschoolName": "Elgin Park Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8380",
                               "highschoolName": "Emerson High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8643",
                               "highschoolName": "EMEU"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7839",
                               "highschoolName": "Emmar International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7922",
                               "highschoolName": "Eric Hamber Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7188",
                               "highschoolName": "Etobicoke Collegiate Institute"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7808",
                               "highschoolName": "Eynesbury Senior College"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8539",
                               "highschoolName": "Fairfax High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7706",
                               "highschoolName": "Fairmont Preparatory Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6828",
                               "highschoolName": "Fairview High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6827",
                               "highschoolName": "Fairview International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7518",
                               "highschoolName": "Faith Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8277",
                               "highschoolName": "Faith Christian Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6740",
                               "highschoolName": "Father Michael Goetz Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6741",
                               "highschoolName": "FatherRyan highshcool"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8340",
                               "highschoolName": "Fleetwood Park Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6742",
                               "highschoolName": "Florida Air Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8568",
                               "highschoolName": "Flushing High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7874",
                               "highschoolName": "Foothill High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6743",
                               "highschoolName": "Fort Lee High school"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6744",
                               "highschoolName": "Francis Lewis"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6745",
                               "highschoolName": "Frankfurt International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7807",
                               "highschoolName": "Fraser Height Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8168",
                               "highschoolName": "Fremd High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8037",
                               "highschoolName": "Gabrielino High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6746",
                               "highschoolName": "George Washington High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7362",
                               "highschoolName": "Georges Vanier Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6747",
                               "highschoolName": "Ghana International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8021",
                               "highschoolName": "Gisborne High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6748",
                               "highschoolName": "Glen A. Wilson High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6749",
                               "highschoolName": "Glenforest Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6951",
                               "highschoolName": "Granada hills Charter High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7319",
                               "highschoolName": "Green Lawns High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7439",
                               "highschoolName": "Greenlawns High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7480",
                               "highschoolName": "Guangdong Zhongyuan High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8254",
                               "highschoolName": "Guardia de Honor"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6847",
                               "highschoolName": "Guilin High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7867",
                               "highschoolName": "Half Hollow Hills High School West"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8162",
                               "highschoolName": "Hamilton Girls High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8238",
                               "highschoolName": "Hamilton Southeastern High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8509",
                               "highschoolName": "Hammond School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6750",
                               "highschoolName": "Hampton School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7491",
                               "highschoolName": "Handsworth Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7377",
                               "highschoolName": "Hart High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8299",
                               "highschoolName": "Hastings Catholic High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8712",
                               "highschoolName": "Heritage High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8167",
                               "highschoolName": "Heritage Woods Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9480",
                               "highschoolName": "High School affiliated by Vladivostok State University of Economics and Service"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6944",
                               "highschoolName": "High School Affiliated to BIT"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7007",
                               "highschoolName": "Hillcrest International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7992",
                               "highschoolName": "Hillcrest Luteran Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6751",
                               "highschoolName": "Hills Grammer"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6752",
                               "highschoolName": "Hollywood Fashion&Beauty College"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6753",
                               "highschoolName": "Holy Cross High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6754",
                               "highschoolName": "Hong Wan High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6755",
                               "highschoolName": "Hornshog"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6756",
                               "highschoolName": "HT. EDEN"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8042",
                               "highschoolName": "Hwa Chong International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8783",
                               "highschoolName": "Ibn Khaldon High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7132",
                               "highschoolName": "Idyllwild Arts Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9501",
                               "highschoolName": "IEP Piboonbumpen Demonstration School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7671",
                               "highschoolName": "IES Ausias March"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7680",
                               "highschoolName": "IESVAL"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8199",
                               "highschoolName": "Immaculate Heart Central High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7947",
                               "highschoolName": "Incarnate Word High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7626",
                               "highschoolName": "Instituto Maria Inmaculada"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7354",
                               "highschoolName": "International Christian School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7967",
                               "highschoolName": "International Christian School of Budapest"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7496",
                               "highschoolName": "International School Ho Chi Minh City"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6757",
                               "highschoolName": "International school of Geneva"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8734",
                               "highschoolName": "International School of Kular Lumpur"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6758",
                               "highschoolName": "International School of Manila"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8202",
                               "highschoolName": "International School of Milan"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8632",
                               "highschoolName": "International School of Tianjin (IST)"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7682",
                               "highschoolName": "International SEK"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9489",
                               "highschoolName": "ISS International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7009",
                               "highschoolName": "Issaquah High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8517",
                               "highschoolName": "IWMS"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6759",
                               "highschoolName": "JAKARTA Gandhi Memorial International School(GMIS)"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6846",
                               "highschoolName": "Jakarta International Korean School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6760",
                               "highschoolName": "Jakarta International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8587",
                               "highschoolName": "James River High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6761",
                               "highschoolName": "James W riley high school"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6762",
                               "highschoolName": "JEB STUART"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8066",
                               "highschoolName": "John Dewey High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6843",
                               "highschoolName": "John Hersey High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8088",
                               "highschoolName": "Juan Diego High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9498",
                               "highschoolName": "Junshin Girl's High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7270",
                               "highschoolName": "JunYI High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7536",
                               "highschoolName": "Kaiserin Friedrich Gymnasium"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8786",
                               "highschoolName": "kameya High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7649",
                               "highschoolName": "Kandy Grammar School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8635",
                               "highschoolName": "Kankakee High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9494",
                               "highschoolName": "Kaohsiung Municipal Sanmin Home Economics & Commerce Vocational High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8842",
                               "highschoolName": "Kelston Boys' High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8746",
                               "highschoolName": "Kensington School Barcelona"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8694",
                               "highschoolName": "Khoai Chau High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6763",
                               "highschoolName": "Kilmore International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7604",
                               "highschoolName": "Kilvington Grammar School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7426",
                               "highschoolName": "Kings High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6782",
                               "highschoolName": "Kingston Wyoming Seminary"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7803",
                               "highschoolName": "Kitsilano Secondary"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8342",
                               "highschoolName": "Knox High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7916",
                               "highschoolName": "Kodaikanal International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8503",
                               "highschoolName": "Kolej Tuanku Jaffar"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6764",
                               "highschoolName": "La Salle"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7313",
                               "highschoolName": "Laguna Hills High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7856",
                               "highschoolName": "Lake Braddock Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6765",
                               "highschoolName": "Lake forest Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6766",
                               "highschoolName": "Lake Oswego"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8420",
                               "highschoolName": "Lakefield College School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8578",
                               "highschoolName": "Lancaster Mennonite High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7284",
                               "highschoolName": "Lancing College"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7821",
                               "highschoolName": "Langfang No.8 Foreign Language School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7961",
                               "highschoolName": "Langley Christian School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7776",
                               "highschoolName": "Langley Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8551",
                               "highschoolName": "Lansdale Catholic High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7002",
                               "highschoolName": "Lawrence Woodmere Academy (LWA)"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8479",
                               "highschoolName": "LCVI Secondary"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8537",
                               "highschoolName": "Le Cordon Bleu Australia"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7884",
                               "highschoolName": "Lenape High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7278",
                               "highschoolName": "Lenawee Christian High school"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7186",
                               "highschoolName": "Lincoln Comm. High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8869",
                               "highschoolName": "Los Angeles High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8070",
                               "highschoolName": "Luther Collegiate High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7467",
                               "highschoolName": "Lycee De Tokoin"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7316",
                               "highschoolName": "Lyndhurst High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6987",
                               "highschoolName": "Macleans College"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7780",
                               "highschoolName": "Macleod College"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8032",
                               "highschoolName": "Magee Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7970",
                               "highschoolName": "Mander Portman Woodward College London"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6767",
                               "highschoolName": "Manheim Central High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8087",
                               "highschoolName": "Manila Hankuk Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7295",
                               "highschoolName": "Maple Ridge"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8614",
                               "highschoolName": "Maria Ausiliatrice Montessori"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8648",
                               "highschoolName": "Marian Baker School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7525",
                               "highschoolName": "Marianapolis Preparatory School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7855",
                               "highschoolName": "Marianas High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6768",
                               "highschoolName": "Martin Luther"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7870",
                               "highschoolName": "Massey High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7498",
                               "highschoolName": "MAZ International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8163",
                               "highschoolName": "McDonald International Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8226",
                               "highschoolName": "Mentor High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8219",
                               "highschoolName": "Mercedes-Benz International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6769",
                               "highschoolName": "Meriden"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8273",
                               "highschoolName": "Mesquite High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8385",
                               "highschoolName": "Metropolitan Preparatory Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6770",
                               "highschoolName": "Mid-Pacific Institute"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8730",
                               "highschoolName": "Middlesex School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8081",
                               "highschoolName": "Midland Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7484",
                               "highschoolName": "Moanalua High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6992",
                               "highschoolName": "Model High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6771",
                               "highschoolName": "Monalua High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7966",
                               "highschoolName": "Mongolia High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8684",
                               "highschoolName": "Monte Vista Christian High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8665",
                               "highschoolName": "Monticello High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8182",
                               "highschoolName": "Montverde Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8243",
                               "highschoolName": "Mounds View High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8301",
                               "highschoolName": "Mount Carmel School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8038",
                               "highschoolName": "Mount Douglas Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6772",
                               "highschoolName": "Mountain Lakes High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8237",
                               "highschoolName": "Mountain Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7289",
                               "highschoolName": "Mumbai National Open School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8041",
                               "highschoolName": "Murdoch College"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8307",
                               "highschoolName": "Mutiara International Grammer School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7395",
                               "highschoolName": "Nativity B.V.M High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8603",
                               "highschoolName": "New Mexico Military Institute"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7708",
                               "highschoolName": "New Plymouth Girls High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8670",
                               "highschoolName": "New York Bayside High Shool"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7394",
                               "highschoolName": "Newbury Park Adventist Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8063",
                               "highschoolName": "Newton South High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6773",
                               "highschoolName": "Newtonbrook secondary school"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6774",
                               "highschoolName": "Newtown High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7448",
                               "highschoolName": "Nicholson Catholic College"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7899",
                               "highschoolName": "NIST International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8230",
                               "highschoolName": "NIST 국제고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6775",
                               "highschoolName": "NMH"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7772",
                               "highschoolName": "NMIS"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7917",
                               "highschoolName": "NO.18 고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8043",
                               "highschoolName": "No.2 High School of China"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8320",
                               "highschoolName": "No.58 International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7459",
                               "highschoolName": "No.6 Rizhao High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6776",
                               "highschoolName": "North Penn Senior High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7920",
                               "highschoolName": "Northeast School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8134",
                               "highschoolName": "Northern Marianas Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6777",
                               "highschoolName": "Northern Valley Regional High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6778",
                               "highschoolName": "Northfield Mount Hermon School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7423",
                               "highschoolName": "Northview Heights Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9495",
                               "highschoolName": "Northview High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8090",
                               "highschoolName": "Northwood High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7215",
                               "highschoolName": "Notre Dame Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7782",
                               "highschoolName": "Oak Hall school"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6779",
                               "highschoolName": "Oldham County High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8785",
                               "highschoolName": "Om kalthoum High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7451",
                               "highschoolName": "Orewa College"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8079",
                               "highschoolName": "Osnas"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6781",
                               "highschoolName": "Overland"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8795",
                               "highschoolName": "Oxstand International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8189",
                               "highschoolName": "Padworth College"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6783",
                               "highschoolName": "Palos Verdes High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6784",
                               "highschoolName": "Palos Verdes HS"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6785",
                               "highschoolName": "Paramus High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6786",
                               "highschoolName": "Park Ridge High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6787",
                               "highschoolName": "Patapsco high school"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7077",
                               "highschoolName": "Paul D. Schreiber"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7805",
                               "highschoolName": "Paul VI High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7810",
                               "highschoolName": "Pembroke School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7944",
                               "highschoolName": "Peoples Christian Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6788",
                               "highschoolName": "Perkiomen School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8846",
                               "highschoolName": "Philippine Chen Kuang High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7696",
                               "highschoolName": "Pitt Meadows Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6789",
                               "highschoolName": "Placentia, California, USA"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7957",
                               "highschoolName": "Portland Christian High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8223",
                               "highschoolName": "Portland Lutheran High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8000",
                               "highschoolName": "Prepa Tec CEGS"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8215",
                               "highschoolName": "Prof. Felix"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8179",
                               "highschoolName": "Providence Senior High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7942",
                               "highschoolName": "Puebla Christian School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7986",
                               "highschoolName": "Puget Sound Adventist Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7676",
                               "highschoolName": "Pulteney Grammar School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7555",
                               "highschoolName": "Punjab College of Information Technology"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8286",
                               "highschoolName": "Purnell School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7455",
                               "highschoolName": "Qingdao Guoji High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8622",
                               "highschoolName": "Qingdao MTI International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7492",
                               "highschoolName": "Qingdao No.2 Middle School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8161",
                               "highschoolName": "Qingdao Private Dongfang School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8329",
                               "highschoolName": "QSI International School of Phuket"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8778",
                               "highschoolName": "Queen Elizabeth High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8149",
                               "highschoolName": "Queen Margaret School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6923",
                               "highschoolName": "Reddam House School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8142",
                               "highschoolName": "Reedley International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7202",
                               "highschoolName": "Rosslyn Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6790",
                               "highschoolName": "Runnymeid Collegiate Institute"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8151",
                               "highschoolName": "Saint Bernards School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8686",
                               "highschoolName": "Saint Francis Prep School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8091",
                               "highschoolName": "Saint Joseph Catholic High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8170",
                               "highschoolName": "Saint Joseph Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8144",
                               "highschoolName": "Saint Paul School for Girls"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8720",
                               "highschoolName": "Saipan Southern High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6791",
                               "highschoolName": "Salesianito high school"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8625",
                               "highschoolName": "San Gabriel Mission High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8839",
                               "highschoolName": "Sandringham High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7640",
                               "highschoolName": "SANTAROSA"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7687",
                               "highschoolName": "Santiago Christian School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6792",
                               "highschoolName": "Savannah College of Art and Design"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7764",
                               "highschoolName": "Sayfol International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6793",
                               "highschoolName": "scarsdale highschool"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8240",
                               "highschoolName": "Sebeka high school"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6943",
                               "highschoolName": "Sentinel Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7010",
                               "highschoolName": "Seton Catholic Central High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7008",
                               "highschoolName": "Seycove Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7709",
                               "highschoolName": "Shaanxi Province Chengcheng Middle School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8020",
                               "highschoolName": "Shanghai Gold Apple Bilingual School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7330",
                               "highschoolName": "Shanghai Jincai International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8214",
                               "highschoolName": "Shenandoah Valley Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7863",
                               "highschoolName": "Sherborne School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6867",
                               "highschoolName": "Sidcot High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8542",
                               "highschoolName": "Sierra High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7840",
                               "highschoolName": "Sir John A. Macdonald"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7826",
                               "highschoolName": "Sir Winston Churchill High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8497",
                               "highschoolName": "Solomon Christian School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7854",
                               "highschoolName": "South Merrimack Christian Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6994",
                               "highschoolName": "South Pasadena High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8641",
                               "highschoolName": "Southwestern Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8185",
                               "highschoolName": "Spectrum Community School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7828",
                               "highschoolName": "Spring Valley High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7647",
                               "highschoolName": "St-Luc High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7973",
                               "highschoolName": "St. Boniface High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8535",
                               "highschoolName": "St. John #39s Ravenscourt"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7303",
                               "highschoolName": "St. Johns School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7625",
                               "highschoolName": "St. Johnsbury Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7101",
                               "highschoolName": "St. Lucie West Centennial High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8139",
                               "highschoolName": "St. Margaret's Anglican Girls School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7401",
                               "highschoolName": "St. Marks High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7848",
                               "highschoolName": "St. Paul's School for Girls"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8241",
                               "highschoolName": "St. Robert Catholic High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7845",
                               "highschoolName": "St. Stanislaus"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9511",
                               "highschoolName": "St. Thomas More Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7285",
                               "highschoolName": "St. Thomas More School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8687",
                               "highschoolName": "St.Mary#39s International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6902",
                               "highschoolName": "Stanstead"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7904",
                               "highschoolName": "Stella Maris High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7725",
                               "highschoolName": "Strathallan College"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6794",
                               "highschoolName": "stvyvesant high school"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8854",
                               "highschoolName": "Suffield Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7104",
                               "highschoolName": "Sussex Central"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7424",
                               "highschoolName": "Sutherland Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7819",
                               "highschoolName": "Suuny Hills High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6795",
                               "highschoolName": "T.L.Kennedy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8674",
                               "highschoolName": "TaiLai NO.1 High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8093",
                               "highschoolName": "Taishan Foreign Language"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7937",
                               "highschoolName": "The 39th Russian High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9491",
                               "highschoolName": "the king's school chester"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8616",
                               "highschoolName": "The Linsly School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8569",
                               "highschoolName": "The McCallie School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8376",
                               "highschoolName": "The Newman School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8772",
                               "highschoolName": "THE YORKLAND SCHOOL"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7038",
                               "highschoolName": "Thomas Adams School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8334",
                               "highschoolName": "Thornlea Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7822",
                               "highschoolName": "Thunderbird Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8121",
                               "highschoolName": "Tianlong High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7589",
                               "highschoolName": "Tien Shan International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6796",
                               "highschoolName": "TORRACKE"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7417",
                               "highschoolName": "Trafalgar Castle School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7765",
                               "highschoolName": "Trinity College School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8059",
                               "highschoolName": "Trinity Grammar School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9496",
                               "highschoolName": "Trường trung học phổ thông (THPT) Đào Duy Từ"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8172",
                               "highschoolName": "UN International School of Hanoi"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7924",
                               "highschoolName": "University Hill Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8158",
                               "highschoolName": "University of Nebraska-Lincoln Independent Study High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6797",
                               "highschoolName": "Valencia High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8053",
                               "highschoolName": "Valley Catholic High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7371",
                               "highschoolName": "Vancouver Christian High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7366",
                               "highschoolName": "Vaughan Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7871",
                               "highschoolName": "Vermont Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8822",
                               "highschoolName": "Victory Christian School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8852",
                               "highschoolName": "Vientiane International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7771",
                               "highschoolName": "Villanova Preparatory School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6798",
                               "highschoolName": "Von Steusen"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8557",
                               "highschoolName": "Waimea College"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6799",
                               "highschoolName": "Walt Whitman"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6800",
                               "highschoolName": "Wan 2nd High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7333",
                               "highschoolName": "Washington Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8106",
                               "highschoolName": "Wellington College"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7254",
                               "highschoolName": "Wellington school"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6801",
                               "highschoolName": "West highschool"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6802",
                               "highschoolName": "West Springfield High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8543",
                               "highschoolName": "Western Christian High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7291",
                               "highschoolName": "Western Reserve Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7372",
                               "highschoolName": "Westlake Girls High school"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8338",
                               "highschoolName": "Westminster Christian Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6803",
                               "highschoolName": "Westtown high school"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8045",
                               "highschoolName": "Wheeling Central Catholic High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8317",
                               "highschoolName": "White Oaks Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8546",
                               "highschoolName": "Whittier Christian High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7216",
                               "highschoolName": "William J. Palmer High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6804",
                               "highschoolName": "WINCHENDON SCHOOL"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6805",
                               "highschoolName": "Winsor"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6806",
                               "highschoolName": "woburn Collegiate Institute"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6984",
                               "highschoolName": "Woodbridge High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7399",
                               "highschoolName": "Woodlands Academy"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6807",
                               "highschoolName": "Wyoming Seminary College Preparatory School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8118",
                               "highschoolName": "Xian International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8728",
                               "highschoolName": "Yale Secondary School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8117",
                               "highschoolName": "Yantai Peiyang High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8128",
                               "highschoolName": "Yew Chung International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7881",
                               "highschoolName": "Yew Chung Shanghai International School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6808",
                               "highschoolName": "Ygnacio Valley High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6809",
                               "highschoolName": "Yishun Junior College"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6810",
                               "highschoolName": "Yongji No.1 high School(영길조일고)"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8760",
                               "highschoolName": "York Mills Collegiate Institute"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6811",
                               "highschoolName": "Yorkmills Collegiate Institute"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8288",
                               "highschoolName": "Young Rac High School"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5016",
                               "highschoolName": "松山工業高等學校(Matsuyam Kogyo)"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4867",
                               "highschoolName": "石川縣立羽昨工高(Hakui)"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3141",
                               "highschoolName": "가곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3142",
                               "highschoolName": "가락고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3143",
                               "highschoolName": "가림고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3145",
                               "highschoolName": "가야고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7621",
                               "highschoolName": "가온고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9232",
                               "highschoolName": "가운고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3146",
                               "highschoolName": "가은고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8958",
                               "highschoolName": "가재울고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3147",
                               "highschoolName": "가정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9026",
                               "highschoolName": "가좌고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3150",
                               "highschoolName": "가천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3151",
                               "highschoolName": "가평고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3154",
                               "highschoolName": "간동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9454",
                               "highschoolName": "간디고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3156",
                               "highschoolName": "갈산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3157",
                               "highschoolName": "감천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9393",
                               "highschoolName": "감포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3159",
                               "highschoolName": "갑천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3161",
                               "highschoolName": "강경고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3162",
                               "highschoolName": "강경상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3166",
                               "highschoolName": "강구정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3170",
                               "highschoolName": "강남영상미디어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8882",
                               "highschoolName": "강동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3173",
                               "highschoolName": "강릉고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3177",
                               "highschoolName": "강릉명륜고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3178",
                               "highschoolName": "강릉문성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3181",
                               "highschoolName": "강릉여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3184",
                               "highschoolName": "강릉정보공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3185",
                               "highschoolName": "강릉제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9304",
                               "highschoolName": "강릉제일고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3187",
                               "highschoolName": "강릉중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3189",
                               "highschoolName": "강북고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8883",
                               "highschoolName": "강서고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3190",
                               "highschoolName": "강서공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3191",
                               "highschoolName": "강원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3193",
                               "highschoolName": "강원과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3197",
                               "highschoolName": "강원대학교사범대학부설고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9293",
                               "highschoolName": "강원생활과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9296",
                               "highschoolName": "강원애니고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3198",
                               "highschoolName": "강원예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9298",
                               "highschoolName": "강원외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3200",
                               "highschoolName": "강원체육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8946",
                               "highschoolName": "강일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3201",
                               "highschoolName": "강일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3202",
                               "highschoolName": "강진고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3207",
                               "highschoolName": "강호항공고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3208",
                               "highschoolName": "강화고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3210",
                               "highschoolName": "강화여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3212",
                               "highschoolName": "개금고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3213",
                               "highschoolName": "개성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3214",
                               "highschoolName": "개포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3215",
                               "highschoolName": "거제고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3216",
                               "highschoolName": "거제공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9470",
                               "highschoolName": "거제상문고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3220",
                               "highschoolName": "거제여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9460",
                               "highschoolName": "거제옥포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3221",
                               "highschoolName": "거제제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3223",
                               "highschoolName": "거제중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3230",
                               "highschoolName": "거진종합고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3231",
                               "highschoolName": "거창고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9439",
                               "highschoolName": "거창공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3233",
                               "highschoolName": "거창대성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3238",
                               "highschoolName": "거창여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3240",
                               "highschoolName": "거창중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3241",
                               "highschoolName": "건국고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3242",
                               "highschoolName": "건국대학교사범대학부속고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9319",
                               "highschoolName": "건양대학교병설건양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3245",
                               "highschoolName": "검단고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3246",
                               "highschoolName": "검정고시"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3249",
                               "highschoolName": "경구고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3251",
                               "highschoolName": "경기고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3254",
                               "highschoolName": "경기과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9160",
                               "highschoolName": "경기관광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9128",
                               "highschoolName": "경기국제통상고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7851",
                               "highschoolName": "경기글로벌통상고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3258",
                               "highschoolName": "경기기계공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3259",
                               "highschoolName": "경기대명고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9126",
                               "highschoolName": "경기모바일과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9140",
                               "highschoolName": "경기물류고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3260",
                               "highschoolName": "경기북과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3261",
                               "highschoolName": "경기상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9154",
                               "highschoolName": "경기세무고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3264",
                               "highschoolName": "경기여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3265",
                               "highschoolName": "경기여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9157",
                               "highschoolName": "경기영상과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3268",
                               "highschoolName": "경기예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6879",
                               "highschoolName": "경기외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9168",
                               "highschoolName": "경기자동차과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9229",
                               "highschoolName": "경기창조고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3271",
                               "highschoolName": "경기체육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9448",
                               "highschoolName": "경남간호고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3272",
                               "highschoolName": "경남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3275",
                               "highschoolName": "경남공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3276",
                               "highschoolName": "경남과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3277",
                               "highschoolName": "경남관광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9452",
                               "highschoolName": "경남로봇고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9440",
                               "highschoolName": "경남산업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3285",
                               "highschoolName": "경남여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8985",
                               "highschoolName": "경남여자고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3291",
                               "highschoolName": "경남예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3292",
                               "highschoolName": "경남외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3295",
                               "highschoolName": "경남자동차고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3296",
                               "highschoolName": "경남자영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3298",
                               "highschoolName": "경남전자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3299",
                               "highschoolName": "경남정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3302",
                               "highschoolName": "경남체육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3303",
                               "highschoolName": "경남항공고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9444",
                               "highschoolName": "경남해양과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3305",
                               "highschoolName": "경덕공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3306",
                               "highschoolName": "경덕여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3307",
                               "highschoolName": "경동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3309",
                               "highschoolName": "경명여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3310",
                               "highschoolName": "경문고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9108",
                               "highschoolName": "경민IT고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3311",
                               "highschoolName": "경민고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9107",
                               "highschoolName": "경민비즈니스고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3320",
                               "highschoolName": "경복고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8332",
                               "highschoolName": "경복비즈니스고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3322",
                               "highschoolName": "경복여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9420",
                               "highschoolName": "경북간호고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3325",
                               "highschoolName": "경북고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3327",
                               "highschoolName": "경북공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3328",
                               "highschoolName": "경북과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9411",
                               "highschoolName": "경북과학기술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9430",
                               "highschoolName": "경북관광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3331",
                               "highschoolName": "경북기계공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9009",
                               "highschoolName": "경북기계공업고등학교부설산업학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9394",
                               "highschoolName": "경북기계금속고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3332",
                               "highschoolName": "경북대학교사범대학부설고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3334",
                               "highschoolName": "경북생활과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9488",
                               "highschoolName": "경북식품과학마이스터고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3337",
                               "highschoolName": "경북여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3338",
                               "highschoolName": "경북여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3343",
                               "highschoolName": "경북예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3344",
                               "highschoolName": "경북외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3345",
                               "highschoolName": "경북인터넷고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3346",
                               "highschoolName": "경북체육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9412",
                               "highschoolName": "경북하이텍고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3347",
                               "highschoolName": "경북항공고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3348",
                               "highschoolName": "경산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3350",
                               "highschoolName": "경산과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3351",
                               "highschoolName": "경산여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3352",
                               "highschoolName": "경산여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3355",
                               "highschoolName": "경상고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3356",
                               "highschoolName": "경상공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3357",
                               "highschoolName": "경상대학교사범대학부설고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3359",
                               "highschoolName": "경상여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3362",
                               "highschoolName": "경성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8960",
                               "highschoolName": "경성전자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8884",
                               "highschoolName": "경신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9109",
                               "highschoolName": "경안고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9396",
                               "highschoolName": "경안여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8961",
                               "highschoolName": "경원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3371",
                               "highschoolName": "경인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8938",
                               "highschoolName": "경일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9110",
                               "highschoolName": "경일관광경영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8989",
                               "highschoolName": "경일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3381",
                               "highschoolName": "경주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3382",
                               "highschoolName": "경주공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3383",
                               "highschoolName": "경주디자인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9409",
                               "highschoolName": "경주마케팅고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3385",
                               "highschoolName": "경주여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3387",
                               "highschoolName": "경주여자정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3388",
                               "highschoolName": "경주정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3390",
                               "highschoolName": "경주화랑고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3391",
                               "highschoolName": "경진고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3393",
                               "highschoolName": "경포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3395",
                               "highschoolName": "경해여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3396",
                               "highschoolName": "경혜여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3397",
                               "highschoolName": "경호고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9228",
                               "highschoolName": "경화여자English Business고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8990",
                               "highschoolName": "경화여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3401",
                               "highschoolName": "경희고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3402",
                               "highschoolName": "경희여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3405",
                               "highschoolName": "계남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9338",
                               "highschoolName": "계룡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3406",
                               "highschoolName": "계룡공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3408",
                               "highschoolName": "계림고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3412",
                               "highschoolName": "계산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3413",
                               "highschoolName": "계산공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3414",
                               "highschoolName": "계산여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3415",
                               "highschoolName": "계성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8963",
                               "highschoolName": "계성여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3419",
                               "highschoolName": "계양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3420",
                               "highschoolName": "계원예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3422",
                               "highschoolName": "고금고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3424",
                               "highschoolName": "고려고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3425",
                               "highschoolName": "고려대학교사범대학부속고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9398",
                               "highschoolName": "고령고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9269",
                               "highschoolName": "고림고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8921",
                               "highschoolName": "고명경영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3432",
                               "highschoolName": "고산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9198",
                               "highschoolName": "고색고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9279",
                               "highschoolName": "고성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3439",
                               "highschoolName": "고성중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3442",
                               "highschoolName": "고양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3443",
                               "highschoolName": "고양국제고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9252",
                               "highschoolName": "고양동산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9187",
                               "highschoolName": "고양예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3449",
                               "highschoolName": "고양외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9195",
                               "highschoolName": "고양일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9104",
                               "highschoolName": "고운고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9113",
                               "highschoolName": "고잔고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3452",
                               "highschoolName": "고창고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3454",
                               "highschoolName": "고창북고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3455",
                               "highschoolName": "고창여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3456",
                               "highschoolName": "고척고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9280",
                               "highschoolName": "고한고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3461",
                               "highschoolName": "고흥고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3464",
                               "highschoolName": "고흥도화고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9359",
                               "highschoolName": "고흥산업과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9360",
                               "highschoolName": "고흥영주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3470",
                               "highschoolName": "곡성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9257",
                               "highschoolName": "곡정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3472",
                               "highschoolName": "곤양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3473",
                               "highschoolName": "곤지암고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9485",
                               "highschoolName": "공군항공과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9335",
                               "highschoolName": "공동체비전고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3479",
                               "highschoolName": "공주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3481",
                               "highschoolName": "공주금성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3483",
                               "highschoolName": "공주대학교사범대학부설고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9321",
                               "highschoolName": "공주마이스터고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7739",
                               "highschoolName": "공주생명과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3484",
                               "highschoolName": "공주여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3486",
                               "highschoolName": "공주영명고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3488",
                               "highschoolName": "공주정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3490",
                               "highschoolName": "공항고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3491",
                               "highschoolName": "과천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3492",
                               "highschoolName": "과천여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3493",
                               "highschoolName": "과천외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3494",
                               "highschoolName": "과천중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3495",
                               "highschoolName": "관악고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3499",
                               "highschoolName": "관양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3500",
                               "highschoolName": "관인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9241",
                               "highschoolName": "광교고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8885",
                               "highschoolName": "광남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3502",
                               "highschoolName": "광덕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9114",
                               "highschoolName": "광동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9115",
                               "highschoolName": "광명경영회계고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3506",
                               "highschoolName": "광명고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3507",
                               "highschoolName": "광명공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3509",
                               "highschoolName": "광명북고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8886",
                               "highschoolName": "광문고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8887",
                               "highschoolName": "광성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3519",
                               "highschoolName": "광신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3521",
                               "highschoolName": "광신정보산업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3522",
                               "highschoolName": "광양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3523",
                               "highschoolName": "광양백운고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3525",
                               "highschoolName": "광양여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3526",
                               "highschoolName": "광양제철고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9362",
                               "highschoolName": "광양하이텍고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3527",
                               "highschoolName": "광영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3529",
                               "highschoolName": "광영여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3531",
                               "highschoolName": "광운전자공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3533",
                               "highschoolName": "광일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3535",
                               "highschoolName": "광주경신여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9050",
                               "highschoolName": "광주경영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3536",
                               "highschoolName": "광주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9062",
                               "highschoolName": "광주고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3538",
                               "highschoolName": "광주공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3539",
                               "highschoolName": "광주과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3543",
                               "highschoolName": "광주대동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3545",
                               "highschoolName": "광주동성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3546",
                               "highschoolName": "광주동신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3547",
                               "highschoolName": "광주동신여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3554",
                               "highschoolName": "광주서석고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3555",
                               "highschoolName": "광주석산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9483",
                               "highschoolName": "광주소프트웨어마이스터고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3560",
                               "highschoolName": "광주수피아여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3561",
                               "highschoolName": "광주숭일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3563",
                               "highschoolName": "광주여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3564",
                               "highschoolName": "광주여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3566",
                               "highschoolName": "광주예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3567",
                               "highschoolName": "광주인성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9051",
                               "highschoolName": "광주자동화설비공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3569",
                               "highschoolName": "광주자연과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3571",
                               "highschoolName": "광주전자공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3574",
                               "highschoolName": "광주제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3577",
                               "highschoolName": "광주중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3579",
                               "highschoolName": "광주진흥고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3580",
                               "highschoolName": "광주체육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3581",
                               "highschoolName": "광천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3586",
                               "highschoolName": "광천제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9117",
                               "highschoolName": "광탄고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3588",
                               "highschoolName": "광혜원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9253",
                               "highschoolName": "광휘고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3590",
                               "highschoolName": "괴산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3594",
                               "highschoolName": "교동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8499",
                               "highschoolName": "교하고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8991",
                               "highschoolName": "구남보건고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3603",
                               "highschoolName": "구덕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3604",
                               "highschoolName": "구례고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3607",
                               "highschoolName": "구로고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3612",
                               "highschoolName": "구리고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3613",
                               "highschoolName": "구리여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3615",
                               "highschoolName": "구림공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3616",
                               "highschoolName": "구미고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9435",
                               "highschoolName": "구미고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3620",
                               "highschoolName": "구미여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3621",
                               "highschoolName": "구미여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3622",
                               "highschoolName": "구미전자공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3623",
                               "highschoolName": "구미정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9472",
                               "highschoolName": "구산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7824",
                               "highschoolName": "구성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8949",
                               "highschoolName": "구암고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3626",
                               "highschoolName": "구일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8717",
                               "highschoolName": "구현고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8880",
                               "highschoolName": "국립국악고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8881",
                               "highschoolName": "국립전통예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9311",
                               "highschoolName": "국원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9053",
                               "highschoolName": "국제고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3641",
                               "highschoolName": "군북고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3642",
                               "highschoolName": "군산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3644",
                               "highschoolName": "군산기계공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3646",
                               "highschoolName": "군산남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3647",
                               "highschoolName": "군산동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3649",
                               "highschoolName": "군산상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3650",
                               "highschoolName": "군산여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3651",
                               "highschoolName": "군산여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3652",
                               "highschoolName": "군산영광여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3653",
                               "highschoolName": "군산제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3654",
                               "highschoolName": "군산중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3655",
                               "highschoolName": "군산중앙여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9173",
                               "highschoolName": "군서고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3656",
                               "highschoolName": "군위고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9418",
                               "highschoolName": "군위정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3658",
                               "highschoolName": "군자공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9118",
                               "highschoolName": "군포e비즈니스고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3661",
                               "highschoolName": "군포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3664",
                               "highschoolName": "권선고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3669",
                               "highschoolName": "근명여자정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3671",
                               "highschoolName": "근화여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3673",
                               "highschoolName": "금곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3675",
                               "highschoolName": "금남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8979",
                               "highschoolName": "금명여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3681",
                               "highschoolName": "금산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3683",
                               "highschoolName": "금산산업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3685",
                               "highschoolName": "금산여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9327",
                               "highschoolName": "금산하이텍고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8964",
                               "highschoolName": "금성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3688",
                               "highschoolName": "금성여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3689",
                               "highschoolName": "금오고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3690",
                               "highschoolName": "금오공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3691",
                               "highschoolName": "금오여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3693",
                               "highschoolName": "금옥여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3698",
                               "highschoolName": "금정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3699",
                               "highschoolName": "금정여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3701",
                               "highschoolName": "금정전자공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3702",
                               "highschoolName": "금천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7645",
                               "highschoolName": "금촌고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3703",
                               "highschoolName": "금파공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3705",
                               "highschoolName": "금호고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3706",
                               "highschoolName": "금호공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9052",
                               "highschoolName": "금호중앙여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9402",
                               "highschoolName": "기계고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3710",
                               "highschoolName": "기린고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3711",
                               "highschoolName": "기장고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3715",
                               "highschoolName": "기흥고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3716",
                               "highschoolName": "길원여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3717",
                               "highschoolName": "김제고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9487",
                               "highschoolName": "김제농생명마이스터고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3721",
                               "highschoolName": "김제서고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3722",
                               "highschoolName": "김제여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3723",
                               "highschoolName": "김제자영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3724",
                               "highschoolName": "김천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3727",
                               "highschoolName": "김천상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9403",
                               "highschoolName": "김천생명과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3728",
                               "highschoolName": "김천여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3729",
                               "highschoolName": "김천예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3730",
                               "highschoolName": "김천중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9436",
                               "highschoolName": "김천중앙고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3733",
                               "highschoolName": "김포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7538",
                               "highschoolName": "김포외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3737",
                               "highschoolName": "김포제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9119",
                               "highschoolName": "김포제일공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3739",
                               "highschoolName": "김해가야고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3741",
                               "highschoolName": "김해건설공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3743",
                               "highschoolName": "김해경원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3744",
                               "highschoolName": "김해고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3746",
                               "highschoolName": "김해대청고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3747",
                               "highschoolName": "김해분성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6880",
                               "highschoolName": "김해분성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9455",
                               "highschoolName": "김해삼문고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9462",
                               "highschoolName": "김해삼방고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8877",
                               "highschoolName": "김해생명과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3748",
                               "highschoolName": "김해여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9457",
                               "highschoolName": "김해영운고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7912",
                               "highschoolName": "김해외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9468",
                               "highschoolName": "김해율하고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9471",
                               "highschoolName": "김해임호고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9464",
                               "highschoolName": "김해제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3751",
                               "highschoolName": "김해중앙여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3752",
                               "highschoolName": "김해한일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3756",
                               "highschoolName": "김화고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3757",
                               "highschoolName": "김화공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9497",
                               "highschoolName": "끄옹고등학교(TRUONG TRUNG HOC PHO THONG CUA ONG)"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9199",
                               "highschoolName": "나루고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3766",
                               "highschoolName": "나주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3767",
                               "highschoolName": "나주공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9364",
                               "highschoolName": "나주상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3772",
                               "highschoolName": "낙동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3773",
                               "highschoolName": "낙생고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3774",
                               "highschoolName": "남강고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3775",
                               "highschoolName": "남녕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3776",
                               "highschoolName": "남대전고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9082",
                               "highschoolName": "남목고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3781",
                               "highschoolName": "남산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3784",
                               "highschoolName": "남성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8965",
                               "highschoolName": "남성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9387",
                               "highschoolName": "남악고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3786",
                               "highschoolName": "남양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3788",
                               "highschoolName": "남양주공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3790",
                               "highschoolName": "남원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9349",
                               "highschoolName": "남원국악예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3793",
                               "highschoolName": "남원서진여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3794",
                               "highschoolName": "남원여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3797",
                               "highschoolName": "남원용성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3799",
                               "highschoolName": "남원제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3802",
                               "highschoolName": "남주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3803",
                               "highschoolName": "남지고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3804",
                               "highschoolName": "남창고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3805",
                               "highschoolName": "남한고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3806",
                               "highschoolName": "남해고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3810",
                               "highschoolName": "남해정보산업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3811",
                               "highschoolName": "남해제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3813",
                               "highschoolName": "남해해성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3816",
                               "highschoolName": "내면고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3817",
                               "highschoolName": "내성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3818",
                               "highschoolName": "노원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3819",
                               "highschoolName": "노화고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3821",
                               "highschoolName": "녹동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3822",
                               "highschoolName": "논산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3823",
                               "highschoolName": "논산공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3824",
                               "highschoolName": "논산대건고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3826",
                               "highschoolName": "논산여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3827",
                               "highschoolName": "논산여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3829",
                               "highschoolName": "누원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6982",
                               "highschoolName": "늘푸른고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3830",
                               "highschoolName": "능곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9225",
                               "highschoolName": "능동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3832",
                               "highschoolName": "능인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3833",
                               "highschoolName": "능주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3835",
                               "highschoolName": "다대고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3836",
                               "highschoolName": "다사고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3838",
                               "highschoolName": "다산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9081",
                               "highschoolName": "다운고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9404",
                               "highschoolName": "다인정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9367",
                               "highschoolName": "다향고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3841",
                               "highschoolName": "단국공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3842",
                               "highschoolName": "단국대학교사범대학부속고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3844",
                               "highschoolName": "단성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3846",
                               "highschoolName": "단양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7446",
                               "highschoolName": "단원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9002",
                               "highschoolName": "달구벌고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3849",
                               "highschoolName": "달서고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3851",
                               "highschoolName": "달성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9087",
                               "highschoolName": "달천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3853",
                               "highschoolName": "담양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3854",
                               "highschoolName": "담양공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3859",
                               "highschoolName": "당곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3860",
                               "highschoolName": "당진고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3863",
                               "highschoolName": "당진정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3864",
                               "highschoolName": "대가야고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8994",
                               "highschoolName": "대건고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3865",
                               "highschoolName": "대경상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3869",
                               "highschoolName": "대곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3872",
                               "highschoolName": "대광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8966",
                               "highschoolName": "대광발명과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3874",
                               "highschoolName": "대광여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3876",
                               "highschoolName": "대구가톨릭대학교사범대학부속무학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3881",
                               "highschoolName": "대구고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9010",
                               "highschoolName": "대구고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9011",
                               "highschoolName": "대구고등학교부설방송통신중학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3883",
                               "highschoolName": "대구공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3884",
                               "highschoolName": "대구과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3885",
                               "highschoolName": "대구관광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3889",
                               "highschoolName": "대구남산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9486",
                               "highschoolName": "대구농업마이스터고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3892",
                               "highschoolName": "대구달서공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8034",
                               "highschoolName": "대구동부고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3898",
                               "highschoolName": "대구동부공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7915",
                               "highschoolName": "대구상원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3906",
                               "highschoolName": "대구서부고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3907",
                               "highschoolName": "대구서부공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8993",
                               "highschoolName": "대구소프트웨어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3913",
                               "highschoolName": "대구여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3915",
                               "highschoolName": "대구여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3920",
                               "highschoolName": "대구외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9008",
                               "highschoolName": "대구일과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9484",
                               "highschoolName": "대구일마이스터고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3922",
                               "highschoolName": "대구자연과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3923",
                               "highschoolName": "대구전자공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3925",
                               "highschoolName": "대구제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3926",
                               "highschoolName": "대구제일여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3928",
                               "highschoolName": "대구중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3930",
                               "highschoolName": "대구체육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3932",
                               "highschoolName": "대구혜화여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3934",
                               "highschoolName": "대기고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3936",
                               "highschoolName": "대덕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9064",
                               "highschoolName": "대덕소프트웨어마이스터고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3938",
                               "highschoolName": "대덕여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8967",
                               "highschoolName": "대동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3943",
                               "highschoolName": "대동세무고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3945",
                               "highschoolName": "대륜고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3946",
                               "highschoolName": "대명여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3947",
                               "highschoolName": "대부고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3949",
                               "highschoolName": "대산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8888",
                               "highschoolName": "대성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3954",
                               "highschoolName": "대성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3955",
                               "highschoolName": "대성여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9441",
                               "highschoolName": "대성일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9318",
                               "highschoolName": "대소금왕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3960",
                               "highschoolName": "대송고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8889",
                               "highschoolName": "대신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3961",
                               "highschoolName": "대아고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8968",
                               "highschoolName": "대양전자통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3966",
                               "highschoolName": "대연고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8890",
                               "highschoolName": "대영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8891",
                               "highschoolName": "대원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3972",
                               "highschoolName": "대원여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3973",
                               "highschoolName": "대원외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3974",
                               "highschoolName": "대인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3976",
                               "highschoolName": "대일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8923",
                               "highschoolName": "대일관광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3980",
                               "highschoolName": "대일외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9071",
                               "highschoolName": "대전가오고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3982",
                               "highschoolName": "대전고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9074",
                               "highschoolName": "대전고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3985",
                               "highschoolName": "대전공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3986",
                               "highschoolName": "대전과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3987",
                               "highschoolName": "대전관저고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8538",
                               "highschoolName": "대전괴정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7843",
                               "highschoolName": "대전구봉고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3988",
                               "highschoolName": "대전국제통상고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3989",
                               "highschoolName": "대전노은고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3991",
                               "highschoolName": "대전대신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9073",
                               "highschoolName": "대전도안고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3992",
                               "highschoolName": "대전동산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9068",
                               "highschoolName": "대전동신과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3994",
                               "highschoolName": "대전둔산여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3995",
                               "highschoolName": "대전둔원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "3996",
                               "highschoolName": "대전만년고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8235",
                               "highschoolName": "대전반석고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9072",
                               "highschoolName": "대전복수고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4004",
                               "highschoolName": "대전성모여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4006",
                               "highschoolName": "대전송촌고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4007",
                               "highschoolName": "대전신일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4010",
                               "highschoolName": "대전여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9075",
                               "highschoolName": "대전여자고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4012",
                               "highschoolName": "대전여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4014",
                               "highschoolName": "대전예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4016",
                               "highschoolName": "대전외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7994",
                               "highschoolName": "대전용산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4019",
                               "highschoolName": "대전이문고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7453",
                               "highschoolName": "대전전민고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4022",
                               "highschoolName": "대전전자디자인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4023",
                               "highschoolName": "대전제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4024",
                               "highschoolName": "대전중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7036",
                               "highschoolName": "대전지족고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4025",
                               "highschoolName": "대전체육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4027",
                               "highschoolName": "대전한빛고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4030",
                               "highschoolName": "대정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4031",
                               "highschoolName": "대정여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4032",
                               "highschoolName": "대중금속공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9188",
                               "highschoolName": "대지고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8892",
                               "highschoolName": "대진고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7736",
                               "highschoolName": "대진디자인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4033",
                               "highschoolName": "대진여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8970",
                               "highschoolName": "대진전자통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4038",
                               "highschoolName": "대창고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4039",
                               "highschoolName": "대천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4042",
                               "highschoolName": "대천여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4043",
                               "highschoolName": "대천여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4044",
                               "highschoolName": "대청고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4047",
                               "highschoolName": "대평고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7540",
                               "highschoolName": "대현고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4050",
                               "highschoolName": "대화고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4052",
                               "highschoolName": "대흥고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9172",
                               "highschoolName": "덕계고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4055",
                               "highschoolName": "덕문고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4056",
                               "highschoolName": "덕문여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9122",
                               "highschoolName": "덕산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4057",
                               "highschoolName": "덕성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4058",
                               "highschoolName": "덕소고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4059",
                               "highschoolName": "덕수고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4063",
                               "highschoolName": "덕신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4065",
                               "highschoolName": "덕암고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4066",
                               "highschoolName": "덕암정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4069",
                               "highschoolName": "덕원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4071",
                               "highschoolName": "덕원여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4072",
                               "highschoolName": "덕원예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9243",
                               "highschoolName": "덕이고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4075",
                               "highschoolName": "덕일전자공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4076",
                               "highschoolName": "덕적고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4077",
                               "highschoolName": "덕정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9217",
                               "highschoolName": "덕현고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4079",
                               "highschoolName": "데레사여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9407",
                               "highschoolName": "도개고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9284",
                               "highschoolName": "도계고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4083",
                               "highschoolName": "도계전산정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9175",
                               "highschoolName": "도농고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9101",
                               "highschoolName": "도담고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4085",
                               "highschoolName": "도당고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9260",
                               "highschoolName": "도래울고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7382",
                               "highschoolName": "도림고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7461",
                               "highschoolName": "도봉고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4089",
                               "highschoolName": "도원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4090",
                               "highschoolName": "도초고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9021",
                               "highschoolName": "도화기계공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4092",
                               "highschoolName": "독산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4093",
                               "highschoolName": "돌마고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4098",
                               "highschoolName": "동계고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9134",
                               "highschoolName": "동광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9285",
                               "highschoolName": "동광산업과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8913",
                               "highschoolName": "동구마케팅고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4105",
                               "highschoolName": "동국대학교사범대학부속고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9348",
                               "highschoolName": "동국대학교사범대학부속금산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7305",
                               "highschoolName": "동국대학교사범대학부속여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9144",
                               "highschoolName": "동국대학교사범대학부속영석고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4108",
                               "highschoolName": "동남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4112",
                               "highschoolName": "동대전고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4113",
                               "highschoolName": "동덕여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4115",
                               "highschoolName": "동두천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7335",
                               "highschoolName": "동두천외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4118",
                               "highschoolName": "동두천중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4120",
                               "highschoolName": "동래고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8986",
                               "highschoolName": "동래고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4123",
                               "highschoolName": "동래여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4125",
                               "highschoolName": "동래원예고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4128",
                               "highschoolName": "동명고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4130",
                               "highschoolName": "동명여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4132",
                               "highschoolName": "동명여자정보산업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7434",
                               "highschoolName": "동문고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9067",
                               "highschoolName": "동방고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9190",
                               "highschoolName": "동백고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4140",
                               "highschoolName": "동북고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9014",
                               "highschoolName": "동산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8933",
                               "highschoolName": "동산정보산업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9274",
                               "highschoolName": "동성고등공민학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4145",
                               "highschoolName": "동성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4150",
                               "highschoolName": "동아고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4151",
                               "highschoolName": "동아공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9066",
                               "highschoolName": "동아마이스터고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4152",
                               "highschoolName": "동아여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4153",
                               "highschoolName": "동안고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4154",
                               "highschoolName": "동암고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8909",
                               "highschoolName": "동양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4157",
                               "highschoolName": "동우여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4158",
                               "highschoolName": "동원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4161",
                               "highschoolName": "동의공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4162",
                               "highschoolName": "동인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4163",
                               "highschoolName": "동인천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4165",
                               "highschoolName": "동일공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4172",
                               "highschoolName": "동일미래과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4167",
                               "highschoolName": "동일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4168",
                               "highschoolName": "동일여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4173",
                               "highschoolName": "동작고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4174",
                               "highschoolName": "동주여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4176",
                               "highschoolName": "동지고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9408",
                               "highschoolName": "동지여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4180",
                               "highschoolName": "동천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9189",
                               "highschoolName": "동탄고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4181",
                               "highschoolName": "동탄국제고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9264",
                               "highschoolName": "동탄중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9233",
                               "highschoolName": "동패고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4184",
                               "highschoolName": "동해광희고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4185",
                               "highschoolName": "동해삼육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4186",
                               "highschoolName": "동해상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4195",
                               "highschoolName": "동화고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4196",
                               "highschoolName": "두레자연고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9105",
                               "highschoolName": "두루고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9139",
                               "highschoolName": "두원공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7806",
                               "highschoolName": "두호고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4197",
                               "highschoolName": "둔내고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4200",
                               "highschoolName": "둔촌고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7497",
                               "highschoolName": "등촌고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8935",
                               "highschoolName": "리라아트고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4206",
                               "highschoolName": "마령고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4207",
                               "highschoolName": "마산가포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4208",
                               "highschoolName": "마산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9474",
                               "highschoolName": "마산고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4210",
                               "highschoolName": "마산공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4211",
                               "highschoolName": "마산구암고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6929",
                               "highschoolName": "마산내서여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4215",
                               "highschoolName": "마산무학여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4216",
                               "highschoolName": "마산삼진고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4219",
                               "highschoolName": "마산여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4221",
                               "highschoolName": "마산용마고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4224",
                               "highschoolName": "마산제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4225",
                               "highschoolName": "마산제일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4226",
                               "highschoolName": "마산중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9220",
                               "highschoolName": "마석고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9226",
                               "highschoolName": "마송고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9124",
                               "highschoolName": "마장고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4233",
                               "highschoolName": "마차고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4234",
                               "highschoolName": "마포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4235",
                               "highschoolName": "만경고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4236",
                               "highschoolName": "만경여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4238",
                               "highschoolName": "만덕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4239",
                               "highschoolName": "만리포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8732",
                               "highschoolName": "망포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9090",
                               "highschoolName": "매곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4240",
                               "highschoolName": "매괴고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9191",
                               "highschoolName": "매원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9004",
                               "highschoolName": "매천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7541",
                               "highschoolName": "매탄고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4247",
                               "highschoolName": "매향여자정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9255",
                               "highschoolName": "매홀고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4251",
                               "highschoolName": "면목고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4252",
                               "highschoolName": "명덕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4253",
                               "highschoolName": "명덕여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4254",
                               "highschoolName": "명덕외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8004",
                               "highschoolName": "명문고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4256",
                               "highschoolName": "명석고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4258",
                               "highschoolName": "명신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4261",
                               "highschoolName": "명신여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4265",
                               "highschoolName": "명인정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4267",
                               "highschoolName": "명일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4268",
                               "highschoolName": "명지고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9056",
                               "highschoolName": "명진고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8982",
                               "highschoolName": "명호고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4274",
                               "highschoolName": "모계고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9227",
                               "highschoolName": "모락고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4276",
                               "highschoolName": "목도고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7515",
                               "highschoolName": "목동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9379",
                               "highschoolName": "목상고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4277",
                               "highschoolName": "목천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4278",
                               "highschoolName": "목포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9392",
                               "highschoolName": "목포고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9366",
                               "highschoolName": "목포공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4281",
                               "highschoolName": "목포덕인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4282",
                               "highschoolName": "목포마리아회고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4284",
                               "highschoolName": "목포성신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4287",
                               "highschoolName": "목포여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4288",
                               "highschoolName": "목포여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4291",
                               "highschoolName": "목포정명여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4292",
                               "highschoolName": "목포제일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4294",
                               "highschoolName": "목포중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4295",
                               "highschoolName": "목포혜인여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4296",
                               "highschoolName": "목포홍일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8832",
                               "highschoolName": "무거고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4300",
                               "highschoolName": "무룡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4301",
                               "highschoolName": "무산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4303",
                               "highschoolName": "무안고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4306",
                               "highschoolName": "무원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4307",
                               "highschoolName": "무주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4311",
                               "highschoolName": "무풍고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4314",
                               "highschoolName": "무학여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4315",
                               "highschoolName": "묵호고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9300",
                               "highschoolName": "묵호고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4321",
                               "highschoolName": "문경공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4323",
                               "highschoolName": "문경여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9297",
                               "highschoolName": "문막고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4329",
                               "highschoolName": "문명고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4330",
                               "highschoolName": "문산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9125",
                               "highschoolName": "문산수억고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4333",
                               "highschoolName": "문산제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9054",
                               "highschoolName": "문성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4336",
                               "highschoolName": "문수고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4338",
                               "highschoolName": "문일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4339",
                               "highschoolName": "문일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8943",
                               "highschoolName": "문정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9059",
                               "highschoolName": "문정여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4340",
                               "highschoolName": "문창고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4341",
                               "highschoolName": "문태고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4343",
                               "highschoolName": "문학정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4344",
                               "highschoolName": "문향고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8947",
                               "highschoolName": "문현고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4345",
                               "highschoolName": "문현여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4347",
                               "highschoolName": "문화고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9458",
                               "highschoolName": "물금고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4349",
                               "highschoolName": "미래산업과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4350",
                               "highschoolName": "미림여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4353",
                               "highschoolName": "미림여자정보과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9267",
                               "highschoolName": "미사강변고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9262",
                               "highschoolName": "미사고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8951",
                               "highschoolName": "미양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9035",
                               "highschoolName": "미추홀외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4358",
                               "highschoolName": "민족사관고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4360",
                               "highschoolName": "밀성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4363",
                               "highschoolName": "밀성제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4365",
                               "highschoolName": "밀양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4367",
                               "highschoolName": "밀양동명고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4370",
                               "highschoolName": "밀양여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9446",
                               "highschoolName": "밀양전자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9192",
                               "highschoolName": "반송고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6996",
                               "highschoolName": "반여고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4376",
                               "highschoolName": "반포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9208",
                               "highschoolName": "발곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4379",
                               "highschoolName": "발안바이오과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4382",
                               "highschoolName": "방산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4384",
                               "highschoolName": "방어진고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9270",
                               "highschoolName": "배곧고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4387",
                               "highschoolName": "배명고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4389",
                               "highschoolName": "배문고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9344",
                               "highschoolName": "배방고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4392",
                               "highschoolName": "배영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4395",
                               "highschoolName": "배재고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4396",
                               "highschoolName": "배정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9504",
                               "highschoolName": "배정미래고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4399",
                               "highschoolName": "배화여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4400",
                               "highschoolName": "백령종합고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4402",
                               "highschoolName": "백마고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4403",
                               "highschoolName": "백산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9016",
                               "highschoolName": "백석고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9112",
                               "highschoolName": "백송고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4406",
                               "highschoolName": "백신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4407",
                               "highschoolName": "백암고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4410",
                               "highschoolName": "백양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4411",
                               "highschoolName": "백영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4412",
                               "highschoolName": "백운고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4413",
                               "highschoolName": "백제고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4415",
                               "highschoolName": "백화여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4417",
                               "highschoolName": "벌교고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4418",
                               "highschoolName": "벌교상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4419",
                               "highschoolName": "벌교여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7546",
                               "highschoolName": "범박고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9086",
                               "highschoolName": "범서고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9469",
                               "highschoolName": "범어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4421",
                               "highschoolName": "법성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9266",
                               "highschoolName": "별가람고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4424",
                               "highschoolName": "별내고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4425",
                               "highschoolName": "병영상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7251",
                               "highschoolName": "병점고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4427",
                               "highschoolName": "병천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4428",
                               "highschoolName": "보광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9200",
                               "highschoolName": "보라고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9055",
                               "highschoolName": "보문고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4430",
                               "highschoolName": "보성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4435",
                               "highschoolName": "보성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4438",
                               "highschoolName": "보영여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4440",
                               "highschoolName": "보은고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4444",
                               "highschoolName": "보은여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4445",
                               "highschoolName": "보은자영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4446",
                               "highschoolName": "보은정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8925",
                               "highschoolName": "보인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7420",
                               "highschoolName": "보정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9230",
                               "highschoolName": "보평고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4451",
                               "highschoolName": "복자여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9202",
                               "highschoolName": "복정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9193",
                               "highschoolName": "봉담고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9316",
                               "highschoolName": "봉명고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4457",
                               "highschoolName": "봉양정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4458",
                               "highschoolName": "봉의고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9176",
                               "highschoolName": "봉일천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4459",
                               "highschoolName": "봉평고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4460",
                               "highschoolName": "봉화고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4465",
                               "highschoolName": "봉황고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9027",
                               "highschoolName": "부개고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4467",
                               "highschoolName": "부개여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6881",
                               "highschoolName": "부경고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9507",
                               "highschoolName": "부경보건고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9249",
                               "highschoolName": "부곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7746",
                               "highschoolName": "부곡중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4469",
                               "highschoolName": "부광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4470",
                               "highschoolName": "부광여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4474",
                               "highschoolName": "부명고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4478",
                               "highschoolName": "부산강서고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8973",
                               "highschoolName": "부산경영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4486",
                               "highschoolName": "부산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4489",
                               "highschoolName": "부산공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4491",
                               "highschoolName": "부산과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4492",
                               "highschoolName": "부산관광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4494",
                               "highschoolName": "부산국제고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4495",
                               "highschoolName": "부산국제영화고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6947",
                               "highschoolName": "부산국제외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4497",
                               "highschoolName": "부산기계공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4499",
                               "highschoolName": "부산남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4502",
                               "highschoolName": "부산남일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4505",
                               "highschoolName": "부산대저고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4520",
                               "highschoolName": "부산대학교사범대학부설고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4508",
                               "highschoolName": "부산동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4509",
                               "highschoolName": "부산동성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4511",
                               "highschoolName": "부산동여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4514",
                               "highschoolName": "부산디지털고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4515",
                               "highschoolName": "부산마케팅고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8742",
                               "highschoolName": "부산문화여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4519",
                               "highschoolName": "부산백양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8977",
                               "highschoolName": "부산보건고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4521",
                               "highschoolName": "부산산업과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4524",
                               "highschoolName": "부산서여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8969",
                               "highschoolName": "부산세무고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4529",
                               "highschoolName": "부산에너지과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4530",
                               "highschoolName": "부산여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4531",
                               "highschoolName": "부산여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4533",
                               "highschoolName": "부산영상예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4534",
                               "highschoolName": "부산예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4535",
                               "highschoolName": "부산외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8984",
                               "highschoolName": "부산일과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4538",
                               "highschoolName": "부산자동차고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4539",
                               "highschoolName": "부산장안고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4540",
                               "highschoolName": "부산전자공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4541",
                               "highschoolName": "부산정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4543",
                               "highschoolName": "부산정보관광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4549",
                               "highschoolName": "부산조리고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4550",
                               "highschoolName": "부산중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4551",
                               "highschoolName": "부산중앙여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4553",
                               "highschoolName": "부산진고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4554",
                               "highschoolName": "부산진여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4555",
                               "highschoolName": "부산진여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4557",
                               "highschoolName": "부산체육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4558",
                               "highschoolName": "부산컴퓨터과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8971",
                               "highschoolName": "부산항만물류고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4560",
                               "highschoolName": "부산해사고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4568",
                               "highschoolName": "부석고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4570",
                               "highschoolName": "부안고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4573",
                               "highschoolName": "부안여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4574",
                               "highschoolName": "부안여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4575",
                               "highschoolName": "부안제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4576",
                               "highschoolName": "부여고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4578",
                               "highschoolName": "부여여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4579",
                               "highschoolName": "부여전자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4580",
                               "highschoolName": "부여정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4581",
                               "highschoolName": "부영여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4582",
                               "highschoolName": "부용고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9153",
                               "highschoolName": "부원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4583",
                               "highschoolName": "부일외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4585",
                               "highschoolName": "부일전자디자인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4586",
                               "highschoolName": "부천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4587",
                               "highschoolName": "부천공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4589",
                               "highschoolName": "부천북고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4592",
                               "highschoolName": "부천여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4593",
                               "highschoolName": "부천정보산업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4596",
                               "highschoolName": "부평고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4597",
                               "highschoolName": "부평공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4598",
                               "highschoolName": "부평디자인과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4600",
                               "highschoolName": "부평여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8974",
                               "highschoolName": "부흥고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9490",
                               "highschoolName": "북경한국국제학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9432",
                               "highschoolName": "북삼고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4608",
                               "highschoolName": "북원여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9328",
                               "highschoolName": "북일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9329",
                               "highschoolName": "북일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4612",
                               "highschoolName": "북평고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4615",
                               "highschoolName": "북평여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9130",
                               "highschoolName": "분당경영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4618",
                               "highschoolName": "분당고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4619",
                               "highschoolName": "분당대진고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4620",
                               "highschoolName": "분당영덕여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4622",
                               "highschoolName": "분당중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4623",
                               "highschoolName": "분포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4624",
                               "highschoolName": "불곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8939",
                               "highschoolName": "불암고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4626",
                               "highschoolName": "브니엘고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4627",
                               "highschoolName": "브니엘여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4628",
                               "highschoolName": "브니엘예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4631",
                               "highschoolName": "비봉고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9248",
                               "highschoolName": "비전고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9061",
                               "highschoolName": "빛고을고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7449",
                               "highschoolName": "사곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4634",
                               "highschoolName": "사내고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9433",
                               "highschoolName": "사동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4636",
                               "highschoolName": "사북고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8981",
                               "highschoolName": "사상고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4638",
                               "highschoolName": "사우고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4639",
                               "highschoolName": "사직고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4640",
                               "highschoolName": "사직여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4641",
                               "highschoolName": "사천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4643",
                               "highschoolName": "사천여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9315",
                               "highschoolName": "산남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4652",
                               "highschoolName": "산마을고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4653",
                               "highschoolName": "산본고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4654",
                               "highschoolName": "산본공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4659",
                               "highschoolName": "산서고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4660",
                               "highschoolName": "산청고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4667",
                               "highschoolName": "살레시오고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4668",
                               "highschoolName": "살레시오여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4669",
                               "highschoolName": "삼가고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8944",
                               "highschoolName": "삼각산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4670",
                               "highschoolName": "삼계고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4673",
                               "highschoolName": "삼광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4674",
                               "highschoolName": "삼괴고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4676",
                               "highschoolName": "삼랑진고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4677",
                               "highschoolName": "삼량고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4679",
                               "highschoolName": "삼례공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4681",
                               "highschoolName": "삼산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4683",
                               "highschoolName": "삼성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9410",
                               "highschoolName": "삼성생활예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4684",
                               "highschoolName": "삼성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4687",
                               "highschoolName": "삼일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4689",
                               "highschoolName": "삼일공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4690",
                               "highschoolName": "삼일상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4692",
                               "highschoolName": "삼일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4693",
                               "highschoolName": "삼정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4696",
                               "highschoolName": "삼척고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9287",
                               "highschoolName": "삼척마이스터고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4698",
                               "highschoolName": "삼척여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4700",
                               "highschoolName": "삼천포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4701",
                               "highschoolName": "삼천포공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4702",
                               "highschoolName": "삼천포여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4704",
                               "highschoolName": "삼천포중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9235",
                               "highschoolName": "삼평고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4705",
                               "highschoolName": "삼현여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9389",
                               "highschoolName": "삼호고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4707",
                               "highschoolName": "삽교고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4708",
                               "highschoolName": "상계고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4709",
                               "highschoolName": "상당고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4710",
                               "highschoolName": "상동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9278",
                               "highschoolName": "상동고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9221",
                               "highschoolName": "상록고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4712",
                               "highschoolName": "상명고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4714",
                               "highschoolName": "상명대학교사범대학부속여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7834",
                               "highschoolName": "상모고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4716",
                               "highschoolName": "상무고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4717",
                               "highschoolName": "상문고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4721",
                               "highschoolName": "상산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4722",
                               "highschoolName": "상산전자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8996",
                               "highschoolName": "상서고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8942",
                               "highschoolName": "상암고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4726",
                               "highschoolName": "상우고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9182",
                               "highschoolName": "상원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4727",
                               "highschoolName": "상인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4728",
                               "highschoolName": "상일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8268",
                               "highschoolName": "상일미디어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4729",
                               "highschoolName": "상일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4730",
                               "highschoolName": "상주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4731",
                               "highschoolName": "상주공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4734",
                               "highschoolName": "상주여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9281",
                               "highschoolName": "상지대관령고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4737",
                               "highschoolName": "상지여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8828",
                               "highschoolName": "상해복단대학부속고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8256",
                               "highschoolName": "상해서회고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8257",
                               "highschoolName": "상해신홍교고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8097",
                               "highschoolName": "상해진재중학국제부"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7031",
                               "highschoolName": "상해한국학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9245",
                               "highschoolName": "상현고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4743",
                               "highschoolName": "생초고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4744",
                               "highschoolName": "서강고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4748",
                               "highschoolName": "서귀포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4749",
                               "highschoolName": "서귀포산업과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4750",
                               "highschoolName": "서귀포여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4751",
                               "highschoolName": "서대전고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4753",
                               "highschoolName": "서대전여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4754",
                               "highschoolName": "서도고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4755",
                               "highschoolName": "서라벌고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4756",
                               "highschoolName": "서령고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4757",
                               "highschoolName": "서문여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4759",
                               "highschoolName": "서산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4763",
                               "highschoolName": "서산여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7745",
                               "highschoolName": "서산중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9447",
                               "highschoolName": "서상고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8926",
                               "highschoolName": "서서울생활과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4766",
                               "highschoolName": "서석고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4768",
                               "highschoolName": "서야고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4769",
                               "highschoolName": "서영여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4770",
                               "highschoolName": "서운고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4777",
                               "highschoolName": "서울고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4779",
                               "highschoolName": "서울공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8957",
                               "highschoolName": "서울공연예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4780",
                               "highschoolName": "서울과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4781",
                               "highschoolName": "서울관광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4788",
                               "highschoolName": "서울국제고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8927",
                               "highschoolName": "서울금융고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4807",
                               "highschoolName": "서울대학교사범대학부설고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8910",
                               "highschoolName": "서울도시과학기술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4798",
                               "highschoolName": "서울디자인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4799",
                               "highschoolName": "서울디지텍고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8908",
                               "highschoolName": "서울로봇고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4337",
                               "highschoolName": "서울문영여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8924",
                               "highschoolName": "서울문화고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4803",
                               "highschoolName": "서울미술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4804",
                               "highschoolName": "서울방송고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9481",
                               "highschoolName": "서울백암고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4810",
                               "highschoolName": "서울삼육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4988",
                               "highschoolName": "서울세종고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8912",
                               "highschoolName": "서울아이티고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4814",
                               "highschoolName": "서울여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4815",
                               "highschoolName": "서울여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8894",
                               "highschoolName": "서울영상고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4821",
                               "highschoolName": "서울예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4823",
                               "highschoolName": "서울외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8820",
                               "highschoolName": "서울전자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4838",
                               "highschoolName": "서울체육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8914",
                               "highschoolName": "서울컨벤션고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8929",
                               "highschoolName": "서울항공비즈니스고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9171",
                               "highschoolName": "서원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4844",
                               "highschoolName": "서인천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4845",
                               "highschoolName": "서일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8928",
                               "highschoolName": "서일국제경영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4848",
                               "highschoolName": "서일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9218",
                               "highschoolName": "서정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4850",
                               "highschoolName": "서진여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9461",
                               "highschoolName": "서창고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4851",
                               "highschoolName": "서천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4852",
                               "highschoolName": "서천여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4854",
                               "highschoolName": "서천여자정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4856",
                               "highschoolName": "서초고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4858",
                               "highschoolName": "서해고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4859",
                               "highschoolName": "서해삼육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4860",
                               "highschoolName": "서현고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9277",
                               "highschoolName": "서현고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4862",
                               "highschoolName": "석관고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9434",
                               "highschoolName": "석적고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4864",
                               "highschoolName": "석정여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4868",
                               "highschoolName": "선덕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4869",
                               "highschoolName": "선덕여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4873",
                               "highschoolName": "선린인터넷고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4875",
                               "highschoolName": "선명여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9210",
                               "highschoolName": "선부고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8952",
                               "highschoolName": "선사고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4877",
                               "highschoolName": "선산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4879",
                               "highschoolName": "선영여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8672",
                               "highschoolName": "선유고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4880",
                               "highschoolName": "선인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4881",
                               "highschoolName": "선일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8915",
                               "highschoolName": "선일이비즈니스고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4883",
                               "highschoolName": "선정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8918",
                               "highschoolName": "선정관광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7338",
                               "highschoolName": "선주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4885",
                               "highschoolName": "선화여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4888",
                               "highschoolName": "선화예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4890",
                               "highschoolName": "설악고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9301",
                               "highschoolName": "설악고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4891",
                               "highschoolName": "설월여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4892",
                               "highschoolName": "설천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9342",
                               "highschoolName": "설화고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4893",
                               "highschoolName": "성광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4895",
                               "highschoolName": "성광여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8893",
                               "highschoolName": "성남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9132",
                               "highschoolName": "성남금융고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9131",
                               "highschoolName": "성남방송고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4900",
                               "highschoolName": "성남서고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4901",
                               "highschoolName": "성남여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7259",
                               "highschoolName": "성남외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8916",
                               "highschoolName": "성덕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4905",
                               "highschoolName": "성도고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4906",
                               "highschoolName": "성동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8309",
                               "highschoolName": "성동공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4907",
                               "highschoolName": "성동글로벌경영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4912",
                               "highschoolName": "성모여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4913",
                               "highschoolName": "성문고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9133",
                               "highschoolName": "성보경영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4917",
                               "highschoolName": "성보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4921",
                               "highschoolName": "성복고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9183",
                               "highschoolName": "성사고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4923",
                               "highschoolName": "성산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4925",
                               "highschoolName": "성서고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4926",
                               "highschoolName": "성수고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4927",
                               "highschoolName": "성수공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4929",
                               "highschoolName": "성수여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4933",
                               "highschoolName": "성신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4934",
                               "highschoolName": "성신여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8975",
                               "highschoolName": "성심보건고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4936",
                               "highschoolName": "성심여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4939",
                               "highschoolName": "성안고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7793",
                               "highschoolName": "성암국제무역고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4946",
                               "highschoolName": "성원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4949",
                               "highschoolName": "성의고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4950",
                               "highschoolName": "성의여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4954",
                               "highschoolName": "성일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4956",
                               "highschoolName": "성일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4958",
                               "highschoolName": "성일정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4960",
                               "highschoolName": "성전고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4962",
                               "highschoolName": "성주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4965",
                               "highschoolName": "성주여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8976",
                               "highschoolName": "성지고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4969",
                               "highschoolName": "성지여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4972",
                               "highschoolName": "성창여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7864",
                               "highschoolName": "성포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4974",
                               "highschoolName": "성호고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4975",
                               "highschoolName": "성화여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4977",
                               "highschoolName": "성환고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4978",
                               "highschoolName": "성희여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9164",
                               "highschoolName": "세경고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4979",
                               "highschoolName": "세광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9236",
                               "highschoolName": "세교고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8919",
                               "highschoolName": "세그루패션디자인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9224",
                               "highschoolName": "세마고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4981",
                               "highschoolName": "세명고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4982",
                               "highschoolName": "세명컴퓨터고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4985",
                               "highschoolName": "세원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4986",
                               "highschoolName": "세인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4987",
                               "highschoolName": "세일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8972",
                               "highschoolName": "세정상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7267",
                               "highschoolName": "세종고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4989",
                               "highschoolName": "세종과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9102",
                               "highschoolName": "세종국제고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9098",
                               "highschoolName": "세종여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9099",
                               "highschoolName": "세종하이텍고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8573",
                               "highschoolName": "세현고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4990",
                               "highschoolName": "세화고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4991",
                               "highschoolName": "세화여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8980",
                               "highschoolName": "센텀고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4994",
                               "highschoolName": "소래고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4997",
                               "highschoolName": "소명여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "4998",
                               "highschoolName": "소사고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9290",
                               "highschoolName": "소양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5001",
                               "highschoolName": "소천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5002",
                               "highschoolName": "소하고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5003",
                               "highschoolName": "속초고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5007",
                               "highschoolName": "속초여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9246",
                               "highschoolName": "솔터고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5009",
                               "highschoolName": "송곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8930",
                               "highschoolName": "송곡관광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5010",
                               "highschoolName": "송곡여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7438",
                               "highschoolName": "송내고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5012",
                               "highschoolName": "송도고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5014",
                               "highschoolName": "송림고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5015",
                               "highschoolName": "송산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5018",
                               "highschoolName": "송악고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9244",
                               "highschoolName": "송양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8763",
                               "highschoolName": "송우고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5019",
                               "highschoolName": "송원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5020",
                               "highschoolName": "송원여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5021",
                               "highschoolName": "송원여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9369",
                               "highschoolName": "송지고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5026",
                               "highschoolName": "송탄고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5028",
                               "highschoolName": "송탄제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5029",
                               "highschoolName": "송파공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5031",
                               "highschoolName": "송현고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5032",
                               "highschoolName": "송현여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5033",
                               "highschoolName": "송호고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5034",
                               "highschoolName": "수내고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5037",
                               "highschoolName": "수도여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5038",
                               "highschoolName": "수도전기공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5039",
                               "highschoolName": "수락고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5040",
                               "highschoolName": "수리고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8955",
                               "highschoolName": "수명고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5041",
                               "highschoolName": "수비고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5045",
                               "highschoolName": "수성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9275",
                               "highschoolName": "수성고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9058",
                               "highschoolName": "수완고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5051",
                               "highschoolName": "수원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5052",
                               "highschoolName": "수원공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5054",
                               "highschoolName": "수원농생명과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5058",
                               "highschoolName": "수원여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5059",
                               "highschoolName": "수원여자고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8610",
                               "highschoolName": "수원외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9135",
                               "highschoolName": "수원전산여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7119",
                               "highschoolName": "수원정보과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9256",
                               "highschoolName": "수원칠보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5062",
                               "highschoolName": "수원하이텍고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5065",
                               "highschoolName": "수일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9194",
                               "highschoolName": "수주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5066",
                               "highschoolName": "수지고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5067",
                               "highschoolName": "수택고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5068",
                               "highschoolName": "숙명여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5069",
                               "highschoolName": "숙지고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5070",
                               "highschoolName": "순심고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5071",
                               "highschoolName": "순심여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5072",
                               "highschoolName": "순창고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5075",
                               "highschoolName": "순창제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5076",
                               "highschoolName": "순천강남여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5077",
                               "highschoolName": "순천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5078",
                               "highschoolName": "순천고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5079",
                               "highschoolName": "순천공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5080",
                               "highschoolName": "순천금당고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5081",
                               "highschoolName": "순천매산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5082",
                               "highschoolName": "순천매산여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9390",
                               "highschoolName": "순천복성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5085",
                               "highschoolName": "순천여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5087",
                               "highschoolName": "순천전자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5088",
                               "highschoolName": "순천제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5089",
                               "highschoolName": "순천청암고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8030",
                               "highschoolName": "순천팔마고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5090",
                               "highschoolName": "순천효산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5091",
                               "highschoolName": "순천효천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5092",
                               "highschoolName": "숭덕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5094",
                               "highschoolName": "숭덕여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5096",
                               "highschoolName": "숭문고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5098",
                               "highschoolName": "숭신여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5099",
                               "highschoolName": "숭실고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8501",
                               "highschoolName": "숭의고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5100",
                               "highschoolName": "숭의여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5103",
                               "highschoolName": "시온고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5105",
                               "highschoolName": "시지고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5107",
                               "highschoolName": "시화공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5108",
                               "highschoolName": "시흥고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9206",
                               "highschoolName": "시흥능곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9207",
                               "highschoolName": "시흥매화고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5110",
                               "highschoolName": "신갈고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5114",
                               "highschoolName": "신광여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9215",
                               "highschoolName": "신길고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5115",
                               "highschoolName": "신남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5118",
                               "highschoolName": "신도고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8945",
                               "highschoolName": "신도림고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5122",
                               "highschoolName": "신등고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5123",
                               "highschoolName": "신라고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5124",
                               "highschoolName": "신라공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5125",
                               "highschoolName": "신림고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8997",
                               "highschoolName": "신명고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5126",
                               "highschoolName": "신명여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5128",
                               "highschoolName": "신목고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5130",
                               "highschoolName": "신반정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9247",
                               "highschoolName": "신봉고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8005",
                               "highschoolName": "신서고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9083",
                               "highschoolName": "신선여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5134",
                               "highschoolName": "신성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5135",
                               "highschoolName": "신성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7384",
                               "highschoolName": "신송고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9372",
                               "highschoolName": "신안해양과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5139",
                               "highschoolName": "신일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9136",
                               "highschoolName": "신일비즈니스고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7255",
                               "highschoolName": "신장고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5143",
                               "highschoolName": "신정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5144",
                               "highschoolName": "신정여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8911",
                               "highschoolName": "신진자동차고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9209",
                               "highschoolName": "신천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5147",
                               "highschoolName": "신철원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5150",
                               "highschoolName": "신탄진고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5151",
                               "highschoolName": "신태인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5153",
                               "highschoolName": "신평고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5155",
                               "highschoolName": "신한고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8937",
                               "highschoolName": "신현고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5156",
                               "highschoolName": "신흥고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5158",
                               "highschoolName": "심석고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5162",
                               "highschoolName": "심원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5163",
                               "highschoolName": "심인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5165",
                               "highschoolName": "쌘뽈여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9100",
                               "highschoolName": "아름고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9442",
                               "highschoolName": "아림고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5166",
                               "highschoolName": "아산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9323",
                               "highschoolName": "아산전자기계고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5175",
                               "highschoolName": "안강여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5176",
                               "highschoolName": "안강전자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5178",
                               "highschoolName": "안계고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9196",
                               "highschoolName": "안곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7931",
                               "highschoolName": "안남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5184",
                               "highschoolName": "안동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9437",
                               "highschoolName": "안동고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5189",
                               "highschoolName": "안동여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5191",
                               "highschoolName": "안동중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5193",
                               "highschoolName": "안면고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5194",
                               "highschoolName": "안법고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5195",
                               "highschoolName": "안산강서고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5199",
                               "highschoolName": "안산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5201",
                               "highschoolName": "안산공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9137",
                               "highschoolName": "안산국제비즈니스고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5202",
                               "highschoolName": "안산동산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9138",
                               "highschoolName": "안산디자인문화고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5211",
                               "highschoolName": "안성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5213",
                               "highschoolName": "안성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5217",
                               "highschoolName": "안양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5218",
                               "highschoolName": "안양공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5220",
                               "highschoolName": "안양여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5221",
                               "highschoolName": "안양여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5223",
                               "highschoolName": "안양예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5224",
                               "highschoolName": "안양외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5227",
                               "highschoolName": "안의고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9371",
                               "highschoolName": "안좌고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5233",
                               "highschoolName": "안중고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5234",
                               "highschoolName": "안천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8511",
                               "highschoolName": "안화고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5235",
                               "highschoolName": "안흥고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5237",
                               "highschoolName": "알로이시오전자기계고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7246",
                               "highschoolName": "압구정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5239",
                               "highschoolName": "애월고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5244",
                               "highschoolName": "야로고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5245",
                               "highschoolName": "야탑고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5246",
                               "highschoolName": "약목고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9092",
                               "highschoolName": "약사고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5247",
                               "highschoolName": "약산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9141",
                               "highschoolName": "양곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7636",
                               "highschoolName": "양구고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5251",
                               "highschoolName": "양구여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5254",
                               "highschoolName": "양동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5256",
                               "highschoolName": "양명고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5257",
                               "highschoolName": "양명여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5261",
                               "highschoolName": "양산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5262",
                               "highschoolName": "양산남부고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5263",
                               "highschoolName": "양산여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5270",
                               "highschoolName": "양산제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5272",
                               "highschoolName": "양서고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5274",
                               "highschoolName": "양양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5275",
                               "highschoolName": "양양여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5276",
                               "highschoolName": "양업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8563",
                               "highschoolName": "양영디지털고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5280",
                               "highschoolName": "양운고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8354",
                               "highschoolName": "양일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5282",
                               "highschoolName": "양재고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5283",
                               "highschoolName": "양정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5285",
                               "highschoolName": "양주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5286",
                               "highschoolName": "양주백석고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5288",
                               "highschoolName": "양지고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5289",
                               "highschoolName": "양천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9314",
                               "highschoolName": "양청고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5292",
                               "highschoolName": "양평고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9142",
                               "highschoolName": "양평전자과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9357",
                               "highschoolName": "양현고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5296",
                               "highschoolName": "언남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7692",
                               "highschoolName": "언양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5301",
                               "highschoolName": "여강고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5303",
                               "highschoolName": "여남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5304",
                               "highschoolName": "여량고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5305",
                               "highschoolName": "여산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5306",
                               "highschoolName": "여수고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5307",
                               "highschoolName": "여수공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9373",
                               "highschoolName": "여수석유화학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5310",
                               "highschoolName": "여수여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5312",
                               "highschoolName": "여수정보과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5313",
                               "highschoolName": "여수중앙여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9386",
                               "highschoolName": "여수충무고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9374",
                               "highschoolName": "여수해양과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5315",
                               "highschoolName": "여수화양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5316",
                               "highschoolName": "여양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5317",
                               "highschoolName": "여의도고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5318",
                               "highschoolName": "여의도여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5319",
                               "highschoolName": "여주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5324",
                               "highschoolName": "여주자영농업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5326",
                               "highschoolName": "여주제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5327",
                               "highschoolName": "여천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9234",
                               "highschoolName": "역곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9492",
                               "highschoolName": "연대한국국제학교 "
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5333",
                               "highschoolName": "연무고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5335",
                               "highschoolName": "연무대기계공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8636",
                               "highschoolName": "연변제2고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8570",
                               "highschoolName": "연변제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7299",
                               "highschoolName": "연변한국국제학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5340",
                               "highschoolName": "연수고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5341",
                               "highschoolName": "연수여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7769",
                               "highschoolName": "연제고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5343",
                               "highschoolName": "연천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9467",
                               "highschoolName": "연초고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5345",
                               "highschoolName": "연평고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5349",
                               "highschoolName": "염광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8931",
                               "highschoolName": "염광여자메디텍고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5358",
                               "highschoolName": "영광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9375",
                               "highschoolName": "영광공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5361",
                               "highschoolName": "영광여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5363",
                               "highschoolName": "영광전자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5367",
                               "highschoolName": "영남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5368",
                               "highschoolName": "영남공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5369",
                               "highschoolName": "영남삼육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5371",
                               "highschoolName": "영덕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9414",
                               "highschoolName": "영덕여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5373",
                               "highschoolName": "영도여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5375",
                               "highschoolName": "영동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5378",
                               "highschoolName": "영동산업과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5382",
                               "highschoolName": "영동인터넷고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6868",
                               "highschoolName": "영동일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5383",
                               "highschoolName": "영등포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5385",
                               "highschoolName": "영등포공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5386",
                               "highschoolName": "영등포여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5388",
                               "highschoolName": "영락고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8917",
                               "highschoolName": "영락유헬스고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5393",
                               "highschoolName": "영문고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5394",
                               "highschoolName": "영복여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9143",
                               "highschoolName": "영북고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5396",
                               "highschoolName": "영산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5397",
                               "highschoolName": "영산성지고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5407",
                               "highschoolName": "영생고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9288",
                               "highschoolName": "영서고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5410",
                               "highschoolName": "영선고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5412",
                               "highschoolName": "영송여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8920",
                               "highschoolName": "영신간호비즈니스고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8895",
                               "highschoolName": "영신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8896",
                               "highschoolName": "영신여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5415",
                               "highschoolName": "영암고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5416",
                               "highschoolName": "영암낭주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5417",
                               "highschoolName": "영암여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9370",
                               "highschoolName": "영암전자과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5418",
                               "highschoolName": "영양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5419",
                               "highschoolName": "영양여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5420",
                               "highschoolName": "영월고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5421",
                               "highschoolName": "영월공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8897",
                               "highschoolName": "영일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5426",
                               "highschoolName": "영종국제물류고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5429",
                               "highschoolName": "영주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5433",
                               "highschoolName": "영주동산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5435",
                               "highschoolName": "영주여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5437",
                               "highschoolName": "영주제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8999",
                               "highschoolName": "영진고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5440",
                               "highschoolName": "영천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9429",
                               "highschoolName": "영천상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5441",
                               "highschoolName": "영천성남여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5442",
                               "highschoolName": "영천여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5446",
                               "highschoolName": "영천전자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5448",
                               "highschoolName": "영파여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5449",
                               "highschoolName": "영해고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9019",
                               "highschoolName": "영화관광경영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5455",
                               "highschoolName": "영훈고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5456",
                               "highschoolName": "영흥고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5458",
                               "highschoolName": "예당고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8922",
                               "highschoolName": "예림디자인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5462",
                               "highschoolName": "예문여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5463",
                               "highschoolName": "예산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5467",
                               "highschoolName": "예산여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9324",
                               "highschoolName": "예산예화여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5469",
                               "highschoolName": "예산전자공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5479",
                               "highschoolName": "예일디자인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5480",
                               "highschoolName": "예일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5483",
                               "highschoolName": "예천여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5488",
                               "highschoolName": "오금고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9211",
                               "highschoolName": "오남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5489",
                               "highschoolName": "오류고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8291",
                               "highschoolName": "오사카건국고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5490",
                               "highschoolName": "오사카부립나니와공고(大阪部立難波工業高)"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5491",
                               "highschoolName": "오사카부립포시공고"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5492",
                               "highschoolName": "오사카시립미야코지마공업고교(大阪市立都島工業高等?校)"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5493",
                               "highschoolName": "오사카시립미야코지마공업고교(大阪市立都島工業高等高校)"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5494",
                               "highschoolName": "오사카철도공고(大阪鐵道工高)"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8898",
                               "highschoolName": "오산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5498",
                               "highschoolName": "오산정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5499",
                               "highschoolName": "오상고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5500",
                               "highschoolName": "오성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9317",
                               "highschoolName": "오송고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5501",
                               "highschoolName": "오수고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5504",
                               "highschoolName": "오창고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5505",
                               "highschoolName": "오천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5506",
                               "highschoolName": "오현고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5507",
                               "highschoolName": "옥과고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7365",
                               "highschoolName": "옥련여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9261",
                               "highschoolName": "옥정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5512",
                               "highschoolName": "옥종고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5513",
                               "highschoolName": "옥천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5515",
                               "highschoolName": "옥천상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9094",
                               "highschoolName": "온산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5522",
                               "highschoolName": "온양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5523",
                               "highschoolName": "온양여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5525",
                               "highschoolName": "온양용화고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5527",
                               "highschoolName": "온양한올고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5528",
                               "highschoolName": "와룡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9197",
                               "highschoolName": "와부고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5529",
                               "highschoolName": "완도고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5530",
                               "highschoolName": "완도금일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5531",
                               "highschoolName": "완도수산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5532",
                               "highschoolName": "완산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9350",
                               "highschoolName": "완산여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5536",
                               "highschoolName": "완주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5537",
                               "highschoolName": "왕신여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9325",
                               "highschoolName": "용남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5540",
                               "highschoolName": "용문고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5542",
                               "highschoolName": "용산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5544",
                               "highschoolName": "용산공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5545",
                               "highschoolName": "용운고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5546",
                               "highschoolName": "용인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9147",
                               "highschoolName": "용인바이오고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9482",
                               "highschoolName": "용인백암고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9179",
                               "highschoolName": "용인백현고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9268",
                               "highschoolName": "용인삼계고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9148",
                               "highschoolName": "용인정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9177",
                               "highschoolName": "용인한국외국어대학교부설고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5552",
                               "highschoolName": "용호고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5553",
                               "highschoolName": "용화여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5555",
                               "highschoolName": "우석고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5556",
                               "highschoolName": "우석여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5557",
                               "highschoolName": "우성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5558",
                               "highschoolName": "우송고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8899",
                               "highschoolName": "우신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5559",
                               "highschoolName": "운남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5561",
                               "highschoolName": "운산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5562",
                               "highschoolName": "운산공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5564",
                               "highschoolName": "운암고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9258",
                               "highschoolName": "운양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9219",
                               "highschoolName": "운정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9231",
                               "highschoolName": "운중고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5565",
                               "highschoolName": "운천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5566",
                               "highschoolName": "운호고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9416",
                               "highschoolName": "울릉고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5569",
                               "highschoolName": "울산강남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5571",
                               "highschoolName": "울산경의고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5572",
                               "highschoolName": "울산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5573",
                               "highschoolName": "울산공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5574",
                               "highschoolName": "울산과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9078",
                               "highschoolName": "울산기술공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9076",
                               "highschoolName": "울산동천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9079",
                               "highschoolName": "울산마이스터고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5577",
                               "highschoolName": "울산미용예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9093",
                               "highschoolName": "울산산업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5578",
                               "highschoolName": "울산상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5579",
                               "highschoolName": "울산생활과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9091",
                               "highschoolName": "울산스포츠과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5581",
                               "highschoolName": "울산애니원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9080",
                               "highschoolName": "울산에너지고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5582",
                               "highschoolName": "울산여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5583",
                               "highschoolName": "울산여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5584",
                               "highschoolName": "울산예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9088",
                               "highschoolName": "울산외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5589",
                               "highschoolName": "울산제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5591",
                               "highschoolName": "울산중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5592",
                               "highschoolName": "울산중앙여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5595",
                               "highschoolName": "울진고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5598",
                               "highschoolName": "웅상고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5599",
                               "highschoolName": "웅천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5601",
                               "highschoolName": "원경고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5602",
                               "highschoolName": "원곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5603",
                               "highschoolName": "원광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5604",
                               "highschoolName": "원광여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5607",
                               "highschoolName": "원광정보예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5608",
                               "highschoolName": "원덕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8941",
                               "highschoolName": "원묵고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5611",
                               "highschoolName": "원미고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5613",
                               "highschoolName": "원종고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5614",
                               "highschoolName": "원주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5615",
                               "highschoolName": "원주고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5616",
                               "highschoolName": "원주공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9286",
                               "highschoolName": "원주금융회계고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5619",
                               "highschoolName": "원주삼육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5620",
                               "highschoolName": "원주여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9289",
                               "highschoolName": "원주의료고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5625",
                               "highschoolName": "원통고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5626",
                               "highschoolName": "원화여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7962",
                               "highschoolName": "월계고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5627",
                               "highschoolName": "위도고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9271",
                               "highschoolName": "위례고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9273",
                               "highschoolName": "위례한빛고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5634",
                               "highschoolName": "유봉여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5635",
                               "highschoolName": "유성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5637",
                               "highschoolName": "유성생명과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9070",
                               "highschoolName": "유성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5639",
                               "highschoolName": "유신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5640",
                               "highschoolName": "유일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5641",
                               "highschoolName": "유한공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5642",
                               "highschoolName": "육민관고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5643",
                               "highschoolName": "율곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5645",
                               "highschoolName": "율면고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9242",
                               "highschoolName": "율천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5648",
                               "highschoolName": "은광여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8956",
                               "highschoolName": "은평고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8900",
                               "highschoolName": "은평메디텍고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5658",
                               "highschoolName": "은행고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5659",
                               "highschoolName": "은혜고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5662",
                               "highschoolName": "음성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5665",
                               "highschoolName": "의령고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5666",
                               "highschoolName": "의령여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5669",
                               "highschoolName": "의성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5670",
                               "highschoolName": "의성공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5672",
                               "highschoolName": "의성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9212",
                               "highschoolName": "의왕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5673",
                               "highschoolName": "의정부고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5674",
                               "highschoolName": "의정부공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5675",
                               "highschoolName": "의정부광동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5676",
                               "highschoolName": "의정부여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5682",
                               "highschoolName": "이리고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5683",
                               "highschoolName": "이리공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5684",
                               "highschoolName": "이리남성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5687",
                               "highschoolName": "이리여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5688",
                               "highschoolName": "이매고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5690",
                               "highschoolName": "이사벨고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5693",
                               "highschoolName": "이서고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5694",
                               "highschoolName": "이시노마키공고(石卷工高)"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7852",
                               "highschoolName": "이우고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9265",
                               "highschoolName": "이의고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5695",
                               "highschoolName": "이일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5696",
                               "highschoolName": "이천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9106",
                               "highschoolName": "이천세무고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5699",
                               "highschoolName": "이천양정여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5703",
                               "highschoolName": "이천제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9213",
                               "highschoolName": "이충고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5704",
                               "highschoolName": "이포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9237",
                               "highschoolName": "이현고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5708",
                               "highschoolName": "이화여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8932",
                               "highschoolName": "이화여자대학교병설미디어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8901",
                               "highschoolName": "이화여자대학교사범대학부속이화금란고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5709",
                               "highschoolName": "이화여자외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5710",
                               "highschoolName": "익산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5714",
                               "highschoolName": "인덕공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8545",
                               "highschoolName": "인덕원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5716",
                               "highschoolName": "인동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5717",
                               "highschoolName": "인명여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5719",
                               "highschoolName": "인상고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5720",
                               "highschoolName": "인성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5721",
                               "highschoolName": "인월고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5722",
                               "highschoolName": "인일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5723",
                               "highschoolName": "인제고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8902",
                               "highschoolName": "인창고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5727",
                               "highschoolName": "인천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5728",
                               "highschoolName": "인천고잔고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5729",
                               "highschoolName": "인천공항고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5730",
                               "highschoolName": "인천과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5732",
                               "highschoolName": "인천국제고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5733",
                               "highschoolName": "인천기계공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5734",
                               "highschoolName": "인천남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9034",
                               "highschoolName": "인천남동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9031",
                               "highschoolName": "인천논현고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5735",
                               "highschoolName": "인천대건고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5739",
                               "highschoolName": "인천디자인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9030",
                               "highschoolName": "인천마전고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9033",
                               "highschoolName": "인천만수고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5740",
                               "highschoolName": "인천박문여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9012",
                               "highschoolName": "인천보건고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7472",
                               "highschoolName": "인천부흥고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9022",
                               "highschoolName": "인천뷰티예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9018",
                               "highschoolName": "인천비즈니스고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8506",
                               "highschoolName": "인천산곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9036",
                               "highschoolName": "인천상정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5744",
                               "highschoolName": "인천생활과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9017",
                               "highschoolName": "인천세무고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9037",
                               "highschoolName": "인천세원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9039",
                               "highschoolName": "인천송천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7355",
                               "highschoolName": "인천신현고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5749",
                               "highschoolName": "인천여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9048",
                               "highschoolName": "인천여자고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5752",
                               "highschoolName": "인천여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9042",
                               "highschoolName": "인천연송고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9029",
                               "highschoolName": "인천영선고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9043",
                               "highschoolName": "인천영종고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9045",
                               "highschoolName": "인천영흥고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5756",
                               "highschoolName": "인천예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7257",
                               "highschoolName": "인천예일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6834",
                               "highschoolName": "인천외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9028",
                               "highschoolName": "인천원당고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9023",
                               "highschoolName": "인천전자마이스터고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5761",
                               "highschoolName": "인천정보산업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5764",
                               "highschoolName": "인천중앙여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9032",
                               "highschoolName": "인천진산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9047",
                               "highschoolName": "인천청담고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9040",
                               "highschoolName": "인천청라고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5765",
                               "highschoolName": "인천체육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9041",
                               "highschoolName": "인천초은고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9046",
                               "highschoolName": "인천포스코고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5766",
                               "highschoolName": "인천하늘고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9020",
                               "highschoolName": "인천하이텍고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5768",
                               "highschoolName": "인천해사고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9038",
                               "highschoolName": "인천해송고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5769",
                               "highschoolName": "인천해양과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9044",
                               "highschoolName": "인천해원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6693",
                               "highschoolName": "인천효성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5771",
                               "highschoolName": "인평자동차정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5772",
                               "highschoolName": "인하대학교사범대학부속고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5773",
                               "highschoolName": "인항고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5774",
                               "highschoolName": "인헌고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5775",
                               "highschoolName": "인화여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5776",
                               "highschoolName": "일동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9150",
                               "highschoolName": "일산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9151",
                               "highschoolName": "일산국제컨벤션고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5779",
                               "highschoolName": "일산대진고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5780",
                               "highschoolName": "일산동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5785",
                               "highschoolName": "일신여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5786",
                               "highschoolName": "일신여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9152",
                               "highschoolName": "일죽고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5789",
                               "highschoolName": "임계고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5791",
                               "highschoolName": "임실고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9376",
                               "highschoolName": "임자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5797",
                               "highschoolName": "자양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7261",
                               "highschoolName": "자운고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8154",
                               "highschoolName": "작전고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7347",
                               "highschoolName": "작전여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5802",
                               "highschoolName": "잠신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5803",
                               "highschoolName": "잠실고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5804",
                               "highschoolName": "잠실여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8953",
                               "highschoolName": "잠일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5806",
                               "highschoolName": "장계공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5807",
                               "highschoolName": "장곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9214",
                               "highschoolName": "장기고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9057",
                               "highschoolName": "장덕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9377",
                               "highschoolName": "장성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5810",
                               "highschoolName": "장성실업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5811",
                               "highschoolName": "장성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5815",
                               "highschoolName": "장수고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5816",
                               "highschoolName": "장안고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5818",
                               "highschoolName": "장안제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5822",
                               "highschoolName": "장유고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8200",
                               "highschoolName": "장춘시조선족중학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6892",
                               "highschoolName": "장춘외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7469",
                               "highschoolName": "장춘제11고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5823",
                               "highschoolName": "장충고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5824",
                               "highschoolName": "장항고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5827",
                               "highschoolName": "장호원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5829",
                               "highschoolName": "장훈고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5830",
                               "highschoolName": "장흥고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5831",
                               "highschoolName": "장흥관산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5833",
                               "highschoolName": "재능유비쿼터스고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5834",
                               "highschoolName": "재현고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5835",
                               "highschoolName": "저동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9251",
                               "highschoolName": "저현고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5837",
                               "highschoolName": "전곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5839",
                               "highschoolName": "전남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5840",
                               "highschoolName": "전남공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5841",
                               "highschoolName": "전남과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9383",
                               "highschoolName": "전남기술과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5844",
                               "highschoolName": "전남대학교사범대학부설고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5843",
                               "highschoolName": "전남미용고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9382",
                               "highschoolName": "전남보건고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5845",
                               "highschoolName": "전남생명과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5847",
                               "highschoolName": "전남여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9063",
                               "highschoolName": "전남여자고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5848",
                               "highschoolName": "전남여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5849",
                               "highschoolName": "전남예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5850",
                               "highschoolName": "전남외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9385",
                               "highschoolName": "전남자연과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5852",
                               "highschoolName": "전남조리과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5853",
                               "highschoolName": "전남체육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5854",
                               "highschoolName": "전라고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5856",
                               "highschoolName": "전북과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5857",
                               "highschoolName": "전북기계공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5860",
                               "highschoolName": "전북대학교사범대학부설고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9351",
                               "highschoolName": "전북여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7951",
                               "highschoolName": "전북외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5861",
                               "highschoolName": "전북제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5862",
                               "highschoolName": "전북체육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9294",
                               "highschoolName": "전인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5866",
                               "highschoolName": "전일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5869",
                               "highschoolName": "전주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5870",
                               "highschoolName": "전주고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5871",
                               "highschoolName": "전주공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5872",
                               "highschoolName": "전주근영여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5875",
                               "highschoolName": "전주기전여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8369",
                               "highschoolName": "전주대학교사범대학부설고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9353",
                               "highschoolName": "전주상업정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5878",
                               "highschoolName": "전주생명과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5880",
                               "highschoolName": "전주성심여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5881",
                               "highschoolName": "전주솔내고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5883",
                               "highschoolName": "전주신흥고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5884",
                               "highschoolName": "전주여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5885",
                               "highschoolName": "전주여자고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5888",
                               "highschoolName": "전주영생고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5889",
                               "highschoolName": "전주예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5891",
                               "highschoolName": "전주제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5892",
                               "highschoolName": "전주중앙여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5893",
                               "highschoolName": "전주한일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5894",
                               "highschoolName": "전주해성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9155",
                               "highschoolName": "점동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5897",
                               "highschoolName": "점촌고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8983",
                               "highschoolName": "정관고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5898",
                               "highschoolName": "정광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9378",
                               "highschoolName": "정남진산업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5899",
                               "highschoolName": "정동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5902",
                               "highschoolName": "정명고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5906",
                               "highschoolName": "정명정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5907",
                               "highschoolName": "정발고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5908",
                               "highschoolName": "정산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9024",
                               "highschoolName": "정석항공과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5910",
                               "highschoolName": "정선고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5914",
                               "highschoolName": "정선정보공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5916",
                               "highschoolName": "정신여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5917",
                               "highschoolName": "정왕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5920",
                               "highschoolName": "정읍고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5923",
                               "highschoolName": "정읍여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5924",
                               "highschoolName": "정읍제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5925",
                               "highschoolName": "정의여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5927",
                               "highschoolName": "정주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5932",
                               "highschoolName": "정화여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5933",
                               "highschoolName": "정화여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5936",
                               "highschoolName": "제물포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9049",
                               "highschoolName": "제물포고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5939",
                               "highschoolName": "제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9479",
                               "highschoolName": "제주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5944",
                               "highschoolName": "제주과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5948",
                               "highschoolName": "제주대학교사범대학부설고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5952",
                               "highschoolName": "제주여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5953",
                               "highschoolName": "제주여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7644",
                               "highschoolName": "제주외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5957",
                               "highschoolName": "제주제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5958",
                               "highschoolName": "제주제일고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5959",
                               "highschoolName": "제주중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5960",
                               "highschoolName": "제주중앙여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5961",
                               "highschoolName": "제천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5964",
                               "highschoolName": "제천디지털전자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9307",
                               "highschoolName": "제천산업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5965",
                               "highschoolName": "제천상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5967",
                               "highschoolName": "제천여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5969",
                               "highschoolName": "제천제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5972",
                               "highschoolName": "조도고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5974",
                               "highschoolName": "조선대학교부속고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5975",
                               "highschoolName": "조선대학교여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7476",
                               "highschoolName": "조원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9000",
                               "highschoolName": "조일로봇고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9156",
                               "highschoolName": "조종고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9103",
                               "highschoolName": "종촌고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5983",
                               "highschoolName": "주덕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5984",
                               "highschoolName": "주례여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5986",
                               "highschoolName": "주문진고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5993",
                               "highschoolName": "주산산업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5994",
                               "highschoolName": "주성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5996",
                               "highschoolName": "주엽고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "5998",
                               "highschoolName": "주천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9419",
                               "highschoolName": "죽변고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6003",
                               "highschoolName": "죽산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6007",
                               "highschoolName": "죽전고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6010",
                               "highschoolName": "줄포자동차공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6011",
                               "highschoolName": "중경고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7759",
                               "highschoolName": "중국 산동성 유산 제3고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6865",
                               "highschoolName": "중국 조선족고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8304",
                               "highschoolName": "중국녕안고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6013",
                               "highschoolName": "중국대련시 제20고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8109",
                               "highschoolName": "중국대련제15고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6876",
                               "highschoolName": "중국동방예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6877",
                               "highschoolName": "중국락양시제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6014",
                               "highschoolName": "중국서안시황하자제학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8457",
                               "highschoolName": "중국인민대학교부속고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8002",
                               "highschoolName": "중국전매대학교(Communication University of China)"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8725",
                               "highschoolName": "중국제2고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7833",
                               "highschoolName": "중국태산외국어학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7569",
                               "highschoolName": "중국통화시조선족학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8835",
                               "highschoolName": "중국흑룡강중학"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6015",
                               "highschoolName": "중동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9388",
                               "highschoolName": "중마고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9421",
                               "highschoolName": "중모고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9475",
                               "highschoolName": "중문고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8903",
                               "highschoolName": "중산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6023",
                               "highschoolName": "중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6024",
                               "highschoolName": "중앙대학교사범대학부속고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6027",
                               "highschoolName": "중앙여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6029",
                               "highschoolName": "중원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6030",
                               "highschoolName": "중일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6031",
                               "highschoolName": "중화고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6032",
                               "highschoolName": "중흥고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6033",
                               "highschoolName": "증평공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6036",
                               "highschoolName": "증평정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6038",
                               "highschoolName": "지구촌고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9459",
                               "highschoolName": "지리산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6042",
                               "highschoolName": "지명고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6046",
                               "highschoolName": "지산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9159",
                               "highschoolName": "지평고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9355",
                               "highschoolName": "지평선고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6048",
                               "highschoolName": "진건고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6050",
                               "highschoolName": "진경여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8948",
                               "highschoolName": "진관고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6052",
                               "highschoolName": "진광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6054",
                               "highschoolName": "진교고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6057",
                               "highschoolName": "진도고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9368",
                               "highschoolName": "진도국악고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6058",
                               "highschoolName": "진도실업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6060",
                               "highschoolName": "진량고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6061",
                               "highschoolName": "진명여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6062",
                               "highschoolName": "진보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6066",
                               "highschoolName": "진부고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9358",
                               "highschoolName": "진북고등공민학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6073",
                               "highschoolName": "진서고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6074",
                               "highschoolName": "진선여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6075",
                               "highschoolName": "진성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6076",
                               "highschoolName": "진성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6080",
                               "highschoolName": "진안공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6082",
                               "highschoolName": "진안제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6083",
                               "highschoolName": "진양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6084",
                               "highschoolName": "진영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6090",
                               "highschoolName": "진영제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6093",
                               "highschoolName": "진위고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9222",
                               "highschoolName": "진접고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6096",
                               "highschoolName": "진주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6097",
                               "highschoolName": "진주고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6098",
                               "highschoolName": "진주기계공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6100",
                               "highschoolName": "진주동명고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6102",
                               "highschoolName": "진주여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6104",
                               "highschoolName": "진주외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6105",
                               "highschoolName": "진주제일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6106",
                               "highschoolName": "진주중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6108",
                               "highschoolName": "진천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6111",
                               "highschoolName": "진천상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6113",
                               "highschoolName": "진해고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6114",
                               "highschoolName": "진해세화여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6115",
                               "highschoolName": "진해여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9463",
                               "highschoolName": "진해용원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6119",
                               "highschoolName": "진해중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6121",
                               "highschoolName": "창녕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6122",
                               "highschoolName": "창녕공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6125",
                               "highschoolName": "창녕대성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6126",
                               "highschoolName": "창녕여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9449",
                               "highschoolName": "창녕옥야고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6128",
                               "highschoolName": "창녕제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6129",
                               "highschoolName": "창덕여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6131",
                               "highschoolName": "창동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6134",
                               "highschoolName": "창문여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6135",
                               "highschoolName": "창선고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6137",
                               "highschoolName": "창신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6140",
                               "highschoolName": "창원경일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7948",
                               "highschoolName": "창원경일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6141",
                               "highschoolName": "창원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6142",
                               "highschoolName": "창원공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9465",
                               "highschoolName": "창원과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6143",
                               "highschoolName": "창원기계공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6144",
                               "highschoolName": "창원남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6145",
                               "highschoolName": "창원남산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6146",
                               "highschoolName": "창원대산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7700",
                               "highschoolName": "창원대암고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6147",
                               "highschoolName": "창원명곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6148",
                               "highschoolName": "창원명지여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6149",
                               "highschoolName": "창원문성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6150",
                               "highschoolName": "창원봉림고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6151",
                               "highschoolName": "창원사파고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9473",
                               "highschoolName": "창원성민여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6152",
                               "highschoolName": "창원신월고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6153",
                               "highschoolName": "창원여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6154",
                               "highschoolName": "창원용호고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6156",
                               "highschoolName": "창원중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6157",
                               "highschoolName": "창원중앙여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9456",
                               "highschoolName": "창원토월고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6159",
                               "highschoolName": "창평고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6160",
                               "highschoolName": "창현고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6162",
                               "highschoolName": "천안고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6164",
                               "highschoolName": "천안공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6166",
                               "highschoolName": "천안두정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9509",
                               "highschoolName": "천안불당고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6169",
                               "highschoolName": "천안상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9336",
                               "highschoolName": "천안신당고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7902",
                               "highschoolName": "천안쌍용고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9340",
                               "highschoolName": "천안업성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6170",
                               "highschoolName": "천안여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6171",
                               "highschoolName": "천안여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9341",
                               "highschoolName": "천안오성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6172",
                               "highschoolName": "천안월봉고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6175",
                               "highschoolName": "천안제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6176",
                               "highschoolName": "천안중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9346",
                               "highschoolName": "천안중앙고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9339",
                               "highschoolName": "천안청수고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7051",
                               "highschoolName": "천천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6181",
                               "highschoolName": "철성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6182",
                               "highschoolName": "철암고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6183",
                               "highschoolName": "철원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6184",
                               "highschoolName": "철원여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7370",
                               "highschoolName": "첨단고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6186",
                               "highschoolName": "청구고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6189",
                               "highschoolName": "청담고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9205",
                               "highschoolName": "청덕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9422",
                               "highschoolName": "청도고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8178",
                               "highschoolName": "청도남양학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8583",
                               "highschoolName": "청도신육영학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6192",
                               "highschoolName": "청도여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6193",
                               "highschoolName": "청도전자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6194",
                               "highschoolName": "청도전자공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8878",
                               "highschoolName": "청도제19고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8187",
                               "highschoolName": "청도제2중학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8067",
                               "highschoolName": "청도지성실험중학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8074",
                               "highschoolName": "청도지성중학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7622",
                               "highschoolName": "청도한국국제학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6195",
                               "highschoolName": "청란여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6196",
                               "highschoolName": "청량고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6199",
                               "highschoolName": "청명고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9223",
                               "highschoolName": "청북고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6201",
                               "highschoolName": "청산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6204",
                               "highschoolName": "청석고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6205",
                               "highschoolName": "청송고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9424",
                               "highschoolName": "청송여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9423",
                               "highschoolName": "청송자동차고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6209",
                               "highschoolName": "청심국제고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9343",
                               "highschoolName": "청양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6217",
                               "highschoolName": "청운고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6220",
                               "highschoolName": "청원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6221",
                               "highschoolName": "청원여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6223",
                               "highschoolName": "청주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6224",
                               "highschoolName": "청주고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6225",
                               "highschoolName": "청주공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6228",
                               "highschoolName": "청주농업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6229",
                               "highschoolName": "청주대성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6236",
                               "highschoolName": "청주신흥고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6237",
                               "highschoolName": "청주여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6241",
                               "highschoolName": "청주여자상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6242",
                               "highschoolName": "청주외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6244",
                               "highschoolName": "청주중앙여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9161",
                               "highschoolName": "청평고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6251",
                               "highschoolName": "청학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6252",
                               "highschoolName": "청학공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9451",
                               "highschoolName": "초계고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9201",
                               "highschoolName": "초당고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9238",
                               "highschoolName": "초월고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6255",
                               "highschoolName": "초지고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6264",
                               "highschoolName": "춘천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6265",
                               "highschoolName": "춘천고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6267",
                               "highschoolName": "춘천기계공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6274",
                               "highschoolName": "춘천여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9302",
                               "highschoolName": "춘천여자고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9291",
                               "highschoolName": "춘천한샘고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6275",
                               "highschoolName": "충남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6277",
                               "highschoolName": "충남과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6278",
                               "highschoolName": "충남기계공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9330",
                               "highschoolName": "충남디자인예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9345",
                               "highschoolName": "충남삼성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6281",
                               "highschoolName": "충남여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6282",
                               "highschoolName": "충남예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9337",
                               "highschoolName": "충남외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6283",
                               "highschoolName": "충남인터넷고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9326",
                               "highschoolName": "충남조선공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6284",
                               "highschoolName": "충남체육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6285",
                               "highschoolName": "충남해양과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6286",
                               "highschoolName": "충렬고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6287",
                               "highschoolName": "충렬여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6289",
                               "highschoolName": "충무고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6290",
                               "highschoolName": "충북고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6291",
                               "highschoolName": "충북공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6292",
                               "highschoolName": "충북과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6294",
                               "highschoolName": "충북대학교사범대학부설고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6293",
                               "highschoolName": "충북반도체고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9310",
                               "highschoolName": "충북상업정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9306",
                               "highschoolName": "충북에너지고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6296",
                               "highschoolName": "충북여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6298",
                               "highschoolName": "충북예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6300",
                               "highschoolName": "충북전산기계고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6302",
                               "highschoolName": "충북체육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6303",
                               "highschoolName": "충암고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6304",
                               "highschoolName": "충원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6306",
                               "highschoolName": "충주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6307",
                               "highschoolName": "충주고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6308",
                               "highschoolName": "충주공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6311",
                               "highschoolName": "충주대원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6312",
                               "highschoolName": "충주상업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6316",
                               "highschoolName": "충주여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6318",
                               "highschoolName": "충주예성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9308",
                               "highschoolName": "충주중산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6320",
                               "highschoolName": "충현고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7046",
                               "highschoolName": "충훈고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8766",
                               "highschoolName": "치악고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6322",
                               "highschoolName": "칠곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6324",
                               "highschoolName": "칠보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9007",
                               "highschoolName": "칠성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6326",
                               "highschoolName": "칠원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9162",
                               "highschoolName": "태광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6335",
                               "highschoolName": "태릉고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6338",
                               "highschoolName": "태백기계공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9466",
                               "highschoolName": "태봉고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6339",
                               "highschoolName": "태성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6340",
                               "highschoolName": "태안고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6341",
                               "highschoolName": "태안여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6345",
                               "highschoolName": "태원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6346",
                               "highschoolName": "태인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6348",
                               "highschoolName": "태장고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6354",
                               "highschoolName": "토평고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6355",
                               "highschoolName": "통영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6357",
                               "highschoolName": "통영여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9163",
                               "highschoolName": "통진고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6360",
                               "highschoolName": "퇴계원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6361",
                               "highschoolName": "파주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6363",
                               "highschoolName": "파주여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9240",
                               "highschoolName": "판곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9295",
                               "highschoolName": "팔렬고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8566",
                               "highschoolName": "평내고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6367",
                               "highschoolName": "평창고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9165",
                               "highschoolName": "평촌경영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6370",
                               "highschoolName": "평촌고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6371",
                               "highschoolName": "평촌공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6373",
                               "highschoolName": "평택고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6375",
                               "highschoolName": "평택기계공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9503",
                               "highschoolName": "평택마이스터고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6378",
                               "highschoolName": "평택여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6385",
                               "highschoolName": "평해정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9203",
                               "highschoolName": "포곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6387",
                               "highschoolName": "포산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9401",
                               "highschoolName": "포은고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6388",
                               "highschoolName": "포천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6390",
                               "highschoolName": "포천일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6393",
                               "highschoolName": "포항고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9438",
                               "highschoolName": "포항고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9399",
                               "highschoolName": "포항과학기술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6397",
                               "highschoolName": "포항동성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6400",
                               "highschoolName": "포항여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6402",
                               "highschoolName": "포항여자전자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6403",
                               "highschoolName": "포항영신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6405",
                               "highschoolName": "포항예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8549",
                               "highschoolName": "포항이동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7952",
                               "highschoolName": "포항장성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6408",
                               "highschoolName": "포항제철고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6409",
                               "highschoolName": "포항제철공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6410",
                               "highschoolName": "포항중앙고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6411",
                               "highschoolName": "포항중앙여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6412",
                               "highschoolName": "포항해양과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9428",
                               "highschoolName": "포항흥해공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9476",
                               "highschoolName": "표선고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6415",
                               "highschoolName": "푸른꿈고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6416",
                               "highschoolName": "풀무농업고등기술학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6420",
                               "highschoolName": "풍덕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9174",
                               "highschoolName": "풍동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7468",
                               "highschoolName": "풍무고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6423",
                               "highschoolName": "풍문여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6424",
                               "highschoolName": "풍산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6426",
                               "highschoolName": "풍생고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6427",
                               "highschoolName": "풍암고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6428",
                               "highschoolName": "풍양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9272",
                               "highschoolName": "하길고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8959",
                               "highschoolName": "하나고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9166",
                               "highschoolName": "하남경영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6431",
                               "highschoolName": "하남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9505",
                               "highschoolName": "하노이한국국제학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6433",
                               "highschoolName": "하동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6434",
                               "highschoolName": "하동여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8211",
                               "highschoolName": "하성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6438",
                               "highschoolName": "하양여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6439",
                               "highschoolName": "하의고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6441",
                               "highschoolName": "하장고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6442",
                               "highschoolName": "학남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6443",
                               "highschoolName": "학다리고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6444",
                               "highschoolName": "학산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6446",
                               "highschoolName": "학산여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6451",
                               "highschoolName": "학성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9095",
                               "highschoolName": "학성고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9096",
                               "highschoolName": "학성고등학교부설방송통신중학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6453",
                               "highschoolName": "학성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6454",
                               "highschoolName": "학익고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6455",
                               "highschoolName": "학익여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6456",
                               "highschoolName": "한가람고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8904",
                               "highschoolName": "한강미디어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9180",
                               "highschoolName": "한겨레고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8905",
                               "highschoolName": "한광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6460",
                               "highschoolName": "한광여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9354",
                               "highschoolName": "한국게임과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6462",
                               "highschoolName": "한국경마축산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6465",
                               "highschoolName": "한국관광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7879",
                               "highschoolName": "한국교원대학교부설고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9502",
                               "highschoolName": "한국나노마이스터고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6471",
                               "highschoolName": "한국도예고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6472",
                               "highschoolName": "한국디지털미디어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6473",
                               "highschoolName": "한국마사고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9365",
                               "highschoolName": "한국말산업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9123",
                               "highschoolName": "한국문화영상고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9015",
                               "highschoolName": "한국문화콘텐츠고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9380",
                               "highschoolName": "한국바둑고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9309",
                               "highschoolName": "한국바이오마이스터고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9478",
                               "highschoolName": "한국뷰티고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9425",
                               "highschoolName": "한국산림과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6474",
                               "highschoolName": "한국삼육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9413",
                               "highschoolName": "한국생명과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9333",
                               "highschoolName": "한국식품마이스터고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6476",
                               "highschoolName": "한국애니메이션고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9120",
                               "highschoolName": "한국외식과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9427",
                               "highschoolName": "한국원자력마이스터고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6482",
                               "highschoolName": "한국전통문화고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6484",
                               "highschoolName": "한국조리과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8752",
                               "highschoolName": "한국조형예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9025",
                               "highschoolName": "한국주얼리고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9352",
                               "highschoolName": "한국치즈과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9356",
                               "highschoolName": "한국한방고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6488",
                               "highschoolName": "한국항만물류고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9305",
                               "highschoolName": "한국호텔관광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6496",
                               "highschoolName": "한림고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6497",
                               "highschoolName": "한림공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9312",
                               "highschoolName": "한림디자인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9506",
                               "highschoolName": "한림연예예술고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9334",
                               "highschoolName": "한마음고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9259",
                               "highschoolName": "한민고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6501",
                               "highschoolName": "한밭고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9263",
                               "highschoolName": "한백고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6505",
                               "highschoolName": "한별고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6506",
                               "highschoolName": "한빛고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6510",
                               "highschoolName": "한서고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6512",
                               "highschoolName": "한성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6513",
                               "highschoolName": "한성과학고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6514",
                               "highschoolName": "한성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8936",
                               "highschoolName": "한세사이버보안고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6518",
                               "highschoolName": "한솔고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6520",
                               "highschoolName": "한양공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6521",
                               "highschoolName": "한양대학교사범대학부속고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6524",
                               "highschoolName": "한얼고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8906",
                               "highschoolName": "한영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6525",
                               "highschoolName": "한영외국어고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9391",
                               "highschoolName": "한울고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9331",
                               "highschoolName": "한일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6527",
                               "highschoolName": "한일여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6530",
                               "highschoolName": "한진고등기술학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9477",
                               "highschoolName": "함덕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9292",
                               "highschoolName": "함백고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6539",
                               "highschoolName": "함안고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6547",
                               "highschoolName": "함양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6550",
                               "highschoolName": "함양제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6552",
                               "highschoolName": "함열고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6553",
                               "highschoolName": "함열여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7015",
                               "highschoolName": "함월고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9005",
                               "highschoolName": "함지고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6555",
                               "highschoolName": "함창고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6556",
                               "highschoolName": "함평고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6557",
                               "highschoolName": "함평골프고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6559",
                               "highschoolName": "함평여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6562",
                               "highschoolName": "함현고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6566",
                               "highschoolName": "합덕여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9332",
                               "highschoolName": "합덕제철고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6568",
                               "highschoolName": "합천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6569",
                               "highschoolName": "합천여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6575",
                               "highschoolName": "합포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8599",
                               "highschoolName": "해강고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6578",
                               "highschoolName": "해남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6579",
                               "highschoolName": "해남공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6581",
                               "highschoolName": "해동고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6583",
                               "highschoolName": "해룡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6584",
                               "highschoolName": "해리고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9453",
                               "highschoolName": "해성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "7955",
                               "highschoolName": "해성국제컨벤션고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8950",
                               "highschoolName": "해성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6588",
                               "highschoolName": "해운대고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6589",
                               "highschoolName": "해운대공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6590",
                               "highschoolName": "해운대관광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6591",
                               "highschoolName": "해운대여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6596",
                               "highschoolName": "행신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9204",
                               "highschoolName": "향남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9239",
                               "highschoolName": "향일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6599",
                               "highschoolName": "현대고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6600",
                               "highschoolName": "현대공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6604",
                               "highschoolName": "현대청운고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6606",
                               "highschoolName": "현도정보고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6607",
                               "highschoolName": "현서고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9185",
                               "highschoolName": "현암고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6608",
                               "highschoolName": "현일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9299",
                               "highschoolName": "현천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6609",
                               "highschoolName": "현풍고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8759",
                               "highschoolName": "현화고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6611",
                               "highschoolName": "협성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9431",
                               "highschoolName": "형곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6615",
                               "highschoolName": "형석고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6616",
                               "highschoolName": "혜광고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6618",
                               "highschoolName": "혜성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6621",
                               "highschoolName": "혜원여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8907",
                               "highschoolName": "혜화여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9085",
                               "highschoolName": "호계고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6623",
                               "highschoolName": "호남고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6624",
                               "highschoolName": "호남삼육고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6625",
                               "highschoolName": "호남원예고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6626",
                               "highschoolName": "호남제일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9250",
                               "highschoolName": "호매실고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9006",
                               "highschoolName": "호산고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6628",
                               "highschoolName": "호서고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6629",
                               "highschoolName": "호수돈여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6630",
                               "highschoolName": "호원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9276",
                               "highschoolName": "호원고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9178",
                               "highschoolName": "호평고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6635",
                               "highschoolName": "홍성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9347",
                               "highschoolName": "홍성고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9320",
                               "highschoolName": "홍성공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6637",
                               "highschoolName": "홍성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6641",
                               "highschoolName": "홍익대학교사범대학부속고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6642",
                               "highschoolName": "홍익대학교사범대학부속여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6640",
                               "highschoolName": "홍익디자인고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6643",
                               "highschoolName": "홍주고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6644",
                               "highschoolName": "홍천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6645",
                               "highschoolName": "홍천농업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6646",
                               "highschoolName": "홍천여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6648",
                               "highschoolName": "화곡고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8934",
                               "highschoolName": "화곡보건경영고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6652",
                               "highschoolName": "화령고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6653",
                               "highschoolName": "화명고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9089",
                               "highschoolName": "화봉고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6655",
                               "highschoolName": "화성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9254",
                               "highschoolName": "화성반월고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6656",
                               "highschoolName": "화수고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6657",
                               "highschoolName": "화순고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9384",
                               "highschoolName": "화순이양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6660",
                               "highschoolName": "화암고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6662",
                               "highschoolName": "화원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6664",
                               "highschoolName": "화정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6666",
                               "highschoolName": "화천고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6670",
                               "highschoolName": "화천정보산업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6672",
                               "highschoolName": "화홍고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6673",
                               "highschoolName": "환일고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6674",
                               "highschoolName": "황간고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6678",
                               "highschoolName": "황지고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9303",
                               "highschoolName": "황지고등학교부설방송통신고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6683",
                               "highschoolName": "황지정보산업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6685",
                               "highschoolName": "횡성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6687",
                               "highschoolName": "횡성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6689",
                               "highschoolName": "효령고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9169",
                               "highschoolName": "효명고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8940",
                               "highschoolName": "효문고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9170",
                               "highschoolName": "효성고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6694",
                               "highschoolName": "효성여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6698",
                               "highschoolName": "효암고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8764",
                               "highschoolName": "효양고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6701",
                               "highschoolName": "효원고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9186",
                               "highschoolName": "효자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6702",
                               "highschoolName": "효정고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "9426",
                               "highschoolName": "효청보건고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6703",
                               "highschoolName": "후쿠시마공고(福島工高)"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6704",
                               "highschoolName": "후포고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6705",
                               "highschoolName": "휘경공업고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6706",
                               "highschoolName": "휘경여자고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6707",
                               "highschoolName": "휘문고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8954",
                               "highschoolName": "휘봉고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6708",
                               "highschoolName": "흥덕고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6709",
                               "highschoolName": "흥진고등학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6713",
                               "highschoolName": "히로시마공고(廣島工高)"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "8500",
                               "highschoolName": "히로시마국제학교"
                             },
                             {
                               "limitSize": 0,
                               "highschoolCode": "6714",
                               "highschoolName": "히로오고등학교(廣尾高)"
                             }
                           ];

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const results = highschoolData.filter(school => school.highschoolName.toLowerCase().includes(query));

        searchResultList.innerHTML = '';
        searchResultList.innerHTML = '';
        if (results.length > 0) {
            searchDiv.classList.add('searched');
        } else {
            searchDiv.classList.remove('searched');
        }
        results.forEach(school => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'ellipsis';
            button.dataset.code = school.highschoolCode;
            button.title = school.highschoolName;
            button.innerHTML = `<strong>${school.highschoolName}</strong>`;
            button.addEventListener('click', () => {
                selectedSchoolName.value = school.highschoolName;
                selectedSchoolCode.value = school.highschoolCode;
                selectedSchoolDisplay.innerHTML = `<span>${school.highschoolName}</span><button type="button" class="resetSearchResult" data-button="resetSearchResult"></button>`;

                const resetButton = selectedSchoolDisplay.querySelector('.resetSearchResult');
                resetButton.addEventListener('click', () => {
                    selectedSchoolName.value = '';
                    selectedSchoolCode.value = '';
                    selectedSchoolDisplay.innerHTML = '';
                    searchInput.value = '';
                    searchResultList.innerHTML = '';
                });

                searchResultList.innerHTML = '';
                searchInput.value = '';
            });
            li.appendChild(button);
            searchResultList.appendChild(li);
        });
    });

        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // 폼 제출 방지
                const query = searchInput.value.toLowerCase();
                const results = highschoolData.filter(school => school.highschoolName.toLowerCase().includes(query));

                searchResultList.innerHTML = '';
                if (results.length > 0) {
                    searchDiv.classList.add('searched');
                    searchResult.style.display = 'block';
                } else {
                    searchDiv.classList.remove('searched');
                    searchResult.style.display = 'none';
                }

                results.forEach(school => {
                    const li = document.createElement('li');
                    const button = document.createElement('button');
                    button.type = 'button';
                    button.className = 'ellipsis';
                    button.dataset.code = school.highschoolCode;
                    button.title = school.highschoolName;
                    button.innerHTML = `<strong>${school.highschoolName}</strong>`;
                    button.addEventListener('click', () => {
                        selectedSchoolName.value = school.highschoolName;
                        selectedSchoolCode.value = school.highschoolCode;
                        selectedSchoolDisplay.innerHTML = `<span>${school.highschoolName}</span><button type="button" class="resetSearchResult" data-button="resetSearchResult"></button>`;

                        const resetButton = selectedSchoolDisplay.querySelector('.resetSearchResult');
                        resetButton.addEventListener('click', () => {
                            selectedSchoolName.value = '';
                            selectedSchoolCode.value = '';
                            selectedSchoolDisplay.innerHTML = '';
                            searchInput.value = '';
                            searchResultList.innerHTML = '';
                            searchDiv.classList.remove('searched');
                            searchResult.style.display = 'none';
                        });

                        searchResultList.innerHTML = '';
                        searchInput.value = '';
                        searchDiv.classList.remove('searched');
                        searchResult.style.display = 'none';
                    });
                    li.appendChild(button);
                    searchResultList.appendChild(li);
                });
            }
        });

        // 화면의 다른 곳을 클릭하면 searchResult 숨김
        document.addEventListener('click', (event) => {
            if (!searchDiv.contains(event.target)) {
                searchResult.style.display = 'none';
            }
        });

        // 검색 입력 필드를 클릭하면 searchResult 표시
        searchInput.addEventListener('click', () => {
            if (searchResultList.childElementCount > 0) {
                searchResult.style.display = 'block';
            }
        });
});
