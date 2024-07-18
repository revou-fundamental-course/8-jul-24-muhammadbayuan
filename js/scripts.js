// ini JavaScripts

function updateResult() {
    let weightValue = document.getElementById('input-berat-badan').value;
    document.getElementById('bmi-result').innerHTML = weightValue;
    console.log (parseInt(weightValue));
}