// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Coding Knowledge!!",
        "main":    "<p>Answer the questions and complete the code.</p>",
        "results": "<h5></h5><p></p>",
        "level1":  "Top Coder",
        "level2":  "Advanced Coder ",
        "level3":  "Coder Contender",
        "level4":  "Coder Newbie",
        "level5":  "Visit our learn section to increase your coding skills" // no comma here
    },
    "questions": [
        {
            "q": "What comes first?",
            "a": [
                {"option": "Function",      "correct": false},
                {"option": "Value",     "correct": false},
                {"option": "Logic",      "correct": true},
                {"option": "Variable",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Here we use logic to start the code!<img src='/images/lifdoelse.png'></p>",
            "incorrect": "<p><span>That's incorrect, you need use logic first.<img src='/images/lifdoelse.png'></span> </p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What block comes second?",
            "a": [
                {"option":  "Value",               "correct": false},
                {"option":  "Function",   "correct": false},
                {"option":  "Variable",               "correct": false},
                {"option":  "Logic", "correct": true} // no comma here
            ],
            "correct": "<p><span>Nice!</span><img src='/images/tiflessthan.png'></p>",
            "incorrect": "<p><span>That's incorrect,</span> Logic joins our code together. In this case we need the logic 'less than or equal to' block.<img src='/images/tiflessthan.png'></p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What comes next?",
            "a": [
                {"option":  "Function",           "correct": true},
                {"option":  "Value",                  "correct": false},
                {"option":  "Logic",  "correct": false},
                {"option":  "Variable",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius.<img src='/images/tgetvalue.png'></p>",
            "incorrect": "<p><span>Not Quite.</span> You need a Function block. <img src='/images/tgetvalue.png'></p>" // no comma here
        },
        { // Question 4 -- Multiple Choice, Multiple True Answers, Select All
            "q": "Which one of these blocks can we use next?",
            "a": [
                {"option": "A Variable Block",    "correct": true},
                {"option": "A Function Block",     "correct": false},
                {"option": "A Value Block",      "correct": false},
                {"option": "A Logic Block",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> We need the temperture block, which is a Variable block.<img src='/images/ttempsensor.png'></p>",
            "incorrect": "<p><span>Sorry.</span> We need the temperture block, which is a Variable.<img src='/images/ttempsensor.png'></p>" // no comma here
        },
        { // Question 5
            "q": "In order to measure the temperature we need a _____block.",
            "a": [
                 {"option": "Variable",    "correct": false},
                {"option": "Function",     "correct": false},
                {"option": "Value",      "correct": true},
                {"option": "Logic",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You need a value block to take the temperture.<img src='/images/tvalue.png'></p>",
            "incorrect": "<p><span>That's not correct.</span>You need a 'value' block to take the temperture.<img src='/images/tvalue.png'></p>" // no comma here
        }, // no comma here
{ // Question 5
            "q": "Next, we have to code the lights different colors. Do we need a Make block or a Color block? ",
            "a": [
                {"option": "Make",    "correct": true},
                {"option": "Color",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> Before you add the variable 'color', you need to add the function 'make' block. <img src='/images/tmake.png'></p>",
            "incorrect": "<p><span>That's not correct.</span> Before you add the variable 'color', you need to add the function 'make' block.<img src='/images/tmake.png'></p>" // no comma here
        }, // no comma here
{ // Question 5
            "q": "Which one of these blocks can we use next? Select ALL that apply.",
            "a": [
                {"option": "Function Block",    "correct": false},
                {"option": "Orange Color Block",     "correct": true},
                {"option": "Value Block",      "correct": false},
                {"option": "Pink Color Block",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> It doesn't matter which color block we use as long as we use color as our variable block.<img src='/images/tcolor.png'></p>",
            "incorrect": "<p><span>Sorry.</span> It doesn't matter which color block we use as long as we use color as our variable block.<img src='/images/tcolor.png'></p>" // no comma here
        },
        { // Question 4 -- Multiple Choice, Multiple True Answers, Select All
            "q": "Which Function block can we use next?",
            "a": [
                {"option": "'Make' Block",    "correct": true},
                {"option": "'Get Value of' Block",     "correct": false},
                {"option": "'Stop' Block",      "correct": false},
                {"option": "'Pause' Block",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> We can use a Make block here.<img src='/images/tmake2.png'></p>",
            "incorrect": "<p><span>Sorry.</span> We can only use a Make block here.<img src='/images/tmake2.png'></p>" // no comma here
        }, // no comma here
         { // Question 4 -- Multiple Choice, Multiple True Answers, Select All
            "q": "Which one of these blocks can we use next?",
            "a": [
                {"option": "Function",    "correct": false},
                {"option": "Variable",     "correct": true},
                {"option": "Value",      "correct": false},
                {"option": "Logic",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> <img src='/images/tcolor2.png'></p>",
            "incorrect": "<p><span>Sorry.</span> We need to use a 'color' variable block.<img src='/images/tcolor2.png'></p>" // no comma here
        } // no comma here

    ]
};
