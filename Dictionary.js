dictionaryArray = new Array();

const getInputValue = () => {
  // Selecting the input element and get its value
  let inputVal = document.getElementById("myInput").value;
  dictionaryArray.push(inputVal);
};

function getInputValueSearched() {
  // Selecting the input element and get its value
  let inputVal = document.getElementById("myWordSearch").value;

  if (dictionaryArray.includes(inputVal)) {
    alert("The searched word is in the dictionary");
  } else {
    alert("The searched word is NOT  in the dictionary");
  }
}
