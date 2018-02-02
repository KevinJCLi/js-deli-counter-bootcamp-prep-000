var katzDeli = [];

function takeANumber (katzDeliLine, customerName) {
  var linePosition = katzDeliLine + 1, 
    ordinalIndicator;
  if (lineposition === 1) {
    ordinalIndicator = "st";
  } else if (lineposition === 2) {
    ordinalIndicator = "nd";
  } else {
    ordinalIndicator = "th"
  }
  return `You are the ${linePosition}${OrdinalIndicator} person in line`;
}
