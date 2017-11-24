"use strict";

const sprHundredMan = 9.58,
      sprHundredWoman = 10.49,
      sprTwoHundredMan = 19.19,
      sprTwoHundredWoman = 21.34,
      sprFourHundredMan = 43.03,
      sprFourHundredWoman = 47.60,
      longJpMan = 8.95,
      longJpWoman = 7.52,
      highJpMan = 2.45,
      highJpWoman = 2.09,
      hundredPercent = 100;

$("#button-calc").click(function (e) {
  e.preventDefault();

  let isMale = $('#male').is(':checked');
  let isFemale = $('#female').is(':checked');
  let score = 0;
  let sprint = $("#sprint").val();
  let jump = $("#jump").val();

  if (isMale) {
    score = sprint !== 'Options' ? getSprintScore(sprint, sprHundredMan, sprTwoHundredMan, sprFourHundredMan) :
      getJumpScore(jump, longJpMan, highJpMan);
  } else if (isFemale) {
    score = (sprint) ? getSprintScore(sprint, sprHundredWoman, sprTwoHundredWoman, sprFourHundredWoman) :
      getJumpScore(jump, longJpWoman, highJpWoman);
  } else
    score = 0;
  $("#perf").val(score.toFixed(2));
});

const getSprintScore = function (sprint, sprHundred, sprTwoHundred, sprFourHundred, longJp, highJp) {
  let myResult = $("#result").val();
  let scoreSprint = 0;
  switch (sprint) {
    case '100':
      scoreSprint = sprHundred / myResult * hundredPercent;
      break;
    case '200':
      scoreSprint = sprTwoHundred / myResult * hundredPercent;
      break;
    case '400':
      scoreSprint = sprFourHundred / myResult * hundredPercent;
      break;
    default:
      scoreSprint = 0;
  }
  return scoreSprint;
};

const getJumpScore = function (jump, longJp, highJp) {
  let myResult = $("#result").val();
  let score = 0;
  return (jump === 'Long Jump') ? (score = myResult / longJpMan * hundredPercent) : score = myResult / highJpMan * hundredPercent;
};