"use strict";

//Task 1
document.getElementById("first_button").addEventListener("click", function(){
    let user_word = document.getElementById("first_text").value;
    let user_letter = document.getElementById("second_text").value;
    let letter_count = 0;
    let output1 = document.getElementById("para1");
    
    for (let i = 0; i < user_word.length; i++){
        if (user_word[i].toLowerCase() === user_letter.toLowerCase() ){
            letter_count++;
        };
        output1.innerHTML = "The letter " + user_letter + " appears " + letter_count + " times.";
    };
    document.getElementById("first_text").value = "";
    document.getElementById("second_text").value = "";
});

//Task 2
document.getElementById("second_button").addEventListener("click", function (){
    let number = document.getElementById("third_text").value;
    let pattern = document.getElementById("para2").innerHTML;
    if (number <= 9 && number >=1){
        for (let i = 0; i < number; i++){
            for (number ){

            };
        };
    }
    else{
        alert("please enter number between 1-9")
    };
});