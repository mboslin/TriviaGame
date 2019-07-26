

$(document).ready(function () {

    // The page loads first: the timer, questions, and summary are all hidden from the end user.
    $('#countdown').hide();
    $('.trivia-ques').hide();
    $('.results').hide();

    // Variables are declared.
    //Countdown Timer in seconds.
    var number = 45;
    var intervalId;
    var correctCount = 0;
    var wrongCount = 0;
    var unanswered = 0;

    //ALL THE FUNCTIONS!

    // Function that shows questions w/ timer and done button.
    function showQuestions() {
        $('#countdown').show();
        $('.trivia-ques').show();
        $('#game-done').show();
    }

    // Functionality for timer to operate, decreasing by 1-second.
    function countdownTimer() {
        intervalId = setInterval(decrement, 1000);
    }

    // Functionality of decrement with if and else if statements.
    function decrement() {
        number--;
        $('#timer').html(" " + number + " " + "seconds");
        if (number === 1) {
            $('#timer').html(" " + number + " " + "second");
        }
        else if (number === 0) {
            stop();
            hide();
            displaySummary();
        }
    }

    //Clears the timer.
    function stop() {
        clearInterval(intervalId);
    }

    //Function that hides the text after questions are answered or end timer.
    function hide() {
        $('#countdown').hide();
        $('.trivia-ques').hide();
        $('#game-done').hide();
    }

    // Function of showing the user's score on the last page.
    function displaySummary() {
        $('.results').show();
        unanswered = (8 - (correctCount + wrongCount));
        $('#correctScore').text("Correct Answers:" + " " + correctCount);
        $('#wrongScore').text("Wrong Answers:" + " " + wrongCount);
        $('#unanswered').text("Unanswered:" + " " + unanswered);
    }

    // ALL CLICK EVENTS

    //Function of the Start Button.
    $('#game-start').on('click', function () {
        $('#game-start').hide();
        showQuestions();
        countdownTimer();
    });

    //Function of the Done Button.
    $('#game-done').on('click', function () {
        $('#game-start').hide();
        hide();
        displaySummary();
    });

    //Function of the Radio button.
    $('input[type=radio]').on('change', function () {
        correctCount = $('input[value=correct]:checked').length;
        wrongCount = $('input[value=wrong]:checked').length;
        unanswered = (8 - (correctCount + wrongCount));
    });

    // FINAL closing brackets.
});