const outputField = document.querySelector('.outputField');
const btn = document.querySelector('.petBtn');
console.log(outputField,btn);

let newText = "";

btn.addEventListener('click', function(event){
    //currText = outputField.textContent;
    
    if (newText.length < 30 ){
        newText += getRandomSymbol();
    }
    else{
        newText = ""
    }
    outputField.textContent = newText;
})

function getRandomSymbol() {
    let symbol = Math.floor(Math.random()*10);
    return symbol;
}
