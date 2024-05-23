let countForm = document.querySelectorAll('.count-input');
let countH1El = document.querySelectorAll('.count-num');
let errorMsgEl = document.querySelectorAll('.error-msg');


function addNumber() {
    let formVal = countForm[0].value;
    displayMsg(formVal, "+")
}

function minusNumber() {
    let formVal = countForm[0].value;
    displayMsg(formVal, "-")
}

function multiplyNumber() {
    let formVal = countForm[0].value;
    displayMsg(formVal, "*")
}

function displayMsg(formValue, operator) {
    if (isNaN(formValue)) {
        errorMsgEl[0].innerHTML = "You Must Enter A Number"
        errorMsgEl[0].style.borderWidth = "1px"
    }
    else if (operator === "+") {
        countH1El[0].innerHTML = Number(countH1El[0].innerHTML) + Number(formValue);
        removeErr()
    }
    else if (operator === "-") {
        countH1El[0].innerHTML = Number(countH1El[0].innerHTML) - Number(formValue);
        removeErr()
    }
    else if (operator === "*") {
        countH1El[0].innerHTML = Number(countH1El[0].innerHTML) * Number(formValue);
        removeErr()
    }
}









function removeErr(){
    errorMsgEl[0].innerHTML = ""
    errorMsgEl[0].style.borderWidth = "0px"
}