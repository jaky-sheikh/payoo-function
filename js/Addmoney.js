document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('add money here')
    // getInputFieldValueById();
    // const addMoney = getInputFieldValueById();
    // console.log('add money value', addMoney)

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    // console.log('add money with parameter', addMoney, pinNumber)

    // if (isNaN(addMoney)) {
    //     alert('Failed to add money');
    //     return;
    // }

    if (pinNumber === 1234) {
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} Tk. Balance: ${newBalance}`;

        // common function
        document.getElementById('transaction-container').appendChild(p);

    }
    else {
        alert('Failed to add money')
    }
})