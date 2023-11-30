// https://randomuser.me/api/?results=24
console.log("userdb");


let data = [];

const userDisplayer = function (data) {


    for (let i = 0; i < data.length; i++) {


        const calculateDaysSinceRegistration = function (registerDateString) {
            const registerDate = new Date(registerDateString);
            const currentDate = new Date();
            const timeDifference = currentDate - registerDate;
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            return daysDifference;
        }

        const dobParser = function (dateOfBirth) {
            let dobArray = dateOfBirth.split("T");
            let dobArrayParsed = dobArray[0].split("-")
            let finalDateOfBirth = [];
            // console.log(dobArrayParsed)
            for (let i = 0; i < dobArrayParsed.length; i++) {
                finalDateOfBirth.unshift(dobArrayParsed[i])
                console.log(dobArrayParsed.length, i, dobArrayParsed[i])
            }

            return finalDateOfBirth.join("/")
        }

        document.querySelector('main').innerHTML += `
    
    <div class="card">
    <div class="bc-container">
        <div class="bc-up"></div>
        <div class="bc-down"> </div>
    </div>
    <div class="info-container">
    <div class="img-container">
            <img src="${data[i].picture.medium}" alt="${data[i].name.first}" picture>
        </div>
        <h3>${data[i].name.first} + ${data[i].name.last}</h3>
        <p>${data[i].location.city}</p>
        <p>${dobParser(currentDateOfBirth)}</p>
        <p>Membre depuis: ${daysSinceRegistrationCalculate(data[i].registered.date)}</p>
    </div>
    </div>
    `}

}

const userFetcher = async function () {
    fetch('https://randomuser.me/api/?results=24 ')
        .then((response) => response.json())
        .then((responseJson) => {

            data = responseJson.results
            console.log(data)
            userDisplayer(data);
        })
}


userFetcher();
