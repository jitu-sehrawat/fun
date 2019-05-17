async function randomNumber (stringLength, number) {
  let text = '';
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  if (number) {
    possible = `123456789123456789123456789123456789123456789123456789`;
  }

  for (var i = 0; i < stringLength; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  
  console.log(`text.length: ${text.length}`);
  console.log(`stringLength: ${stringLength}`);
  console.log(`parseInt(stringLength): ${parseInt(stringLength)}`);

  if (text.length !== parseInt(stringLength)) {
    randomNumber(stringLength, number);
  } else {
    return text;
  }
};

async function abc() {
  let data = await randomNumber(4, true);
  console.log(`data= ${data}`);
}

abc();
