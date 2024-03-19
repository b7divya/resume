//Usingb Array
var contactData = [
    {
        phoneNumber: "000000",
    },
    {
        Email: "abc@xyz.com",
    },
    {
        Address: "123,xyz"
    }
]

var contactElement = document.getElementById('contact')  //meaning of Element

var firstContact = contactData[0];
var secondContact = contactData[1];
var thirdContact = contactData[2];

contactElement.innerText = "Contact" + '\n' + "Phone Number: " + firstContact.phoneNumber + '\n' + 
"Email: " + secondContact.Email + '\n' +
 "Address: " + thirdContact.Address;


 //Using Object
var educationData = {
    education1: {
        year: 2018,
        Degree: "B.Tech",
        university: "RTU, Rajasthan"
    },
    education2: {
        year: 2019,
        Degree: "B.Tech",
        university: "RTU, Rajasthan"
    }

};


var educationElement = document.getElementById('education')

var firstEducation = educationData.education1;
var secondEducation = educationData.education2;


educationElement.innerText =  "Education" + '\n' +"Education1" + '\n' + firstEducation.year + '\n' + firstEducation.Degree + '\n' + firstEducation.university + '\n' + 
"Education2" + '\n' + secondEducation.year + '\n' + secondEducation.Degree + '\n' + secondEducation.university;



//Using unordered list 

expertiseData = {
    HTML: true,
    CSS: true,
    JavaScript: true,
    NODEJS: true,
    ReactJS: true,
};

var expertiseElement = document.getElementById('expertise')

const ulElement = document.createElement('ul');

for (const key in expertiseData) {
    const liElement = document.createElement('li');

    liElement.textContent = key;

    ulElement.appendChild(liElement);
}

expertiseElement.appendChild(ulElement);


//bold language data
languageData = ["English", "Hindi"]

var languageElement = document.getElementById('language')

languageElement.innerText = "Language: " + '\n' + languageData.join('\n');

