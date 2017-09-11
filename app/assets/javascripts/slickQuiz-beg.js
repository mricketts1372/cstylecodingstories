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
        { // Question 4
             "q": "Which block comes first?",
            "a": [
                {"option": "<img src='/images/color.png'>",    "correct": true},
                {"option": "<img src='/images/makeblock.png'>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You are a star Coder!</p>",
            "incorrect": "<p><span>Sorry.</span> You need a Function block here.</p>" // no comma here
        },
        { // Question 5
            "q": "Which block comes second?",
            "a": [
                {"option": "<img src='/images/color.png'>",    "correct": true},
                {"option": "<img src='/images/makeblock.png'>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You are a star Coder!<img src='/images/colorblock.png'></p>",
            "incorrect": "<p><span>Sorry.</span> You need a Variable block here.<img src='/images/colorblock.png'></p>" // no comma here
        } // no comma here
    ]
};
