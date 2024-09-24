document.getElementById('noa-donate-btn').addEventListener('click', function() {
    
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

    const historyItem = document.createElement('div');
    historyItem.classList.add('history-entry'); 
    historyItem.innerHTML = `
        <p>Added: ${noaAmount}TK</p>
        <p>Donate for Flood at Noakhali, Bangladesh</p>
        <p>${new Date().toLocaleDateString()}</p>
    `;
    
    document.getElementById('history-container').appendChild(historyItem);
});

document.getElementById('feni-don-btn').addEventListener('click', function() {
   
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
    const historyItem = document.createElement('div');
    historyItem.classList.add('history-entry'); 
    historyItem.innerHTML = `
        <p>Added: ${feniAmount}TK</p>
        <p>Donate for Flood Relief in Feni, Bangladesh</p>
        <p>${new Date().toLocaleDateString()}</p>
    `;
    
    document.getElementById('history-container').appendChild(historyItem);

});

document.getElementById('quota-don-btn').addEventListener('click', function() {
    
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

    const historyList = document.createElement('div');
    historyList.classList.add('history-entry');
    historyList.innerHTML = `
        <p>Added: ${quotaAmount}TK</p>
        <p>Aid for Injured in the Quota Movement</p>
        <p>${new Date().toLocaleDateString()}</p>
    `;
    
    document.getElementById('history-container').appendChild(historyList);
});
    









