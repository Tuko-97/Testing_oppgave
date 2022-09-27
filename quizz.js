import questions from './questions.json' assert {type: "json"};

export const testQuizz = (guess, quizzNumber) => {
    const myQuestions = questions.questions[quizzNumber];
    const myAnswers = myQuestions.myAnswers;
    let message = "Sorry, you were wrong! Please try again";

    myAnswers.map((myAnswer) => {
        if (myAnswer.myAnswer.toLowerCase() === guess.toLowerCase()) {
            console.log(myAnswer.correct);
            message = "You are right!";
        } else {
            message = "Sorry, you were wrong! Please try again";
        }
    });
    return(
        message
    );
}