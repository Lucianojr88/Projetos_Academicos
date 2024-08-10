// document.getElementById("showNameButton").addEventListener("click", function() {
//   var messageElement = document.getElementById("message");
//   var nameInJapanese = "Sugawara Tomorii Nuhabu";
//   messageElement.innerHTML = `O seu nome em japonês é: <strong>"${nameInJapanese}"</strong>`;
// });

document.getElementById("showNameButton").addEventListener("click", function() {
  var messageElement = document.getElementById("message");
  var messageBox = document.getElementById("messageBox");
  var nameInJapanese = "Tingua NeyhHotaro";
  messageElement.innerHTML = `O seu nome em japonês é: <strong>"${nameInJapanese}"</strong>`;
  messageBox.style.display = 'block';
});
