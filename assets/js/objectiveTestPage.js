const homeButton = document.querySelector(".homeButton");
const returnButton = document.querySelector(".returnButton");
const advanceButton = document.querySelector(".advanceButton");
const answerButtonList = document.querySelector(".answerButtonList");



let currentQuestion = 1;
let questionIndex = currentQuestion - 1;

const questionTable = [
    {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    answer4: 'Valve.',
    answer5: 'FromSoftware.',
    get rightAnswer(){
        return this.answer3;
    },},
];

let chosenQuestions = [];

let savedAnswers = [];


homeButton.addEventListener('click', function(){
    window.location.href = "objectivePage.html";
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
        console.log('if check')
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
        console.log('if check')
        loadSelection();
    };
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
            manageAnswers(chosenQuestions);
            break;
        case 2:
            perguntaTexto.innerHTML = chosenQuestions[1].text;
            manageAnswers(chosenQuestions);
            break;
        case 3:
            perguntaTexto.innerHTML = chosenQuestions[2].text;
            manageAnswers(chosenQuestions);
            break;
        case 4:
            perguntaTexto.innerHTML = chosenQuestions[3].text;
            manageAnswers(chosenQuestions);
            break;
        case 5:
            perguntaTexto.innerHTML = chosenQuestions[4].text;
            manageAnswers(chosenQuestions);
            break;
        }
};


function manageAnswers(table){
    if(document.getElementById('ansList') === null){
    const ansList = document.createElement("span");
    ansList.setAttribute("id", "ansList");
    for(let i=0; i< table.length; i++){
    const ansBut = document.createElement("input");
    const ansText = document.createElement("label");
    const ansSpan = document.createElement("span");
    ansBut.setAttribute('type', 'radio');
    ansBut.setAttribute('name', 'answerButton');
    ansBut.setAttribute('value', 'answer' + (i+1) );
    ansBut.setAttribute('class', 'ansBut');
    ansText.setAttribute('for', 'answer' +(i+1));
    ansText.setAttribute('class', 'ansText')
    ansSpan.setAttribute('class', 'ansSpan');
    ansText.innerHTML += eval(`table[currentQuestion-1].answer` + (i+1));
    ansSpan.appendChild(ansBut);
    ansSpan.appendChild(ansText);
    ansList.appendChild(ansSpan);
    answerButtonList.appendChild(ansList);
};
    }
    else{

        
        
        for(let i=0; i< table.length; i++){
            const ansText = document.getElementsByClassName('ansText');
            const ansBut = document.getElementsByClassName('ansBut');

            ansBut[i].checked = false;  
            ansText[i].innerHTML = eval(`table[currentQuestion-1].answer` + (i+1));
        }

    }
}

function saveSelection(){
    const ansBut = document.getElementsByClassName('ansBut');
    questionIndex = currentQuestion - 1;
    for(let i=0; i<ansBut.length; i++){
        //console.log(questionIndex);
        if(ansBut[i].checked === true){
            if(savedAnswers[questionIndex] === undefined){
            savedAnswers.push(ansBut[i].value);
            }else{
                savedAnswers[questionIndex] = ansBut[i].value;  
                console.log('hello')
            }

            console.log(savedAnswers);
            break;
        }
        if(i === ansBut.length - 1 && savedAnswers[questionIndex] === undefined && savedAnswers[questionIndex] !== 'none' ){
        savedAnswers.push('none');

        }
        console.log(savedAnswers);
    };
};

function loadSelection(){
    
    questionIndex = currentQuestion - 1;
    console.log(questionIndex);
    const ansBut = document.getElementsByClassName('ansBut');
    for(let i=0; i<ansBut.length; i++){
        console.log(savedAnswers[questionIndex]);
        if(ansBut[i].value === savedAnswers[questionIndex]){
            console.log('ello');
            ansBut[i].checked = true;
            break;
        }
    }
};

displayAnswers();
console.log(document.getElementById('ansList'));