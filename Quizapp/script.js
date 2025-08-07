const questions = [
    {
        question : "which is the frontend programming language?";
        answer : [
            {text: "PhP", correct:false},
            {text: "REACT", correct:true},
            {text: "NodeJS", correct:false},
            {text: "C++", correct:false}

        ]
    },
    {
        question : "which is the backend programming language?";
        answer : [
            {text: "PhP", correct:false},
            {text: "REACT", correct:false},
            {text: "NodeJS", correct:true},
            {text: "Angular", correct:false}

        ]
    }
]

const questionElement = document.getElementById("question");
const answerbtn = document.getElementById("answer-buttons");

