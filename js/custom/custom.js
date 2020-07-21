//login button event Handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click', function (event) {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = 'block';
})
//deposit button event Handler
//data collect from user want to deposit
const depositBtn = document.getElementById("add-deposit");
depositBtn.addEventListener('click', function (event) {
    const depositNumber = getInputNumber("deposit-amount");
    // const depositAmount = document.getElementById('deposit-amount').value;
    // const depositNumber = parseFloat(depositAmount);
    // data collect from previous deposit
    // const currentDeposit = document.getElementById('current-deposit').innerText;
    // const currentNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentNumber;
    // add total deposit
    // document.getElementById('current-deposit').innerText = totalDeposit;
    updateSpanText('current-deposit',depositNumber);
    updateSpanText('current-balance',depositNumber);
    

    // data collect from balance and add.
    // const balanceAmount = document.getElementById('current-balance').innerText;
    // const balanceNumber = parseFloat(balanceAmount);
    // const totalBalance = balanceNumber + depositNumber;

    // set the current balance
    // document.getElementById('current-balance').innerText=totalBalance;

    //clear the deposit input 
    document.getElementById('deposit-amount').value = "";

})

//withdraw Btn handler
const withdrawBtn = document.getElementById("add-withdraw");
withdrawBtn.addEventListener('click', function (event) { 
    const withdrawNumber = getInputNumber("withdraw-amount");

    updateSpanText('current-withdraw',withdrawNumber);
    updateSpanText('current-balance',-1*withdrawNumber);


    //clear the withdraw input 
    document.getElementById('withdraw-amount').value = "";

    })

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const number = parseFloat(amount);
    return number;
}

function updateSpanText(id,depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber + depositNumber;

    //set the current balance
    document.getElementById(id).innerText = total;
}