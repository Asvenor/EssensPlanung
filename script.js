// Variables for the Selectors
const getGemüse = document.getElementById('Gemüse');
const getKohlenhydrate = document.getElementById('Kohlenhydrate');
const getSnacks = document.getElementById('Snacks');
const getMilchProteine = document.getElementById('Milch-Proteine');
const getTiefkühlsachen = document.getElementById('Tiefkühlsachen');
//Variable for the button
const addItem = document.getElementById('addItem');
//Variables for the output
const outputSummary = document.getElementById('outputSummary')
const outputGemüseCheck = document.getElementById('outputGemüseCheck')
//Varibles for the checkbox feature
const checkBoxGemüse = document.getElementById('checkGemüse');

//Checkbox Funtion test
function checkGemüseBox() {
        if(checkBoxGemüse.checked === true) {
        outputGemüseCheck.innerText = 'Selected'

    } else {
        outputGemüseCheck.innerText = 'Unselected'

    }

}

checkGemüseBox();
//Gemüse Checkbos Event lister
checkBoxGemüse.addEventListener('change', (checkGemüseBox));



//Add Button Event Lister
addItem.addEventListener('click', ()=>{

    if(checkBoxGemüse.checked === false){
        console.log('Unchecked')
    } else {
        console.log('Checked')
    }


    const gemüse = getGemüse.value

    outputSummary.innerText = gemüse
});