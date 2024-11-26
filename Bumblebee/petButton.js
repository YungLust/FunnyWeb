const outputField = document.querySelector('.outputField');
const counterField = document.querySelector('.counterField');
const btn = document.querySelector('.petBtn');
const maxSymbols = 13;

const emojis = ["❤️","🥰", "🐝", "☀️", "🤗", "🩷"];
const secretPhrases = ["KY$", "404", "?", "K̷̨͖̣̰̠̝̬̝͔̲͖̝̜̩̤̟͙̙̘̥̻̩͔͓̺̲͙̱̬̭͖̪͕̩̺̟̠̪̪͈͙̙̪̣̼̻̐̀̈́̓̂͋̀̂̍̉̍͂̓͗́̀̉̊̕͘͠ͅY̷̨̢̡̛̻̮̼̖͙̥͓̜̩͖̖̬͓̖̞̩̖͈͙͖̭̩̩͖̱͇͚̳͉̠̮̙̪̗̫͚͐̊̃̆̾̃̑̀͆̈́̆̅͑̉̓̅̀̅͗̊͗̀̚͝ͅͅ$̷̨̛̛̫̟̺͙͙̪̠͓̦̦͎̗̟̼̰͈̑̇̂͆̑̈́̿̂̉̅̈́͒͗͋̀̄̄̆̊̑̍̂̂̄́̄̌̕͘̕̚̕͜͠͝"]

let newText = "";
let counter = 0;

btn.addEventListener('click', async function(event){
    counter++;
    let secret = Math.floor(Math.random()*100);
    
    if (newText.length < maxSymbols*2){
        newText += getRandomSymbol();
    }
    else{
        newText = "";
    }
    if (secret==1){
        random = Math.floor(Math.random()*secretPhrases.length);
        newText+=secretPhrases[random];
    }
    outputField.textContent = newText;
    await sleep(25);
    newText=newText.replace(/[!-@0-9a-zA-Zа-яА-Я]/g, "");
    outputField.textContent = newText;
    counterField.textContent = counter;
    counterField.style.cssText = `color: hsl(${counter}, 100%, 50%);`; //back sticks to allow use of the variables
    
})

function getRandomSymbol() {
    let random = Math.floor(Math.random()*emojis.length)
    let symbol = emojis[random];  
    return symbol;
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); //magic code
}

/* todo: 
 cool animation while clicking on button
 cool cool popup when clicking on my nickname in footer
 cool saving of counter variable in cache
*/