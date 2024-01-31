const homeButton = document.querySelector(".homeButton");
const returnButton = document.querySelector(".returnButton");
const advanceButton = document.querySelector(".advanceButton");
const discursiveInput = document.querySelector(".discursiveInput");

let currentQuestion = 1;
let questionIndex = currentQuestion - 1;

const questionTable = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    `"Hello, World!" em português seria o quê?`,
    'Como está?',
    'O clima do Rio é qual?',
    'Qual dessas é uma marca de carro?'
];


let chosenQuestions = [];

let savedAnswers = [];


homeButton.addEventListener('click', function(){
    window.location.href = "discursivePage.html";
});
if(currentQuestion === 1){
    returnButton.style.display = "none";
};


returnButton.addEventListener('click', function(){
    saveSelection();
    currentQuestion -= 1;
    if(currentQuestion === 1){
        returnButton.style.display = "none";
    };
    displayAnswers();
    if(savedAnswers.length > 0){
        loadSelection();
    };
    perguntaTit.innerHTML = `Pergunta ${currentQuestion}`;

});

advanceButton.addEventListener('click', function(){
    if (currentQuestion < 10){
        saveSelection();
        currentQuestion+=1;
        }
    if(currentQuestion > 1) {
        returnButton.style.display = "inline-block";
    };
    displayAnswers();
    if(savedAnswers.length > 0){
        loadSelection();
    };
    perguntaTit.innerHTML = `Pergunta ${currentQuestion}`;

});

function newQuestion(table){
    let funcOnlyTable = [...table];
    const max = funcOnlyTable.length;
    for(let i=0; i< max; i++){
        let randNumber = Math.floor(Math.random() * ((funcOnlyTable.length - 1) - 0 + 1) + 0);
        chosenQuestions.push(funcOnlyTable[randNumber]);
        funcOnlyTable.splice(randNumber,1);
        console.log(funcOnlyTable);
    }
    console.log(chosenQuestions);
};

newQuestion(questionTable);
function displayAnswers(){
    switch (currentQuestion){
        case 1:
            perguntaTexto.innerHTML = chosenQuestions[0];
            manageAnswers(chosenQuestions);
            break;
        case 2:
            perguntaTexto.innerHTML = chosenQuestions[1];
            manageAnswers(chosenQuestions);
            break;
        case 3:
            perguntaTexto.innerHTML = chosenQuestions[2];
            manageAnswers(chosenQuestions);
            break;
        case 4:
            perguntaTexto.innerHTML = chosenQuestions[3];
            manageAnswers(chosenQuestions);
            break;
        case 5:
            perguntaTexto.innerHTML = chosenQuestions[4];
            manageAnswers(chosenQuestions);
            break;
        }
};

function manageAnswers(table){
    if(document.getElementById('ansList') === null){
    const ansList = document.createElement("span");
    ansList.setAttribute("id", "ansList");
    const ansInput = document.createElement("input");
    const ansSpan = document.createElement("span");
    ansInput.setAttribute('type', 'Text');
    ansInput.setAttribute('name', 'answerInput');
    ansInput.setAttribute('class', 'ansInput');
    ansSpan.setAttribute('class', 'ansSpan');
    ansSpan.appendChild(ansInput);
    ansList.appendChild(ansSpan);
    discursiveInput.appendChild(ansList);
    }
    else{

        
        
        for(let i=0; i< table.length; i++){
            const ansText = document.getElementsByClassName('ansText');
            const ansInput = document.querySelector('.ansInput');

            console.log(ansInput.value);
            if(ansInput.value){
                ansInput.value = '';
            }
        }

    }
}

function saveSelection(){
    const ansInput = document.querySelector('.ansInput');
    const trimmed = ansInput.value.trim().length;
    questionIndex = currentQuestion - 1;
        if(ansInput.value && trimmed !== 0){
            if(savedAnswers[questionIndex] === undefined){
            savedAnswers.push(ansInput.value);
            }else{
                savedAnswers[questionIndex] = ansInput.value; 
                console.log('hello')
            }

            console.log(savedAnswers);
        }
        if(savedAnswers[questionIndex] === undefined && savedAnswers[questionIndex] !== 'none' || trimmed === 0){
        savedAnswers.push('none');

        }
        console.log(savedAnswers);
        console.log(trimmed);
    };

function loadSelection(){
    
    questionIndex = currentQuestion - 1;
    console.log(questionIndex);
    const ansInput = document.querySelector('.ansInput');
    if(savedAnswers[questionIndex] !== 'none' && savedAnswers[questionIndex]){
        console.log(savedAnswers[questionIndex]);
            console.log('ello');
            ansInput.value = savedAnswers[questionIndex];
    }
};

displayAnswers();