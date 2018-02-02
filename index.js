var katzDeli = [];

function takeANumber (katzDeliLine, customerName) {
  var linePosition = katzDeliLine.length + 1;
  katzDeli[linePosition] = customerName;
  return `Welcome, ${customerName}. You are number ${linePosition} in line.`;
}
