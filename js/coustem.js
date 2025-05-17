function calculatePrice() {
    const age = parseInt(document.getElementById('ageInput').value);
    const isStudent = document.getElementById('isStudent').checked;
    const regular_price = 800;
    let result = '';
  
    if (isNaN(age)) {
      result = 'Please enter a valid age.';
    } else if (age < 10) {
      result = 'Free';
    } else if (isStudent) {
      let price = (regular_price * 50) / 100;
      result = 'Price: ' + price + ' BDT (50% student discount)';
    } else if (age >= 60) {
      let price = (regular_price * 85) / 100;
      result = 'Price: ' + price + ' BDT (15% senior discount)';
    } else {
      result = 'Price: ' + regular_price + ' BDT';
    }
  
    const outputDiv = document.getElementById('priceOutput');
    outputDiv.innerText = result;
    outputDiv.style.display = 'block';
  }
  