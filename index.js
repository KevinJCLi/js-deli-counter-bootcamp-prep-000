var katzDeli = [];

function takeANumber (katzDeliLine, customerName) {
  var linePosition = katzDeliLine.length + 1;
  katzDeliLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${linePosition} in line.`;
}

function nowServing () {
  var servedCustomer;
  if (katzDeli[0] === undefined) {
    servedCustomer = "There is nobody waiting to be served!"
  } else {
   servedCustomer = katzDeli[0];
  }
  katzDeli.shift();
  return servedCustomer;
}

function currentLine () {
  if (katzDeli[0] === undefined) {
    return "The line is currently empty";
  } else {
    var theCurrentLine = [];
    for (let i = 0; i < katzDeli.length; i++) {
      theCurrentLine.push(`1. ${katzDeli[i]`)
    }
  }
}