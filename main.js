let question = [
{
    question: "Ozbekistonning birinchi prezidentining ismi nima?",
    choices:["mirziyoyev", "islom karimov", "jaxongir otajonov", "abdulla oripov"],
    correctAnswer: 1
},{
    question: "BMW qayerda ishlab chiqariladi?",
    choices:["Americada", "Uzbekistonda", "Germaniyada", "Afgonistonda"],
    correctAnswer:2
},{
    question: "Yer qanday shaklda?",
    choices:["shar shaklida", "uchburchak shaklda", "behsburchak shaklda", "yumaloq shaklda"],
    correctAnswer:0
},{
    question: "Ozbekistonning poytaxti qayer?",
    choices:["Samarqand", "Toshkent", "Fargona", "Xiva"],
    correctAnswer:2
},
]

let currentQuestion = 0;
let correctAnswer = 0;
let quizOver = false;
$(document).ready(function(){
    displayCurrentQuestion();
    $(this).find('.quizMessage').hide();
    $(this).find('.next-button').on('click', function(){
        if(!quizOver){
            value = $('input[type="radio"]:checked').val();
        }
    })
})