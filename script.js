// https://randomuser.me/api/?results=24
console.log("userdb");
const main = document.querySelector('main');

let data = [];


// Display data from userFetcher using createElement abnd appendChild
const userDisplayer = function (data) {


    for (let i = 0; i < data.length; i++) {
        const registrationDaysCalculate = function (registerDateString) {
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

        const card = document.createElement('div');
        card.classList.add('card');

        const bcContainer = document.createElement('div');
        bcContainer.classList.add('bc-container');

        const bcUp = document.createElement('div');
        bcUp.classList.add('bc-up');
        bcContainer.appendChild(bcUp);

        const bcDown = document.createElement('div');
        bcDown.classList.add('bc-down');
        bcContainer.appendChild(bcDown);

        card.appendChild(bcContainer);

        const infoContainer = document.createElement('div');
        infoContainer.classList.add('info-container');

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        const img = document.createElement('img');
        img.src = data[i].picture.medium;
        img.alt = data[i].name.first;
        imgContainer.appendChild(img);
        infoContainer.appendChild(imgContainer);

        const h3 = document.createElement('h3');
        h3.textContent = `${data[i].name.first} + ${data[i].name.last}`;
        infoContainer.appendChild(h3);

        const cityParagraph = document.createElement('p');
        cityParagraph.textContent = data[i].location.city;
        infoContainer.appendChild(cityParagraph);

        const dobParagraph = document.createElement('p');
        dobParagraph.textContent = dobParser(data[i].dob.date);
        infoContainer.appendChild(dobParagraph);

        const registrationParagraph = document.createElement('p');
        registrationParagraph.textContent = `Membre depuis: ${registrationDaysCalculate(data[i].registered.date)}`;
        infoContainer.appendChild(registrationParagraph);

        card.appendChild(infoContainer);

        main.appendChild(card);
    }

}

// Automatic fetch from https://randomuser.me

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
