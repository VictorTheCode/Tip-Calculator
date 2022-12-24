const billInput = document.getElementById("billInput");
const tipInput = document.getElementById("tipInput");
const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotal = document.querySelector(".perPersonTotal");


//Get the number of people from the number of people globe
let numberOfPeople =  Number(numberOfPeopleDiv.innerText);


// Calculate the bill 
const calculate = () => {
    // Get the bill number from the bill input
    const billEl = Number(billInput.value)
    // Get the tip percentage divided by 100
    const tipPercent = Number(tipInput.value) / 100
    // Calculate the total Amount (billEl * tipPercent)
    const totalAmount = billEl * tipPercent
    // Calculate the total for the total amount including the bill
    const total = totalAmount + billEl
    // Caliculate the total amount per person
    const perPerson = total / numberOfPeople
    // Update the total amount per person to the DOM and round it up to 2 decimal places
    perPersonTotal.innerText = `$${perPerson.toFixed(2)}`
};

// Increase the bil
const increase = () => {
    // Increase  the number of persons
    numberOfPeople += 1
    // Update the increased number of persons to the DOM
    numberOfPeopleDiv.innerText = numberOfPeople
    numberOfPeopleDiv.style.letterSpacing = "1px"
    // calculate the bill based on the new number of people
    calculate()
};

// Decrease the bill 
const decrease = () => {
    //if amount is 1 or less simply return
    if(numberOfPeople <= 1) {
        throw 'You can\'t  have less than one person'
        return
    }
    // decrease the amount
    numberOfPeople -= 1
    numberOfPeopleDiv.innerText = numberOfPeople
    numberOfPeopleDiv.style.letterSpacing = "1px"

    calculate()
};


