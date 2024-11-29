const outputField = document.querySelector('.outputField');
const counterField = document.querySelector('.counterField');
const btn = document.querySelector('.petBtn');
const maxSymbols = 13;

const emojis = ["❤️","🥰", "🐝", "🤗", "🩷", "☀️"];
const secretPhrases = ["KY$", "404", "?", "K̷̨͖̣̰̠̝̬̝͔̲͖̝̜̩̤̟͙̙̘̥̻̩͔͓̺̲͙̱̬̭͖̪͕̩̺̟̠̪̪͈͙̙̪̣̼̻̐̀̈́̓̂͋̀̂̍̉̍͂̓͗́̀̉̊̕͘͠ͅY̷̨̢̡̛̻̮̼̖͙̥͓̜̩͖̖̬͓̖̞̩̖͈͙͖̭̩̩͖̱͇͚̳͉̠̮̙̪̗̫͚͐̊̃̆̾̃̑̀͆̈́̆̅͑̉̓̅̀̅͗̊͗̀̚͝ͅͅ$̷̨̛̛̫̟̺͙͙̪̠͓̦̦͎̗̟̼̰͈̑̇̂͆̑̈́̿̂̉̅̈́͒͗͋̀̄̄̆̊̑̍̂̂̄́̄̌̕͘̕̚̕͜͠͝"]

let newText = "";
let counter = retrieve();
changeCounter();
let chance = 100;

btn.addEventListener('click', async function(event){
    counter++;
    let secret = Math.floor(Math.random()*2);
    
    if (newText.length < maxSymbols*chance){
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
    await sleep(525);
    newText = newText.replace(/[!-@0-9a-zA-Zа-яА-Я]/g, ""); // /g is for every occurance in newText, not only the 1st one 

    
    outputField.textContent = newText;
    changeCounter();
    
})

btn.addEventListener('contextmenu', function(event){
    event.preventDefault();
    changeCounter(0);

})

function getRandomSymbol() {
    let random = Math.floor(Math.random()*emojis.length)
    let symbol = emojis[random];  
    return symbol;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); //magic code
}

function changeCounter(newValue){
    //console.log(newValue,newValue==null); //true, undefined = null

    counter = (newValue == null) ? counter : newValue
    counterField.textContent = counter;
    counterField.style.cssText = `color: hsl(${counter}, 100%, 50%);`; //back sticks to allow use of the variables
}

// function to do before unloading
window.addEventListener("beforeunload", function(e){
    save();
 });

function save(){
    localStorage.setItem("counterValue", JSON.stringify(counter));
}

function retrieve(){
    let retrievedCounter = localStorage.getItem("counterValue");
    return Number(retrievedCounter);
}


/* todo: 
 cool animation while clicking on button
 cool cool popup when clicking on my nickname in footer
*/