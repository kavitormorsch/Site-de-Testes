const homeButton = document.querySelector(".homeButton");
const returnButton = document.querySelector(".returnButton");
const advanceButton = document.querySelector(".advanceButton");

let currentQuestion = 1;

const questionTable = [
    {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    answer1: 'Carpet.',
    answer2: 'Bucket.',
    answer3: 'Pencil.',
    answer4: 'Stapler.',
    answer5: 'Apple.'},
    {text: `"Hello, World!" em português seria o quê?`,
    answer1: 'Olá, Mundo!',
    answer2: 'Saudações, Todos!',
    answer3: 'Fala aí, Mundo!',
    answer4: 'Bom dia, Galera!',
    answer5: 'Oi!',
    get rightAnswer(){
        return this.answer1;
    },},
    {text: 'Como está?',
    answer1: 'Bem.',
    answer2: 'Estou legal.',
    answer3: 'Indiferente.',
    answer4: 'Ruim.',
    answer5: 'Muito mal.'},
    {text: 'O clima do Rio é qual?',
    answer1: 'Tropical',
    answer2: 'Sub-Tropical.',
    answer3: 'Equatorial.',
    answer4: 'Temperado.',
    answer5: 'Semi-árido.',
    get rightAnswer(){
        return this.answer1;
    },},
    {text: 'Qual dessas é uma marca de carro?',
    answer1: `Wendy's.`,
    answer2: 'Coca-Cola.',
    answer3: 'Porsche.',
    answer4: 'Valve',
    answer5: 'FromSoftware',
    get rightAnswer(){
        return this.answer3;
    },},
];

let chosenQuestions = [];

console.log(questionTable[1].rightAnswer);

homeButton.addEventListener('click', function(){
    window.location.href = "objectivePage.html";
});
if(currentQuestion === 1){
    returnButton.style.display = "none";
};

returnButton.addEventListener('click', function(){
    console.log('apertado');
    currentQuestion -= 1;
    if(currentQuestion === 1){
        returnButton.style.display = "none";
    };
    displayAnswers();
    perguntaTit.innerHTML = `Pergunta ${currentQuestion}`;
});

advanceButton.addEventListener('click', function(){
    if (currentQuestion < 10){
    currentQuestion+=1;
    }
    console.log(currentQuestion);
    console.log(returnButton.style.display);
    if(currentQuestion > 1) {
        returnButton.style.display = "inline-block";
    };
    displayAnswers();
    perguntaTit.innerHTML = `Pergunta ${currentQuestion}`;
});


console.log(returnButton.style.display);

function newQuestion(table){
    let funcOnlyTable = [...table];
    const max = funcOnlyTable.length;
    for(let i=0; i< max; i++){
        let randNumber = Math.floor(Math.random() * ((funcOnlyTable.length - 1) - 0 + 1) + 0);
        chosenQuestions.push(funcOnlyTable[randNumber]);
        funcOnlyTable.splice(randNumber,1);
        console.log(funcOnlyTable);
    }
   
    
};
newQuestion(questionTable);
console.log(chosenQuestions);       
function displayAnswers(){
    switch (currentQuestion){
        case 1:
            perguntaTexto.innerHTML = chosenQuestions[0].text;
            break;
        case 2:
            perguntaTexto.innerHTML = chosenQuestions[1].text;
            break;
        case 3:
            perguntaTexto.innerHTML = chosenQuestions[2].text;
            break;
        case 4:
            perguntaTexto.innerHTML = chosenQuestions[3].text;
            break;
        case 5:
            perguntaTexto.innerHTML = chosenQuestions[4].text;
            break;
        }
};
displayAnswers();