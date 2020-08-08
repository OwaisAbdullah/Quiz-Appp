var questionsArray = [
    {
        question : "which of the following tag is used to mark a begining of paragraph ?",
        correctAnswer : "p",
        options : ["td","br","tr","p"]
    },
    {
        question : "The year in which HTML was first proposed ?",
        correctAnswer : "1990",
        options : ["2000","1990","1980","2005"]
    },
    {
        question : "Who is Known as the father of World Wide Web (WWW)?",
        correctAnswer : "Tim Berners-Lee",
        options : ["Tim Berners-Lee","Tim Thompson","Robert Cailliau","Charles Darwin"]
    },
    {
        question : "HTML web pages can be read and rendered by ?",
        correctAnswer : "Web Browser",
        options : ["Compiler","Web Browser","Server","Interpreter"]
    },
    {
        question : "HTML tags are surrounded by which type of brackets.?",
        correctAnswer : "Angle",
        options : ["Curly","Squart","Angle","Round"]
    }
];


var count = 1;
var questionCount = 2;
var answerCount = 0;
var score = 0;
var question = document.getElementById("question");
var optionLabel = document.getElementsByClassName("optionLabel");
var nextBtn = document.getElementById("nextBtn");
var sectionDiv = document.getElementById("sectionDiv");
var questionHeading = document.getElementById("questionHeading");
var q_a1 = document.getElementById("q_a1");
var q_a2 = document.getElementById("q_a2");
var q_a3 = document.getElementById("q_a3");
var q_a4 = document.getElementById("q_a4");
var optionName = document.getElementsByName("option");


onload = function(){
    questionHeading.innerHTML = "Question # : 1"
    question.innerHTML = questionsArray[0].question;
    for(let i=0; i<optionLabel.length; i++){
        optionLabel[i].innerHTML = " "+questionsArray[0].options[i];
        optionLabel[i].value = optionLabel[i].innerHTML;
    }
}

function next(){
    
    for(let i=0; i<optionName.length; i++){
        if(optionName[i].checked){
            
            // var num = Number(optionName[i].nextSibling.innerHTML);
            var answer = optionName[i].nextSibling.innerHTML;
            var ansLength = answer.length;
            answer = answer.slice(1,ansLength);
            var correctAnswer = questionsArray[answerCount].correctAnswer;
            if(answer === correctAnswer){
                score += 2;
            }
            
            
            question.innerHTML = questionsArray[count].question;
            questionHeading.innerHTML = "Question # : "+questionCount;
            for(let i=0; i<optionLabel.length; i++){
                optionLabel[i].innerHTML = " "+questionsArray[count].options[i];
            
            }      
            count++;
            answerCount++;
            questionCount++;
        }
    }
    
        
    if(count === questionsArray.length){
        var resultBtn = document.createElement("button");
        var resultBtnText = document.createTextNode("Result");
        resultBtn.appendChild(resultBtnText);
        resultBtn.setAttribute("class","resultBtn");
        resultBtn.setAttribute("onclick","result()");
        sectionDiv.appendChild(resultBtn);
        nextBtn.disabled = true;
        nextBtn.style.opacity = "0.5";
        nextBtn.style.cursor = "default";        
    }
}

function result(){
    for(let i=0; i<optionName.length; i++){
        if(optionName[i].checked){
            // var num = Number(optionName[i].nextSibling.innerHTML);
            var answer = optionName[i].nextSibling.innerHTML;
            var ansLength = answer.length;
            answer = answer.slice(1,ansLength);
            var correctAnswer = questionsArray[answerCount].correctAnswer;
            if(answer === correctAnswer){
                score += 2;
            }
            
            
        }
        
    }
    answerCount++;
    alert("Your Score is "+ score + " out of 10");
}
