let inputOne = document.querySelector('.oneInput');
let inputtwo = document.querySelector('.twoInput');
let inputthree = document.querySelector('.threeInput');
let error = document.querySelector('.err');
let p_no = document.querySelector('.player_no');
let p1 = document.querySelector('.player_one');
let p2 = document.querySelector('.player_two');
let p3 = document.querySelector('.player_three');
let winner = document.querySelector('.winner');
let winner_player = document.querySelector('.win_name');
let box = document.querySelector('.main_box');
let chance = document.querySelector('.chance');
let chance2 = document.querySelector('.chance2');
let chanceNo = 0;

// ------player one part
const handleSubmit = () => {
    if (!inputOne.value) {
        error.innerHTML = "Pleaser enter a number";
    } else if (inputOne.value > 10 || inputOne.value < 0) {
        inputOne.value = '';
        error.innerHTML = "Please enter a number below 10 and above 0";
    } else {
        error.innerHTML = '';
        p_no.innerHTML = 'Player 2';
        p1.style = 'display:none';
        p2.style = 'display:block';

   }
}
const handlePlayer2 = () => {
    if (!inputtwo.value) {
        error.innerHTML = 'Please enter a value';
    } else if (inputtwo.value > 10 || inputtwo.value < 0) {
        inputtwo.value = '';
        error.innerHTML = "Please enter a number below 10 and above 0";
    } else if (inputOne.value == inputtwo.value) {
        error.innerHTML = '';
        p_no.style = 'display:none';
        box.style = 'display:none';
        winner_player.innerHTML = 'Player 2 win';
        winner.style = 'display:block';
    } else {
            error.innerHTML = '';
            chanceNo++;
            chance.innerHTML = chanceNo;
            inputtwo.value='';
        if (chanceNo == 5) {
                
            error.innerHTML = '';
            p_no.innerHTML = 'Player 3';
            p2.style = 'display:none';
            p3.style = 'display:block';
            chanceNo = 0;
        }
    }
}
const handlePlayer3 = () => {
    if (!inputthree.value) {
        error.innerHTML = 'Please enter a value';
    } else if (inputthree.value > 10 || inputthree.value < 0) {
        inputthree.value = '';
        error.innerHTML = "Please enter a number below 10 and above 0";
    } else if (inputOne.value == inputthree.value) {
        error.innerHTML = '';
        p_no.style = 'display:none';
        box.style = 'display:none';
        winner_player.innerHTML = 'Player 3 win';
        winner.style = 'display:block';

    }
    else {
        error.innerHTML = '';
        chanceNo++;
        chance2.innerHTML = chanceNo;
        inputthree.value = '';
        if (chanceNo == 5) {

            error.innerHTML = '';
            p_no.style = 'display:none';
            box.style = 'display:none';
            winner_player.innerHTML = 'Player 1 win';
            winner.style = 'display:block';
        }


        
    }
    
}