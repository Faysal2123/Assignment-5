document.getElementById('noa-donate-btn').addEventListener('click', function() {
    const noaAmountInput = document.getElementById('noa-input');
    const noaAmount = parseAndValidate('noa-input'); 

    if (isNaN(noaAmount) || noaAmount <= 0) {
        alert('Invalid input');
        return;
    } 

    const balanceElement = document.getElementById('account-balance');
    const balance = parseFloat(balanceElement.innerText);
    const mainBalance = balance - noaAmount;
    balanceElement.innerText = mainBalance.toFixed(2); 


    document.getElementById('my_modal_3').showModal();

    const noaBalanceElement = document.getElementById('noa-amount');
    const noaCurrentBalance = parseFloat(noaBalanceElement.textContent) + noaAmount;
    noaBalanceElement.textContent = noaCurrentBalance.toFixed(2); 

    const p = document.createElement('p');
    p.classList.add('text-lg');
    p.innerText = `${noaAmount}TK Donate for Flood at Noakhali, Bangladesh\n${new Date().toLocaleDateString()}`;
    document.getElementById('history-container').appendChild(p);
});

document.getElementById('feni-don-btn').addEventListener('click', function() {
    const feniAmountInput = document.getElementById('feni-input');
    const feniAmount = parseAndValidate('feni-input');

    if (isNaN(feniAmount) || feniAmount <= 0) {
        alert('Invalid input');
        return;
    } 

    const balanceElement = document.getElementById('account-balance');
    const balance = parseFloat(balanceElement.innerText);
    const mainBalance = balance - feniAmount;
    balanceElement.innerText = mainBalance.toFixed(2); 
    document.getElementById('my_modal_2').showModal();
    
    const feniBalanceElement = document.getElementById('feni-amount');
    const feniCurrentBalance = parseFloat(feniBalanceElement.textContent) + feniAmount;
    feniBalanceElement.textContent = feniCurrentBalance.toFixed(2); 
    const p = document.createElement('p');
    p.classList.add('text-lg');
    p.innerText = `${feniAmount} TK donated for Flood Relief in Feni, Bangladesh\n${new Date().toLocaleDateString()}`;
    document.getElementById('history-container').appendChild(p);

});

document.getElementById('quota-don-btn').addEventListener('click', function() {
    const quotaAmountInput = document.getElementById('quota-input');
    const quotaAmount = parseAndValidate('quota-input');

    if (isNaN(quotaAmount) || quotaAmount<= 0) {
        alert('Invalid input');
        return;
    } 
    const balanceElement = document.getElementById('account-balance');
    const balance = parseFloat(balanceElement.innerText);
    const mainBalance = balance -quotaAmount;
    balanceElement.innerText = mainBalance.toFixed(2); 


    document.getElementById('my_modal_1').showModal();


    const quotaBalanceElement = document.getElementById('quota-amount');
    const quotaCurrentBalance = parseFloat( quotaBalanceElement.textContent) + quotaAmount;
    quotaBalanceElement.textContent = quotaCurrentBalance.toFixed(2); 

    const p = document.createElement('p');
    p.classList.add('text-lg');
    p.innerText = `${quotaAmount}TK Aid for Injured in the Quota Movement\n${new Date().toLocaleDateString()}`;
    document.getElementById('history-container').appendChild(p);
});








