// Variables for the Selectors
const getGemüse = document.getElementById('Gemüse');
const getKohlenhydrate = document.getElementById('Kohlenhydrate');
const getSnacks = document.getElementById('Snacks');
const getMilchProteine = document.getElementById('Milch-Proteine');
const getTiefkühlsachen = document.getElementById('Tiefkühlsachen');
//Variable for the button
const deleteLast = document.getElementById('deleteLast')
const clearAll = document.getElementById('clearAll')
const createList = document.getElementById('createList')
const addItem = document.getElementById('addItem');
//Variables for the output
const outputfinallist = document.getElementById('finalList')
const outputSummary = document.getElementById('outputSummary')
const outputGemüseCheck = document.getElementById('outputGemüseCheck')
const outputKohlenhydrateCheck = document.getElementById('outputKohlenhydrateCheck')
const outputSnacksCheck = document.getElementById('outputSnacksCheck')
const outputMilchProteinCheck = document.getElementById('outputMilchProteinCheck')
const outputTiefkühlsachenCheck = document.getElementById('outputTiefkühlsachenCheck')
//Varibles for the checkbox feature
const checkBoxGemüse = document.getElementById('checkGemüse');
const checkBoxKohlenhydrate = document.getElementById('checkKohlenhydrate');
const checkBoxSnacks = document.getElementById('checkSnacks');
const checkBoxMilchProteine = document.getElementById('checkMilchProteine');
const checkBoxTiefkühlsachen = document.getElementById('checkTiefkühlsachen');

let summaryList = []


//Checkbox Funtions
function disabledSelect(select, event) {
    select.disabled = !event.target.checked;
}

function loadUpUpdate(checkbox, select) {
    if(checkbox.checked === false) {
        select.disabled = true;
    } else {
        select.disabled = false;
    }
}

loadUpUpdate(checkBoxGemüse, getGemüse);
loadUpUpdate(checkBoxKohlenhydrate, getKohlenhydrate);
loadUpUpdate(checkBoxSnacks, getSnacks);
loadUpUpdate(checkBoxMilchProteine, getMilchProteine);
loadUpUpdate(checkBoxTiefkühlsachen, getTiefkühlsachen);


//Event Listers for Checkboxes to disabled Select
checkBoxGemüse.addEventListener('change', () => {
    disabledSelect(getGemüse, event)
})

checkBoxKohlenhydrate.addEventListener('change', () => {
    disabledSelect(getKohlenhydrate, event)
})

checkBoxSnacks.addEventListener('change', () => {
    disabledSelect(getSnacks, event)
})

checkBoxMilchProteine.addEventListener('change', () => {
    disabledSelect(getMilchProteine, event)
})

checkBoxTiefkühlsachen.addEventListener('change', () => {
    disabledSelect(getTiefkühlsachen, event)
})

const gemüse = getGemüse.value
const kohlenhydrate = getKohlenhydrate.value
const snacks = getSnacks.value
const milchproteine = getMilchProteine.value
const tiefkühlsachen = getTiefkühlsachen.value

function addChekedSelect(checkbox, select) {
    if(checkbox.checked) {
        summaryList.push(select.value)
        outputSummary.innerText = summaryList.join(', ')
    }
}



addItem.addEventListener('click', ()=> {
    addChekedSelect(checkBoxGemüse, getGemüse)
    addChekedSelect(checkBoxKohlenhydrate, getKohlenhydrate)
    addChekedSelect(checkBoxSnacks, getSnacks)
    addChekedSelect(checkBoxMilchProteine, getMilchProteine)
    addChekedSelect(checkBoxTiefkühlsachen, getTiefkühlsachen)
})


clearAll.addEventListener('click', () => {
    summaryList = []
    outputSummary.innerText = summaryList.join()
})

deleteLast.addEventListener('click', () => {
    summaryList.pop()
    outputSummary.innerText = summaryList.join()
})

createList.addEventListener('click', ()=>{
    outputfinallist.innerText = summaryList.join('\n')
})