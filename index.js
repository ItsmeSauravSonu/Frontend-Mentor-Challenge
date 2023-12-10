function calculatePercentage(percentage) {
    const input = document.getElementById("input1");
    let res = input.value;
    
    // Check if the input is a valid number
    if (isNaN(res)) {
        console.error("Invalid input. Please enter a number.");
        return;
    }

    res = res * (percentage / 100);
    TipAmount = parseFloat(res);
    console.log(res);
}
var numberOfPerson = document.getElementById('numberInput');
var TipAmount = '';

  function convertToInput() {
    // Change button to input box on hover
    document.getElementById('btnToggle').style.display = 'none';
    document.getElementById('inputToggle').style.display = 'inline-block';
    document.getElementById('inputToggle').focus();
  }

  function convertToButton() {
    // Change input box to button on mouseout
    document.getElementById('btnToggle').style.display = 'inline-block';
    document.getElementById('inputToggle').style.display = 'none';
     executeCustomCalculation(); 
  }

  document.getElementById('numberInput').addEventListener('input', function () {
    var inputValue = this.value.trim();
    var errorMessage = document.querySelector('.error-message');
    var inputElement = this;
    if (inputValue === '0') {
      errorMessage.style.display = 'block';
      inputElement.classList.add('error-border');
    } else {
      errorMessage.style.display = 'none';
      inputElement.classList.remove('error-border');
    }
  });
  var hasInputValue = false;
  var prevInputValue = '';

  function executeCustomCalculation() {
    var inputToggle = document.getElementById('inputToggle');
    var inputValue = inputToggle.value.trim();

    if (inputValue !== '' && inputValue !== prevInputValue) {
      prevInputValue = inputValue;
      hasInputValue = true;
      calculatePercentage(parseFloat(inputValue));
    }
  }

  




