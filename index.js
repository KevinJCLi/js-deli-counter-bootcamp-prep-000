var katzDeli = [];

function takeANumber (katzDeliLine, customerName) {
  var linePosition = katzDeliLine.length + 1;
  katzDeliLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${linePosition} in line.`;
}

function nowServing () {
  var servedCustomer = katzDeli[0];
  if ()
  katzDeli.shift();
  return servedCustomer;
}