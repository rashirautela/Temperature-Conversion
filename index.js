//Temperature Conversion

const input = document.getElementById("inputbox");
const toCel = document.getElementById("toCelsius");
const toFahren = document.getElementById("toFahren");
const result = document.getElementById("result");
let temp;

function conversion() {
    if (toCel.checked) {
        //result.textContent = "to Celsius";
        temp = Number(input.value);
        temp = ((temp - 32) * 5) / 9;
        result.textContent = temp.toFixed(2) + "ºC";
    } else if (toFahren.checked) {
        temp = Number(input.value);
        temp = (temp * 9) / 5 + 32;
        result.textContent = temp.toFixed(2) + " ºF";
    } else {
        result.textContent = "Please select conversion type";
    }
}
