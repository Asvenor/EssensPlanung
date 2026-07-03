const getGemüse = document.getElementById('Gemüse');
const getKohlenhydrate = document.getElementById('Kohlenhydrate');
const getSnacks = document.getElementById('Snacks');
const getMilchProteine = document.getElementById('Milch-Proteine');
const getTiefkühlsachen = document.getElementById('Tiefkühlsachen');

const addItem = document.getElementById('addItem');

const outputSummary = document.getElementById('outputSummary')


addItem.addEventListener('click', ()=>{
    const gemüse = getGemüse.value

    outputSummary.innerText = gemüse
});