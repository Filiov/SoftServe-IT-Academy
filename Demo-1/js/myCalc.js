'use strict';

const sprHundredMan = 9.58,
      sprHundredWoman = 10.49,
      sprTwoHundredMan = 19.19,
      sprTwoHundredWoman = 21.34,
      sprFourHundredMan = 43.03,
      sprFourHundredWoman = 47.60,
      longJpMan = 8.95,
      longJpWoman = 7.52,
      highJpMan = 2.45,
      highJpWoman = 2.09;

document.getElementById('button-calc').addEventListener('click', function (e) {
  let myResult = document.getElementById('result').value;
  e.preventDefault();

  if (document.getElementById('male').checked && document.getElementById('sprint').value == '100') {
    let score = sprHundredMan / myResult * 100
    document.getElementById('perf').value = score.toFixed(2);
  } else if (document.getElementById('male').checked && document.getElementById('sprint').value == '200') {
    let score = sprTwoHundredMan / myResult * 100
    document.getElementById('perf').value = score.toFixed(2);
  } else if (document.getElementById('male').checked && document.getElementById('sprint').value == '400') {
    let score = sprFourHundredMan / myResult * 100
    document.getElementById('perf').value = score.toFixed(2);
  } else if (document.getElementById('female').checked && document.getElementById('sprint').value == '100') {
    let score = sprHundredWoman / myResult * 100
    document.getElementById('perf').value = score.toFixed(2);
  } else if (document.getElementById('female').checked && document.getElementById('sprint').value == '200') {
    let score = sprTwoHundredWoman / myResult * 100
    document.getElementById('perf').value = score.toFixed(2);
  } else if (document.getElementById('female').checked && document.getElementById('sprint').value == '400') {
    let score = sprFourHundredWoman / myResult * 100
    document.getElementById('perf').value = score.toFixed(2);
  } else if (document.getElementById('male').checked && document.getElementById('jump').value == 'Long Jump') {
    let score = myResult / longJpMan * 100
    document.getElementById('perf').value = score.toFixed(2);
  } else if (document.getElementById('female').checked && document.getElementById('jump').value == 'Long Jump') {
    let score = myResult / longJpWoman * 100
    document.getElementById('perf').value = score.toFixed(2);
  } else if (document.getElementById('male').checked && document.getElementById('jump').value == 'High Jump') {
    let score = myResult / highJpMan * 100
    document.getElementById('perf').value = score.toFixed(2);
  } else if (document.getElementById('female').checked && document.getElementById('jump').value == 'High Jump') {
    let score = myResult / highJpWoman * 100
    document.getElementById('perf').value = score.toFixed(2);
  }

});
