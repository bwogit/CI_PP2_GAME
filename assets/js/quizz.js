//create the list of questions

const rpsQuestions = [
    {
        question: "Where does Rock Paper Scissors originate from?",
        choices:{
            a: "China",
            b: "Belgium",
            c: "Ireland",
            d: "Vatican"
        },
        correctAnswer: "a"
    },
    {
        question: "By what other name is is known?",
        choices:{
           a:"Mirabelle",
            b: "Patton",
            c:"Bush",
            d:"Ro-Sham-Bo"},
    
        correctAnswer: "d"   
    },
    {
        question: "How many Players does it require?",
        choices:{
            a:"1",
            b:"2",
            c:"3",
            d:"more than 5"
        },
        correctAnswer: "b" 
    },
    {
        question: "when was the game invented?",
        choices:{
            a:"1913",
            b:"1789",
            c:"2001",
            d:"260 BCE"
        },
        correctAnswer: "d" 
    },
    {
        question: "What is it called in french?",
        choices:{
            a:"un, deux, trois",
            b:"s'il te plait",
            c:"pret a porter",
            d:"chi fou mi"
        },
        correctAnswer: "d" 
    },
    {
        question: "What is it called in Spanish?",
        choices:{
            a:"piedra, papel, tijeras",
            b:"Corto de luces",
            c:"Mata el gusanillo",
            d:"uno, dos, tres"
        },
        correctAnswer: "a" 
    },
    {
        question: "During which dynasty was the game created?",
        choices:{
            a:"han",
            b:"ming",
            c:"satay",
            d:"feng shui"
        },
        correctAnswer: "a" 
    },
    {
    question: "What is the most common throw?",
        choices:{
            a:"rock",
            b:"paper",
            c:"scissors",
            d:"Impossible to answer"
        },
        correctAnswer: "a" 
    },
    {
        question: "How many scenarios are there for RPS?",
            choices:{
                a:"10 million",
                b:"9",
                c:"3",
                d:"27"
            },
            correctAnswer: "d" 
    },
    {
        question: "Which country plays RPS the most?",
            choices:{
                a:"Afganistan",
                b:"Japan",
                c:"Hinduistan",
                d:"Turkmenistan"
            },
            correctAnswer: "b" 
    },
    {
        question: "Which country forbids RPS?",
            choices:{
                a:"Lituania",
                b:"Finland",
                c:"New Zeland",
                d:"none of the above"
            },
            correctAnswer: "d" 
    },
    {
        question: "Who is the world best RPS player?",
            choices:{
                a:"Michael Jordan",
                b:"Audrey Kelly",
                c:"Ken Watson",
                d:"Simon Doyle"
            },
            correctAnswer: "c" 
    },
    {
        question: "where is RPS championship held?",
            choices:{
                a:"Mozambique",
                b:"Italy",
                c:"Canada",
                d:"Turkey"
            },
            correctAnswer: "c" 
    }
];
/**
 * shuffleQuestions randomly shuffles the questions shuffledQuestions
 */
//declaring variable shuffledQuestions
let shuffledQuestions;

function shuffleQuestions(){
    shuffledQuestions = rpsQuestions.sort(() => Math.random() - 0.5);
  }
  //display quizz on page
function runQuizz() {
    // store the HTML output in variable htmlOutput
    let htmlOutput =[];
    
    //loop through each index (question) and the question number in the array. 
    
    // rpsQuestions.forEach (
    //     (index,questionNumber)=> {
        
    //loop through the first 4 ietms in the array
    for (let i = 0; i < 4; i++) {
        let index = rpsQuestions[i];
        let questionNumber = i;

    //storing all the answers into an array called choices
    let choices =[];
    
    // for each answer in the array build a button
    for(letter in index.choices){
    
        // ...add an HTML radio button
        choices.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${index.choices[letter]}
          </label>`
        );
      }    
    // Join  questions and  answers to the output

    htmlOutput.push (
    `<div class="question"> ${index.question} </div>
    <div class="answers"> ${choices.join('')} </div>`
    );
    }
// );
quizzArea.innerHTML = htmlOutput.join('');
}


function checkResults() {

// harvest all possible choices from the quizz
let choicesContainers = quizzArea.querySelectorAll(".answers");

//count corect answers
let ansCorrect = 0;

//loop trhough each question and check right answrer

// rpsQuestions.forEach( (index, questionNumber) => {
    for (let i = 0; i < 4; i++) {
        let index = rpsQuestions[i];
        let questionNumber = i; 
// find selected answer
const choicesContainer = choicesContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
// preparing for incomplete user input
const userAnswer = (choicesContainer.querySelector(selector) || {}).value;

//evaluate the answers
//is the answer is correct
if(userAnswer === index.correctAnswer){
    // increment correct answers
    ansCorrect++;
    //display green font
    choicesContainers[questionNumber].style.color ="green"
}
else {choicesContainers[questionNumber].style.color ="red"} 
    
}
// )
// Display totalnumber of  correct answers
// resultArea.innerHTML = `${ansCorrect} out of ${rpsQuestions.length}`;
resultArea.innerHTML = `${ansCorrect} out of 4`; 
};


// select quizz element from HTML document and save them in variables
let quizzArea = document.getElementById("quizz");
let resultArea = document.getElementById("results");
let submitButton = document.getElementById("submit");


shuffleQuestions();
runQuizz();

// dispaly results when click submit
submitButton.addEventListener("click", checkResults);
