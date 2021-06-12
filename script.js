var answers = [];
function recordAnswer(questionNumber, answerNumber, nextQuestion) {
  answers[questionNumber] = answerNumber;
  if(nextQuestion > 0) {
    jQuery(".picture .row").removeClass("active");
    jQuery(".q" + nextQuestion).addClass("active");
  } else {
    /* Result Calculation:
If q1, q2, q4, q8, q9, q6 = yes and q3, q5, q7, q10 = yes/no then result 1. 
If q2, q1, q4 = yes and q3, q6, q5, q7, q10 = yes/no and q8, q9 = yes/no then result 2. 
Otherwise show the result 3. */
    q1 = answers[1];
    q2 = answers[2];
    q3 = answers[3];
    q4 = answers[4];
    q5 = answers[5];
    q6 = answers[6];
    q7 = answers[7];
    q8 = answers[8];
    q9 = answers[9];
    q10 = answers[10];

    if ((q1, q2, q4, q8, q9, q6 == 1) && (q3, q5, q7, q10 == 1 || 2)) {
      jQuery(".picture .row").removeClass("active");
      jQuery(".row.result1").addClass("active");
    }
    if ((q2, q1, q4 == 1) && (q3, q6, q5, q7, q10 == 1 || 2) && (q8, q9)) {
      jQuery(".picture .row").removeClass("active");
      jQuery(".row.result2").addClass("active");
    } 
    else {
      jQuery(".picture .row").removeClass("active");
      jQuery(".row.result3").addClass("active");
    }
  }
}