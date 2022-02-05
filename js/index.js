const quiz = [
    {
        "question": "What type of language is Javascript?",
        "answers": {
            "a":"Object-oriented",
            "b":"Object-based",
            "c":"Procedural",
            "d":"None of the above",
            "correct":"a"
        }
    },
    {
        "question": "Which of the following keywords are used to define a varibale in Javascript?",
        "answers": {
            "a":"var",
            "b":"let",
            "c":"Both of the above",
            "d":"None of the above",
            "correct":"c"
        }
    },
    {
        "question": "Which of the following methods is used to access HTML elements using Javascript?",
        "answers": {
            "a":"getElementbyId()",
            "b":"getElementsByClassName()",
            "c":"Both A and B",
            "d":"None of the above",
            "correct":"c"
        }
    },
    {
        "question": "Upon encountering empty statements, what does the Javascript interpreter do?",
        "answers": {
            "a":"Throws an error",
            "b":"Ignores the statement",
            "c":"Gives a warning",
            "d":"None of the above",
            "correct":"b"
        }
    },
    {
        "question": "Which of the following methods can be used to display data in some form using Javascript?",
        "answers": {
            "a":"document.write()",
            "b":"console.log()",
            "c":"window.alert()",
            "d":"All of the above",
            "correct":"d"
        }
    },
    {
        "question": "What keyword is used to check whether a given property is valid or not?",
        "answers": {
            "a":"in",
            "b":"is in",
            "c":"exists",
            "d":"lies",
            "correct":"a"
        }
    },
    {
        "question": "When an operator's value is NULL, the typeof returned by the unary operator is?",
        "answers": {
            "a":"Boolean",
            "b":"Undefined",
            "c":"Object",
            "d":"Integer",
            "correct":"c"
        }
    },
    {
        "question": "What does the 'toLocateString()' method do in JS?",
        "answers": {
            "a":"Returns a localised object representation",
            "b":"Returns a parsed string",
            "c":"Returns a localised string representation of an object",
            "d":"None of the above",
            "correct":"c"
        }
    },
    {
        "question": "Which function is used to serialize an object into a JSON string in Javascript?",
        "answers": {
            "a":"stringify()",
            "b":"parse()",
            "c":"convert()",
            "d":"None of the above",
            "correct":"a"
        }
    },
    {
        "question": "Which of the following is not  Javascript framework?",
        "answers": {
            "a":"Node",
            "b":"Vue",
            "c":"React",
            "d":"Cassandra",
            "correct":"d"
        }
    },
]
let count = 0;
let score = 0;
const quizquestion = document.querySelector(".question");
const opt1 = document.querySelector("#option1");
const opt2 = document.querySelector("#option2");
const opt3 = document.querySelector("#option3");
const opt4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers1 = document.querySelectorAll(".answer")
const showsc = document.querySelector("#showscore");

const loadQuestions = () => {
    const listOfQuestions = quiz[count];
    quizquestion.innerHTML = listOfQuestions.question;
    opt1.innerHTML = listOfQuestions.answers.a;
    opt2.innerHTML = listOfQuestions.answers.b;
    opt3.innerHTML = listOfQuestions.answers.c;
    opt4.innerHTML = listOfQuestions.answers.d;
}
loadQuestions();
const getAnswer = () => {
    let ans;
    answers1.forEach(currentAnswer => {
        if (currentAnswer.checked) {
            ans = currentAnswer.id;
        }
    });
    const corAnswer = {ans1:'a', ans2:'b', ans3:'c', ans4:'d'};
    return corAnswer[ans];
}
submit.addEventListener('click', () => {
    const checkanswer = getAnswer();
    console.log({ checkanswer, correct: quiz[count].answers.correct, score});

    if (checkanswer == quiz[count].answers.correct) {
        score = score + 1;
    };
    count++;
    if (count < quiz.length) {
        loadQuestions();

    } else {
        showSc.innerHTML = `
        <h2> Your Score Is:  ${score}/ ${quiz.length}</h2>
       <button class="Submit" onClick="location.reload()"> Play Again </button>
        `;

        showSc.classList.remove("myscore")
    }

});