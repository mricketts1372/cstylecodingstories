var quizJSON = {
    "info": {
        "name":    "Answer the questions and complete the code.",
        "main":    "<p></p>",
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
                {"option": "<img src='/images/smallvalues.png'>",      "correct": false},
                {"option": "<img src='/images/smalllogic.png'>",     "correct": true},
                {"option": "<img src='/images/smallfunctions.png'>",      "correct": false},
                {"option": "<img src='/images/smallvariable.png'>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Here we use logic to start the code!<img src='/images/lifdoelse.png'></p>",
            "incorrect": "<p><span>That's incorrect, you need use logic first.<img src='/images/lifdoelse.png'></span> </p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Pick the correct block.",
            "a": [
               {"option": "<img src='/images/smallvalues.png'>",      "correct": false},
                {"option": "<img src='/images/smalllogic.png'>",     "correct": true},
                {"option": "<img src='/images/smallfunctions.png'>",      "correct": false},
                {"option": "<img src='/images/smallvariable.png'>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span><img src='/images/lifequal.png'></p>",
            "incorrect": "<p><span>That's incorrect,</span>Logic joins our code together. In this case we need the logic 'less than or equal to' block.<img src='/images/lifequal.png'></p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What comes next.",
            "a": [
                {"option": "<img src='/images/smallvalues.png'>",      "correct": false},
                {"option": "<img src='/images/smalllogic.png'>",     "correct": false},
                {"option": "<img src='/images/smallfunctions.png'>",      "correct": true},
                {"option": "<img src='/images/smallvariable.png'>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius.<img src='/images/lvalue.png'></p>",
            "incorrect": "<p><span>Not Quite.</span> you need a Function block <img src='/images/lvalue.png'></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Pick the correct block.",
            "a": [
                {"option": "<img src='/images/smallvalues.png'>",      "correct": false},
                {"option": "<img src='/images/smalllogic.png'>",     "correct": false},
                {"option": "<img src='/images/smallfunctions.png'>",      "correct": false},
                {"option": "<img src='/images/smallvariable.png'>",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Nice!</span><img src='/images/llight.png'></p>",
            "incorrect": "<p><span>That's incorrect,</span> Variable is the correct answer<img src='/images/llight.png'></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Pick the correct block.",
            "a": [
               {"option": "<img src='/images/smallvalues.png'>",      "correct": true},
                {"option": "<img src='/images/smalllogic.png'>",     "correct": false},
                {"option": "<img src='/images/smallfunctions.png'>",      "correct": false},
                {"option": "<img src='/images/smallvariable.png'>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span><img src='/images/lvaluehigh.png'></p>",
            "incorrect": "<p><span>That's incorrect,</span> Value is the correct answer<img src='/images/lvaluehigh.png'></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Pick the correct block.",
            "a": [
               {"option": "<img src='/images/smallvalues.png'>",      "correct": false},
                {"option": "<img src='/images/smalllogic.png'>",     "correct": false},
                {"option": "<img src='/images/smallfunctions.png'>",      "correct": true},
                {"option": "<img src='/images/smallvariable.png'>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span><img src='/images/lmake.png'></p>",
            "incorrect": "<p><span>That's incorrect,</span> Here we need a Function block.<img src='/images/lmake.png'></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Pick the correct block.",
            "a": [
                {"option": "<img src='/images/smallvalues.png'>",      "correct": false},
                {"option": "<img src='/images/smalllogic.png'>",     "correct": false},
                {"option": "<img src='/images/smallfunctions.png'>",      "correct": false},
                {"option": "<img src='/images/smallvariable.png'>",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Nice!</span><img src='/images/lcolor.png'></p>",
            "incorrect": "<p><span>That's incorrect,</span> Variable is the correct answer<img src='/images/lcolor.png'></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Pick the correct block.",
            "a": [
               {"option": "<img src='/images/smallvalues.png'>",      "correct": false},
                {"option": "<img src='/images/smalllogic.png'>",     "correct": true},
                {"option": "<img src='/images/smallfunctions.png'>",      "correct": false},
                {"option": "<img src='/images/smallvariable.png'>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span><img src='/images/lequal.png'></p>",
            "incorrect": "<p><span>That's incorrect,</span> Logic is the correct answer<img src='/images/leqaul.png'></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What comes first?",
            "a": [
                {"option": "<img src='/images/smallvalues.png'>",      "correct": false},
                {"option": "<img src='/images/smalllogic.png'>",     "correct": false},
                {"option": "<img src='/images/smallfunctions.png'>",      "correct": true},
                {"option": "<img src='/images/smallvariable.png'>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span><img src='/images/lvalue2.png'></p>",
            "incorrect": "<p><span>That's incorrect,</span> Function is the correct answer.<img src='/images/lvalue2.png'></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Pick the correct block.",
            "a": [
               {"option": "<img src='/images/smallvalues.png'>",      "correct": false},
                {"option": "<img src='/images/smalllogic.png'>",     "correct": false},
                {"option": "<img src='/images/smallfunctions.png'>",      "correct": false},
                {"option": "<img src='/images/smallvariable.png'>",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Nice!</span><img src='/images/llightsensor2.png'></p>",
            "incorrect": "<p><span>That's incorrect,</span> Variable is the correct answer<img src='/images/llightsensor2.png'></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Pick the correct block.",
            "a": [
               {"option": "<img src='/images/smallvalues.png'>",      "correct": true},
                {"option": "<img src='/images/smalllogic.png'>",     "correct": false},
                {"option": "<img src='/images/smallfunctions.png'>",      "correct": false},
                {"option": "<img src='/images/smallvariable.png'>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span><img src='/images/lvaluelow.png'></p>",
            "incorrect": "<p><span>That's incorrect,</span> Value is the correct answer<img src='/images/lvaluelow.png'></p>" // no comma here
        },
        { // Question 4 -- Multiple Choice, Multiple True Answers, Select All
            "q": "Pick the correct block.",
            "a": [
               {"option": "<img src='/images/smallvalues.png'>",      "correct": false},
                {"option": "<img src='/images/smalllogic.png'>",     "correct": false},
                {"option": "<img src='/images/smallfunctions.png'>",      "correct": true},
                {"option": "<img src='/images/smallvariable.png'>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> <img src='/images/lmake2.png'></p>",
            "incorrect": "<p><span>Sorry.</span> You need a Function block.<img src='/images/lmake2.png'></p>" // no comma here

        }, // no comma here
        { // Question 4 -- Multiple Choice, Multiple True Answers, Select All
            "q": "Pick the correct block.",
            "a": [
               {"option": "<img src='/images/smallvalues.png'>",      "correct": false},
                {"option": "<img src='/images/smalllogic.png'>",     "correct": false},
                {"option": "<img src='/images/smallfunctions.png'>",      "correct": false},
                {"option": "<img src='/images/smallvariable.png'>",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> <img src='/images/lcode.png'></p>",
            "incorrect": "<p><span>Sorry.</span> You need a Variable.<img src='/images/lcode.png'></p>" // no comma here

        } // no comma here

    ]
};
