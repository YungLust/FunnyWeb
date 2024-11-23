const outputField = document.querySelector('.outputField');
const btn = document.querySelector('.petBtn');
const maxSymbols = 13

let newText = "";

btn.addEventListener('click', function(event){
    //currText = outputField.textContent;
    
    if (newText.length < maxSymbols*2 ){
        newText += getRandomSymbol();
    }
    else{
        newText = " "
    }
    outputField.textContent = newText;
})

function getRandomSymbol() {
    let chance = Math.floor(Math.random()*100);
    let symbol = "";
    if (chance < 32){ // 1/3
        symbol = "❤️"
    }
    else if (chance < 65){ // 1/3
        symbol = "🥰"
    }
    else if (chance < 98){ // 1/3
        symbol = "🐝"
    }
    else{ // 1/100
        symbol = "☀️";
    }

    return symbol;
}

/* todo: 
 cool animation while clicking on button
 cool footer with my nickname
 cool cool popup when clicking on my nickname in footer

*/