function calcTip() {
    const billInput = document.querySelector("#bill");
    const tipInput = document.querySelector("#tip");
    const numPeopleInput = document.querySelector("#numPeople");
    const resp = document.querySelector("#score")
    const tipZero = document.querySelector(".zero")

    const bill = billInput.value;
    const percentage = tipInput.value;
    const people = numPeopleInput.value;
    
    if (isNaN (bill) || isNaN(percentage) || isNaN(people) || people <=0) { 
        resp.innerHTML = "Please enter value";
        resp.style.display = "block";
    } else {
        const tipAmount = (bill * (percentage / 100)) / people;
        resp.style.display = "block";
        tipZero.innerHTML = Math.ceil(tipAmount) + " each" ;

        // clear input fields
        billInput.value = "";
        tipInput.value = "0";
        numPeopleInput.value = "";

    }



}