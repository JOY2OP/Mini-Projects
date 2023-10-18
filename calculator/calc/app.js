// console.log("this is ok");

// const multi = document.getElementsByClassName('multiply-sign');
// const equalsTo = document.getElementsByClassName('equals-to');
// const screen = document.querySelector('.screen-output')
// screen.innerHTML = "";

// let string = "";

// let buttons= document.querySelectorAll('.grid-item')
// Array.from(buttons).forEach((button) =>{
//     button.addEventListener('click', (e) =>{
//         if(e.target.innerHTML == "="){
//             string= eval(string);
//             screen.innerHTML = string;
//         }
//         else if(e.target.innerHTML == "C"){
//             string = "";
//             screen.innerHTML = string;

//         }
//         else{ 
//             // console.log(e.target)
//             string = string + e.target.innerHTML;
//             document.querySelector('input').value = string;
//               }
//         // console.log(e.target.innerHTML);
//     })
// })


const screen = document.querySelector('.screen-output');
screen.innerHTML = ""; // Initialize screen content as empty

let string = "";

// Create a mapping for emojis to JavaScript operators
const emojiOperators = {
    "➕": "+",
    "➖": "-",
    "✖️": "*",
    "➗": "/"
};

let buttons = document.querySelectorAll('.grid-item');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonContent = e.target.innerHTML;
        // Check if the button content is an emoji operator
        if (buttonContent in emojiOperators) {
            // Map the emoji to its corresponding JavaScript operator
            string += emojiOperators[buttonContent];
        } else if (buttonContent === "=") {
            try {
                // Evaluate the expression using JavaScript eval
                string = eval(string);
                // Set the result back to the screen element
                screen.innerHTML = string;
            } catch (error) {
                // Handle invalid expressions
                screen.innerHTML = "Error";
                string = "";
            }
        } else {
            string += buttonContent;
        }
        // Update the screen with the current input string
        screen.innerHTML = string;
    });
});



