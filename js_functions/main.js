function messageAlert() {
  alert('alert from the messageAlert function.');
}

function add(number1, number2){
  var total = number1 + number2;

  console.log(number1 + ' + ' + number2 + ' = ' + total);
}

function addWithReturn(number1, number2){
    var total = number1 + number2;

    return total;
}

var addWithReturnResult = addWithReturn(15, 20);
