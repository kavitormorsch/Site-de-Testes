const homeButton = document.querySelector(".homeButton");
const testButton = document.querySelector(".testButton");



homeButton.addEventListener('click', function(){
    window.location.href = "discursivePage.html";
});

testButton.addEventListener('click', function(){
    window.location.href = 'discursiveTestPage.html';
});
