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



//Gemüse Checkbos Event lister
checkBoxGemüse.addEventListener('click', ()=>{
    
    if(checkBoxGemüse.checked === true) {
        outputGemüseCheck.innerText = 'Selected'
        return 'available'

    } else {
        outputGemüseCheck.innerText = 'Unselected'
        return 'unavailable'

    }
})



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