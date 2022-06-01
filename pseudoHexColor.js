
var hexColorPicker = async function() {

  var pseudo = document.getElementById('inputPseudo').value;

  var hashPseudo = await sha256(pseudo);  // In Hexadecimal representation
  var hexColor = hashPseudo.substring(0,6);
  var hexColor = '#' + hexColor;

  // Replace the text inside the div by the hexadecimal color code:
  document.getElementById('hexColorCode').innerHTML=hexColor;

  // Change color of the hexadecimal color code div:
  document.getElementById('hexColorCode').style.color=hexColor;

  // Change color of the pseudo input text:
  document.getElementById('inputPseudo').style.color=hexColor;

}

document.getElementById('inputPseudo').addEventListener("input", hexColorPicker);
