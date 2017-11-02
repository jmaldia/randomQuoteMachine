$(document).ready(function() {

    $('#button-new-quote').click(function() {
      $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
        .done(update)
        .fail(handleErr);
    });

    function update(response) {
      var randomQuote = JSON.stringify(response.quoteText);
      
      var newTweet = `<a class="twitter-share-button tweet"
            href="https://twitter.com/share"
            data-size="large"
            data-text="${randomQuote}"
            data-url="https://jonmaldia.com/randomquotes"
            data-hashtags="quotes,inspiration"
            data-via="jonmaldia"
            data-related="twitterapi,twitter">
            Tweet
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;


      
      $('#quote').html('<section id="quote"><p>' + randomQuote + '</section></p>');
      $("#tweet").html(newTweet);
    }

    function handleErr(jqxhr, textStatus, err) {
      console.log("Request Failed: " + textStatus + ", " + err);
    }
});