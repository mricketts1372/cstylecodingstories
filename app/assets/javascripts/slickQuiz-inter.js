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
            "q": "Pick the correct Variable block",
            "a": [
                {"option":  "Color",               "correct": false},
                {"option":  "Button",   "correct": true},
                {"option":  "Temperature",               "correct": false},
                {"option":  "Light", "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span><img src='/images/onoffbutton.png'></p>",
            "incorrect": "<p><span>That's incorrect,</span> Button is the correct answer<img src='/images/onoffbutton.png'></p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What comes next.",
            "a": [
                {"option":  "Function",           "correct": true},
                {"option":  "Value",                  "correct": false},
                {"option":  "Logic",  "correct": false},
                {"option":  "Variable",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius.<img src='/images/onoffmake.png'></p>",
            "incorrect": "<p><span>Not Quite.</span> you need a Function block <img src='/images/onoffmake.png'></p>" // no comma here
        },
        { // Question 4 -- Multiple Choice, Multiple True Answers, Select All
            "q": "Which one of these blocks can we use next? Select ALL that apply.",
            "a": [
                {"option": "Any Variable Block",    "correct": false},
                {"option": "Green Color Block",     "correct": true},
                {"option": "A Value Block",      "correct": false},
                {"option": "Pink Color Block",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> It doesn't matter which color block we use as long as we use color as our variable block.<img src='/images/onoffcodecolor.png'></p>",
            "incorrect": "<p><span>Sorry.</span> It doesn't matter which color block we use as long as we use color as our variable block.<img src='/images/onoffcodecolor.png'></p>" // no comma here
        },
        { // Question 5
            "q": "Do you need another Make block?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span>You can use the make block again but you don't need to.<img src='/images/onoffcode.png'></p>",
            "incorrect": "<p><span>That's not correct.</span> You don't have to use the make block if you already used it once in your code.<img src='/images/onoffcode.png'></p>" // no comma here
        } // no comma here

    ]
};
