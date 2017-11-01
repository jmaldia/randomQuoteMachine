$(document).ready(function() {
    var quotes = [
        "A table, a chair, a bowl of fruit and a violin; what else does a man need to be happy?",
        "A human being is part of a whole called by us the universe.",
        "The important thing is to not stop questioning. Curiosity has its own reason for existing.",
        "A question that sometimes drives me hazy: am I or are the others crazy?",
        "Anger dwells only in the bosom of fools.",
        "Life is like riding a bicycle. To keep your balance you must keep moving.",
        "Concern for man and his fate must always form the chief interest of all technical endeavors. Never forget this in the midst of your diagrams and equations.",
        "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        "inspiring Albert Einstein quotes - everything is a miracle",
        "All that is valuable in human society depends upon the opportunity for development accorded the individual.",
        "Once you stop learning, you start dying.",
        "It’s not that I’m so smart, it’s just that I stay with problems longer.",
        "It has become appallingly obvious that our technology has exceeded our humanity. ",
        "Only one who devotes himself to a cause with his whole strength and soul can be a true master. For this reason mastery demands all of a person.",
        "He who can no longer pause to wonder and stand rapt in awe, is as good as dead; his eyes are closed.",
        "I have no special talent. I am only passionately curious."
    ];


    $("#button-new-quote").on("click", function() {
        // Random number from 0 to quotes.length
        var randomNumber = Math.floor(Math.random() * (15 - 0 + 1)) + 0;

        // Get a new quote and add to paragraph with id of quote
        $("#quote").html(`<p> ${quotes[randomNumber]} </p>`);
    });
});


