const historyTab=document.getElementById('history-tab');
const donateBtn=document.getElementById('donation-btn');
historyTab.addEventListener('click',function(){
    historyTab.classList.add("bg-primary");
    donateBtn.classList.remove("bg-primary");

    document.getElementById('donation-container').classList.add('hidden')
    document.getElementById('footer-container').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')

})

donateBtn.addEventListener('click',function(){
    donateBtn.classList.add("bg-primary");
    historyTab.classList.remove("bg-primary");

    document.getElementById('history-section').classList.add('hidden')
    document.getElementById('donation-container').classList.remove('hidden')
   
})
