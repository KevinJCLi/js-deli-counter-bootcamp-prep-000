var katzDeli = [];

function takeANumber (katzDeliLine, customerName) {
  var linePosition = katzDeliLine + 1, 
    ordinalIndicator;
  if (line position === 1) {
    ordinalIndicator = "st";
  } else if (line position === 2) {
    ordinalIndicator = "nd";
  } else {
    ordinalIndicator = "th"
  }
  return `You are the ${linePosition}${OrdinalIndicator} person in line`;
}
